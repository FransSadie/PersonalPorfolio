"use client";

import { useEffect } from "react";

/** Small progressive enhancement: no React state, scroll listeners, or frame loops. */
export function PageEffects() {
  useEffect(() => {
    const hero = document.getElementById("home");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let heroVisible = false;
    const updateMotion = () => {
      hero?.classList.toggle("is-ambient", heroVisible && !document.hidden && !reducedMotion.matches);
    };
    const visibility = new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; updateMotion(); });
    if (hero) visibility.observe(hero);
    document.addEventListener("visibilitychange", updateMotion);
    reducedMotion.addEventListener("change", updateMotion);

    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    if (!reducedMotion.matches) document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element));

    const openNote = () => {
      const fragment = window.location.hash.slice(1);
      if (!fragment.startsWith("note-")) return;
      const note = document.getElementById(fragment);
      if (note instanceof HTMLDetailsElement) {
        note.open = true;
        note.scrollIntoView({ behavior: "instant", block: "start" });
      }
    };
    openNote();
    window.addEventListener("hashchange", openNote);
    return () => {
      visibility.disconnect();
      reveal.disconnect();
      document.removeEventListener("visibilitychange", updateMotion);
      reducedMotion.removeEventListener("change", updateMotion);
      window.removeEventListener("hashchange", openNote);
      hero?.classList.remove("is-ambient");
    };
  }, []);
  return null;
}
