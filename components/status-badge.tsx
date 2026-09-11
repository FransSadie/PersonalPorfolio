import type { ProjectStatus } from "@/types/content";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className="meta inline-flex items-center gap-2 border border-white/20 px-2 py-1 text-[.65rem] text-[#aaa399]"><span className="status-light" aria-hidden="true" />{status}</span>;
}
