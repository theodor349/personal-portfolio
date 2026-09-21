"use client"

import { Dialog } from "@base-ui/react/dialog"
import { ArrowUpRight, X } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Rekura",
    logo: "/portfolio/rekura.svg",
    shortDescription:
      "A shared home for recurring chores that makes invisible work visible.",
    description:
      "Rekura helps households capture recurring tasks, share responsibility, and keep a clear completion history. It replaces reminders and mental load with one calm list everyone can trust.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Polar",
    ],
    href: "https://www.rekura.app/",
  },
  {
    title: "Folkbook",
    logo: "/portfolio/folkbook.png",
    shortDescription:
      "A personal space for remembering what matters to the people you love.",
    description:
      "Folkbook is a lightweight personal CRM for friendships. Capture small life updates after a conversation, keep them on a timeline, and arrive at the next catch-up remembering what mattered.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Polar",
    ],
    href: "https://folkbook.justenoughsolutions.com/",
  },
  {
    title: "Weekly Review",
    logo: "/portfolio/weekly-review.png",
    shortDescription:
      "Mindful time tracking that turns daily activity into a clear weekly view.",
    description:
      "Weekly Review makes time tracking simple with quick 15-minute activity blocks. A visual weekly overview reveals patterns, time drains, and opportunities to spend time more intentionally.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Polar",
    ],
    href: "https://weekly-review.vercel.app/",
  },
  {
    title: "GGTime",
    logo: "/portfolio/gg-time.svg",
    shortDescription:
      "A raid scheduler that finds the best time for everyone to play.",
    description:
      "GGTime replaces scheduling back-and-forth with one shared raid page. Organizers propose time slots, teammates submit their availability, and the group gets a clear overview of the best time to play.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "Clerk"],
    href: "https://gg-time.vercel.app/",
  },
  {
    title: "My Cali",
    logo: "/portfolio/my-cali.png",
    shortDescription:
      "A flexible training log for building and tracking calisthenics programs.",
    description:
      "My Cali turns custom exercises and progressions into structured training programs. Athletes can plan sessions, choose the right progression, log every set, and track their development without adapting to a rigid workout system.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Polar",
    ],
    href: "https://my-fitness-two.vercel.app/",
  },
  {
    title: "EventRide",
    logo: "/portfolio/eventride.svg",
    shortDescription:
      "Shared rides for people already heading to the same event.",
    description:
      "EventRide helps attendees coordinate transport to camps, festivals, retreats, and other events. Create an event or join with a code, find people travelling the same way, and turn fewer cars into better company.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "Clerk"],
    href: "https://eventride.justenoughsolutions.com/",
  },
] as const

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="work-heading"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mb-10 max-w-2xl sm:mb-14">
        <p className="mb-3 font-mono text-xs font-medium tracking-[0.22em] text-primary uppercase">
          Selected work
        </p>
        <h2
          id="work-heading"
          className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
        >
          Products built to make everyday life simpler.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <Dialog.Root key={project.title}>
            <Dialog.Trigger className="group flex min-h-72 w-full flex-col rounded-3xl border border-border bg-card p-6 text-left shadow-sm transition-[border-color,box-shadow,transform] duration-200 outline-none hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-foreground/8 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
              <span className="flex size-16 items-center justify-center rounded-2xl border border-border bg-muted">
                <Image
                  src={project.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </span>

              <span className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                {project.title}
              </span>
              <span className="mt-3 leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </span>
              <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-primary">
                View project
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/45 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
              <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-border bg-background p-6 text-foreground shadow-2xl transition-[scale,opacity] duration-200 outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 sm:p-8">
                <Dialog.Close
                  aria-label="Close project details"
                  className="absolute top-5 right-5 grid size-9 place-items-center rounded-full text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  <X aria-hidden="true" className="size-4" />
                </Dialog.Close>

                <div className="flex items-center gap-4 pr-12">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted">
                    <Image
                      src={project.logo}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 object-contain"
                    />
                  </span>
                  <Dialog.Title className="text-3xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </Dialog.Title>
                </div>

                <Dialog.Description className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {project.description}
                </Dialog.Description>

                <div className="mt-8">
                  <h3 className="font-mono text-xs font-medium tracking-[0.18em] uppercase">
                    Tech stack
                  </h3>
                  <ul
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors outline-none hover:bg-primary/85 focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  Visit project
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </section>
  )
}
