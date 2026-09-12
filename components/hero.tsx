import Image from "next/image";
import cinematicHorizon from "@/design-reference/cinematic-horizon.webp";

export function Hero() {
  return (
    <section id="home" className="hero-cinema anchor-section">
      <Image src={cinematicHorizon} alt="A retro-futurist coastal city beneath a star-filled sunset sky" fill priority sizes="100vw" className="hero-cinema-image object-cover" />
      <div className="hero-frame" aria-hidden="true" />
      <div className="site-width hero-copy">
        <div className="flex items-center gap-3"><span className="status-light" aria-hidden="true" /><p className="eyebrow text-[#70b8ae]">Based in South Africa · Available online</p></div>
        <h1 className="hero-title display-font mt-8">Frans<br /><span className="text-[#e7775f]">Sadie.</span></h1>
        <p className="mt-7 font-mono text-sm uppercase tracking-[.14em] text-[#70b8ae]">Software Engineer / Builder <span aria-hidden="true" className="terminal-cursor text-[#e8a94f]">_</span></p>
        <p className="mt-6 max-w-xl text-xl leading-8 text-[#e8dfd0]">I build useful software for the web, desktop, and mobile, with a focus on accessible products, market tools, and private AI.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="button-link accent">View my work</a><a href="https://github.com/FransSadie" target="_blank" rel="noreferrer" className="button-link">GitHub ↗</a></div>
        <div className="hero-coordinates meta"><span>South Africa · 26.2041° S</span><span className="hidden sm:inline">Frans Sadie</span></div>
      </div>
    </section>
  );
}
