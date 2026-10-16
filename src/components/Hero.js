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

// depth: how much the layer keeps up with the page when scrolling (1 = moves with the page)
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

    const apply = () => {
      frame = 0;
      scene.style.setProperty("--scroll", Math.min(window.scrollY, window.innerHeight).toFixed(0));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
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
        <div className="hero__id">
          <div className="hero__avatar">
            <img src={profile.avatar} alt={profile.name} />
          </div>
          <p className="hero__location">
            <Icon name="pin" size={15} /> Based in {profile.location}
          </p>
          <div className="hero__links">
            <a
              href={profile.socials.find((s) => s.icon === "linkedin").url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" title={profile.email}>
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>

        <div className="hero__text">
          <h1 className="hero__title">
            Hi, I’m {profile.firstName}.
            <span className="hero__role">
              {role}
              <span className="caret" aria-hidden="true" />
            </span>
          </h1>
          {profile.summary.map((p) => (
            <p className="hero__summary" key={p}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Scroll to work">
        <Icon name="arrowDown" size={18} />
      </a>
    </section>
  );
}
