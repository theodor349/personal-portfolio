import Image from "next/image"

import { Portfolio } from "@/components/portfolio"

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-primary/25 blur-3xl sm:size-96"
      />

      <header className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-10 px-6 py-8 sm:gap-12 sm:px-10 sm:py-10 md:min-h-svh lg:px-16">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] md:gap-16 lg:gap-24">
          <section className="order-2 md:order-1">
            <h1 className="max-w-3xl text-[clamp(3.6rem,9vw,7.8rem)] leading-[0.84] font-semibold tracking-[-0.075em]">
              <span className="block">Theodor</span>
              <span className="block text-right">Risager</span>
            </h1>
            <div className="mt-8 max-w-2xl sm:mt-10 sm:flex sm:items-start sm:gap-5">
              <span
                aria-hidden="true"
                className="mb-4 block h-px w-10 bg-primary sm:mt-3 sm:mb-0 sm:w-16 sm:shrink-0"
              />
              <p className="text-base leading-7 text-muted-foreground sm:text-xl sm:leading-relaxed">
                I&apos;m a software engineer focused on AI-assisted development,
                automation, and developer tooling. I build reliable systems that
                turn complex workflows into simple, dependable tools.
              </p>
            </div>
          </section>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative w-[min(46vw,16rem)] md:w-full md:max-w-80 lg:max-w-96">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border border-primary/30 bg-primary/5"
              />
              <Image
                src="/theodor.png"
                alt="Portrait of Theodor Risager"
                width={800}
                height={800}
                priority
                sizes="(max-width: 767px) 46vw, (max-width: 1023px) 320px, 384px"
                className="relative aspect-square rounded-full border border-border bg-card object-cover shadow-xl shadow-foreground/5"
              />
            </div>
          </div>
        </div>

        <nav aria-label="Page sections" className="flex justify-center">
          <div className="flex flex-col items-center gap-1 sm:relative sm:block">
            <span className="font-mono text-xs tracking-[0.16em] whitespace-nowrap text-muted-foreground/60 uppercase sm:absolute sm:top-1/2 sm:right-full sm:mr-3 sm:-translate-y-1/2">
              Jump to my
            </span>
            <div className="flex items-center">
              {["Portfolio", "Timeline", "Contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground/80 transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 sm:px-4"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <Portfolio />
    </main>
  )
}
