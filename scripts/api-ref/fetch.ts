/**
 * Stage 1 — obtain DocFX ManagedReference YAML for each documented line.
 *
 * Runs locally only. The docs site is checked out as the `docs/` submodule of the
 * Ergosfare superproject and `docfx` is on PATH, so the metadata is built right
 * here — no network, no CI minutes. Refs that are not the checked-out one are
 * exported into a scratch directory under the OS temp dir, so every documented
 * line is covered without switching branches and without a second source tree
 * inside the repository.
 *
 * Results land in `.api-cache/<version-id>/` as flat directories of `*.yml`.
 *
 * There used to be a remote source for environments without a .NET SDK — notably
 * the docs repo's own Pages workflow — which dispatched `api_reference.yml` in the
 * Ergosfare repo and downloaded the artifact it uploaded per version. That
 * workflow is gone: the generated reference is committed now, so the deploy only
 * builds what is in the tree. The code for that path is still below and still
 * correct; it is guarded rather than deleted so restoring the workflow is enough
 * to bring it back.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  cacheDirFor,
  SOURCE_REPO,
  SOURCE_WORKFLOW,
  SUPERPROJECT_ROOT,
  VERSIONS,
  type DocsVersion,
} from "./config.ts";

export interface FetchOptions {
  /** Reuse whatever is already in `.api-cache/`. */
  skipFetch?: boolean;
  /** Download the newest successful run instead of dispatching a fresh one. */
  useLatest?: boolean;
  /** Force a source rather than auto-detecting. */
  source?: "local" | "remote";
}

function run(
  cmd: string,
  args: string[],
  opts: { cwd?: string; quiet?: boolean } = {},
): { ok: boolean; stdout: string; stderr: string } {
  const res = spawnSync(cmd, args, {
    cwd: opts.cwd,
    encoding: "utf8",
    shell: process.platform === "win32",
  });
  if (!opts.quiet && res.stdout) process.stdout.write(res.stdout);
  if (!opts.quiet && res.stderr) process.stderr.write(res.stderr);
  return {
    ok: res.status === 0,
    stdout: res.stdout ?? "",
    stderr: res.stderr ?? "",
  };
}

function hasCommand(cmd: string): boolean {
  return run(cmd, ["--version"], { quiet: true }).ok;
}

/** Branch currently checked out in the superproject, if it is a git worktree. */
function superprojectRef(): string | null {
  const res = run("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
    cwd: SUPERPROJECT_ROOT,
    quiet: true,
  });
  return res.ok ? res.stdout.trim() : null;
}

function hasSuperproject(): boolean {
  return (
    fs.existsSync(path.join(SUPERPROJECT_ROOT, "docfx.json")) &&
    fs.existsSync(path.join(SUPERPROJECT_ROOT, "src")) &&
    hasCommand("docfx")
  );
}

/**
 * Export a commit's tracked tree into `dir` with `git archive` — a plain file
 * export, not a checkout, so the superproject's index and worktree list are
 * untouched. Submodule gitlinks are skipped; docfx only needs `src/`.
 */
function exportCommit(commit: string, dir: string): boolean {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  const tarball = path.join(dir, ".export.tar");
  const archive = run("git", ["archive", "--format=tar", "-o", tarball, commit], {
    cwd: SUPERPROJECT_ROOT,
    quiet: true,
  });
  if (!archive.ok) return false;

  // Extract from `dir` with a relative name rather than passing an absolute path:
  // GNU tar reads `C:/…` as a remote `host:path` spec and refuses with
  // "Cannot connect to C: resolve failed". A relative name has no colon to parse.
  const extract = run("tar", ["-xf", ".export.tar"], { cwd: dir, quiet: true });
  fs.rmSync(tarball, { force: true });

  if (!extract.ok) {
    console.warn(`[1/3] extract failed: ${extract.stderr.trim()}`);
    return false;
  }
  return true;
}

/**
 * Directory to run docfx in for a version.
 *
 * The checked-out ref is used directly. Every other documented line is exported
 * to `<tmp>/ergosfare-api-ref/<ref>` — that keeps a full local run possible while
 * sitting on `preview`, instead of forcing a branch switch or a round trip
 * through CI just to refresh the stable API reference.
 *
 * This used to be a git worktree under `.worktrees/<ref>`. It was gitignored, but
 * it still put a second copy of the whole source tree *inside* the checkout, which
 * breaks tools that scan the repository for project files — BenchmarkDotNet
 * refuses to run at all when it finds the same project name three times. An export
 * outside the repository has neither problem.
 *
 * The export is cached per commit: re-running while the ref has not moved reuses
 * the directory, and a moved ref re-exports from scratch.
 */
