import React from "react";
import { skills } from "../data/portfolio";

const icons = ["◆", "▲", "●", "■"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__head reveal">
          <div>
            <p className="eyebrow eyebrow--pixel">03 · Skill tree</p>
            <h2 className="section__title">What I bring to a team</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="card skill reveal" key={s.group} style={{ "--delay": `${i * 80}ms` }}>
              <span className="skill__icon" aria-hidden="true">{icons[i % icons.length]}</span>
              <h3>{s.group}</h3>
              <ul className="tags tags--large">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
