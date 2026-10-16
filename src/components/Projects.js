import React, { useState } from "react";
import Icon from "./Icon";
import { projects } from "../data/portfolio";

const filters = [
  { id: "all", label: "All" },
  { id: "pro", label: "Studio" },
  { id: "personal", label: "Indie & jams" },
];

function ProjectCard({ project, index }) {
  return (
    <a
      className="card project pop-in"
      style={{ "--delay": `${index * 50}ms` }}
      href={`#/projects/${project.slug}`}
      aria-label={`${project.title} details`}
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
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow eyebrow--pixel">01 · Selected work</p>
            <h2 className="section__title">Games I’ve built</h2>
            <p className="section__lead">
              Studio titles, client work and the indie projects I make for fun. Open a game for videos,
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
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
