"use client";

import { useEffect } from "react";

/** Event-driven motion; content stays visible without JavaScript. */
export function PageEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ambient = new Set<Element>();
    const updateAmbient = () => {
      ambient.forEach((element) => element.classList.toggle("ambient-on", !preference.matches && !document.hidden));
    };
    const ambientObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) ambient.add(target);
        else { ambient.delete(target); target.classList.remove("ambient-on"); }
      });
      updateAmbient();
    });
    document.querySelectorAll("#home, #contact").forEach((element) => ambientObserver.observe(element));
    const targets = document.querySelectorAll(".section-header, .profile-sheet, .project-media, .skill-collection, .interest-card, .contact-inner");
    const pending = new Set<Element>();
    const seen = new WeakSet<Element>();
    const active = new Map<Element, ReturnType<typeof setTimeout>>();
    const start = () => {
      if (preference.matches || document.hidden) return;
      for (const element of pending) {
        if (active.size >= 2) break;
        pending.delete(element);
        seen.add(element);
        observer.unobserve(element);
        element.classList.add("motion-enter");
        active.set(element, setTimeout(() => {
          element.classList.remove("motion-enter");
          active.delete(element);
          start();
        }, 1000));
      }
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) pending.add(target);
        else pending.delete(target);
      });
      start();
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
    const clear = () => {
      observer.disconnect();
      pending.clear();
      active.forEach((timer, element) => {
        clearTimeout(timer);
        element.classList.remove("motion-enter");
      });
      active.clear();
    };
    const sync = () => {
      if (preference.matches) clear();
      else {
        targets.forEach((element) => { if (!seen.has(element)) observer.observe(element); });
        start();
      }
    };
    sync();
    preference.addEventListener("change", updateAmbient);
    document.addEventListener("visibilitychange", updateAmbient);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", start);
    return () => {
      clear();
      ambientObserver.disconnect();
      ambient.forEach((element) => element.classList.remove("ambient-on"));
      preference.removeEventListener("change", updateAmbient);
      document.removeEventListener("visibilitychange", updateAmbient);
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);
  return null;
}
