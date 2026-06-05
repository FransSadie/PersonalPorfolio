import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project archive and build notes from Frans.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 py-8">
      <SectionHeader
        index="01 / Projects"
        title="Project archive"
        eyebrow="Software in context"
        description="Each project is presented as a product artifact rather than a raw repository list, with status, stack, intent, and the main lesson behind the work."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
