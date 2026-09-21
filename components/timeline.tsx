"use client"

import { Briefcase, CalendarDays, GraduationCap, List } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  filterTimelineEntries,
  getSelectedTimelineEntry,
  timelineEntries,
  type TimelineFilter,
} from "@/lib/timeline"

const filters = [
  { value: "all", label: "All entries", icon: List },
  { value: "work", label: "Work experience", icon: Briefcase },
  { value: "education", label: "Education", icon: GraduationCap },
] as const

export function Timeline() {
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>("all")
  const [selectedEntryId, setSelectedEntryId] = useState<string>(
    timelineEntries[0].id
  )
  const entries = filterTimelineEntries(activeFilter)
  const selectedEntry = getSelectedTimelineEntry(entries, selectedEntryId)
  const selectedEntryIsWork = selectedEntry.type === "work"
  const SelectedIcon = selectedEntryIsWork ? Briefcase : GraduationCap

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.22em] text-primary uppercase">
            Timeline
          </p>
          <h2
            id="timeline-heading"
            className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
          >
            The path behind the work.
          </h2>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter timeline entries"
        >
          {filters.map(({ value, label, icon: Icon }) => (
            <Button
              key={value}
              type="button"
              variant={activeFilter === value ? "default" : "outline"}
              size="lg"
              aria-pressed={activeFilter === value}
              aria-controls="timeline-list"
              onClick={() => setActiveFilter(value)}
              className="h-11 rounded-full px-4 sm:px-5"
            >
              <Icon aria-hidden="true" />
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.45fr)] lg:items-start">
        <ol
          id="timeline-list"
          className="-mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:relative lg:mx-0 lg:grid lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 lg:before:absolute lg:before:top-6 lg:before:bottom-6 lg:before:left-[5px] lg:before:w-px lg:before:bg-border"
        >
          {entries.map((entry) => {
            const isSelected = selectedEntry.id === entry.id

            return (
              <li
                key={entry.id}
                className="relative min-w-56 snap-start lg:min-w-0 lg:pl-6"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1/2 left-0 z-10 hidden size-2.5 -translate-y-1/2 rounded-full border-2 border-background ring-2 lg:block",
                    isSelected
                      ? "bg-primary ring-primary/20"
                      : "bg-border ring-background"
                  )}
                />
                <button
                  type="button"
                  aria-pressed={isSelected}
                  aria-controls="timeline-detail"
                  onClick={() => setSelectedEntryId(entry.id)}
                  className={cn(
                    "w-full rounded-2xl border p-3 text-left transition-[background-color,border-color,box-shadow] outline-none focus-visible:ring-3 focus-visible:ring-ring/30",
                    isSelected
                      ? "border-primary/30 bg-primary/8 shadow-sm"
                      : "border-border bg-card hover:border-primary/25 hover:bg-muted/50"
                  )}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-medium text-primary">
                      {entry.startYear}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {entry.period}
                    </span>
                  </span>
                  <span className="mt-2 block truncate text-sm font-semibold">
                    {entry.title}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {entry.organization}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        <article
          id="timeline-detail"
          aria-live="polite"
          aria-atomic="true"
          className="relative flex min-h-[26rem] flex-col overflow-hidden rounded-4xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:sticky lg:top-6"
        >
          <span
            aria-hidden="true"
            className="absolute -right-3 -bottom-10 font-mono text-[8rem] leading-none font-semibold tracking-[-0.08em] text-primary/6 sm:text-[11rem]"
          >
            {selectedEntry.startYear}
          </span>

          <div className="relative flex items-start justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/8 px-3 py-1 font-mono text-xs font-medium text-primary">
                <SelectedIcon aria-hidden="true" className="size-3.5" />
                {selectedEntryIsWork ? "Work" : "Education"}
              </span>
              <time className="mt-3 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <CalendarDays
                  aria-hidden="true"
                  className="size-4 text-primary"
                />
                {selectedEntry.period}
              </time>
            </div>
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/15 bg-primary/8 text-primary">
              <SelectedIcon aria-hidden="true" className="size-6" />
            </span>
          </div>

          <div className="relative my-auto py-10">
            <h3 className="max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
              {selectedEntry.title}
            </h3>
            <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
              {selectedEntry.organization}
            </p>
          </div>

          {"detail" in selectedEntry && (
            <dl className="relative w-fit rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur-sm">
              <dt className="font-mono text-[0.65rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Academic record
              </dt>
              <dd className="mt-1 font-medium">{selectedEntry.detail}</dd>
            </dl>
          )}
        </article>
      </div>
    </section>
  )
}
