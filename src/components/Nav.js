import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { useActiveSection } from "../hooks";
import { profile } from "../data/portfolio";

const links = [
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const sectionIds = ["home", ...links.map((l) => l.id)];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__home" onClick={() => setOpen(false)} aria-label="Home" title="Home">
          <Icon name="home" size={20} />
        </a>

        <nav className="nav__links" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn--small btn--ghost nav__cv" href={profile.cv} target="_blank" rel="noopener noreferrer">
            <Icon name="download" size={16} /> CV
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
