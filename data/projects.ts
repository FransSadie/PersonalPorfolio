import type { Project } from "@/types/content";

// Public repositories reviewed on 2026-09-12. Status describes the documented
// implementation, not an inference about ongoing maintenance or production use.
export const projects: readonly Project[] = [
  {
    slug: "market-lens-research", name: "Market Lens Research", category: "Data & full-stack", status: "Research tool", accent: "amber",
    description: "A full-stack research dashboard that brings market data ingestion, analytics, rankings, and scans into one workflow. Built to explore sector leadership, relative strength, and potential setups across equities and ETFs.",
    stack: ["Python", "FastAPI", "React", "SQLAlchemy"],
    githubUrl: "https://github.com/FransSadie/market-lens-research",
    detail: "Price ingestion feeds analytics snapshots, rankings, and scans. The current repository focuses on supporting human research, with its old prediction stack removed.",
  },
  {
    slug: "market-lens-price", name: "Market Lens / Price", category: "Data & machine learning", status: "Experiment", accent: "teal",
    description: "A price-based modeling pipeline covering feature engineering, LightGBM experiments, and benchmark comparisons. An operator dashboard tracks training runs, feature importance, and model history.",
    stack: ["Python", "LightGBM", "scikit-learn", "FastAPI"],
    githubUrl: "https://github.com/FransSadie/Market-lens-price",
    detail: "Records model history, candidate trials, threshold sweeps, and feature importance. A logistic-regression benchmark provides a reference for each training run.",
  },
  {
    slug: "psyched", name: "PSYCHED", category: "Full-stack & AI integration", status: "Prototype", accent: "magenta",
    description: "A journaling application that connects locally running language models with validated responses and PostgreSQL storage. Daily reflections become structured feedback, with safety rules applied before responses are saved.",
    stack: ["Next.js", "PostgreSQL", "Ollama", "Zod"],
    githubUrl: "https://github.com/FransSadie/psyched",
    detail: "The pipeline validates model output and applies safety rules before saving a response. Journal history and settings sit alongside the local AI workflow.",
  },
  {
    slug: "halo", name: "Halo", category: "Web & mobile", status: "MVP", accent: "coral",
    description: "A mobile-first scam-safety prototype that helps older adults check suspicious messages and contact someone they trust. The interface pairs accessible controls with a readable, rules-based risk evaluation.",
    stack: ["React", "TypeScript", "Capacitor", "Supabase"],
    githubUrl: "https://github.com/FransSadie/Halo",
    detail: "Accessible controls and a transparent, rules-first evaluator. Local storage works without cloud configuration; native safety extensions remain future work.",
  },
  {
    slug: "trace", name: "Trace", category: "Desktop tools", status: "Scaffold", accent: "teal",
    description: "A desktop knowledge-base experiment that stores notes as Markdown and adds metadata and search through SQLite. It combines a web editor with a Tauri desktop scaffold.",
    stack: ["Tauri", "React", "Rust", "SQLite"],
    githubUrl: "https://github.com/FransSadie/TRACE",
    detail: "A runnable web editor with a three-pane workspace and tested parsing helpers. The Rust desktop layer is scaffolded; its build is not verified in the repository README.",
  },
];
