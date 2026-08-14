export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 scanlines opacity-20" />
      <div className="ambient-glow ambient-glow-cyan" />
      <div className="ambient-glow ambient-glow-magenta" />
      <div className="ambient-glow ambient-glow-violet" />
    </div>
  );
}
