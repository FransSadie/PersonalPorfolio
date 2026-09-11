import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> { const { slug } = await params; const project = projects.find((item) => item.slug === slug); return project ? { title: project.name, description: project.description } : { title: "Project" }; }

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="page-stack">
      <header className="section-rule">
        <Link href="/projects" className="text-link text-sm">← All projects</Link>
        <div className="mt-10 flex flex-wrap items-center gap-3"><p className="eyebrow">{project.category} · {project.year}</p><StatusBadge status={project.status} /></div>
        <h1 className="display-font section-title mt-5">{project.name}</h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-[#aaa399]">{project.description}</p>
      </header>
      <section className="section-grid"><p className="eyebrow">Overview</p><div className="editorial-copy max-w-3xl"><p>{project.insight}</p><p>{project.story}</p></div></section>
      <section className="grid gap-10 border-t border-white/15 pt-8 md:grid-cols-2">
        <div><p className="eyebrow">Role</p><p className="mt-4 text-lg">{project.role}</p><p className="eyebrow mt-8">Technology</p><div className="tag-list mt-4">{project.stack.map((item) => <span key={item} className="tag">{item}</span>)}</div></div>
        <div><p className="eyebrow">What I learned</p><ol className="mt-5 space-y-4 text-[#aaa399]">{project.lessons.map((lesson, index) => <li key={lesson}><span className="mr-3 text-[#df765d]">0{index + 1}</span>{lesson}</li>)}</ol></div>
      </section>
      <div className="flex flex-wrap gap-3"><Link href={project.githubUrl} target="_blank" rel="noreferrer" className="button-link accent">View on GitHub ↗</Link>{project.liveUrl ? <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="button-link">Live project ↗</Link> : null}</div>
    </article>
  );
}
