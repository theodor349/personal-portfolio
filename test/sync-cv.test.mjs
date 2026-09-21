import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = fileURLToPath(new URL("../scripts/sync-cv.mjs", import.meta.url));

test("copies the local CV into the public directory", async (t) => {
  const workspace = await mkdtemp(join(tmpdir(), "sync-cv-"));
  const source = join(workspace, "source");
  const site = join(workspace, "site");
  t.after(() => rm(workspace, { recursive: true, force: true }));

  await mkdir(source);
  await mkdir(site);
  await writeFile(join(source, "cv.html"), "<main>CV</main>\n");
  await writeFile(join(source, "theodor.png"), "portrait bytes");

  execFileSync(process.execPath, [script], {
    cwd: site,
    env: { ...process.env, CV_SOURCE_DIR: source },
  });

  assert.equal(
    await readFile(join(site, "public/cv/cv.html"), "utf8"),
    "<main>CV</main>\n",
  );
  assert.equal(
    await readFile(join(site, "public/cv/theodor.png"), "utf8"),
    "portrait bytes",
  );
});
