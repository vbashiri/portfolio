import React, { useEffect } from "react";
import Icon from "./Icon";
import Gallery from "./Gallery";
import { experience, profile, projects } from "../data/portfolio";

const store = (url) => {
  if (url.includes("play.google.com")) return { name: "Google Play", cta: "Get it on Google Play" };
  if (url.includes("itch.io")) return { name: "itch.io", cta: "Play on itch.io" };
  if (url.includes("dropbox.com")) return { name: "Android APK", cta: "Download APK" };
  return { name: "Website", cta: "Visit website" };
};

export default function ProjectPage({ project }) {
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const job = project.studio && experience.find((e) => e.company === project.studio);
  const media = [
    ...(project.youtube ? [{ type: "youtube", id: project.youtube }] : []),
    ...project.images.map((src) => ({ type: "image", src })),
  ];
  const banner = project.images[0];
  const link = project.url && store(project.url);

  useEffect(() => {
    document.title = `${project.title} | ${profile.name}`;
    return () => {
      document.title = `${profile.name} | Game Developer`;
    };
  }, [project]);

  return (
    <article className="pp">
      <header className="pp__top">
        <div className={`pp__banner ${banner ? "" : "pp__banner--icon"}`} aria-hidden="true">
          <img src={banner || project.thumbnail} alt="" />
        </div>
        <div className="container pp__head">
          <a className="pp__back" href="#work">
            <Icon name="left" size={18} /> All games
          </a>
          <p className="eyebrow eyebrow--pixel">
            {project.studio || (project.category === "pro" ? "Client project" : "Indie project")}
          </p>
          <h1 className="pp__title">{project.title}</h1>
          <p className="pp__summary">{project.genre}</p>
        </div>
      </header>

      <div className="container pp__layout">
        <aside className="card pp__facts">
          <dl>
            {job && (
              <div>
                <dt>Role</dt>
                <dd>{job.role}</dd>
              </div>
            )}
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Genre</dt>
              <dd>{project.genre}</dd>
            </div>
            {link && (
              <div>
                <dt>Available on</dt>
                <dd>{link.name}</dd>
              </div>
            )}
          </dl>
          <ul className="tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {link && (
            <a className="btn btn--primary btn--small" href={project.url} target="_blank" rel="noopener noreferrer">
              {link.cta} <Icon name="external" size={16} />
            </a>
          )}
        </aside>

        <div className="pp__body">
          <Gallery key={project.slug} media={media} title={project.title} />
          <h2 className="pp__h2">What I did</h2>
          <ul className="pp__list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <nav className="container pp__pager" aria-label="More projects">
        <a className="card" href={`#/projects/${prev.slug}`}>
          <span>
            <Icon name="left" size={16} /> Previous
          </span>
          {prev.title}
        </a>
        <a className="card pp__next" href={`#/projects/${next.slug}`}>
          <span>
            Next <Icon name="right" size={16} />
          </span>
          {next.title}
        </a>
      </nav>
    </article>
  );
}
