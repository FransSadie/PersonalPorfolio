import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { PassionCard } from "@/components/passion-card";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { passions } from "@/data/passions";
import { projects } from "@/data/projects";
import { socialLinks, toolGroups } from "@/data/profile";
import retroObjects from "@/design-reference/Retro-Art.webp";
import retroSunset from "@/design-reference/RetroSynthwave.jpg";
import cinematicHorizon from "@/design-reference/cinematic-horizon.png";
import { getAllNotes } from "@/lib/notes";

const principles = [["01", "Understand", "Start with the person and the real constraint."], ["02", "Build", "Make the smallest useful version tangible."], ["03", "Improve", "Test honestly and let evidence shape the next move."]];

export default function Home() {
  const notes = getAllNotes();
  return (
    <div className="page-stack">
      <Hero />

      <section id="about" className="anchor-section reveal">
        <div className="mb-8 flex items-end justify-between gap-5"><div><p className="eyebrow">01 / Profile dossier</p><h2 className="display-font mt-3 text-5xl sm:text-7xl">The person behind the work.</h2></div><span className="dossier-stamp hidden sm:inline-block">Cleared to build</span></div>
        <article className="dossier">
          <div><div className="dossier-photo"><div className="dossier-monogram display-font">FS</div><p className="meta mt-4 text-[#b8ac98]">Subject 01 · South Africa</p></div><p className="handwritten mt-7 text-lg">Still curious. Still building.</p></div>
          <div><div className="flex flex-wrap items-center justify-between gap-4"><p className="meta text-[#8a3c44]">File no. FS-01 / Active</p><span className="dossier-stamp">Verified</span></div><h3 className="display-font mt-6 text-5xl leading-none sm:text-6xl">Useful systems.<br />Calm interfaces.</h3><div className="editorial-copy"><p>I’m a software engineer and builder based in South Africa. I work across web, desktop, mobile, data, and local AI—wherever a problem needs technical depth and a clear product point of view.</p><p>I’m drawn to products people can understand and trust. The best work sits where engineering, product thinking, and persistent curiosity meet.</p></div><div className="principle-strip">{principles.map(([number, title, copy]) => <article key={number}><p className="meta text-[#8a3c44]">{number}</p><h4 className="display-font mt-2 text-2xl">{title}</h4><p className="mt-2 text-xs leading-5 text-[#5b5249]">{copy}</p></article>)}</div></div>
        </article>
      </section>

      <section id="projects" className="anchor-section reveal">
        <div className="section-rule mb-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="eyebrow text-[#70b8ae]">02 / Media archive</p><h2 className="section-title display-font mt-4">Things I’ve built.</h2></div><p className="meta max-w-xs text-[#8b8790]">Six recovered objects · source files intact · playback ready</p></div>
        <div className="media-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><div className="archive-shelf" aria-hidden="true" />
      </section>

      <section id="tools" className="anchor-section reveal">
        <div className="instrument-panel">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#4b4b4c] pb-5"><div><p className="eyebrow text-[#e8a94f]">03 / Instrument panel</p><h2 className="display-font mt-3 text-5xl sm:text-7xl">Tools on the bench.</h2></div><p className="meta text-[#99999a]"><span className="panel-led" />Main bus active</p></div>
          <div className="instrument-grid">{toolGroups.map((group, index) => <section key={group.label} className="instrument-bank"><div className="flex items-center justify-between"><h3 className="display-font text-3xl text-[#e4ddd0]">{group.label}</h3><span className="meta text-[#74757a]">CH-{index + 1}</span></div><div className="mt-5 flex flex-wrap gap-2">{group.tools.map((tool) => <span key={tool} className="instrument-key">{tool}</span>)}</div></section>)}</div>
        </div>
      </section>

      <section id="outside" className="anchor-section reveal">
        <div className="mb-8 section-rule"><p className="eyebrow text-[#c65382]">04 / Personal pinboard</p><h2 className="section-title display-font mt-4">Outside the machine.</h2></div>
        <div className="pinboard"><div className="scrapbook-grid"><div className="space-y-9"><figure className="scrap-photo"><Image src={retroObjects} alt="A warm retro collection of music and everyday objects" sizes="(max-width: 900px) 100vw, 34vw" className="aspect-[4/3] w-full object-cover" /><figcaption className="handwritten mt-3 text-sm">sound, texture, small rituals</figcaption></figure><figure className="scrap-photo"><Image src={retroSunset} alt="A vivid retro sunset and wireframe horizon" sizes="(max-width: 900px) 100vw, 34vw" className="aspect-[4/3] w-full object-cover" /><figcaption className="handwritten mt-3 text-sm">looking beyond the obvious route</figcaption></figure></div><div className="passion-notes">{passions.map((passion, index) => <PassionCard key={passion.slug} passion={passion} index={index} />)}</div></div></div>
      </section>

      <section id="notes" className="anchor-section reveal">
        <div className="mb-8 section-grid section-rule"><div><p className="eyebrow text-[#e8a94f]">05 / Field log</p><p className="meta mt-3 text-[#777b83]">Local archive · read only</p></div><h2 className="section-title display-font">Ideas worth returning to.</h2></div>
        <div className="field-log"><div className="log-header"><span className="meta text-[#70b8ae]">FIELD_LOG.DAT</span><span className="meta text-[#e8a94f]">03 entries</span></div>{notes.map((note, index) => <Link key={note.slug} href={`/notes/${note.slug}`} className="log-entry group"><span className="meta text-[#8b8790]">{note.date}</span><div><span className="meta text-[#c65382]">Entry {String(index + 1).padStart(2, "0")}</span><h3 className="display-font mt-2 text-3xl group-hover:text-[#70b8ae]">{note.title}</h3><p className="mt-2 text-sm text-[#98949a]">{note.summary}</p></div><span className="meta self-center transition-transform group-hover:translate-x-1">Open →</span></Link>)}</div>
      </section>

      <section id="contact" className="end-screen anchor-section reveal">
        <Image src={cinematicHorizon} alt="A coastal city glowing beneath a fading retro-futurist sunset" fill sizes="100vw" className="end-screen-image object-cover" />
        <div className="site-width end-screen-content"><div className="flex items-center gap-3"><span className="status-light" aria-hidden="true" /><p className="eyebrow text-[#70b8ae]">06 / Transmission ready</p></div><h2 className="display-font mt-6 max-w-5xl text-[clamp(5rem,13vw,11rem)] leading-[.78]">Let’s build<br /><span className="text-[#e7775f]">something real.</span></h2><p className="mt-8 max-w-xl text-lg text-[#d2c9ba]">Software, products, strange ideas, or a problem that deserves a thoughtful system.</p><div className="mt-10"><SocialLinks links={socialLinks} /></div></div>
      </section>
    </div>
  );
}
