import assert from "node:assert/strict"
import test from "node:test"

import {
  filterTimelineEntries,
  getSelectedTimelineEntry,
  timelineEntries,
} from "../lib/timeline.ts"

test("filters timeline entries without changing chronological order", () => {
  assert.equal(timelineEntries.length, 7)
  assert.deepEqual(
    timelineEntries.map(({ startYear }) => startYear),
    timelineEntries.map(({ startYear }) => startYear).toSorted((a, b) => b - a)
  )
  assert.deepEqual(filterTimelineEntries("all"), timelineEntries)

  for (const type of ["work", "education"]) {
    const entries = filterTimelineEntries(type)

    assert.ok(entries.every((entry) => entry.type === type))
    assert.deepEqual(
      entries,
      timelineEntries.filter((entry) => entry.type === type)
    )
  }
})

test("selects a visible entry and falls back when it is filtered out", () => {
  const workEntries = filterTimelineEntries("work")
  const selectedEntry = workEntries.at(-1)
  const filteredOutEntry = timelineEntries.find(
    (entry) => entry.type === "education"
  )

  assert.equal(
    getSelectedTimelineEntry(workEntries, selectedEntry.id),
    selectedEntry
  )
  assert.equal(
    getSelectedTimelineEntry(workEntries, filteredOutEntry.id),
    workEntries[0]
  )
})
