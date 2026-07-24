/**
 * Fails the build on any internal link that does not resolve to a built page.
 *
 * Astro does not validate links written as plain Markdown anchors, and this site
 * has a lot of them: the narrative pages cross-reference each other by absolute
 * path, and every generated API page links to its namespace and its neighbours.
 * A renamed slug would otherwise ship as a silent 404.
 *
 *   node scripts/check-links.mjs docs
 */
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] ?? "docs";
const BASE = "/ergosfare.docs";

if (!fs.existsSync(root)) {
  console.error(`No build output at ${root}. Run \`npm run build\` first.`);
  process.exit(1);
}

/** Every route the build actually produced. */
const pages = new Set();
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "index.html") {
      const rel = path.relative(root, path.dirname(full)).split(path.sep).join("/");
      pages.add(rel === "" || rel === "." ? BASE : `${BASE}/${rel}`);
    }
  }
})(root);

// Assets and the search index are served directly, not as routes.
const SKIP = /\.(svg|png|jpe?g|gif|css|js|mjs|xml|webp|woff2?|json|ico|txt|wasm|pf_\w+|pagefind)$/i;

const broken = new Map();
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) {
      const html = fs.readFileSync(full, "utf8");
      for (const match of html.matchAll(/href="([^"]+)"/g)) {
        let href = match[1].split("#")[0].split("?")[0];
        if (!href.startsWith(BASE) || SKIP.test(href)) continue;
        // `trailingSlash: "ignore"` means both forms are emitted; normalise, but
        // never strip the base's own trailing slash.
        if (href.length > BASE.length) href = href.replace(/\/$/, "");
        if (pages.has(href)) continue;

        const source = path.relative(root, full).split(path.sep).join("/");
        if (!broken.has(href)) broken.set(href, new Set());
        broken.get(href).add(source);
      }
    }
  }
})(root);

console.log(`${pages.size} routes indexed.`);

if (broken.size === 0) {
  console.log("No broken internal links.");
} else {
  console.error(`\n${broken.size} broken internal link(s):\n`);
  for (const [href, sources] of [...broken].sort()) {
    const from = [...sources];
    const shown = from.slice(0, 3).join(", ");
    const more = from.length > 3 ? ` (+${from.length - 3} more)` : "";
    console.error(`  ${href}\n      linked from ${shown}${more}`);
  }
  process.exit(1);
}
