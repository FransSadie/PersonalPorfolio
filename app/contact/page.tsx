import type { Metadata } from "next";
import { CyberPanel } from "@/components/cyber-panel";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { socialLinks } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to reach Frans.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 py-8">
      <SectionHeader
        index="05 / Contact"
        title="Reach out"
        eyebrow="Open for conversation"
        description="If you are building something interesting, want to discuss software craft, or simply want to connect, this is the cleanest route in."
      />
      <CyberPanel label="Primary links">
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
          I am most interested in conversations around product engineering,
          technical direction, interface design, and thoughtful software that
          lasts.
        </p>
        <div className="mt-6">
          <SocialLinks links={socialLinks} />
        </div>
      </CyberPanel>
    </div>
  );
}
