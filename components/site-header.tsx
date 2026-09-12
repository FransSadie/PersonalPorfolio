import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="site-width header-inner">
        <Link href="/#home" prefetch={false} className="display-font site-brand">Frans Sadie<span>.</span></Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
