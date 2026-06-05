import Link from "next/link";
import type { SocialLink } from "@/types/content";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          className="panel relative rounded-2xl px-5 py-4 hover:-translate-y-0.5"
        >
          <p className="eyebrow text-[10px] text-cyan">{link.label}</p>
          <p className="mt-2 text-sm text-foreground">{link.value}</p>
        </Link>
      ))}
    </div>
  );
}
