import { ArrowUpRight, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

const linkClassName =
  "group h-auto justify-start gap-4 rounded-2xl p-4 text-left whitespace-normal"

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 fill-current text-primary"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 fill-current text-primary"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-6 pt-8 pb-10 sm:px-10 sm:pt-12 sm:pb-14 lg:px-16"
    >
      <div className="relative overflow-hidden rounded-4xl border border-border bg-card px-6 py-10 shadow-sm sm:px-10 sm:py-14 lg:px-14">
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-32 size-80 rounded-full bg-primary/15 blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-end lg:gap-20">
          <div className="contents lg:block">
            <div className="order-1">
              <p className="mb-3 font-mono text-xs font-medium tracking-[0.22em] text-primary uppercase">
                Get in touch
              </p>
              <h2
                id="contact-heading"
                className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
              >
                Let&apos;s build something useful.
              </h2>
            </div>
            <div className="order-3 overflow-hidden rounded-3xl border border-border bg-muted lg:mt-8">
              <iframe
                src="https://maps.google.com/maps?q=56.1629%2C10.2039&z=6&output=embed"
                title="Map showing Aarhus, Denmark"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-72 w-full"
              />
            </div>
          </div>

          <address className="order-2 grid gap-3 not-italic sm:grid-cols-2 lg:order-none lg:grid-cols-1">
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="tel:+4540238867" />}
              className={linkClassName}
            >
              <Phone aria-hidden="true" className="size-5 text-primary" />
              <span>
                <span className="block text-xs text-muted-foreground">
                  Phone
                </span>
                <span className="font-medium">+45 4023 8867</span>
              </span>
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="mailto:theodor349@gmail.com" />}
              className={linkClassName}
            >
              <Mail aria-hidden="true" className="size-5 text-primary" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Email
                </span>
                <span className="block truncate font-medium">
                  theodor349@gmail.com
                </span>
              </span>
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://linkedin.com/in/theodor-risager"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              className={linkClassName}
            >
              <LinkedInIcon />
              <span>
                <span className="block text-xs text-muted-foreground">
                  LinkedIn
                </span>
                <span className="font-medium">theodor-risager</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://github.com/theodor349"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              className={linkClassName}
            >
              <GitHubIcon />
              <span>
                <span className="block text-xs text-muted-foreground">
                  GitHub
                </span>
                <span className="font-medium">theodor349</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </address>
        </div>
      </div>
    </section>
  )
}
