import type { ProjectStatus } from "@/types/content";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className="status-badge" data-status={status}><span aria-hidden="true" />{status === "WIP" ? "In progress" : status}</span>;
}
