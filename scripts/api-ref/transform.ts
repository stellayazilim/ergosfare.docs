/**
 * Stage 2 — turn the ManagedReference model into Starlight Markdown pages.
 *
 * One page per type (`memberLayout: samePage` in docfx.json), plus one overview
 * page per namespace. Output is plain `.md` rather than `.mdoc`: generated prose
 * is full of angle brackets and braces, and Markdoc would try to parse them.
 */
import {
  MEMBER_SECTIONS,
  NAMESPACE_ORDER,
  sourceBrowseBase,
  type DocsVersion,
} from "./config.ts";
import {
  code,
  toInline,
  toMarkdown,
  toPlainDescription,
  toPlainText,
  type LinkTarget,
  type UidResolver,
} from "./doc-comment.ts";
import type { Item, Model } from "./mref.ts";
import {
  memberAnchor,
  namespaceHref,
  namespaceSlug,
  typeFilePath,
  typeHref,
} from "./slug.ts";

export interface Page {
  /** Path relative to the api/ output directory. */
  path: string;
  content: string;
}

export interface NamespaceGroup {
  namespace: string;
  slug: string;
  types: { uid: string; name: string; slug: string }[];
}

/**
 * Machine-readable view of one type, for the catalog the MCP server reads.
 *
 * Deliberately flat and markup-free: a consumer of the JSON has no Markdown
 * renderer, and the whole point is that a model can answer "what is the exact
 * signature of X" without fetching and parsing a documentation page.
 */
export interface CatalogMember {
  name: string;
  kind: string;
  syntax: string;
  summary: string;
  returns?: string;
  parameters?: { name: string; type: string; description: string }[];
  anchor: string;
}

export interface CatalogType {
  uid: string;
  name: string;
  kind: string;
  namespace: string;
  assembly?: string;
  summary: string;
  remarks: string;
  syntax: string;
  typeParameters?: { name: string; description: string }[];
  inherits?: string[];
  implements?: string[];
  docUrl: string;
  sourceUrl?: string;
  members: CatalogMember[];
}

export interface TransformResult {
  pages: Page[];
  groups: NamespaceGroup[];
  catalog: CatalogType[];
}

/** YAML double-quoted scalars and JSON strings share an escaping grammar. */
function yamlString(value: string): string {
  return JSON.stringify(value);
}

function buildResolver(model: Model, version: DocsVersion): UidResolver {
  return (uid: string): LinkTarget | null => {
    const type = model.types.get(uid);
    if (type?.namespace) {
      return { href: typeHref(version, uid, type.namespace), name: type.name };
    }

    const member = model.members.get(uid);
    if (member?.parent) {
      const owner = model.types.get(member.parent);
      if (owner?.namespace) {
        return {
          href: `${typeHref(version, owner.uid, owner.namespace)}#${memberAnchor(member.name)}`,
          name: member.nameWithType,
        };
      }
    }

    const ns = model.namespaces.get(uid);
    if (ns) return { href: namespaceHref(version, uid), name: ns.name };

    const ref = model.references.get(uid);
    if (ref) {
      // Only docfx's absolute Microsoft Learn hrefs are usable; its in-solution
      // hrefs point at `.html` files this site does not serve.
      return { href: ref.isExternal ? ref.href : undefined, name: ref.name };
    }

    return null;
  };
}

/** Renders a type uid as a link when we can, a code span otherwise. */
function typeLink(uid: string | undefined, resolve: UidResolver): string {
  if (!uid) return "";
  // `{TType}` is docfx's spelling of "a type parameter of the declaring type".
  const bare = uid.replace(/^\{(.+)\}$/, "$1");
  const target = resolve(uid) ?? resolve(bare);
  const name = target?.name ?? bare;
  return target?.href ? `[${code(name)}](${target.href})` : code(name);
}

function sourceLink(item: Item, version: DocsVersion): string {
  const remote = item.source?.remote;
  if (!remote?.path) return "";
  const line = item.source?.startLine ? `#L${item.source.startLine}` : "";
  // Generic type files are named `ICommandHandler[TCommand,TResult].cs`; the
  // brackets have to be escaped or they terminate the Markdown link early.
  const encoded = remote.path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `[View source](${sourceBrowseBase(version)}/${encoded}${line})`;
}

function csharpBlock(content: string | undefined): string {
  if (!content) return "";
  return ["```csharp", content.trim(), "```"].join("\n");
}

