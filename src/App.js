import React, { useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import { useHashRoute, useRevealOnScroll } from "./hooks";
import { projects } from "./data/portfolio";

export default function App() {
  const slug = useHashRoute();
  const project = slug && projects.find((p) => p.slug === slug);
  useRevealOnScroll(project);

  // A project page starts at the top; back on home, jump to the section named in the hash.
  useEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "instant" });
    }
  }, [project]);

  return (
    <>
      {!project && (
        <a className="skip-link" href="#work">
          Skip to content
        </a>
      )}
      <Nav />
      <main>
        {project ? (
          <ProjectPage project={project} />
        ) : (
          <>
            <Hero />
            <Projects />
            <Journey />
            <Skills />
            <About />
          </>
        )}
      </main>
      <Contact />
    </>
  );
}
