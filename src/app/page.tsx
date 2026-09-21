"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ContactForm from "./contact-form";
import { projects, type Project } from "./projects";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className={diagonal ? "arrow arrow-diagonal" : "arrow"} aria-hidden="true">
      →
    </span>
  );
}

function ProjectPreview({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.preview === "calendar") {
    return (
      <div className={`product-preview calendar-preview${large ? " preview-large" : ""}`}>
        <div className="preview-topbar">
          <span>Week 21</span>
          <span>May 20 - 26</span>
          <span className="preview-dots">•••</span>
        </div>
        <div className="calendar-grid">
          {["MON", "TUE", "WED", "THU", "FRI"].map((day, index) => (
            <div className="calendar-day" key={day}>
              <span>{day}</span>
              <i className={`calendar-event event-${index + 1}`} />
              <i className={`calendar-event event-${index + 2}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`product-preview tracker-preview${large ? " preview-large" : ""}`}>
      <div className="tracker-header">
        <span className="tracker-mark">WT</span>
        <strong>Work Tracker</strong>
        <span className="live-pill">LIVE</span>
      </div>
      {["AAU ITS", "Trifork"].map((client, index) => (
        <div className="tracker-row" key={client}>
          <span className="tracker-dot" />
          <strong>{client}</strong>
          <span>{index ? "17h 05m" : "00h 00m"}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  function openProject(project: Project) {
    setSelectedProject(project);
    dialogRef.current?.showModal();
  }

  return (
    <main>
      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="Theodor Risager, home">
          <span className="brand-mark">TR</span>
          <span>Theodor Risager</span>
        </a>
        <nav aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero page-shell" id="top">
        <p className="eyebrow"><span /> Selected work · 2024 - 2026</p>
        <h1>I build useful software,<br /><em>without the noise.</em></h1>
        <div className="hero-footer">
          <p>
            Software engineer focused on developer tooling and agentic workflows.
            Here are a few things I have designed and built.
          </p>
          <a className="text-link" href="#work">Explore projects <Arrow /></a>
        </div>
      </section>

      <section className="work-section page-shell" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <h2 id="work-heading">Featured projects</h2>
          <span>{String(projects.length).padStart(2, "0")} projects</span>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              className="project-card"
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              aria-label={`View ${project.name} project details`}
            >
              <div className="card-preview">
                <span className="project-number">0{index + 1}</span>
                <ProjectPreview project={project} />
              </div>
              <div className="card-copy">
                <span className={`project-logo logo-${project.preview}`}>{project.logo}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.shortDescription}</p>
                </div>
                <Arrow diagonal />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="contact-section page-shell" id="contact" aria-labelledby="contact-heading">
        <div className="section-heading">
          <h2 id="contact-heading">Start a conversation</h2>
          <span>Get in touch</span>
        </div>
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow"><span /> Available for interesting work</p>
            <h3>Have a problem worth solving?</h3>
            <p>
              Tell me a little about your project, team, or idea. I will get back
              to you as soon as I can.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer page-shell">
        <p>Have an interesting problem?</p>
        <a href="#contact">Let&apos;s talk <Arrow diagonal /></a>
        <div>
          <span>© {new Date().getFullYear()} Theodor Risager</span>
          <a href="https://github.com/theodor349" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/theodor-risager" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby="dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="dialog-panel">
          <form method="dialog">
            <button className="dialog-close" type="submit" aria-label="Close project details">×</button>
          </form>
          <div className="dialog-copy">
            <span className={`project-logo logo-${selectedProject.preview}`}>{selectedProject.logo}</span>
            <p className="eyebrow">Selected project</p>
            <h2 id="dialog-title">{selectedProject.name}</h2>
            <p className="dialog-description">{selectedProject.longDescription}</p>
            <div className="dialog-meta">
              <div>
                <span>Technology</span>
                <ul>
                  {selectedProject.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <div>
                <span>Live project</span>
                <a href={selectedProject.url} target="_blank" rel="noreferrer">
                  {selectedProject.urlLabel} <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
          <figure className="dialog-preview">
            <ProjectPreview project={selectedProject} large />
            <figcaption>{selectedProject.screenshots[0].alt}</figcaption>
          </figure>
        </div>
      </dialog>
    </main>
  );
}
