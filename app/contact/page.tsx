import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { socialLinks } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Contact Frans Sadie." };
export default function ContactPage() { return <div className="page-stack"><SectionHeader index="06 / Contact" title="Get in touch." description="If you have a project in mind or want to talk about software, I’d be happy to hear from you." /><section className="section-grid"><p className="eyebrow">Contact details</p><SocialLinks links={socialLinks} /></section></div>; }
