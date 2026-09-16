import type { SkillAccent } from "@/data/skills";
import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  stack: readonly string[];
  githubUrl: string;
  liveUrl?: string;
  status?: string;
  accent: SkillAccent;
};

export type Passion = {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export type SocialLink = {
  label: string;
  href: string;
  value: string;
};

export type NoteMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};
