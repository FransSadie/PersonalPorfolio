import { SiteNavigation } from "@/components/site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <a href="#home" className="wordmark display-font" aria-label="Frans Sadie, home">Frans Sadie<span>.</span></a>
        <SiteNavigation />
      </div>
    </header>
  );
}
