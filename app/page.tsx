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
import cinematicHorizon from "@/design-reference/cinematic-horizon.webp";
import { getAllNotes } from "@/lib/notes";

const principles = [
  ["01", "Understand", "Get clear on who needs help and what is getting in their way."],
  ["02", "Build", "Start small and make the useful part work first."],
  ["03", "Improve", "Test it, listen, and adjust what is not working."],
];

function HomeHeading({ index, title, aside }: { index: string; title: string; aside?: string }) {
  return (
    <header className="section-heading">
      <div><p className="eyebrow">{index}</p><h2 className="section-title display-font">{title}</h2></div>
      {aside ? <p className="section-aside">{aside}</p> : null}
    </header>
  );
}

export default function Home() {
  const notes = getAllNotes();
  return (
    <div className="page-stack home-page">
      <Hero />

      <section id="about" className="anchor-section" tabIndex={-1}>
        <HomeHeading index="01 / About" title="A little about me." />
        <article className="dossier">
          <div className="dossier-profile">
            <div className="dossier-photo">
              <div className="dossier-monogram display-font">FS</div>
              <p className="meta mt-4 text-[#b8ac98]">Software engineer · South Africa</p>
            </div>
            <p className="handwritten mt-7 text-lg">Curious, practical, always building.</p>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="meta text-[#8a3c44]">Profile FS-01 / Current</p>
              <span className="dossier-stamp">Frans Sadie</span>
            </div>
            <h3 className="display-font dossier-heading">Useful software.<br />Clear interfaces.</h3>
            <div className="editorial-copy">
              <p>I’m a software engineer based in South Africa. I work across web, desktop, mobile, data, and local AI, depending on what the project needs.</p>
              <p>I enjoy turning complicated problems into products that feel clear and dependable. I care about how the software works, but also about how it feels to use.</p>
            </div>
            <div className="principle-strip">
              {principles.map(([number, title, copy]) => (
                <article key={number}>
                  <p className="meta text-[#8a3c44]">{number}</p>
                  <h4 className="display-font mt-2 text-2xl">{title}</h4>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section id="projects" className="anchor-section" tabIndex={-1}>
        <HomeHeading index="02 / Projects" title="What I’ve been building." aside="Open a disk to read about the project, or browse the code on GitHub." />
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
        <div className="archive-shelf" aria-hidden="true" />
      </section>

      <section id="tools" className="anchor-section" tabIndex={-1}>
        <HomeHeading index="03 / Tools" title="What I work with." />
        <div className="instrument-panel">
          <div className="panel-header">
            <p className="meta"><span className="panel-led" aria-hidden="true" />Current toolkit</p>
            <span className="meta">FS / WORKBENCH</span>
          </div>
          <div className="instrument-grid">
            {toolGroups.map((group, index) => (
              <section key={group.label} className="instrument-bank">
                <div className="instrument-bank-heading">
                  <h3 className="display-font">{group.label}</h3>
                  <span className="meta muted">CH-0{index + 1}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">{group.tools.map((tool) => <span key={tool} className="instrument-key">{tool}</span>)}</div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="outside" className="anchor-section" tabIndex={-1}>
        <HomeHeading index="04 / Outside tech" title="What keeps me balanced." />
        <div className="pinboard">
          <div className="scrapbook-grid">
            <div className="scrap-photos">
              <figure className="scrap-photo">
                <Image src={retroObjects} alt="A warm retro collection of music and everyday objects" sizes="(max-width: 600px) 85vw, (max-width: 1000px) 42vw, 400px" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="handwritten">music, books, and everyday details</figcaption>
              </figure>
              <figure className="scrap-photo">
                <Image src={retroSunset} alt="A vivid retro sunset and wireframe horizon" sizes="(max-width: 1000px) 42vw, 400px" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="handwritten">new places and a fresh perspective</figcaption>
              </figure>
            </div>
            <div className="passion-notes">{passions.map((passion, index) => <PassionCard key={passion.slug} passion={passion} index={index} />)}</div>
          </div>
        </div>
      </section>

      <section id="notes" className="anchor-section" tabIndex={-1}>
        <HomeHeading index="05 / Notes" title="Notes from the work." aside="What I’m learning and working through." />
        <div className="field-log">
          <div className="log-header"><span className="meta text-[#70b8ae]">FIELD_LOG.DAT</span><span className="meta text-[#e8a94f]">{String(notes.length).padStart(2, "0")} entries</span></div>
          {notes.map((note, index) => (
            <Link key={note.slug} href={`/notes/${note.slug}`} prefetch={false} className="log-entry">
              <time className="meta" dateTime={note.date}>{note.date}</time>
              <div>
                <span className="meta text-[#d28fa9]">Entry {String(index + 1).padStart(2, "0")}</span>
                <h3 className="display-font">{note.title}</h3>
                <p>{note.summary}</p>
              </div>
              <span className="meta self-center">Read <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="end-screen anchor-section" tabIndex={-1}>
        <Image src={cinematicHorizon} alt="A coastal city glowing beneath a fading retro-futurist sunset" fill sizes="100vw" className="end-screen-image object-cover" />
        <div className="site-width end-screen-content">
          <div className="flex items-center gap-3"><span className="status-light" aria-hidden="true" /><p className="eyebrow text-[#70b8ae]">06 / Contact</p></div>
          <h2 className="display-font contact-title">Let’s make<br /><span className="text-[#e7775f]">something useful.</span></h2>
          <p className="mt-8 max-w-xl text-lg text-[#d2c9ba]">If you have a project in mind or simply want to talk about software, feel free to get in touch.</p>
          <div className="mt-10"><SocialLinks links={socialLinks} /></div>
        </div>
      </section>
    </div>
  );
}
