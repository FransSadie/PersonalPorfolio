import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug, renderNote } from "@/lib/notes";

type NotePageProps = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return getAllNotes().map((note) => ({ slug: note.slug })); }
export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> { const { slug } = await params; const note = getNoteBySlug(slug); return note ? { title: note.meta.title, description: note.meta.summary } : { title: "Note" }; }

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params; const note = getNoteBySlug(slug); if (!note) notFound(); const content = await renderNote(note.content);
  return <article className="mx-auto max-w-3xl py-16 sm:py-24"><Link href="/notes" className="text-link text-sm">← All notes</Link><header className="mt-10 border-b border-white/15 pb-10"><p className="eyebrow">{note.meta.date} · {note.meta.tags.join(" / ")}</p><h1 className="display-font mt-5 text-5xl leading-none sm:text-7xl">{note.meta.title}</h1><p className="mt-6 text-xl leading-8 text-[#aaa399]">{note.meta.summary}</p></header><div className="content-copy mt-10">{content}</div></article>;
}
