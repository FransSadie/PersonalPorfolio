import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = { title: "Notes", description: "Technical notes and working ideas by Frans Sadie." };
export default function NotesPage() { const notes = getAllNotes(); return <div className="page-stack"><SectionHeader index="05 / Notes" title="Notes from the work." description="Short notes on software, product choices, and what I’m learning." /><section className="border-t border-white/15">{notes.map((note) => <Link key={note.slug} href={`/notes/${note.slug}`} className="group grid gap-4 border-b border-white/15 py-7 md:grid-cols-[10rem_1fr_auto]"><span className="meta text-[#aaa399]">{note.date}</span><div><h2 className="display-font text-3xl group-hover:text-[#df765d]">{note.title}</h2><p className="mt-2 max-w-2xl text-[#aaa399]">{note.summary}</p></div><span className="tag">{note.tags.join(" · ")}</span></Link>)}</section></div>; }
