import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Theodor Risager",
  description: "Theodor Risager's curriculum vitae.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header page-shell">
        <Link className="brand" href="/" aria-label="Theodor Risager, home">
          <span className="brand-mark">TR</span>
          <span>Theodor Risager</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="cv-section page-shell" aria-labelledby="cv-heading">
        <div className="cv-intro">
          <div>
            <p className="eyebrow"><span /> About</p>
            <h1 id="cv-heading">Curriculum vitae</h1>
            <p>Experience, education, selected projects, and the tools I work with.</p>
          </div>
          <a className="cv-open-link" href="/cv/cv.html" target="_blank" rel="noreferrer">
            Open full page <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="cv-frame-shell">
          <iframe className="cv-frame" src="/cv/cv.html" title="Theodor Risager's CV" />
        </div>
      </section>
    </main>
  );
}
