import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Selected software projects by Frans Sadie." };

export default function ProjectsPage() {
  return <div className="page-stack"><SectionHeader index="02 / Projects" title="Things I’ve built." description="Products and experiments across accessibility, research, local AI, and personal tools." /><section>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</section></div>;
}
