export function TerminalBlock() {
  return (
    <div className="panel relative overflow-hidden rounded-[32px] p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between border-b border-cyan/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-magenta" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning" />
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
        </div>
        <span className="eyebrow text-[10px] text-cyan">workspace://frans</span>
      </div>

      <div className="space-y-4 font-mono text-sm text-muted">
        <p>
          <span className="text-cyan">$ status</span>
          <span className="ml-3 text-foreground">building thoughtful software</span>
        </p>
        <p>
          <span className="text-cyan">$ focus</span>
          <span className="ml-3 text-foreground">interfaces, systems, writing</span>
        </p>
        <p>
          <span className="text-cyan">$ mode</span>
          <span className="ml-3 text-foreground">shipping with clarity and restraint</span>
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-cyan/10 bg-white/5 p-4">
          <p className="eyebrow text-[10px] text-magenta">Signal</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">07</p>
          <p className="mt-2 text-sm text-muted">Curated projects in rotation</p>
        </div>
        <div className="rounded-2xl border border-cyan/10 bg-white/5 p-4">
          <p className="eyebrow text-[10px] text-magenta">Uptime</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">99%</p>
          <p className="mt-2 text-sm text-muted">Bias toward durable systems</p>
        </div>
      </div>
    </div>
  );
}
