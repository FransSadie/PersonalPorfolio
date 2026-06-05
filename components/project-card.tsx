import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel group relative flex h-full flex-col overflow-hidden rounded-[28px] p-6">
      <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-magenta/12 to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-[10px] text-cyan">/{project.slug}</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">
            {project.name}
          </h3>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan/15 bg-cyan/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/8 bg-white/5 p-4">
        <p className="eyebrow text-[10px] text-magenta">Why it matters</p>
        <p className="mt-2 text-sm leading-7 text-muted">{project.insight}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan/20 px-4 py-2 text-sm text-foreground hover:border-cyan/45 hover:bg-cyan/8"
        >
          GitHub
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-magenta/25 px-4 py-2 text-sm text-foreground hover:border-magenta/45 hover:bg-magenta/8"
          >
            Live demo
          </Link>
        ) : null}
      </div>
    </article>
  );
}
