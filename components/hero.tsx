import Image from "next/image";
import cinematicHorizon from "@/design-reference/cinematic-horizon.png";

export function Hero() {
  return (
    <section tabIndex={-1} id="home" className="hero-cinema anchor-section" aria-label="Frans Sadie, software engineer">
      <Image src={cinematicHorizon} alt="" fill preload sizes="100vw" className="hero-cinema-image object-cover" />
      <div className="hero-frame" aria-hidden="true" />
      <div className="site-width hero-copy">
        <h1 className="hero-title display-font mt-8">Frans<br /><span className="text-[#e7775f]">Sadie.</span></h1>
        <p className="mt-7 font-mono text-sm uppercase tracking-[.14em] text-[#70b8ae]">Software Engineer</p>
        <p className="mt-6 max-w-xl text-xl leading-8 text-[#e8dfd0]">I build practical software across market research, full-stack applications, local AI, and integrations that connect them.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="button-link accent">View projects</a><a href="https://github.com/FransSadie" target="_blank" rel="noreferrer" className="button-link">GitHub ↗</a></div>
      </div>
    </section>
  );
}
