import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    value: "@FransSadie",
    href: "https://github.com/FransSadie",
  },
  {
    label: "LinkedIn",
    value: "Frans Sadie",
    href: "https://www.linkedin.com/in/frans-sadie-968318428/",
  },
  {
    label: "Email",
    value: "sadiefransjr1@hotmail.com",
    href: "mailto:sadiefransjr1@hotmail.com",
  },
];

export const currentSignals = [
  "Building simple safety tools for older adults",
  "Making market data easier to research and compare",
  "Learning how private, local AI can support reflection",
];

export const engineeringValues = [
  "I would rather write clear code than clever code.",
  "An interface should make the next step easier to understand.",
  "Reliable software earns trust over time.",
];

export const learningFocus = [
  "Accessible interfaces for important decisions",
  "Reliable output and safety checks for local AI",
  "Research tools that show where their results come from",
];

export const toolGroups = [
  {
    label: "Web",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Data & AI",
    tools: ["Python", "FastAPI", "PostgreSQL", "LightGBM", "Ollama"],
  },
  {
    label: "Mobile & Desktop",
    tools: ["Capacitor", "Tauri", "Rust", "SQLite"],
  },
  {
    label: "Workflow",
    tools: ["GitHub", "Vercel", "Supabase", "Vitest"],
  },
];
