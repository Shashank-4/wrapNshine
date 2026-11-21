"use client";
import { useRef, useState } from "react";
import { projects, type Project } from "@/content/site";
import { Media } from "./media";
export function Projects() {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <section className="projects section-pad" id="work">
      <div className="work-heading" data-reveal>
        <div>
          <p className="eyebrow">04 / SELECTED CONCEPTS</p>
          <h2>
            Different by <em>design.</em>
          </h2>
        </div>
        <p className="body-copy">
          A glimpse of what’s possible.
          <br />
          Your next chapter starts here.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => (
          <button
            className="project-card"
            key={project.id}
            data-scroll-item
            onClick={() => {
              setSelected(project);
              dialog.current?.showModal();
            }}
          >
            <div className="project-image">
              <Media
                asset={project.image}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <span className="round-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="project-meta">
              <p className="eyebrow">{project.category}</p>
              <span className="eyebrow">0{i + 1}</span>
            </div>
            <h3>{project.title}</h3>
          </button>
        ))}
      </div>
      <p className="concept-note">
        Concept gallery · Placeholder photography, not completed client
        projects.
      </p>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-title"
        data-lenis-prevent
      >
        <button
          className="dialog-close"
          aria-label="Close project"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <div className="project-dialog-image">
          <Media asset={selected.image} />
        </div>
        <div className="project-dialog-copy">
          <p className="eyebrow">CONCEPT / {selected.category}</p>
          <h2 id="project-title">{selected.title}</h2>
          <p>{selected.description}</p>
          <a
            className="line-link"
            href="#contact"
            onClick={() => dialog.current?.close()}
          >
            CREATE YOUR OWN <span aria-hidden="true">↗</span>
          </a>
        </div>
      </dialog>
    </section>
  );
}
