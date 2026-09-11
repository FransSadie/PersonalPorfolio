export type ProjectStatus = "Active" | "Experimental" | "Archived" | "WIP";

export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: ProjectStatus;
  insight: string;
  year: string;
  story: string;
  lessons: string[];
  featured?: boolean;
};

export type Passion = {
  slug: string;
  title: string;
  category: string;
  description: string;
  metadata?: string;
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
