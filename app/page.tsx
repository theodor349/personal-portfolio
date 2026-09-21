import Image from "next/image"

import { Portfolio } from "@/components/portfolio"

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-primary/25 blur-3xl sm:size-96"
      />

      <div className="mx-auto grid min-h-svh w-full max-w-6xl items-center gap-8 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] md:gap-16 lg:gap-24 lg:px-16">
        <section className="order-2 md:order-1">
          <p className="mb-5 font-mono text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Software engineer · Aarhus, Denmark
          </p>
          <h1 className="max-w-3xl text-[clamp(3.6rem,9vw,7.8rem)] leading-[0.84] font-semibold tracking-[-0.075em] text-balance">
            Theodor Risager
          </h1>
          <div className="mt-8 flex max-w-2xl items-start gap-5 sm:mt-10">
            <span
              aria-hidden="true"
              className="mt-3 h-px w-10 shrink-0 bg-primary sm:w-16"
            />
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I&apos;m a software engineer focused on AI-assisted development,
              automation, and developer tooling. I build reliable systems that
              turn complex workflows into simple, dependable tools.
            </p>
          </div>
        </section>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-[min(52vw,16rem)] md:w-full md:max-w-80 lg:max-w-96">
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
              sizes="(max-width: 767px) 52vw, (max-width: 1023px) 320px, 384px"
              className="relative aspect-square rounded-full border border-border bg-card object-cover shadow-xl shadow-foreground/5"
            />
          </div>
        </div>
      </div>

      <Portfolio />
    </main>
  )
}
