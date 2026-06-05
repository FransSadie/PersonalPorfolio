import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CyberPanel } from "@/components/cyber-panel";
import { getAllNotes, getNoteBySlug, renderNote } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllNotes().map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {
      title: "Note",
    };
  }

  return {
    title: note.meta.title,
    description: note.meta.summary,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;

  const note = getNoteBySlug(slug);
  if (!note) {
    notFound();
  }

  const content = await renderNote(note.content);

  return (
    <div className="py-8">
      <CyberPanel className="mx-auto max-w-4xl" label={note.meta.date}>
        <div className="mb-6 flex flex-wrap gap-2">
          {note.meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-magenta/15 bg-magenta/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-magenta"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {note.meta.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          {note.meta.summary}
        </p>
        <article className="content-copy mt-10">{content}</article>
      </CyberPanel>
    </div>
  );
}
