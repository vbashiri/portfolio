import React, { useState } from "react";
import Icon from "./Icon";
import { articles, featuredTool as tool } from "../data/portfolio";

// Click-to-play: show the thumbnail until asked, so YouTube only loads when wanted.
function ToolPreview() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="tool__media">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${tool.youtube}?autoplay=1&rel=0`}
          title={`${tool.name} demo video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="tool__play" onClick={() => setPlaying(true)} aria-label={`Play ${tool.name} demo video`}>
          <img src={tool.preview} alt="" loading="lazy" />
          <span className="tool__play-icon">
            <Icon name="play" size={30} />
          </span>
        </button>
      )}
    </div>
  );
}

export default function Writing() {
  return (
    <section id="tools" className="section">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow eyebrow--pixel">03 · Tools & writing</p>
            <h2 className="section__title">Tools I build, things I write</h2>
            <p className="section__lead">
              Editors that let designers and writers move without waiting on code, and write-ups of the
              problems I’ve solved along the way.
            </p>
          </div>
        </div>

        <article className="card tool reveal">
          <ToolPreview />
          <div className="tool__body">
            <p className="eyebrow eyebrow--pixel">{tool.kind}</p>
            <h3 className="tool__name">{tool.name}</h3>
            <p className="tool__summary">{tool.summary}</p>
            <ul className="pp__list tool__points">
              {tool.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="tags">
              {tool.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="articles">
          {articles.map((a, i) => (
            <a
              key={a.url}
              className="card article reveal"
              style={{ "--delay": `${i * 100}ms` }}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="article__cover">
                <img src={a.cover} alt="" loading="lazy" />
              </div>
              <div className="article__body">
                <p className="article__meta">
                  <Icon name="medium" size={16} /> Medium · {a.date}
                </p>
                <h3 className="article__title">{a.title}</h3>
                <p className="article__summary">{a.summary}</p>
                <span className="article__more">
                  Read article <Icon name="external" size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