function localBuildDir(version: DocsVersion): string | null {
  if (!hasSuperproject()) return null;
  if (superprojectRef() === version.ref) return SUPERPROJECT_ROOT;

  const resolved = run("git", ["rev-parse", version.ref], {
    cwd: SUPERPROJECT_ROOT,
    quiet: true,
  });
  if (!resolved.ok) {
    console.warn(
      `[1/3] fetch(${version.id}): ${version.ref} unavailable (${resolved.stderr.trim()}), falling back to CI`,
    );
    return null;
  }

  const commit = resolved.stdout.trim();
  const exportDir = path.join(
    os.tmpdir(),
    "ergosfare-api-ref",
    version.ref.replace(/[^\w.-]+/g, "-"),
  );
  const stamp = path.join(exportDir, ".exported-commit");
  const cached =
    fs.existsSync(path.join(exportDir, "src")) &&
    fs.existsSync(stamp) &&
    fs.readFileSync(stamp, "utf8").trim() === commit;

  if (!cached) {
    console.log(
      `[1/3] fetch(${version.id}): exporting ${version.ref} (${commit.slice(0, 7)})`,
    );
    if (!exportCommit(commit, exportDir)) {
      console.warn(
        `[1/3] fetch(${version.id}): export failed, falling back to CI`,
      );
      return null;
    }
    fs.writeFileSync(stamp, commit);
  }

  // `main` predates these files; the checked-out ref's copy keeps both lines
  // filtered and laid out identically, exactly as the CI workflow does.
  for (const file of ["docfx.json", "docfx.filter.yml"]) {
    fs.copyFileSync(
      path.join(SUPERPROJECT_ROOT, file),
      path.join(exportDir, file),
    );
  }

  return exportDir;
}

function resetCache(dir: string): void {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyYaml(from: string, to: string): number {
  let count = 0;
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".yml")) {
      fs.copyFileSync(path.join(from, entry.name), path.join(to, entry.name));
      count++;
    }
  }
  return count;
}

/**
 * The single target framework docfx builds each project under, read from the tree's
 * own `docfx.json` so restore and metadata can never disagree about it.
 *
 * It matters because the repository multi-targets: since the .NET 11 target framework
 * landed, a property-less restore evaluates `net11.0` too and fails with NETSDK1045 on
 * any machine without the .NET 11 preview SDK — a machine that can still document the
 * library perfectly well through the `net10.0` compilation.
 */
function docfxTargetFramework(buildDir: string): string | null {
  try {
    const config = JSON.parse(
      fs.readFileSync(path.join(buildDir, "docfx.json"), "utf8"),
    );
    return config?.metadata?.[0]?.properties?.TargetFramework ?? null;
  } catch {
    return null;
  }
}

function fetchLocal(version: DocsVersion, buildDir: string): void {
  const where = path.relative(SUPERPROJECT_ROOT, buildDir) || ".";
  console.log(`[1/3] fetch(${version.id}): running docfx in ${where} (${version.ref})`);

  // docfx runs MSBuild but never restores. The checked-out ref gets away with it —
  // it has been built locally, so `obj/` already holds the assets file. An exported
  // ref is a fresh tree, and without this its every project reference and package
  // reference comes back unresolved, which surfaces as a wall of CS0234/CS0246
  // rather than as the missing-restore error it actually is.
  const targetFramework = docfxTargetFramework(buildDir);
  const restoreArgs = ["restore"];
  if (targetFramework) restoreArgs.push(`-p:TargetFramework=${targetFramework}`);

  const restore = run("dotnet", restoreArgs, { cwd: buildDir, quiet: true });
  if (!restore.ok) {
    process.stderr.write(restore.stdout + restore.stderr);
    throw new Error(`dotnet restore failed for ${version.ref}`);
  }

  const res = run("docfx", ["metadata", "docfx.json"], { cwd: buildDir, quiet: true });
  if (!res.ok) {
    process.stderr.write(res.stdout + res.stderr);
    throw new Error(`docfx metadata failed for ${version.ref}`);
  }

  const produced = path.join(buildDir, "api");
  if (!fs.existsSync(produced)) {
    throw new Error(`docfx reported success but ${produced} does not exist`);
  }

  const cache = cacheDirFor(version);
  resetCache(cache);
  const count = copyYaml(produced, cache);
  console.log(`[1/3] fetch(${version.id}): ${count} metadata files from local sources`);
}

function gh(args: string[]): { ok: boolean; stdout: string; stderr: string } {
  return run("gh", args, { quiet: true });
}

function listRunIds(): number[] {
  const res = gh([
    "run", "list", "-R", SOURCE_REPO, "-w", SOURCE_WORKFLOW,
    "--json", "databaseId", "-L", "20",
  ]);
  if (!res.ok) return [];
  return (JSON.parse(res.stdout) as { databaseId: number }[]).map((r) => r.databaseId);
}

function latestSuccessfulRunId(): number | null {
  const res = gh([
    "run", "list", "-R", SOURCE_REPO, "-w", SOURCE_WORKFLOW,
    "--status", "success", "--json", "databaseId", "-L", "1",
  ]);
  if (!res.ok) return null;
  return (JSON.parse(res.stdout) as { databaseId: number }[])[0]?.databaseId ?? null;
}

