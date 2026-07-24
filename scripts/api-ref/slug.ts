import { NAMESPACE_PREFIX, SITE_BASE, type DocsVersion } from "./config.ts";

/**
 * `Stella.Ergosfare.Commands.Abstractions` -> `commands-abstractions`
 *
 * The shared `Stella.Ergosfare` prefix is dropped because it appears in every
 * single namespace and only lengthens URLs. The root namespace itself has no
 * types of its own, so it never needs a slug.
 */
export function namespaceSlug(ns: string): string {
  const trimmed = ns.startsWith(`${NAMESPACE_PREFIX}.`)
    ? ns.slice(NAMESPACE_PREFIX.length + 1)
    : ns === NAMESPACE_PREFIX
      ? "root"
      : ns;
  return trimmed.toLowerCase().replace(/\./g, "-");
}

/**
 * ``ICommandHandler`2`` -> `icommandhandler-2`, `Outer.Nested` -> `outer-nested`.
 *
 * Arity is kept in the slug: `ICommandHandler`, `ICommandHandler<T>` and
 * `ICommandHandler<T, TResult>` are three distinct types that would otherwise
 * collide on one page.
 */
export function typeSlug(uid: string, namespace: string): string {
  const local = uid.startsWith(`${namespace}.`)
    ? uid.slice(namespace.length + 1)
    : uid;
  return local
    .toLowerCase()
    .replace(/`/g, "-")
    .replace(/\./g, "-")
    .replace(/[^a-z0-9-]/g, "-");
}

/** Content-collection path for a type page, relative to the version's output dir. */
export function typeFilePath(uid: string, namespace: string): string {
  return `${namespaceSlug(namespace)}/${typeSlug(uid, namespace)}.md`;
}

/**
 * Route for a type page as written into page content, e.g.
 * `/ergosfare.docs/preview/api/commands-abstractions/icommand-1`.
 *
 * Markdown links are emitted as plain anchors, which Astro does not rewrite, so
 * these must carry `base` themselves. Sidebar entries are the opposite case —
 * see `sidebarLink`.
 */
export function typeHref(
  version: DocsVersion,
  uid: string,
  namespace: string,
): string {
  return `${SITE_BASE}${version.routeBase}/${namespaceSlug(namespace)}/${typeSlug(uid, namespace)}`;
}

/** Route for a namespace overview page, for use in page content. */
export function namespaceHref(version: DocsVersion, ns: string): string {
  return `${SITE_BASE}${version.routeBase}/${namespaceSlug(ns)}`;
}

/**
 * Same route, but base-less — the form Starlight's sidebar `link` expects.
 *
 * `linkFromSidebarLinkItem` prepends the active locale and then `formatPath`
 * prepends `base`, so a link that already carried `base` would come out
 * doubled.
 */
export function sidebarLink(href: string): string {
  return href.startsWith(SITE_BASE) ? href.slice(SITE_BASE.length) : href;
}

/**
 * Anchor Starlight will generate for a member heading.
 *
 * Must mirror `github-slugger`, which rehype-slug uses: punctuation is *dropped*,
 * not turned into a separator, and only whitespace becomes a dash. So
 * `Get<TType>(string)` is `getttypestring` and `Set(string, object)` is
 * `setstring-object`. Collapsing punctuation to dashes instead would produce
 * plausible-looking anchors that silently do not resolve.
 */
export function memberAnchor(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\p{Pc}\p{Pd}\s]/gu, "")
    .replace(/\s+/g, "-");
}
