import type { Passion } from "@/types/content";

export function PassionCard({ passion }: { passion: Passion }) {
  return (
    <article className="panel relative rounded-[28px] p-6">
      <p className="eyebrow text-[10px] text-cyan">{passion.category}</p>
      <h3 className="mt-3 text-2xl font-semibold text-foreground">
        {passion.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
        {passion.description}
      </p>
      {passion.metadata ? (
        <p className="mt-5 border-t border-white/8 pt-4 font-mono text-xs leading-6 text-magenta">
          {passion.metadata}
        </p>
      ) : null}
    </article>
  );
}
