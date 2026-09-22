export type TimelineFilter = "all" | "work" | "education"

export const timelineEntries = [
  {
    id: "just-enough-solutions",
    startYear: 2025,
    period: "2025-Present",
    type: "work",
    title: "Founder",
    organization: "Just Enough Solutions ApS",
  },
  {
    id: "trifork",
    startYear: 2024,
    period: "2024-2025",
    type: "work",
    title: "Software Pilot",
    organization: "Trifork",
  },
  {
    id: "msc-computer-science",
    startYear: 2022,
    period: "2022-2024",
    type: "education",
    title: "M.Sc. Computer Science",
    organization: "Aalborg University",
    detail: "GPA 10.8 / 12",
  },
  {
    id: "aalborg-university-rpa",
    startYear: 2021,
    period: "2021-2024",
    type: "work",
    title: "Student RPA Developer & Teaching Assistant",
    organization: "Aalborg University",
  },
  {
    id: "epoka",
    startYear: 2020,
    period: "2020-2022",
    type: "work",
    title: "Data Analyst",
    organization: "Epoka A/S",
  },
  {
    id: "bsc-computer-science",
    startYear: 2019,
    period: "2019-2022",
    type: "education",
    title: "B.Sc. Computer Science",
    organization: "Aalborg University",
    detail: "GPA 10.9 / 12",
  },
  {
    id: "htx",
    startYear: 2016,
    period: "2016-2019",
    type: "education",
    title: "HTX",
    organization: "Hansenberg",
    detail: "GPA 10.4 / 12",
  },
] as const

export function filterTimelineEntries(filter: TimelineFilter) {
  return filter === "all"
    ? timelineEntries
    : timelineEntries.filter((entry) => entry.type === filter)
}

export function getSelectedTimelineEntry(
  entries: readonly (typeof timelineEntries)[number][],
  selectedId: string
) {
  return (
    entries.find((entry) => entry.id === selectedId) ??
    entries[0] ??
    timelineEntries[0]
  )
}
