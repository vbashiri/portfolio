import React, { useCallback, useState } from "react";
import Icon from "./Icon";
import MediaModal from "./MediaModal";
import { projects } from "../data/portfolio";

const filters = [
  { id: "all", label: "All" },
  { id: "pro", label: "Studio" },
  { id: "personal", label: "Indie & jams" },
];

const mediaFor = (project) => [
  ...(project.youtube ? [{ type: "youtube", id: project.youtube }] : []),
  ...project.images.map((src) => ({ type: "image", src })),
];

const linkLabel = (url) => {
  if (url.includes("play.google.com")) return "Google Play";
  if (url.includes("itch.io")) return "Play on itch.io";
  if (url.includes("dropbox.com")) return "Download APK";
  return "Visit website";
};

function ProjectCard({ project, onOpen, index }) {
  return (
    <button
      className="card project pop-in"
      style={{ "--delay": `${index * 50}ms` }}
      onClick={() => onOpen(project)}
      aria-label={`Open ${project.title} details`}
    >
      <div className="project__art">
        <img className="project__blur" src={project.thumbnail} alt="" aria-hidden="true" loading="lazy" />
        <img className="project__icon" src={project.thumbnail} alt="" loading="lazy" />
        {project.youtube && (
          <span className="project__badge">
            <Icon name="play" size={12} /> Video
          </span>
        )}
      </div>
      <div className="project__body">
        <div className="project__meta">
          <span>{project.year}</span>
          <span>{project.studio || (project.category === "pro" ? "Client" : "Indie")}</span>
        </div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__genre">{project.genre}</p>
        <ul className="tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </button>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow eyebrow--pixel">01 · Selected work</p>
            <h2 className="section__title">Games I’ve built</h2>
            <p className="section__lead">
              Studio titles, client work and the indie projects I make for fun. Tap a card for videos,
              screenshots and what I did on it.
            </p>
          </div>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={filter === f.id ? "is-active" : ""}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="projects-grid" key={filter}>
            {visible.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} onOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>

      {open && (
        <MediaModal media={mediaFor(open)} title={open.title} onClose={close}>
          <p className="eyebrow">
            {open.year} · {open.studio || (open.category === "pro" ? "Client project" : "Indie project")}
          </p>
          <h3 className="modal__title">{open.title}</h3>
          <p className="modal__genre">{open.genre}</p>
          <ul className="modal__list">
            {open.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <ul className="tags">
            {open.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {open.url && (
            <a className="btn btn--primary modal__cta" href={open.url} target="_blank" rel="noopener noreferrer">
              {linkLabel(open.url)} <Icon name="external" size={16} />
            </a>
          )}
        </MediaModal>
      )}
    </section>
  );
}
