import type { Metadata } from "next";
import { PassionCard } from "@/components/passion-card";
import { SectionHeader } from "@/components/section-header";
import { passions } from "@/data/passions";

export const metadata: Metadata = { title: "Outside Tech", description: "The interests that shape Frans Sadie's work." };
export default function PassionsPage() { return <div className="page-stack"><SectionHeader index="03 / Outside Tech" title="A life beyond the screen." description="The interests and habits that quietly influence how I work." /><section className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">{passions.map((passion, index) => <PassionCard key={passion.slug} passion={passion} index={index} />)}</section></div>; }
