import type { Metadata } from "next";
import Link from "next/link";
import { CyberPanel } from "@/components/cyber-panel";
import { SectionHeader } from "@/components/section-header";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing and notes by Frans.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="space-y-10 py-8">
      <SectionHeader
        index="04 / Notes"
        title="Writing and working notes"
        eyebrow="MDX content system"
        description="A lightweight notes index powered by local MDX files, so adding future writing stays close to the codebase and easy to extend."
      />

      <div className="grid gap-6">
        {notes.map((note) => (
          <Link key={note.slug} href={`/notes/${note.slug}`} className="block">
            <CyberPanel className="hover:-translate-y-0.5" label={note.date}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {note.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {note.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan/15 bg-cyan/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CyberPanel>
          </Link>
        ))}
      </div>
    </div>
  );
}
