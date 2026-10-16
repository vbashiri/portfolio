import React, { useCallback, useState } from "react";
import MediaModal from "./MediaModal";
import { profile, sketches } from "../data/portfolio";

export default function About() {
  const [openAt, setOpenAt] = useState(null);
  const close = useCallback(() => setOpenAt(null), []);

  return (
    <section id="about" className="section section--alt">
      <div className="container about">
        <div className="about__portrait reveal">
          <div className="about__frame">
            <img src={profile.avatar} alt={profile.name} loading="lazy" />
          </div>
        </div>

        <div className="about__text reveal">
          <p className="eyebrow eyebrow--pixel">04 · About me</p>
          <h2 className="section__title">Engineer by training, artist at heart</h2>
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>{profile.interests}</p>
          <p>
            I also write about game development on{" "}
            <a className="link" href="https://medium.com/@vbashiri1995" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
            .
          </p>
        </div>
      </div>

      <div className="container">
        <div className="sketches reveal">
          <h3 className="sketches__title">From my sketchbook</h3>
          <div className="sketches__grid">
            {sketches.map((src, i) => (
              <button key={src} className="sketch" onClick={() => setOpenAt(i)} aria-label={`Open sketch ${i + 1}`}>
                <img src={src} alt="" loading="lazy" />
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
