import React from "react";
import Icon from "./Icon";
import { passionProject as game } from "../data/portfolio";

// Full-screen feature panel for the game I'm building now: key art behind, story on the left.
export default function Passion() {
  return (
    <section id="now" className="passion" aria-labelledby="passion-title">
      <div className="passion__art" aria-hidden="true">
        <img src={game.background} alt="" loading="lazy" />
      </div>

      <div className="container passion__content reveal">
        <p className="eyebrow eyebrow--pixel">Now building · Passion project</p>
        <h2 id="passion-title" className="passion__title">
          <img src={game.logo} alt={game.title} />
        </h2>

        <ul className="passion__meta">
          <li>{game.genre}</li>
          <li>{game.platform}</li>
          <li>{game.status}</li>
        </ul>

        {game.about.map((p) => (
          <p key={p} className="passion__text">
            {p}
          </p>
        ))}

        <a className="btn btn--primary passion__cta" href={game.steam} target="_blank" rel="noopener noreferrer">
          <Icon name="steam" size={22} /> Wishlist on Steam
        </a>
      </div>
    </section>
  );
}
