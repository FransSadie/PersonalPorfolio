import type { Project } from "@/types/content";

export function ProjectMedia({ project }: { project: Project }) {
  return (
    <article id={`project-${project.slug}`} className="project-media anchor-section" data-accent={project.accent} aria-labelledby={`project-title-${project.slug}`}>
      <div className="project-sleeve">
        <div className="project-heading"><div className="project-meta"><p className="meta">{project.category}</p>{project.status && <span className="project-status">{project.status}</span>}</div>
        <h3 id={`project-title-${project.slug}`} className="display-font">{project.name}</h3></div>
        <div className="project-overview"><p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label="Technology stack">{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
      </div>
      <div className="project-bottom">
        <details className="project-detail"><summary>Build notes <span aria-hidden="true">+</span></summary><p>{project.detail}</p></details>
        <div className="project-links"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} source on GitHub`}>Source ↗</a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site ↗</a>}</div>
      </div>
    </article>
  );
}
