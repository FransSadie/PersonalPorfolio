import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "halo",
    name: "Halo",
    description:
      "A mobile-first scam-safety MVP that helps older adults pause, assess suspicious messages, and contact trusted people before acting.",
    stack: ["React", "TypeScript", "Capacitor", "Supabase"],
    githubUrl: "https://github.com/FransSadie/Halo",
    status: "Active",
    insight:
      "The product combines transparent, rules-first risk checks with accessible controls, local-first storage, OCR-assisted review, and an upgrade path to native safety features.",
    featured: true,
  },
  {
    slug: "market-lens-research",
    name: "Market Lens Research",
    description:
      "A market-research desk for exploring price action, sector leadership, relative strength, and trade setups across equities and ETFs.",
    stack: ["Python", "FastAPI", "React", "SQLAlchemy"],
    githubUrl: "https://github.com/FransSadie/market-lens-research",
    status: "Active",
    insight:
      "It turns multi-horizon returns, volatility, trend, and benchmark-relative data into rankings and scans that support a human research workflow.",
    featured: true,
  },
  {
    slug: "psyched",
    name: "PSYCHED",
    description:
      "A private journaling and mental-performance coach that turns daily entries and self-ratings into structured analysis and practical feedback.",
    stack: ["Next.js", "PostgreSQL", "Ollama", "Zod"],
    githubUrl: "https://github.com/FransSadie/psyched",
    status: "Experimental",
    insight:
      "Its multi-stage local-AI pipeline validates structured output, retries malformed responses, and applies safety rules before any coaching response is saved.",
    featured: true,
  },
  {
    slug: "trace",
    name: "Trace",
    description:
      "A local-first desktop knowledge base for engineers, with Markdown as the canonical note format and SQLite for metadata and search.",
    stack: ["Tauri", "React", "Rust", "SQLite"],
    githubUrl: "https://github.com/FransSadie/TRACE",
    status: "WIP",
    insight:
      "The architecture keeps notes portable while preparing a focused desktop workflow for vaults, wiki links, backlinks, indexing, and daily writing.",
  },
  {
    slug: "infinite-harmony-booking",
    name: "Infinite Harmony Booking",
    description:
      "A polished booking-request demo for a wellness business, including a public flow, confirmation screen, and browser-based admin dashboard.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Radix UI"],
    githubUrl: "https://github.com/FransSadie/Booking-Demo1",
    status: "Experimental",
    insight:
      "The demo presents a realistic, mobile-friendly client journey while clearly separating booking requests from confirmed appointments.",
  },
  {
    slug: "market-lens-price",
    name: "Market Lens Price Model",
    description:
      "A price-only market-modeling pipeline with ingestion, feature engineering, LightGBM training, benchmark comparison, and an operator dashboard.",
    stack: ["Python", "LightGBM", "FastAPI", "React"],
    githubUrl: "https://github.com/FransSadie/Market-lens-price",
    status: "Experimental",
    insight:
      "The project tracks model versions, candidate trials, thresholds, feature importance, and strategy diagnostics instead of presenting a single accuracy score in isolation.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
