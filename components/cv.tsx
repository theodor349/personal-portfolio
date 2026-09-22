import { readFile } from "node:fs/promises"
import path from "node:path"

import { ArrowUpRight } from "lucide-react"

import { CvDocument } from "@/components/cv-document"
import { extractCvDocument } from "@/lib/cv"

export async function CV() {
  const document = await readFile(
    path.join(process.cwd(), "public", "cv", "cv.html"),
    "utf8"
  )
  const cv = extractCvDocument(document)

  return (
    <>
      {cv.stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="cv-icons" />
      ))}
      <section
        id="cv"
        aria-labelledby="cv-heading"
        className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs font-medium tracking-[0.22em] text-primary uppercase">
              Curriculum vitae
            </p>
            <h2
              id="cv-heading"
              className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
            >
              The complete picture, on one page.
            </h2>
          </div>

          <a
            href="/cv/cv.html"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors outline-none hover:border-primary/35 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            Open printable version
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="overflow-hidden rounded-4xl border border-border bg-[#e9eff5] p-2 shadow-sm sm:p-4">
          <CvDocument {...cv} />
        </div>
      </section>
    </>
  )
}