function sleep(ms: number): void {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function waitForRun(runId: number, timeoutMs = 20 * 60_000): void {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const res = gh(["run", "view", String(runId), "-R", SOURCE_REPO, "--json", "status,conclusion"]);
    if (res.ok) {
      const { status, conclusion } = JSON.parse(res.stdout) as {
        status: string;
        conclusion: string | null;
      };
      if (status === "completed") {
        if (conclusion !== "success") {
          throw new Error(`${SOURCE_WORKFLOW} run ${runId} ${conclusion}`);
        }
        return;
      }
    }
    if (Date.now() > deadline) {
      throw new Error(`Timed out waiting for ${SOURCE_WORKFLOW} run ${runId}`);
    }
    sleep(10_000);
  }
}

/**
 * One run covers every version — the workflow builds all refs in a matrix — so
 * this is dispatched once no matter how many versions need downloading.
 */
function dispatchAndWait(): number {
  const before = new Set(listRunIds());

  console.log(`[1/3] fetch: dispatching ${SOURCE_WORKFLOW} on ${SOURCE_REPO}`);
  const dispatch = gh(["workflow", "run", SOURCE_WORKFLOW, "-R", SOURCE_REPO]);
  if (!dispatch.ok) {
    throw new Error(`gh workflow run failed: ${dispatch.stderr.trim()}`);
  }

  // `gh workflow run` does not report the run id, so watch for one that was not
  // there a moment ago. GitHub can take a few seconds to register it.
  const deadline = Date.now() + 120_000;
  for (;;) {
    const fresh = listRunIds().filter((id) => !before.has(id));
    if (fresh.length > 0) {
      const runId = Math.max(...fresh);
      console.log(`[1/3] fetch: watching run ${runId}`);
      waitForRun(runId);
      return runId;
    }
    if (Date.now() > deadline) {
      throw new Error("Dispatched workflow never appeared in the run list");
    }
    sleep(5_000);
  }
}

function downloadArtifact(runId: number, version: DocsVersion): void {
  const cache = cacheDirFor(version);
  resetCache(cache);

  const download = gh([
    "run", "download", String(runId), "-R", SOURCE_REPO,
    "-n", version.artifact, "-D", cache,
  ]);
  if (!download.ok) {
    throw new Error(
      `gh run download (${version.artifact}) failed: ${download.stderr.trim()}`,
    );
  }

  const count = fs.readdirSync(cache).filter((f) => f.endsWith(".yml")).length;
  console.log(`[1/3] fetch(${version.id}): ${count} metadata files from run ${runId}`);
}

export function fetchMetadata(options: FetchOptions = {}): void {
  if (options.skipFetch) {
    for (const version of VERSIONS) {
      const cache = cacheDirFor(version);
      if (!fs.existsSync(cache)) {
        throw new Error(`--skip-fetch given but ${cache} does not exist`);
      }
      const count = fs.readdirSync(cache).filter((f) => f.endsWith(".yml")).length;
      console.log(`[1/3] fetch(${version.id}): skipped, reusing ${count} cached files`);
    }
    return;
  }

  const remote: DocsVersion[] = [];

  for (const version of VERSIONS) {
    const buildDir = options.source === "remote" ? null : localBuildDir(version);
    if (buildDir) fetchLocal(version, buildDir);
    else remote.push(version);
  }

  if (remote.length === 0) return;

  // The remote path dispatched `api_reference.yml` in the Ergosfare repo, which
  // has been removed: the API reference is generated locally and committed, so
  // nothing needs docfx to run in CI. Everything below still works and is kept
  // deliberately — restoring the workflow is all it takes to bring the path back
  // — but it cannot succeed while the workflow is absent, and failing here with
  // the reason beats a confusing `gh: workflow not found` further down.
  throw new Error(
    `Cannot build ${remote.map((v) => v.id).join(", ")} locally, and the remote ` +
      `fallback is disabled: ${SOURCE_WORKFLOW} no longer exists in ${SOURCE_REPO}. ` +
      `Run this from the Ergosfare superproject with docfx and tar on PATH — it ` +
      `builds every documented line, exporting refs that are not checked out to a ` +
      `scratch directory under the OS temp dir.`,
  );

  if (!hasCommand("gh")) {
    throw new Error(
      `The GitHub CLI (gh) is required to download metadata for ${remote
        .map((v) => v.id)
        .join(", ")}. Install it, or check out the matching ref in the superproject.`,
    );
  }

  let runId: number | null;
  if (options.useLatest) {
    runId = latestSuccessfulRunId();
    if (runId === null) {
      throw new Error(`No successful ${SOURCE_WORKFLOW} run to reuse; drop --use-latest.`);
    }
    console.log(`[1/3] fetch: reusing run ${runId}`);
  } else {
    runId = dispatchAndWait();
  }

  for (const version of remote) downloadArtifact(runId, version);
}
