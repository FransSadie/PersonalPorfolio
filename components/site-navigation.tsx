"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "outside", label: "Outside tech" },
  { id: "contact", label: "Contact" },
];

export function SiteNavigation() {
  const [active, setActive] = useState("home");
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const visible = new Set<Element>();
    let atPageEnd = false;
    const updateActive = () => {
      const current = [...visible].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
      if (atPageEnd) setActive("contact");
      else if (current) setActive(current.id);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      updateActive();
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    // The compact Contact section cannot reach the middle viewport band at page end.
    const endObserver = new IntersectionObserver(([entry]) => {
      atPageEnd = entry.intersectionRatio >= .95;
      updateActive();
    }, { threshold: .95 });
    const footer = document.querySelector(".site-footer");
    if (footer) endObserver.observe(footer);
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        if (menuRef.current) menuRef.current.open = false;
      }
    };
    document.addEventListener("pointerdown", dismiss);
    return () => { observer.disconnect(); endObserver.disconnect(); document.removeEventListener("pointerdown", dismiss); };
  }, []);

  function selectSection(id: string) {
    setActive(id);
    if (menuRef.current) menuRef.current.open = false;
    document.getElementById(id)?.focus({ preventScroll: true });
  }

  const items = links.map((link, index) => (
    <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? "location" : undefined} onClick={() => selectSection(link.id)} className="nav-link">
      <span className="nav-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className="nav-label">{link.label}</span>
    </a>
  ));

  return (
    <>
      <nav aria-label="Primary navigation" className="desktop-nav">{items}</nav>
      <details ref={menuRef} className="mobile-menu" onKeyDown={(event) => {
        if (event.key === "Escape" && menuRef.current?.open) {
          menuRef.current.open = false;
          menuRef.current.querySelector("summary")?.focus();
        }
      }}>
        <summary>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Mobile navigation">{items}</nav>
      </details>
    </>
  );
}
