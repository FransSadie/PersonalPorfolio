import type { Passion } from "@/types/content";

export function PassionCard({ passion, index = 0 }: { passion: Passion; index?: number }) {
  return (
    <article className="passion-note">
      <p className="meta text-[#8a3c44]">{String(index + 1).padStart(2, "0")} / {passion.category}</p>
      <h3 className="display-font mt-3 text-3xl">{passion.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#554d43]">{passion.description}</p>
    </article>
  );
}
