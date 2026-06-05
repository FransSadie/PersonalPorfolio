import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "signal-workbench",
    name: "Signal Workbench",
    description:
      "A monitoring workspace for tracing service health, release drift, and operational noise across small product teams.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    githubUrl: "https://github.com/frans/signal-workbench",
    liveUrl: "https://signal-workbench.example",
    status: "Active",
    insight:
      "Built to explore how calm UI patterns can make technical systems easier to reason about under pressure.",
    featured: true,
  },
  {
    slug: "vector-lab",
    name: "Vector Lab",
    description:
      "An experimental interface for testing retrieval quality, prompt iteration, and semantic search workflows.",
    stack: ["React", "Node.js", "PostgreSQL", "OpenAI"],
    githubUrl: "https://github.com/frans/vector-lab",
    status: "Experimental",
    insight:
      "This project taught me where the product boundary really is when the model behavior is only one part of the system.",
    featured: true,
  },
  {
    slug: "northstar-journal",
    name: "Northstar Journal",
    description:
      "A writing-oriented product concept focused on durable personal knowledge, drafts, and review rituals.",
    stack: ["Next.js", "MDX", "Supabase"],
    githubUrl: "https://github.com/frans/northstar-journal",
    liveUrl: "https://northstar-journal.example",
    status: "WIP",
    insight:
      "I wanted to test how much a note-taking workflow changes when the interface is designed around reflection instead of capture.",
    featured: true,
  },
  {
    slug: "archive-terminal",
    name: "Archive Terminal",
    description:
      "A small archive browser for curating references, screenshots, and article fragments into reusable collections.",
    stack: ["Vue", "Firebase", "Cloud Functions"],
    githubUrl: "https://github.com/frans/archive-terminal",
    status: "Archived",
    insight:
      "Even shelved work is useful when it leaves behind better instincts about information density and interaction cost.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
