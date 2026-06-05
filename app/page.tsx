import Link from "next/link";
import { CyberPanel } from "@/components/cyber-panel";
import { Hero } from "@/components/hero";
import { PassionCard } from "@/components/passion-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { currentSignals, socialLinks } from "@/data/profile";
import { passions } from "@/data/passions";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-18">
      <Hero />

      <section className="space-y-8">
        <SectionHeader
          index="01 / Projects"
          title="Selected work"
          eyebrow="Curated build log"
          description="A small set of projects with enough context to show why they exist, what they taught me, and how I think about product and engineering tradeoffs."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <CyberPanel label="02 / Currently">
          <div className="space-y-4">
            {currentSignals.map((signal, index) => (
              <div
                key={signal}
                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 p-4"
              >
                <span className="font-mono text-xs text-cyan">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-muted sm:text-base">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </CyberPanel>
        <CyberPanel label="03 / Outside Tech">
          <div className="grid gap-4 sm:grid-cols-2">
            {passions.slice(0, 4).map((passion) => (
              <PassionCard key={passion.slug} passion={passion} />
            ))}
          </div>
          <Link
            href="/passions"
            className="mt-6 inline-flex rounded-full border border-magenta/25 px-4 py-2 text-sm text-foreground hover:border-magenta/45 hover:bg-magenta/8"
          >
            Explore passions
          </Link>
        </CyberPanel>
      </section>

      <section className="space-y-8">
        <SectionHeader
          index="04 / Contact"
          title="Open channel"
          eyebrow="Reach out"
          description="If you want to talk about software, product thinking, interfaces, or a project worth building, these are the best entry points."
        />
        <SocialLinks links={socialLinks} />
      </section>
    </div>
  );
}
