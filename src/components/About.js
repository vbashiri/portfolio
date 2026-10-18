import React, { useCallback, useState } from "react";
import MediaModal from "./MediaModal";
import { profile, sketches } from "../data/portfolio";
import { usePageLoaded } from "../hooks";

export default function About() {
  const [openAt, setOpenAt] = useState(null);
  const close = useCallback(() => setOpenAt(null), []);
  const pageLoaded = usePageLoaded();

  return (
    <section id="about" className="section section--alt">
      <div className="container about">
        <div className="about__portrait reveal">
          <div className="about__frame">
            <img src={profile.portrait} alt={profile.name} loading="lazy" />
          </div>
        </div>

        <div className="about__text reveal">
          <p className="eyebrow eyebrow--pixel">04 · About me</p>
          <h2 className="section__title">Engineer by training, artist at heart</h2>
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="sketches reveal">
          <h3 className="sketches__title">From my sketchbook</h3>
          <div className="sketches__grid">
            {sketches.map((src, i) => (
              <button key={src} className="sketch" onClick={() => setOpenAt(i)} aria-label={`Open sketch ${i + 1}`}>
                <img
                  src={pageLoaded ? src : undefined}
                  alt={`Sketch ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {openAt !== null && (
        <MediaModal
          media={sketches.map((src) => ({ type: "image", src }))}
          title="Sketches"
          startIndex={openAt}
          onClose={close}
        />
      )}
    </section>
  );
}
