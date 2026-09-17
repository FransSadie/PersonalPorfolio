export function SectionHeader({ id, title, description }: { id: string; title: string; description?: string }) {
  const number = ["about-title", "projects-title", "skills-title", "outside-title"].indexOf(id) + 2;
  return (
    <header className="section-header" data-reveal>
      <div className="section-heading"><span className="section-index" aria-hidden="true">{String(number).padStart(2, "0")}</span><h2 id={id} className="section-title display-font">{title}</h2></div>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
