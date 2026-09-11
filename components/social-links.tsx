import Link from "next/link";
import type { SocialLink } from "@/types/content";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return <div className="signal-links">{links.map((link) => <Link key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"} className="signal-link"><span className="meta text-[#e8a94f]">{link.label}</span><span className="mt-2 block break-all text-sm">{link.value} ↗</span></Link>)}</div>;
}
