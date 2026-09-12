"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: "home", number: "00", label: "Home" },
  { id: "about", number: "01", label: "About" },
  { id: "projects", number: "02", label: "Projects" },
  { id: "tools", number: "03", label: "Tools" },
  { id: "outside", number: "04", label: "Outside" },
  { id: "notes", number: "05", label: "Notes" },
  { id: "contact", number: "06", label: "Contact" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const menuRef = useRef<HTMLDetailsElement>(null);
  const routeSection = pathname.split("/")[1];
  const current = pathname === "/" ? active : routeSection === "passions" ? "outside" : routeSection;

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const visible = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
        // Only run ambient animations while their section is visible.
        (entry.target as HTMLElement).dataset.inView = String(entry.isIntersecting);
      }
      const first = links.find(({ id }) => visible.has(id));
      if (first) setActive(first.id);
    }, { rootMargin: "-80px 0px -15% 0px", threshold: [0, 0.15, 0.5, 1] });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      sections.forEach((section) => { delete section.dataset.inView; });
    };
  }, [pathname]);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <>
      <nav aria-label="Primary navigation" className="desktop-navigation">
        {links.map((link) => <a key={link.id} href={`/#${link.id}`} aria-current={current === link.id ? "location" : undefined} className="nav-link"><span>{link.number}</span>{link.label}</a>)}
      </nav>
      <details ref={menuRef} className="mobile-navigation" onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
          menuRef.current?.querySelector("summary")?.focus();
        }
      }}>
        <summary>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <a key={link.id} href={`/#${link.id}`} aria-current={current === link.id ? "location" : undefined} onClick={closeMenu} className="mobile-nav-link"><span className="meta">{link.number}</span>{link.label}</a>)}
        </nav>
      </details>
    </>
  );
}
