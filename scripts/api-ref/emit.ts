/**
 * Stage 3 — write the generated pages and the sidebar fragment into the site.
 *
 * Each version's output directory is wiped first so a type deleted upstream
 * disappears from the site instead of lingering as an orphan page. A
 * hand-written landing page is preserved across that wipe — it is the one file
 * in each tree a human owns.
 */
import fs from "node:fs";
import path from "node:path";
import { writeCatalog } from "./catalog.ts";
import {
  outDirFor,
  SIDEBAR_FILE,
  SOURCE_REPO,
  type DocsVersion,
} from "./config.ts";
import { sidebarLink } from "./slug.ts";
import type { CatalogType, NamespaceGroup, Page } from "./transform.ts";

const LANDING_PAGE = "index.md";

/**
 * Both documented lines carry v2, so the landing page is the same on either side
 * apart from the branch it points at — the `Core.Internal` caveat is a fact about
 * the v2 surface, not about one line.
 */
function defaultLanding(version: DocsVersion): string {
  return `---
title: API Reference
description: Generated reference for every public type in the Ergosfare v2 packages.
sidebar:
  label: Overview
  order: 0
---

This reference is generated from the XML documentation comments in the
[Ergosfare sources](https://github.com/${SOURCE_REPO}/tree/${version.ref}/src) and
committed alongside the site. It covers ${version.blurb}, as of the last time
\`task api\` was run.

It is published in English only. The narrative documentation is translated; this
section is not, because translating API descriptions away from the identifiers
and signatures they describe creates mismatches against the real code.

Pick a namespace from the sidebar to browse its types.

:::note
Everything below \`Stella.Ergosfare.Core.Internal\` is public because the runtime
needs it to be, not because it is part of the supported surface. Prefer the
abstractions it implements.
:::
`;
}

interface SidebarLinkEntry {
  label: string;
  link: string;
}

interface SidebarGroupEntry {
  label: string;
  collapsed: boolean;
  translations?: Record<string, string>;
  items: (SidebarLinkEntry | SidebarGroupEntry)[];
}

function preserveLanding(outDir: string): string | null {
  const landing = path.join(outDir, LANDING_PAGE);
  return fs.existsSync(landing) ? fs.readFileSync(landing, "utf8") : null;
}

/**
 * Builds one version's sidebar group: a top-level "API Reference" entry
 * containing one collapsed sub-group per namespace.
 *
 * Entries are explicit `link`s rather than `autogenerate` because the group
 * labels have to read as namespaces (`Core.Abstractions`) rather than as
 * directory slugs (`core-abstractions`).
 *
 * The `link` values are deliberately base-less: Starlight's
 * `linkFromSidebarLinkItem` injects the active locale and then `formatPath`
 * prepends `base`, so anything pre-prefixed would come out doubled. That also
 * means the Turkish sidebar resolves to `/tr/…/api/…`, where Starlight's i18n
 * fallback serves the English page under its standard "not translated" notice —
 * which is exactly the truth for this section.
 */
function buildSidebarGroup(
  version: DocsVersion,
  groups: NamespaceGroup[],
): SidebarGroupEntry {
  return {
    label: version.label,
    collapsed: true,
    translations: { tr: version.labelTr },
    items: [
      { label: "Overview", link: sidebarLink(`${version.routeBase}`) },
      ...groups.map((group) => ({
        // The shared `Stella.Ergosfare.` prefix is on every namespace; dropping
        // it keeps the labels readable in a narrow sidebar.
        label:
          group.namespace.replace(/^Stella\.Ergosfare\.?/, "") ||
          "Stella.Ergosfare",
        collapsed: true,
        items: [
          { label: "Overview", link: `${version.routeBase}/${group.slug}` },
          ...group.types.map((t) => ({
            label: t.name,
            link: `${version.routeBase}/${t.slug}`,
          })),
        ],
      })),
    ],
  };
}

export interface VersionOutput {
  version: DocsVersion;
  pages: Page[];
  groups: NamespaceGroup[];
  catalog: CatalogType[];
}

export function emit(outputs: VersionOutput[]): void {
  const sidebar: Record<string, SidebarGroupEntry> = {};

  for (const { version, pages, groups } of outputs) {
    const outDir = outDirFor(version);
    const landing = preserveLanding(outDir);

    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.join(outDir, LANDING_PAGE),
      landing ?? defaultLanding(version),
      "utf8",
    );

    for (const page of pages) {
      const target = path.join(outDir, page.path);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, page.content, "utf8");
    }

    sidebar[version.id] = buildSidebarGroup(version, groups);
    console.log(
      `[3/3] emit(${version.id}): ${pages.length + 1} files into ${path
        .relative(process.cwd(), outDir)
        .split(path.sep)
        .join("/")}`,
    );
  }

  // Keyed by version id rather than a flat list: astro.config.mjs splices each
  // group into its own version's sidebar, so the stable tree never shows preview
  // namespaces and vice versa.
  fs.mkdirSync(path.dirname(SIDEBAR_FILE), { recursive: true });
  fs.writeFileSync(SIDEBAR_FILE, `${JSON.stringify(sidebar, null, 2)}\n`, "utf8");
  console.log(
    `[3/3] emit: sidebar fragment -> ${path
      .relative(process.cwd(), SIDEBAR_FILE)
      .split(path.sep)
      .join("/")}`,
  );

  // Written last: it reads the narrative pages off disk, and doing it here means
  // one pass produces both the human site and the machine-readable catalog from
  // the same source of truth.
  writeCatalog(outputs.map(({ version, catalog }) => ({ version, catalog })));
}
