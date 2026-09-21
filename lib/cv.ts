const relativeSource = /(\bsrc=)(["'])(?!\/|[a-z][a-z\d+.-]*:|#)([^"']+)\2/gi

export function extractCvDocument(document: string) {
  const styles = document.match(/<style\b[^>]*>([\s\S]*?)<\/style>/i)?.[1]
  const body = document.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]

  if (styles === undefined)
    throw new Error("CV document is missing a style element")
  if (body === undefined)
    throw new Error("CV document is missing a body element")

  const stylesheets = [...document.matchAll(/<link\b[^>]*>/gi)]
    .filter(([link]) => /\brel=["']stylesheet["']/i.test(link))
    .map(([link]) => link.match(/\bhref=["']([^"']+)["']/i)?.[1])
    .filter((href): href is string => href !== undefined)

  return {
    styles: styles.trim(),
    stylesheets,
    body: body
      .trim()
      .replace(
        relativeSource,
        (_, attribute, quote, source) =>
          `${attribute}${quote}/cv/${source.replace(/^\.\//, "")}${quote}`
      ),
  }
}
