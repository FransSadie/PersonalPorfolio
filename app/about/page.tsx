import type { Metadata } from "next";
import { CyberPanel } from "@/components/cyber-panel";
import { SectionHeader } from "@/components/section-header";
import { engineeringValues, learningFocus } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "About Frans, his engineering approach, and what he is learning.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 py-8">
      <SectionHeader
        index="02 / About"
        title="Technical work, personal intent"
        eyebrow="Professional profile"
        description="I care about software that is useful, legible, and emotionally considered. The details matter because they shape how trustworthy a product feels in practice."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <CyberPanel label="Intro">
          <div className="content-copy space-y-4">
            <p>
              I am Frans Sadie, a software engineer focused on building thoughtful
              digital products. I enjoy technical systems, but I care just as
              much about the interface layer that helps people understand and
              trust those systems.
            </p>
            <p>
              My best work usually sits at the intersection of engineering,
              product thinking, and writing. I like shaping software that feels
              deliberate rather than merely functional.
            </p>
          </div>
        </CyberPanel>

        <CyberPanel label="Human side">
          <div className="content-copy space-y-4">
            <p>
              Outside of shipping software, I spend time reading, training,
              collecting references, and paying attention to the design language
              of music, games, and cities.
            </p>
            <p>
              Those interests feed back into my engineering work by making me
              more sensitive to rhythm, density, atmosphere, and clarity.
            </p>
          </div>
        </CyberPanel>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <CyberPanel label="What I value in software">
          <div className="space-y-4">
            {engineeringValues.map((value, index) => (
              <div
                key={value}
                className="rounded-2xl border border-white/8 bg-white/5 p-4"
              >
                <p className="eyebrow text-[10px] text-cyan">Value 0{index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </CyberPanel>

        <CyberPanel label="What I am learning">
          <div className="space-y-4">
            {learningFocus.map((focus, index) => (
              <div
                key={focus}
                className="rounded-2xl border border-white/8 bg-white/5 p-4"
              >
                <p className="eyebrow text-[10px] text-magenta">Focus 0{index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </CyberPanel>
      </div>
    </div>
  );
}
