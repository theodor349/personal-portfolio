import assert from "node:assert/strict"
import test from "node:test"

import { extractCvDocument } from "../lib/cv.ts"

test("extracts embeddable CV content from a standalone document", () => {
  const { styles, stylesheets, body } = extractCvDocument(`<!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.example.com/icons.css">
        <style>.page { color: navy; }</style>
      </head>
      <body>
        <div class="page">
          <img src="theodor.png" alt="Theodor">
          <img src="/logo.png" alt="Logo">
          <img src="https://example.com/photo.png" alt="External">
        </div>
      </body>
    </html>`)

  assert.equal(styles, ".page { color: navy; }")
  assert.deepEqual(stylesheets, ["https://cdn.example.com/icons.css"])
  assert.match(body, /src="\/cv\/theodor\.png"/)
  assert.match(body, /src="\/logo\.png"/)
  assert.match(body, /src="https:\/\/example\.com\/photo\.png"/)
  assert.doesNotMatch(body, /<\/?(?:html|head|body)\b/i)
  assert.throws(() => extractCvDocument("<body>CV</body>"), /style/i)
  assert.throws(() => extractCvDocument("<style>CV</style>"), /body/i)
})
