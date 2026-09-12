import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import type { Project } from "@/types/content";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-entry" aria-labelledby={`project-${project.slug}`}>
      <Link href={`/projects/${project.slug}`} prefetch={false} className="floppy-disk" aria-label={`Read about ${project.name}`}>
        <div className="floppy-top" aria-hidden="true">
          <span className="floppy-brand">FS / SOFTWARE</span>
          <span className="floppy-shutter"><span>3.5″ · HD</span></span>
        </div>
        <div className="floppy-label">
          <div className="floppy-label-heading">
            <span className="meta">PROJECT / {number}</span>
            <span className="floppy-number" aria-hidden="true">{number}</span>
          </div>
          <p className="floppy-category">{project.category}</p>
          <h3 id={`project-${project.slug}`} className="display-font floppy-title">{project.name}</h3>
          <div className="floppy-label-footer">
            <ul className="floppy-stack" aria-label="Technologies">
              {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
            <div className="floppy-status"><StatusBadge status={project.status} /><span className="meta">{project.year}</span></div>
          </div>
        </div>
        <span className="floppy-bottom meta" aria-hidden="true">FS-{number} / SOURCE ARCHIVE</span>
      </Link>
      <div className="project-caption">
        <p>{project.description}</p>
        <div className="project-links">
          <Link href={`/projects/${project.slug}`} prefetch={false} className="text-link" aria-label={`Read more about ${project.name}`}>Read more <span aria-hidden="true">→</span></Link>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link" aria-label={`${project.name} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">View live <span aria-hidden="true">↗</span></a> : null}
        </div>
      </div>
    </article>
  );
}
