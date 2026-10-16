import React, { useEffect, useRef } from "react";
import Icon from "./Icon";
import { useTypewriter, prefersReducedMotion } from "../hooks";
import { profile } from "../data/portfolio";

import sky from "../assets/images/banner/sky.gif";
import foreground from "../assets/images/banner/rebel_forground.gif";
import bCloud1 from "../assets/images/banner/b_cload1.png";
import bCloud2 from "../assets/images/banner/b_cload2.png";
import bCloud3 from "../assets/images/banner/b_cload3.png";
import fCloud1 from "../assets/images/banner/f_cload1.png";
import fCloud2 from "../assets/images/banner/f_cload2.png";
import fCloud3 from "../assets/images/banner/f_cload3.png";

// depth: how strongly the layer follows the mouse / scroll (0 = static)
const clouds = [
  { src: bCloud1, depth: 0.15, className: "cloud cloud--0" },
  { src: bCloud1, depth: 0.15, className: "cloud cloud--1" },
  { src: bCloud2, depth: 0.2, className: "cloud cloud--2" },
  { src: bCloud3, depth: 0.2, className: "cloud cloud--3" },
  { src: fCloud1, depth: 0.45, className: "cloud cloud--4" },
  { src: fCloud2, depth: 0.45, className: "cloud cloud--5" },
  { src: fCloud3, depth: 0.5, className: "cloud cloud--6" },
  { src: fCloud2, depth: 0.5, className: "cloud cloud--7" },
];

// A few twinkling stars, positioned deterministically so renders are stable.
const stars = Array.from({ length: 46 }, (_, i) => ({
  left: (i * 37.3) % 100,
  top: (i * 23.7) % 62,
  delay: (i % 7) * 0.6,
  size: i % 5 === 0 ? 3 : 2,
}));

export default function Hero() {
  const sceneRef = useRef(null);
  const role = useTypewriter(profile.roles);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || prefersReducedMotion()) return undefined;
    let frame = 0;
    const target = { x: 0, y: 0 };

    const apply = () => {
      frame = 0;
      scene.style.setProperty("--mx", target.x.toFixed(3));
      scene.style.setProperty("--my", target.y.toFixed(3));
      scene.style.setProperty("--scroll", Math.min(window.scrollY, window.innerHeight).toFixed(0));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onMove = (e) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
      schedule();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={sceneRef}>
      <div className="hero__stars" aria-hidden="true">
        {stars.map((s, i) => (
          <span
            key={i}
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>

      <div className="hero__scene" aria-hidden="true">
        <img className="layer" style={{ "--depth": 0.06 }} src={sky} alt="" />
        {clouds.map((c, i) => (
          <div key={i} className="layer" style={{ "--depth": c.depth }}>
            <img className={c.className} src={c.src} alt="" />
          </div>
        ))}
        <img className="layer layer--ground" style={{ "--depth": 0.8 }} src={foreground} alt="" />
      </div>
      <div className="hero__fade" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow eyebrow--pixel hero__status">
          <span className="pulse" /> Player 1 · Based in {profile.location}
        </p>
        <h1 className="hero__title">
          Hi, I’m {profile.firstName}.
          <span className="hero__role">
            {role}
            <span className="caret" aria-hidden="true" />
          </span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            <Icon name="play" size={18} /> See my games
          </a>
          <a href={profile.cv} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
            <Icon name="download" size={18} /> Download CV
          </a>
        </div>

        <ul className="hero__stats">
          {profile.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Scroll to work">
        <Icon name="arrowDown" size={18} />
      </a>
    </section>
  );
}
