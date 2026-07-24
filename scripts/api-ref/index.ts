/**
 * `npm run gen_api_ref` — regenerates the API Reference sections.
 *
 *   1. fetch      DocFX ManagedReference YAML  -> .api-cache/<version>/
 *   2. transform  YAML                         -> Starlight Markdown
 *   3. emit       Markdown + sidebar fragment  -> src/
 *
 * Runs once per documented line (see VERSIONS in config.ts): the stable line at
 * the site root and the v2 line under /preview.
 *
 * Flags:
 *   --fetch-only    stop after stage 1 (refresh .api-cache/, convert nothing)
 *   --skip-fetch    reuse .api-cache/ (fast loop while working on the converter)
 *   --use-latest    download the newest successful CI run instead of dispatching
 *   --local         force building metadata with a local docfx
 *   --remote        force going through GitHub Actions
 */
import { cacheDirFor, VERSIONS } from "./config.ts";
import { emit, type VersionOutput } from "./emit.ts";
import { fetchMetadata } from "./fetch.ts";
import { loadModel } from "./mref.ts";
import { transform } from "./transform.ts";

function main(): void {
  const argv = new Set(process.argv.slice(2));

  const source = argv.has("--local")
    ? ("local" as const)
    : argv.has("--remote")
      ? ("remote" as const)
      : undefined;

  fetchMetadata({
    skipFetch: argv.has("--skip-fetch"),
    useLatest: argv.has("--use-latest"),
    source,
  });

  if (argv.has("--fetch-only")) return;

  const outputs: VersionOutput[] = VERSIONS.map((version) => {
    const model = loadModel(cacheDirFor(version));
    const { pages, groups, catalog } = transform(model, version);
    return { version, pages, groups, catalog };
  });

  emit(outputs);
}

try {
  main();
} catch (error) {
  console.error(
    `gen_api_ref failed: ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exit(1);
}
