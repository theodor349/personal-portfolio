"use client"

import { useEffect, useRef } from "react"

const embeddedStyles = `
  :host {
    display: block;
    color: #18243a;
    font-family: Inter, Avenir Next, Avenir, Helvetica, Arial, sans-serif;
    font-size: 10.1pt;
    line-height: 1.48;
  }

  .page {
    width: min(210mm, 100%);
    min-height: auto;
    margin: auto;
    box-shadow: 0 10px 35px #18243a22;
  }

  @media (max-width: 640px) {
    .page {
      display: block;
      overflow: hidden;
      border-radius: 1.125rem;
    }

    aside,
    main {
      padding: 2rem;
    }

    aside {
      border-right: 0;
      border-bottom: 1px solid #dce5ee;
    }
  }
`

type CvDocumentProps = {
  body: string
  styles: string
  stylesheets: string[]
}

export function CvDocument({ body, styles, stylesheets }: CvDocumentProps) {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root =
      host.current?.shadowRoot ?? host.current?.attachShadow({ mode: "open" })
    if (!root) return

    root.replaceChildren()

    for (const href of stylesheets) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = href
      root.append(link)
    }

    const style = document.createElement("style")
    style.textContent = `${styles}\n${embeddedStyles}`
    root.append(style)

    const template = document.createElement("template")
    template.innerHTML = body
    root.append(template.content)
  }, [body, styles, stylesheets])

  return (
    <div ref={host} role="document" aria-label="Theodor Risager's CV">
      <p className="p-8 text-center text-sm text-muted-foreground">
        Loading CV...
      </p>
    </div>
  )
}
