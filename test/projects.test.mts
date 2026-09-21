import assert from "node:assert/strict";
import test from "node:test";

import { projects } from "../src/app/projects.ts";

test("portfolio projects contain complete, valid data", () => {
  assert.ok(projects.length > 0);
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length);

  for (const project of projects) {
    assert.ok(project.id.trim());
    assert.equal(new URL(project.url).protocol, "https:");
    assert.ok(project.techStack.length > 0);
    assert.ok(project.techStack.every((technology) => technology.trim()));
    assert.ok(project.shortDescription.trim());
    assert.ok(project.longDescription.trim());
    assert.ok(project.screenshots.length > 0);
    assert.ok(project.screenshots.every(({ alt }) => alt.trim()));
  }
});
