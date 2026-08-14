import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="panel relative flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-medium">
            <span className="text-gradient font-mono">FS</span>
          </div>
          <div>
            <p className="eyebrow text-[10px] text-cyan">Frans / System</p>
            <p className="text-sm text-foreground">Software Engineer</p>
          </div>
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
