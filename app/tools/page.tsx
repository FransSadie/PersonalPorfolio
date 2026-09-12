import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { toolGroups } from "@/data/profile";

export const metadata: Metadata = { title: "Tools", description: "Tools and technologies Frans uses." };
export default function ToolsPage() { return <div className="page-stack"><SectionHeader index="03 / Tools" title="What I work with." description="The tools I currently use across web, data, mobile, and desktop projects." /><section className="grid gap-12 border-t border-white/15 pt-8 md:grid-cols-2">{toolGroups.map((group) => <div key={group.label}><h2 className="display-font text-4xl">{group.label}</h2><div className="tag-list mt-5">{group.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}</div></div>)}</section></div>; }