function table(headers: string[], rows: string[][]): string {
  if (rows.length === 0) return "";
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.join(" | ")} |`),
  ].join("\n");
}

function uidList(
  label: string,
  uids: string[] | undefined,
  resolve: UidResolver,
): string {
  if (!uids?.length) return "";
  return `**${label}:** ${uids.map((u) => typeLink(u, resolve)).join(", ")}`;
}

function parametersTable(item: Item, resolve: UidResolver): string {
  const params = item.syntax?.parameters;
  if (!params?.length) return "";
  return [
    "**Parameters**",
    "",
    table(
      ["Name", "Type", "Description"],
      params.map((p) => [
        code(p.id),
        typeLink(p.type, resolve),
        toInline(p.description, resolve),
      ]),
    ),
  ].join("\n");
}

function typeParametersTable(item: Item, resolve: UidResolver): string {
  const tparams = item.syntax?.typeParameters;
  if (!tparams?.length) return "";
  return [
    "**Type parameters**",
    "",
    table(
      ["Name", "Description"],
      tparams.map((t) => [code(t.id), toInline(t.description, resolve)]),
    ),
  ].join("\n");
}

function returnsSection(item: Item, resolve: UidResolver): string {
  const ret = item.syntax?.return;
  if (!ret) return "";
  const description = toInline(ret.description, resolve);
  return [
    "**Returns**",
    "",
    description
      ? `${typeLink(ret.type, resolve)} — ${description}`
      : typeLink(ret.type, resolve),
  ].join("\n");
}

function exceptionsSection(item: Item, resolve: UidResolver): string {
  if (!item.exceptions?.length) return "";
  return [
    "**Exceptions**",
    "",
    table(
      ["Type", "Condition"],
      item.exceptions.map((e) => [
        typeLink(e.type, resolve),
        toInline(e.description, resolve),
      ]),
    ),
  ].join("\n");
}

function examplesSection(item: Item, resolve: UidResolver): string {
  const examples = (item.example ?? []).filter(Boolean);
  if (examples.length === 0) return "";
  return [
    "## Examples",
    "",
    examples.map((e) => toMarkdown(e, resolve)).join("\n\n"),
  ].join("\n");
}

/** Joins pre-rendered blocks, dropping empties so no stray blank runs survive. */
function joinBlocks(blocks: string[]): string {
  return blocks.filter((b) => b.trim().length > 0).join("\n\n");
}

function renderMember(item: Item, resolve: UidResolver): string {
  return joinBlocks([
    // Backticks, not bare text: a member name like `Get<TType>(string)` would
    // otherwise have its type argument swallowed as raw HTML, which also breaks
    // the generated anchor that `memberAnchor` links to.
    `### \`${item.name}\``,
    csharpBlock(item.syntax?.content),
    toMarkdown(item.summary, resolve),
    typeParametersTable(item, resolve),
    parametersTable(item, resolve),
    returnsSection(item, resolve),
    exceptionsSection(item, resolve),
    item.remarks ? toMarkdown(item.remarks, resolve) : "",
  ]);
}

function renderMembers(type: Item, model: Model, resolve: UidResolver): string {
  const children = (type.children ?? [])
    .map((uid) => model.members.get(uid))
    .filter((m): m is Item => Boolean(m));
  if (children.length === 0) return "";

  const rendered: string[] = [];
  const seen = new Set<string>();

  for (const section of MEMBER_SECTIONS) {
    const group = children
      .filter((m) => m.type === section.type)
      .sort((a, b) => a.name.localeCompare(b.name));
    if (group.length === 0) continue;
    group.forEach((m) => seen.add(m.uid));
    rendered.push(
      `## ${section.heading}`,
      ...group.map((m) => renderMember(m, resolve)),
    );
  }

  // Enum fields and anything else docfx labels with a kind we do not section on.
  const leftovers = children
    .filter((m) => !seen.has(m.uid))
    .sort((a, b) => a.name.localeCompare(b.name));
  if (leftovers.length > 0) {
    rendered.push(
      "## Members",
      ...leftovers.map((m) => renderMember(m, resolve)),
    );
  }

  return rendered.join("\n\n");
}

function renderTypePage(
  type: Item,
  model: Model,
  resolve: UidResolver,
  order: number,
  version: DocsVersion,
): Page {
  const namespace = type.namespace!;
  const assembly = type.assemblies?.[0];

  const frontmatter = [
    "---",
    `title: ${yamlString(type.name)}`,
    `description: ${yamlString(
      toPlainDescription(type.summary, resolve) ||
        `${type.type} ${type.fullName} in the Ergosfare API reference.`,
    )}`,
    "sidebar:",
    `  label: ${yamlString(type.name)}`,
    `  order: ${order}`,
    "---",
  ].join("\n");

  const facts = [
    `**Namespace:** [${code(namespace)}](${namespaceHref(version, namespace)})`,
    assembly ? `**Assembly:** ${code(`${assembly}.dll`)}` : "",
  ]
    .filter(Boolean)
    .join("  \n");

  const body = joinBlocks([
    facts,
    toMarkdown(type.summary, resolve),
    csharpBlock(type.syntax?.content),
    sourceLink(type, version),
    typeParametersTable(type, resolve),
    uidList("Inherits", type.inheritance, resolve),
    uidList("Implements", type.implements, resolve),
    uidList("Derived", type.derivedClasses, resolve),
    type.remarks ? `## Remarks\n\n${toMarkdown(type.remarks, resolve)}` : "",
    examplesSection(type, resolve),
    renderMembers(type, model, resolve),
  ]);

  return {
    path: typeFilePath(type.uid, namespace),
    content: `${frontmatter}\n\n${body}\n`,
  };
}

