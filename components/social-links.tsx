import type { SocialLink } from "@/types/content";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return <div className="signal-links">{links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"} className="signal-link"><span className="signal-label meta">{link.label}<span aria-hidden="true">↗</span></span><span className="signal-value">{link.value}</span></a>)}</div>;
}
