type SectionHeaderProps = {
  index: string;
  title: string;
  eyebrow: string;
  description: string;
};

export function SectionHeader({
  index,
  title,
  eyebrow,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow text-xs text-cyan">{index}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="max-w-xl">
        <p className="eyebrow text-[10px] text-magenta">{eyebrow}</p>
        <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
