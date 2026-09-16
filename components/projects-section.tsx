import { SectionHeader } from "@/components/section-header";
import { ProjectMedia } from "@/components/project-media";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section tabIndex={-1} id="projects" className="section anchor-section site-width" aria-labelledby="projects-title">
      <SectionHeader id="projects-title" title="Projects" description="Selected personal work in data, full-stack systems, and integrations, followed by web, mobile, and desktop experiments." />
      <div className="project-archive">
        {projects.map((project) => <ProjectMedia key={project.slug} project={project} />)}
      </div>
      <div className="archive-footer"><a className="text-link" href="https://github.com/FransSadie" target="_blank" rel="noreferrer">More on GitHub ↗</a></div>
    </section>
  );
}
