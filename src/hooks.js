import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Adds `is-visible` to every `.reveal` element once it scrolls into view.
// Pass a value that changes when the page swaps content so new elements get observed.
export function useRevealOnScroll(page) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);
}

// Cycles through `words`, typing and deleting each one.
export function useTypewriter(words, { typeMs = 70, deleteMs = 40, holdMs = 1600 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : "");
  const state = useRef({ word: 0, deleting: false });

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const { word, deleting } = state.current;
    const full = words[word];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === full) {
      delay = holdMs;
    } else if (deleting && text === "") {
      delay = 300;
    }

    const id = setTimeout(() => {
      if (!deleting && text === full) {
        state.current.deleting = true;
        setText(full.slice(0, -1));
      } else if (deleting && text === "") {
        state.current = { word: (word + 1) % words.length, deleting: false };
        setText(words[(word + 1) % words.length].slice(0, 1));
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, words, typeMs, deleteMs, holdMs]);

  return text;
}

// Returns the id of the section currently nearest the top of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

const projectSlug = () => {
  const match = window.location.hash.match(/^#\/projects\/([\w-]+)/);
  return match ? match[1] : null;
};

// Tiny hash router: "#/projects/<slug>" opens a project page, any other hash is the home page.
export function useHashRoute() {
  const [slug, setSlug] = useState(projectSlug);
  useEffect(() => {
    const onChange = () => setSlug(projectSlug());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return slug;
}

// True once the page (and everything it requested up front) has finished loading,
// plus an idle tick. Use it to hold back non-critical images so they load last.
export function usePageLoaded() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let idle;
    const ready = () => {
      const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
      idle = schedule(() => setLoaded(true));
    };
    if (document.readyState === "complete") ready();
    else window.addEventListener("load", ready, { once: true });
    return () => {
      window.removeEventListener("load", ready);
      if (idle && window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  return loaded;
}
