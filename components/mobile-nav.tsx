"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/passions", label: "Passions" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="panel relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="eyebrow text-[10px] text-cyan">Nav</span>
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          className="panel absolute left-5 right-5 top-[4.75rem] rounded-3xl p-4"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    active
                      ? "border-cyan/40 bg-cyan/10 text-foreground"
                      : "border-transparent text-muted hover:border-cyan/20 hover:text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
