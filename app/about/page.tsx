import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { currentSignals, engineeringValues, learningFocus } from "@/data/profile";

export const metadata: Metadata = { title: "About", description: "About Frans Sadie and how he approaches software." };

export default function AboutPage() {
  return (
    <div className="page-stack">
      <SectionHeader index="01 / About" title="Same curious mind. Bigger questions." description="I care about software that is useful, understandable, and built with respect for the person using it." />
      <section className="section-grid">
        <p className="eyebrow">A little context</p>
        <div className="editorial-copy max-w-3xl">
          <p>I’m Frans, a software engineer and builder based in South Africa. I work across web, desktop, mobile, data, and local AI—usually wherever a problem needs both technical depth and a clear product point of view.</p>
          <p>I’m especially interested in tools that reduce ambiguity: safer decisions, clearer research, private reflection, and knowledge that stays portable.</p>
          <p>Outside software, books, music, training, games, and travel shape how I notice rhythm, systems, and detail.</p>
        </div>
      </section>
      <section className="grid gap-12 border-t border-white/15 pt-8 md:grid-cols-3">
        {[["Currently", currentSignals], ["Principles", engineeringValues], ["Learning", learningFocus]].map(([title, items]) => (
          <div key={title as string}><h2 className="display-font text-4xl">{title as string}</h2><ul className="mt-6 space-y-4 text-[#aaa399]">{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></div>
        ))}
      </section>
    </div>
  );
}
