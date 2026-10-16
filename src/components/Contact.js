import React, { useState } from "react";
import Icon from "./Icon";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact__card reveal">
          <p className="eyebrow eyebrow--pixel">05 · Contact</p>
          <h2 className="contact__title">
            Let’s make something <span className="accent-text">fun</span>.
          </h2>
          <p className="section__lead">
            Open to game developer roles and interesting collaborations. The fastest way to reach me is email.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary btn--large" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={20} /> {profile.email}
            </a>
            <button className="btn btn--ghost btn--large" onClick={copyEmail}>
              <Icon name={copied ? "check" : "copy"} size={18} /> {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <ul className="socials">
            {profile.socials.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                  <Icon name={s.icon} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="footer__made">
            <Icon name="pin" size={14} /> {profile.location} · Hero art from my game <em>Rebel</em>
          </span>
        </div>
      </div>
    </footer>
  );
}
