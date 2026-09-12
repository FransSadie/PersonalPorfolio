import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { currentSignals, engineeringValues, learningFocus } from "@/data/profile";

export const metadata: Metadata = { title: "About", description: "About Frans Sadie and how he approaches software." };

export default function AboutPage() {
  return (
    <div className="page-stack">
      <SectionHeader index="01 / About" title="Hello, I’m Frans." description="I’m a software engineer who enjoys making useful products feel clear and easy to use." />
      <section className="section-grid">
        <p className="eyebrow">A little context</p>
        <div className="editorial-copy max-w-3xl">
          <p>I’m a software engineer based in South Africa. I work across web, desktop, mobile, data, and local AI, depending on what a project needs.</p>
          <p>I’m most interested in tools that help people make safer decisions, understand complex information, or keep control of their own data.</p>
          <p>When I’m away from the screen, I spend time reading, listening to music, training, playing games, and travelling.</p>
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
