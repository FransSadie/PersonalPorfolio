type SectionHeaderProps = { index: string; title: string; eyebrow?: string; description?: string };

export function SectionHeader({ index, title, eyebrow, description }: SectionHeaderProps) {
  return (
    <header className="section-rule">
      <p className="eyebrow">{index}</p>
      <h1 className="display-font section-title mt-5">{title}</h1>
      {eyebrow ? <p className="mt-6 text-lg text-[#78aaa5]">{eyebrow}</p> : null}
      {description ? <p className="mt-3 max-w-2xl text-lg text-[#aaa399]">{description}</p> : null}
    </header>
  );
}
