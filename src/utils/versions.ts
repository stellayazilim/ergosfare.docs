/**
 * The docs site is two-footed: the stable line lives at the site root and the v2
 * line under `/preview`. Starlight has no notion of versions, so the split is a
 * route-prefix convention that both the sidebar and the version switcher read.
 */
export interface DocsVersionInfo {
  id: "stable" | "preview";
  /** Route segment after the locale; empty for the stable line at the root. */
  segment: string;
  label: string;
  labelTr: string;
}

export const DOCS_VERSIONS: DocsVersionInfo[] = [
  { id: "stable", segment: "", label: "v1 (stable)", labelTr: "v1 (kararlı)" },
  { id: "preview", segment: "preview", label: "v2 (preview)", labelTr: "v2 (önizleme)" },
];

export const PREVIEW_SEGMENT = "preview";

/**
 * Which line a Starlight route id belongs to.
 *
 * Route ids are locale-first (`preview/…`, `tr/preview/…`), so the check has to
 * skip a leading locale segment rather than testing the whole string.
 */
export function versionOfRouteId(id: string): DocsVersionInfo["id"] {
  const parts = id.replace(/^\/+|\/+$/g, "").split("/");
  const head = parts[0] === "tr" ? parts[1] : parts[0];
  return head === PREVIEW_SEGMENT ? "preview" : "stable";
}

/**
 * Which line a resolved href belongs to. Used for sidebar entries, whose version
 * is only discoverable from the URLs they point at — Starlight strips any custom
 * fields from the config before the component sees them.
 */
export function versionOfHref(href: string): DocsVersionInfo["id"] {
  return /(^|\/)preview(\/|$)/.test(href) ? "preview" : "stable";
}

/**
 * Rewrites a pathname to the same place on the other line, so the switcher lands
 * on the equivalent page when one exists.
 *
 * `/base/tr/preview/core-concepts/x` <-> `/base/tr/core-concepts/x`
 *
 * The caller is responsible for falling back when the counterpart page does not
 * exist — the two lines do not have the same page set.
 */
export function switchVersionPath(
  pathname: string,
  target: DocsVersionInfo["id"],
  base: string,
): string {
  const trimmedBase = base.replace(/\/$/, "");
  let rest = pathname.startsWith(trimmedBase)
    ? pathname.slice(trimmedBase.length)
    : pathname;
  rest = `/${rest.replace(/^\/+/, "")}`;

  const parts = rest.split("/").filter(Boolean);
  const locale = parts[0] === "tr" ? parts.shift() : undefined;
  if (parts[0] === PREVIEW_SEGMENT) parts.shift();

  const segments = [
    ...(locale ? [locale] : []),
    ...(target === "preview" ? [PREVIEW_SEGMENT] : []),
    ...parts,
  ];

  return `${trimmedBase}/${segments.join("/")}`;
}
