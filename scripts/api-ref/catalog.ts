/**
 * Builds `public/api-catalog.json` — the machine-readable view of the docs that
 * the MCP server reads.
 *
 * It lands in `public/` so Astro copies it into the build, which means the exact
 * same file the local MCP server reads is also published at
 * `<site>/api-catalog.json`. No server-side rendering and no separate hosting:
 * the catalog is a static asset, and the MCP server is a thin local process over
 * it.
 *
 * Two halves:
 *   versions  the API surface per documented line, flat and markup-free
 *   guides    the narrative pages as raw Markdown, so an agent can answer
 *             "how do I …" from the prose rather than from type signatures
 */
import fs from "node:fs";
import path from "node:path";
import { CONTENT_ROOT, DOCS_ROOT, SITE_BASE, type DocsVersion } from "./config.ts";
import type { CatalogType } from "./transform.ts";

export const CATALOG_FILE = path.join(DOCS_ROOT, "public/api-catalog.json");

export interface CatalogGuide {
  /** Route under the site base, e.g. `/preview/core-concepts/interceptors`. */
  slug: string;
  title: string;
  description: string;
  /** `stable`, `preview`, or `stable-tr` / `preview-tr` for the Turkish tree. */
  line: string;
  locale: string;
  /** Raw Markdown/Markdoc body, frontmatter stripped. */
  body: string;
}

export interface Catalog {
  site: string;
  versions: {
    id: string;
    ref: string;
    routeBase: string;
    types: CatalogType[];
  }[];
  guides: CatalogGuide[];
}

/** Directories under src/content/docs that hold hand-written prose. */
const GENERATED_DIRS = new Set(["api"]);

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!kv) continue;
    data[kv[1]] = kv[2].trim().replace(/^["'](.*)["']$/, "$1");
  }
  return { data, body: match[2].trim() };
}

function collectGuides(): CatalogGuide[] {
  const guides: CatalogGuide[] = [];

  const walk = (dir: string, segments: string[]) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (GENERATED_DIRS.has(entry.name)) continue;
        walk(path.join(dir, entry.name), [...segments, entry.name]);
        continue;
      }
      if (!/\.(mdoc|mdx|md)$/.test(entry.name)) continue;

      const raw = fs.readFileSync(path.join(dir, entry.name), "utf8");
      const { data, body } = parseFrontmatter(raw);

      const name = entry.name.replace(/\.(mdoc|mdx|md)$/, "");
      const parts = [...segments, ...(name === "index" ? [] : [name])];
      const locale = parts[0] === "tr" ? "tr" : "en";
      const withoutLocale = locale === "tr" ? parts.slice(1) : parts;
      const line = withoutLocale[0] === "preview" ? "preview" : "stable";

      guides.push({
        slug: `/${parts.join("/")}`,
        title: data.title ?? name,
        description: data.description ?? "",
        line,
        locale,
        body,
      });
    }
  };

  walk(CONTENT_ROOT, []);
  return guides.sort((a, b) => a.slug.localeCompare(b.slug));
}

export function writeCatalog(
  entries: { version: DocsVersion; catalog: CatalogType[] }[],
): void {
  const catalog: Catalog = {
    site: SITE_BASE,
    versions: entries.map(({ version, catalog: types }) => ({
      id: version.id,
      ref: version.ref,
      routeBase: version.routeBase,
      types,
    })),
    guides: collectGuides(),
  };

  fs.mkdirSync(path.dirname(CATALOG_FILE), { recursive: true });
  fs.writeFileSync(CATALOG_FILE, JSON.stringify(catalog), "utf8");

  const typeCount = catalog.versions.reduce((n, v) => n + v.types.length, 0);
  const kb = Math.round(fs.statSync(CATALOG_FILE).size / 1024);
  console.log(
    `[3/3] emit: catalog -> public/api-catalog.json (${typeCount} types, ${catalog.guides.length} guides, ${kb} KB)`,
  );
}
