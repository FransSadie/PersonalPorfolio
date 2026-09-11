import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-[#151515]/95">
      <div className="site-width flex min-h-20 items-center justify-between gap-6">
        <Link href="/#home" className="display-font text-2xl tracking-wide">Frans Sadie<span className="text-[#df765d]">.</span></Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
