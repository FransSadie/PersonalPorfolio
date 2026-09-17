import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { OutsideSection } from "@/components/outside-section";
import { ContactSection } from "@/components/contact-section";
import { PageEffects } from "@/components/page-effects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="page-content">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <OutsideSection />
        <ContactSection />
      </div>
      <PageEffects />
    </>
  );
}
