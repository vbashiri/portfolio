import React from "react";
import { experience, education } from "../data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="section section--alt">
      <div className="container journey">
        <div className="journey__intro reveal">
          <p className="eyebrow eyebrow--pixel">02 · Journey</p>
          <h2 className="section__title">Where I’ve levelled up</h2>
          <p className="section__lead">
            From React Native apps to live mobile games played by millions — each stop added a new
            skill tree.
          </p>

          <div className="edu">
            <h3 className="edu__heading">Education</h3>
            {education.map((e) => (
              <div className="edu__item" key={e.degree}>
                <img src={e.logo} alt="" loading="lazy" />
                <div>
                  <strong>{e.degree}</strong>
                  <span>{e.school}</span>
                  <span className="muted">
                    {e.period}
                    {e.note ? ` · ${e.note}` : ""}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li className={`timeline__item reveal ${job.current ? "is-current" : ""}`} key={job.company + job.period}>
              <div className="timeline__dot" />
              <div className="card timeline__card">
                <div className="timeline__head">
                  <div className="timeline__logo">
                    <img src={job.logo} alt="" loading="lazy" />
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="timeline__period">
                    {job.current && <span className="pulse" />} {job.period}
                  </span>
                </div>
                <ul className="timeline__list">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
