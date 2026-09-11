import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { socialLinks } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Contact Frans Sadie." };
export default function ContactPage() { return <div className="page-stack"><SectionHeader index="05 / Contact" title="Let’s talk." description="If you want to discuss software, products, or something worth building, use whichever channel works best." /><section className="section-grid"><p className="eyebrow">The line is open</p><SocialLinks links={socialLinks} /></section></div>; }
