export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 scanlines opacity-20" />
      <div className="absolute left-[-12rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan/12 blur-[120px]" />
      <div className="absolute right-[-10rem] top-32 h-72 w-72 rounded-full bg-magenta/10 blur-[120px]" />
      <div className="absolute bottom-[-8rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/10 blur-[140px]" />
    </div>
  );
}
