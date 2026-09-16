export function SectionHeader({ id, title, description }: { id: string; title: string; description?: string }) {
  return (
    <header className="section-header" data-reveal>
      <h2 id={id} className="section-title display-font">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
