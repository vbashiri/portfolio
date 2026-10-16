import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { useRevealOnScroll } from "./hooks";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <About />
      </main>
      <Contact />
    </>
  );
}
