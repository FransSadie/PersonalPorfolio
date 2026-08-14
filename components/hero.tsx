import Link from "next/link";
import { TerminalBlock } from "@/components/terminal-block";

export function Hero() {
  return (
    <section className="grid items-center gap-10 pb-14 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-18 lg:pt-10">
      <div>
        <p className="eyebrow text-xs text-cyan">00 / Open Workspace</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="text-gradient">Frans Sadie</span>
          <br />
          Software Engineer
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          I build practical software across accessible products, market
          research tools, local AI, and developer-focused workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full border border-cyan/25 bg-cyan/10 px-6 py-3 text-sm text-foreground hover:border-cyan/45 hover:bg-cyan/16"
          >
            View projects
          </Link>
          <Link
            href="/notes"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-foreground hover:border-magenta/30 hover:bg-magenta/8"
          >
            Read notes
          </Link>
        </div>
      </div>
      <TerminalBlock />
    </section>
  );
}
