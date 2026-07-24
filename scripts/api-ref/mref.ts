/**
 * Minimal typings and loader for DocFX's `YamlMime:ManagedReference` output.
 *
 * Only the fields the site actually renders are typed — the format carries a lot
 * more (VB projections, `spec.vb`, `nameWithType.vb`, …) that we deliberately drop.
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

export type ItemType =
  | "Namespace"
  | "Class"
  | "Interface"
  | "Struct"
  | "Enum"
  | "Delegate"
  | "Method"
  | "Property"
  | "Field"
  | "Event"
  | "Constructor"
  | "Operator";

export interface Parameter {
  id: string;
  type: string;
  description?: string;
}

export interface TypeParameter {
  id: string;
  description?: string;
}

export interface Return {
  type: string;
  description?: string;
}

export interface Syntax {
  content?: string;
  parameters?: Parameter[];
  typeParameters?: TypeParameter[];
  return?: Return;
}

export interface SourceInfo {
  path?: string;
  startLine?: number;
  remote?: { path?: string; branch?: string; repo?: string };
}

export interface ExceptionInfo {
  type: string;
  commentId?: string;
  description?: string;
}

export interface Item {
  uid: string;
  commentId?: string;
  id: string;
  parent?: string;
  children?: string[];
  name: string;
  nameWithType: string;
  fullName: string;
  type: ItemType;
  namespace?: string;
  assemblies?: string[];
  summary?: string;
  remarks?: string;
  example?: string[];
  syntax?: Syntax;
  source?: SourceInfo;
  inheritance?: string[];
  derivedClasses?: string[];
  implements?: string[];
  inheritedMembers?: string[];
  exceptions?: ExceptionInfo[];
  seealso?: { linkId?: string; commentId?: string }[];
  overload?: string;
  attributes?: unknown[];
}

export interface Reference {
  uid: string;
  commentId?: string;
  parent?: string;
  definition?: string;
  name: string;
  nameWithType?: string;
  fullName?: string;
  /**
   * Set by docfx for BCL and other out-of-solution types, where `href` is
   * already an absolute Microsoft Learn URL. In-solution references carry a
   * docfx-relative `.html` href that we ignore in favour of our own routes.
   */
  isExternal?: boolean;
  href?: string;
}

export interface ManagedReferenceFile {
  items: Item[];
  references?: Reference[];
}

/** Everything docfx produced, indexed for cross-file lookups. */
export interface Model {
  /** Type-level items (Class/Interface/Struct/Enum/Delegate), keyed by uid. */
  types: Map<string, Item>;
  /** Namespace items that directly contain at least one type, keyed by uid. */
  namespaces: Map<string, Item>;
  /** Member items (methods, properties, …) keyed by uid. */
  members: Map<string, Item>;
  /** Display names for every uid docfx mentioned anywhere, including externals. */
  references: Map<string, Reference>;
}

const TYPE_KINDS = new Set<ItemType>([
  "Class",
  "Interface",
  "Struct",
  "Enum",
  "Delegate",
]);

/**
 * Reads every ManagedReference file in `dir` into a single indexed model.
 *
 * `toc.yml` is skipped: it is a different YamlMime and we rebuild the navigation
 * ourselves from namespace/type relationships so the sidebar can carry Starlight
 * labels and ordering that the DocFX TOC has no place for.
 */
export function loadModel(dir: string): Model {
  const model: Model = {
    types: new Map(),
    namespaces: new Map(),
    members: new Map(),
    references: new Map(),
  };

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yml") && f !== "toc.yml")
    .sort();

  if (files.length === 0) {
    throw new Error(`No ManagedReference YAML found in ${dir}`);
  }

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const doc = parse(raw) as ManagedReferenceFile | null;
    if (!doc?.items) continue;

    for (const item of doc.items) {
      if (item.type === "Namespace") {
        model.namespaces.set(item.uid, item);
      } else if (TYPE_KINDS.has(item.type)) {
        model.types.set(item.uid, item);
      } else {
        model.members.set(item.uid, item);
      }
    }

    // References repeat across files; first writer wins, which is fine because
    // docfx emits identical display names for a given uid everywhere.
    for (const ref of doc.references ?? []) {
      if (!model.references.has(ref.uid)) model.references.set(ref.uid, ref);
    }
  }

  return model;
}
