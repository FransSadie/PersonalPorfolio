import Image from "next/image";
import Link from "next/link";
import cinematicHorizon from "@/design-reference/cinematic-horizon.png";

export function Hero() {
  return (
    <section id="home" className="hero-cinema anchor-section">
      <Image src={cinematicHorizon} alt="A retro-futurist coastal city beneath a star-filled sunset sky" fill priority sizes="100vw" className="hero-cinema-image object-cover" />
      <div className="hero-frame" aria-hidden="true" />
      <div className="site-width hero-copy">
        <div className="flex items-center gap-3"><span className="status-light" aria-hidden="true" /><p className="eyebrow text-[#70b8ae]">Player 01 · Signal online · 198X</p></div>
        <h1 className="hero-title display-font mt-8">Frans<br /><span className="text-[#e7775f]">Sadie.</span></h1>
        <p className="mt-7 font-mono text-sm uppercase tracking-[.14em] text-[#70b8ae]">Software Engineer / Builder <span className="terminal-cursor text-[#e8a94f]">_</span></p>
        <p className="mt-6 max-w-xl text-xl leading-8 text-[#e8dfd0]">I build practical software across accessible products, market research, local AI, and tools for clearer thinking.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="#projects" className="button-link accent">Enter archive</Link><Link href="https://github.com/FransSadie" target="_blank" rel="noreferrer" className="button-link">GitHub ↗</Link></div>
        <div className="meta absolute bottom-9 flex gap-8 text-white/55"><span>ZA · 26.2041° S</span><span className="hidden sm:inline">Transmission FS-84</span></div>
      </div>
    </section>
  );
}