function renderNamespacePage(
  group: NamespaceGroup,
  model: Model,
  resolve: UidResolver,
  order: number,
  version: DocsVersion,
): Page {
  const rows = group.types.map((t) => {
    const type = model.types.get(t.uid)!;
    return [
      `[${code(type.name)}](${typeHref(version, type.uid, group.namespace)})`,
      type.type,
      toInline(type.summary, resolve),
    ];
  });

  const frontmatter = [
    "---",
    `title: ${yamlString(group.namespace)}`,
    `description: ${yamlString(
      `Types in the ${group.namespace} namespace.`,
    )}`,
    "sidebar:",
    `  label: "Overview"`,
    `  order: ${order}`,
    "---",
  ].join("\n");

  const body = joinBlocks([
    `The ${code(group.namespace)} namespace contains ${group.types.length} public type${
      group.types.length === 1 ? "" : "s"
    }.`,
    table(["Type", "Kind", "Summary"], rows),
  ]);

  return { path: `${group.slug}/index.md`, content: `${frontmatter}\n\n${body}\n` };
}

/** Display name for a type uid, with no link markup. */
function plainTypeName(uid: string | undefined, resolve: UidResolver): string {
  if (!uid) return "";
  const bare = uid.replace(/^\{(.+)\}$/, "$1");
  return (resolve(uid) ?? resolve(bare))?.name ?? bare;
}

function catalogEntry(
  type: Item,
  model: Model,
  resolve: UidResolver,
  version: DocsVersion,
): CatalogType {
  const namespace = type.namespace!;
  const remote = type.source?.remote;

  const members: CatalogMember[] = (type.children ?? [])
    .map((uid) => model.members.get(uid))
    .filter((m): m is Item => Boolean(m))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((m) => ({
      name: m.name,
      kind: m.type,
      syntax: m.syntax?.content ?? "",
      summary: toPlainText(m.summary, resolve),
      returns: m.syntax?.return
        ? `${plainTypeName(m.syntax.return.type, resolve)}${
            m.syntax.return.description
              ? ` — ${toPlainText(m.syntax.return.description, resolve)}`
              : ""
          }`
        : undefined,
      parameters: m.syntax?.parameters?.map((p) => ({
        name: p.id,
        type: plainTypeName(p.type, resolve),
        description: toPlainText(p.description, resolve),
      })),
      anchor: memberAnchor(m.name),
    }));

  return {
    uid: type.uid,
    name: type.name,
    kind: type.type,
    namespace,
    assembly: type.assemblies?.[0],
    summary: toPlainText(type.summary, resolve),
    remarks: toPlainText(type.remarks, resolve),
    syntax: type.syntax?.content ?? "",
    typeParameters: type.syntax?.typeParameters?.map((t) => ({
      name: t.id,
      description: toPlainText(t.description, resolve),
    })),
    inherits: type.inheritance?.map((u) => plainTypeName(u, resolve)),
    implements: type.implements?.map((u) => plainTypeName(u, resolve)),
    docUrl: typeHref(version, type.uid, namespace),
    sourceUrl: remote?.path
      ? `${sourceBrowseBase(version)}/${remote.path
          .split("/")
          .map(encodeURIComponent)
          .join("/")}${type.source?.startLine ? `#L${type.source.startLine}` : ""}`
      : undefined,
    members,
  };
}

function orderNamespaces(namespaces: string[]): string[] {
  const ranked = (ns: string) => {
    const i = NAMESPACE_ORDER.indexOf(ns);
    return i === -1 ? NAMESPACE_ORDER.length : i;
  };
  return [...namespaces].sort(
    (a, b) => ranked(a) - ranked(b) || a.localeCompare(b),
  );
}

export function transform(model: Model, version: DocsVersion): TransformResult {
  const resolve = buildResolver(model, version);

  const byNamespace = new Map<string, Item[]>();
  for (const type of model.types.values()) {
    if (!type.namespace) continue;
    const bucket = byNamespace.get(type.namespace) ?? [];
    bucket.push(type);
    byNamespace.set(type.namespace, bucket);
  }

  const pages: Page[] = [];
  const groups: NamespaceGroup[] = [];
  const catalog: CatalogType[] = [];

  for (const namespace of orderNamespaces([...byNamespace.keys()])) {
    const types = byNamespace
      .get(namespace)!
      .sort((a, b) => a.name.localeCompare(b.name));

    const group: NamespaceGroup = {
      namespace,
      slug: namespaceSlug(namespace),
      types: types.map((t) => ({
        uid: t.uid,
        name: t.name,
        slug: typeFilePath(t.uid, namespace).replace(/\.md$/, ""),
      })),
    };
    groups.push(group);

    // Order 0 keeps the namespace overview at the top of its sidebar group; the
    // custom SidebarGroup component links the group heading to its first entry.
    pages.push(renderNamespacePage(group, model, resolve, 0, version));
    types.forEach((type, i) => {
      pages.push(renderTypePage(type, model, resolve, i + 1, version));
      catalog.push(catalogEntry(type, model, resolve, version));
    });
  }

  console.log(
    `[2/3] transform(${version.id}): ${pages.length} pages across ${groups.length} namespaces`,
  );
  return { pages, groups, catalog };
}
