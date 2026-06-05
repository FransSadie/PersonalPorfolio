import type { ReactNode } from "react";

type CyberPanelProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export function CyberPanel({ children, className = "", label }: CyberPanelProps) {
  return (
    <div className={`panel relative overflow-hidden rounded-[28px] p-6 ${className}`}>
      {label ? (
        <div className="mb-5 flex items-center gap-3">
          <span className="eyebrow text-[10px] text-cyan">{label}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-cyan/30 to-transparent" />
        </div>
      ) : null}
      {children}
    </div>
  );
}
