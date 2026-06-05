import type { ProjectStatus } from "@/types/content";

const statusStyles: Record<
  ProjectStatus,
  { accent: string; label: string; tone: string }
> = {
  Active: {
    accent: "bg-success",
    label: "border-success/30 bg-success/10 text-success",
    tone: "Live work",
  },
  Experimental: {
    accent: "bg-magenta",
    label: "border-magenta/30 bg-magenta/10 text-magenta",
    tone: "Experiment",
  },
  Archived: {
    accent: "bg-muted",
    label: "border-white/10 bg-white/5 text-muted",
    tone: "Archived",
  },
  WIP: {
    accent: "bg-warning",
    label: "border-warning/30 bg-warning/10 text-warning",
    tone: "In progress",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] ${style.label}`}
    >
      <span className={`h-2 w-2 rounded-full ${style.accent}`} aria-hidden="true" />
      <span>{status}</span>
      <span className="text-[10px] tracking-[0.14em] text-white/65">{style.tone}</span>
    </span>
  );
}
