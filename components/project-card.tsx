import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import type { Project } from "@/types/content";

const formats = ["VHS", "DATA TAPE", "CARTRIDGE", "FLOPPY", "CASSETTE", "SOFTWARE BOX"];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="media-object">
      <div className="media-spine"><span className="meta text-[#70b8ae]">FS-{String(index + 1).padStart(2, "0")}</span><span className="meta text-[#77727a]">{formats[index % formats.length]}</span></div>
      <div className="media-label">
        <div className="flex items-start justify-between gap-3"><p className="meta text-[#8a3c44]">{project.category}</p><StatusBadge status={project.status} /></div>
        <h3 className="display-font mt-5 text-4xl leading-none">{project.name}</h3>
        <p className="mt-4 text-sm leading-6 text-[#514a42]">{project.description}</p>
        <p className="meta mt-6 text-[#75685c]">{project.year} · {project.stack.slice(0, 3).join(" / ")}</p>
      </div>
      <div className="media-links"><Link href={`/projects/${project.slug}`} className="text-link">Open file →</Link><Link href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link">GitHub ↗</Link>{project.liveUrl ? <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">Live ↗</Link> : null}</div>
      <div className="media-notch" aria-hidden="true" />
    </article>
  );
}
