import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const source = await readFile(
  new URL("../app/page.tsx", import.meta.url),
  "utf8"
)

test("homepage introduces Theodor with an accessible portrait", () => {
  assert.match(source, /<h1\b[^>]*>\s*Theodor Risager\s*<\/h1>/)
  assert.match(
    source,
    /<p\b[^>]*>[^<]*(?:software engineer|developer tooling|agentic workflows)[^<]*<\/p>/i
  )

  const portrait = source.match(
    /<(?:Image|img)\b[^>]*src=["']\/theodor\.png["'][^>]*>/
  )?.[0]
  assert.ok(portrait, "renders /theodor.png")
  assert.match(portrait, /\balt=["'][^"']+["']/)
})
