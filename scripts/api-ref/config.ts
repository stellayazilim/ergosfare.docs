import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Repository root of the docs site (three levels up from scripts/api-ref/). */
export const DOCS_ROOT = path.resolve(here, "../..");

/**
 * When the docs site is checked out as the `docs/` submodule of the Ergosfare
 * superproject, the .NET sources sit right next to us and we can run docfx
 * locally instead of round-tripping through GitHub Actions.
 */
export const SUPERPROJECT_ROOT = path.resolve(DOCS_ROOT, "..");

/** Raw DocFX ManagedReference YAML, either produced locally or downloaded. */
export const CACHE_ROOT = path.join(DOCS_ROOT, ".api-cache");

/** Generated Starlight pages live under the docs collection. Git-ignored. */
export const CONTENT_ROOT = path.join(DOCS_ROOT, "src/content/docs");

/** Sidebar fragment consumed by astro.config.mjs. Git-ignored. */
export const SIDEBAR_FILE = path.join(DOCS_ROOT, "src/generated/api-sidebar.json");

/**
 * Starlight `base` from astro.config.mjs. Generated links are absolute, so they
 * have to carry it — Astro only rewrites `base` for its own components.
 */
export const SITE_BASE = "/ergosfare.docs";

export const SOURCE_REPO = "stellayazilim/ergosfare";
export const SOURCE_WORKFLOW = "api_reference.yml";

/**
 * The documented lines. The site is two-footed: the stable line sits at the site
 * root and the preview line under `/preview`, so each version owns a route
 * prefix, a git ref to read symbols from, and its own artifact.
 *
 * Since v2 was promoted, both lines document v2 — `main` and `preview` carry the
 * same surface, so the two references come out identical. They stay separate
 * entries because the next preview line will diverge again.
 *
 * Adding a line here is all it takes for the whole chain — fetch, transform,
 * emit and sidebar — to cover it.
 */
export interface DocsVersion {
  /** Directory name under `.api-cache/`, and the sidebar key. */
  id: string;
  /** Branch docfx reads the sources from. */
  ref: string;
  /**
   * Artifact uploaded by api_reference.yml. Still named after the version the
   * line carried when the workflow was written; renaming it would have to land
   * in both repositories at once, and it is only a transport key.
   */
  artifact: string;
  /** Route prefix under the Starlight base, e.g. `/api` or `/preview/api`. */
  routeBase: string;
  /** Path under src/content/docs where pages are written. */
  contentDir: string;
  /** Sidebar group label. */
  label: string;
  /** Turkish sidebar group label. */
  labelTr: string;
  /** Shown on the generated landing page. */
  blurb: string;
}

export const VERSIONS: DocsVersion[] = [
  {
    id: "stable",
    ref: "main",
    artifact: "api-mref-v1",
    routeBase: "/api",
    contentDir: "api",
    label: "API Reference",
    labelTr: "API Referansı",
    blurb:
      "the stable v2 line, generated from the `main` branch",
  },
  {
    id: "preview",
    ref: "preview",
    artifact: "api-mref-v2",
    routeBase: "/preview/api",
    contentDir: "preview/api",
    label: "API Reference",
    labelTr: "API Referansı",
    blurb:
      "the v2 preview line, generated from the `preview` branch",
  },
];

export function cacheDirFor(version: DocsVersion): string {
  return path.join(CACHE_ROOT, version.id);
}

export function outDirFor(version: DocsVersion): string {
  return path.join(CONTENT_ROOT, version.contentDir);
}

/** Where "View source" links point, per version. */
export function sourceBrowseBase(version: DocsVersion): string {
  return `https://github.com/${SOURCE_REPO}/blob/${version.ref}`;
}

/**
 * Namespace prefix stripped from page slugs. Every type lives under
 * `Stella.Ergosfare.*`, so repeating it in every URL only adds noise.
 */
export const NAMESPACE_PREFIX = "Stella.Ergosfare";

/**
 * Sidebar ordering. Namespaces listed here come first, in this order; anything
 * unlisted follows alphabetically. Consumers meet the abstractions before the
 * implementations, so abstractions lead.
 */
export const NAMESPACE_ORDER = [
  "Stella.Ergosfare.Core.Abstractions",
  "Stella.Ergosfare.Core.Abstractions.Attributes",
  "Stella.Ergosfare.Commands.Abstractions",
  "Stella.Ergosfare.Queries.Abstractions",
  "Stella.Ergosfare.Events.Abstractions",
];

/**
 * Order members within a type page. Mirrors the order the C# language spec and
 * most .NET reference docs use.
 */
export const MEMBER_SECTIONS = [
  { type: "Field", heading: "Fields" },
  { type: "Constructor", heading: "Constructors" },
  { type: "Property", heading: "Properties" },
  { type: "Method", heading: "Methods" },
  { type: "Event", heading: "Events" },
  { type: "Operator", heading: "Operators" },
] as const;
