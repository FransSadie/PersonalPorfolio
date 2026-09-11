"use client";

import Link from "next/link";
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
  const [active, setActive] = useState("home");
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <>
      <nav aria-label="Primary navigation" className="hidden gap-6 text-sm text-[#aaa399] md:flex">
        {links.map((link) => <Link key={link.id} href={`/#${link.id}`} aria-current={active === link.id ? "location" : undefined} className="nav-link"><span className="mr-1 text-[#6f727b]">{link.number}</span>{link.label}</Link>)}
      </nav>
      <details ref={menuRef} className="relative md:hidden">
        <summary className="cursor-pointer list-none py-3 text-sm">Menu <span className="ml-1 text-[#df765d]">+</span></summary>
        <nav aria-label="Mobile navigation" className="absolute right-0 top-12 z-20 w-52 border border-white/15 bg-[#151515] px-5 py-2">
          {links.map((link) => <Link key={link.id} href={`/#${link.id}`} aria-current={active === link.id ? "location" : undefined} onClick={closeMenu} className="mobile-nav-link block border-t border-white/15 py-3 first:border-0"><span className="meta mr-3 text-[#6f727b]">{link.number}</span>{link.label}</Link>)}
        </nav>
      </details>
    </>
  );
}
