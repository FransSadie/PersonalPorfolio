import type { Metadata } from "next";
import { PassionCard } from "@/components/passion-card";
import { SectionHeader } from "@/components/section-header";
import { passions } from "@/data/passions";

export const metadata: Metadata = {
  title: "Passions",
  description: "The non-technical archive behind Frans's software work.",
};

export default function PassionsPage() {
  return (
    <div className="space-y-10 py-8">
      <SectionHeader
        index="03 / Passions"
        title="A curated archive outside of tech"
        eyebrow="What shapes the work"
        description="This page is for the interests that change how I think, notice, and build. It is meant to feel closer to a personal archive than a resume add-on."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {passions.map((passion) => (
          <PassionCard key={passion.slug} passion={passion} />
        ))}
      </div>
    </div>
  );
}
