"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/passions", label: "Passions" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="panel relative flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-medium">
            <span className="text-gradient font-mono">FS</span>
          </div>
          <div>
            <p className="eyebrow text-[10px] text-cyan">Frans / System</p>
            <p className="text-sm text-foreground">Software Engineer</p>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="panel relative hidden items-center gap-2 rounded-full px-2 py-2 md:flex"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm ${
                  active
                    ? "bg-cyan/10 text-foreground shadow-[inset_0_0_0_1px_rgba(103,232,249,0.28)]"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
