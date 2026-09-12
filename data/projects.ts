import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "halo",
    name: "Halo",
    category: "Accessible safety",
    role: "Product design & full-stack engineering",
    description:
      "A mobile-first safety app that helps older adults check suspicious messages and contact someone they trust before responding.",
    stack: ["React", "TypeScript", "Capacitor", "Supabase"],
    githubUrl: "https://github.com/FransSadie/Halo",
    status: "Active",
    year: "2026",
    story:
      "I started Halo to give older adults a simple way to pause when a message feels suspicious. The mobile flow explains the warning signs and makes it easy to contact a trusted person.",
    lessons: [
      "Safety advice works better when the language is calm and the next step is clear.",
      "Simple rules make each risk warning easier to explain.",
      "Keeping the first version local made it useful without a complicated setup.",
    ],
    insight:
      "Halo uses clear risk checks, accessible controls, local storage, and OCR to help review message screenshots. The structure also leaves room for native safety features later.",
    featured: true,
  },
  {
    slug: "market-lens-research",
    name: "Market Lens Research",
    category: "Market research",
    role: "Product design & full-stack engineering",
    description:
      "A research dashboard for comparing price movement, sector leadership, relative strength, and possible setups across equities and ETFs.",
    stack: ["Python", "FastAPI", "React", "SQLAlchemy"],
    githubUrl: "https://github.com/FransSadie/market-lens-research",
    status: "Active",
    year: "2026",
    story:
      "I built Market Lens to make daily market research more manageable. It brings the main signals into one place so I can see what is leading, what is weakening, and what may be worth a closer look.",
    lessons: [
      "A research tool should support judgment, not pretend to know the answer.",
      "Rankings and short summaries make dense market data easier to scan.",
      "Every metric needs a clear reason for being on the screen.",
    ],
    insight:
      "The dashboard turns returns, volatility, trends, and benchmark comparisons into rankings and scans for a hands-on research process.",
    featured: true,
  },
  {
    slug: "psyched",
    name: "PSYCHED",
    category: "Private local AI",
    role: "Product design & full-stack engineering",
    description:
      "A private journaling and performance-coaching app that turns daily entries and self-ratings into structured feedback.",
    stack: ["Next.js", "PostgreSQL", "Ollama", "Zod"],
    githubUrl: "https://github.com/FransSadie/psyched",
    status: "Experimental",
    year: "2026",
    story:
      "PSYCHED is my attempt to make AI-assisted reflection more private. It runs a local model, so personal journal entries do not need to be sent to a hosted AI service.",
    lessons: [
      "Model output needs validation before it is shown or saved.",
      "Safety checks should not depend on the chosen coaching style.",
      "Privacy should be clear to the person using the product.",
    ],
    insight:
      "The local AI pipeline checks structured output, retries invalid responses, and applies safety rules before saving any coaching feedback.",
    featured: true,
  },
  {
    slug: "trace",
    name: "Trace",
    category: "Knowledge tools",
    role: "Desktop product engineering",
    description:
      "A local desktop knowledge base for engineers, using Markdown for notes and SQLite for metadata and search.",
    stack: ["Tauri", "React", "Rust", "SQLite"],
    githubUrl: "https://github.com/FransSadie/TRACE",
    status: "WIP",
    year: "2026",
    story:
      "I built Trace because I wanted engineering notes to stay easy to move and keep. Markdown holds the actual notes, while the desktop app adds navigation, indexing, and writing tools.",
    lessons: [
      "Plain files are a dependable base for a personal knowledge system.",
      "Starting with one complete desktop flow kept the architecture manageable.",
      "The interface should not get in the way of writing.",
    ],
    insight:
      "The app keeps notes portable while adding support for vaults, wiki links, backlinks, indexing, and daily writing.",
  },
  {
    slug: "infinite-harmony-booking",
    name: "Infinite Harmony Booking",
    category: "Booking experience",
    role: "UX design & frontend engineering",
    description:
      "A booking-request demo for a wellness business, with a public form, confirmation screen, and simple browser-based admin view.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Radix UI"],
    githubUrl: "https://github.com/FransSadie/Booking-Demo1",
    status: "Experimental",
    year: "2026",
    story:
      "This demo follows a real wellness booking process from the customer form through to confirmation and a lightweight admin view.",
    lessons: [
      "Customers need to know whether they have requested or confirmed a booking.",
      "A clear mobile flow mattered more than a complex dashboard.",
      "A small working demo helped uncover production needs early.",
    ],
    insight:
      "The mobile-friendly flow clearly separates booking requests from confirmed appointments.",
  },
  {
    slug: "market-lens-price",
    name: "Market Lens Price Model",
    category: "Machine learning",
    role: "Data & product engineering",
    description:
      "A price-based market modelling pipeline with data ingestion, feature engineering, LightGBM training, benchmark comparisons, and an operator dashboard.",
    stack: ["Python", "LightGBM", "FastAPI", "React"],
    githubUrl: "https://github.com/FransSadie/Market-lens-price",
    status: "Experimental",
    year: "2026",
    story:
      "This branch of Market Lens is where I test price features and compare models. Each run is recorded so one good result is not mistaken for a final answer.",
    lessons: [
      "A model only means much when it is compared with a useful benchmark.",
      "Keeping a run history makes experiments easier to review.",
      "The tools around a model are part of the product too.",
    ],
    insight:
      "The project tracks model versions, trials, thresholds, feature importance, and strategy diagnostics rather than relying on one accuracy score.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
