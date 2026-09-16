import { SectionHeader } from "@/components/section-header";
import { getAllNotes, getNoteBySlug, renderNote } from "@/lib/notes";

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

export async function NotesSection() {
  const notes = await Promise.all(getAllNotes().map(async (meta) => {
    const note = getNoteBySlug(meta.slug);
    return { ...meta, body: note ? await renderNote(note.content) : null };
  }));
  return (
    <section tabIndex={-1} id="notes" className="section anchor-section site-width" aria-labelledby="notes-title">
      <SectionHeader id="notes-title" title="Notes" description="What I’m learning about engineering, interface design, and the decisions behind my projects." />
      <div className="field-log">
        {notes.map((note) => (
          <details key={note.slug} id={`note-${note.slug}`} className="log-entry anchor-section">
            <summary><time className="log-date meta" dateTime={note.date}>{dateFormatter.format(new Date(`${note.date}T00:00:00Z`))}</time><span className="log-preview"><span className="log-title">{note.title}</span><span className="log-summary">{note.summary}</span></span><span className="disclosure-mark" aria-hidden="true">+</span></summary>
            <div className="content-copy log-body">{note.body}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
