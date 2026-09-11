import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "halo",
    name: "Halo",
    category: "Accessible safety",
    role: "Product design & full-stack engineering",
    description:
      "A mobile-first scam-safety MVP that helps older adults pause, assess suspicious messages, and contact trusted people before acting.",
    stack: ["React", "TypeScript", "Capacitor", "Supabase"],
    githubUrl: "https://github.com/FransSadie/Halo",
    status: "Active",
    year: "2026",
    story:
      "Halo began as a practical question: how can a safety tool help someone slow down without making them feel powerless? The result is a calm, mobile-first flow built around understandable checks and trusted contacts.",
    lessons: [
      "High-stakes interfaces need calm language and obvious next actions.",
      "Rules-first evaluation makes risk decisions easier to explain.",
      "Local-first defaults keep an MVP useful before cloud setup.",
    ],
    insight:
      "The product combines transparent, rules-first risk checks with accessible controls, local-first storage, OCR-assisted review, and an upgrade path to native safety features.",
    featured: true,
  },
  {
    slug: "market-lens-research",
    name: "Market Lens Research",
    category: "Market research",
    role: "Product design & full-stack engineering",
    description:
      "A market-research desk for exploring price action, sector leadership, relative strength, and trade setups across equities and ETFs.",
    stack: ["Python", "FastAPI", "React", "SQLAlchemy"],
    githubUrl: "https://github.com/FransSadie/market-lens-research",
    status: "Active",
    year: "2026",
    story:
      "Market Lens Research turns a broad stream of market data into a focused daily research desk. It is designed for exploration: what is leading, what is weakening, and which setups deserve a closer look.",
    lessons: [
      "Research tools should support judgment rather than imitate certainty.",
      "Rankings and summaries make dense data easier to navigate.",
      "A clear product question keeps analytics work from becoming noise.",
    ],
    insight:
      "It turns multi-horizon returns, volatility, trend, and benchmark-relative data into rankings and scans that support a human research workflow.",
    featured: true,
  },
  {
    slug: "psyched",
    name: "PSYCHED",
    category: "Private local AI",
    role: "Product design & full-stack engineering",
    description:
      "A private journaling and mental-performance coach that turns daily entries and self-ratings into structured analysis and practical feedback.",
    stack: ["Next.js", "PostgreSQL", "Ollama", "Zod"],
    githubUrl: "https://github.com/FransSadie/psyched",
    status: "Experimental",
    year: "2026",
    story:
      "PSYCHED explores whether a private local model can turn daily reflection into useful, structured coaching without sending personal writing to a hosted AI service.",
    lessons: [
      "Structured model output must be validated before it reaches users.",
      "Safety rules should be independent from the requested coaching tone.",
      "Privacy can be part of the product experience, not only infrastructure.",
    ],
    insight:
      "Its multi-stage local-AI pipeline validates structured output, retries malformed responses, and applies safety rules before any coaching response is saved.",
    featured: true,
  },
  {
    slug: "trace",
    name: "Trace",
    category: "Knowledge tools",
    role: "Desktop product engineering",
    description:
      "A local-first desktop knowledge base for engineers, with Markdown as the canonical note format and SQLite for metadata and search.",
    stack: ["Tauri", "React", "Rust", "SQLite"],
    githubUrl: "https://github.com/FransSadie/TRACE",
    status: "WIP",
    year: "2026",
    story:
      "Trace is an experiment in keeping engineering notes portable and durable. Markdown remains the source of truth while the desktop layer adds navigation, indexing, and focused writing tools.",
    lessons: [
      "Plain files are a strong foundation for personal knowledge systems.",
      "Desktop architecture benefits from a narrow vertical slice first.",
      "The interface should stay out of the way of writing.",
    ],
    insight:
      "The architecture keeps notes portable while preparing a focused desktop workflow for vaults, wiki links, backlinks, indexing, and daily writing.",
  },
  {
    slug: "infinite-harmony-booking",
    name: "Infinite Harmony Booking",
    category: "Booking experience",
    role: "UX design & frontend engineering",
    description:
      "A polished booking-request demo for a wellness business, including a public flow, confirmation screen, and browser-based admin dashboard.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Radix UI"],
    githubUrl: "https://github.com/FransSadie/Booking-Demo1",
    status: "Experimental",
    year: "2026",
    story:
      "This demo translates a real wellness-business workflow into a clear booking request journey, from the public form to confirmation and a lightweight admin view.",
    lessons: [
      "Service businesses need precise expectations around confirmation.",
      "Mobile clarity matters more than dashboard complexity.",
      "A focused demo can expose the right production requirements early.",
    ],
    insight:
      "The demo presents a realistic, mobile-friendly client journey while clearly separating booking requests from confirmed appointments.",
  },
  {
    slug: "market-lens-price",
    name: "Market Lens Price Model",
    category: "Machine learning",
    role: "Data & product engineering",
    description:
      "A price-only market-modeling pipeline with ingestion, feature engineering, LightGBM training, benchmark comparison, and an operator dashboard.",
    stack: ["Python", "LightGBM", "FastAPI", "React"],
    githubUrl: "https://github.com/FransSadie/Market-lens-price",
    status: "Experimental",
    year: "2026",
    story:
      "The price-model branch of Market Lens is a laboratory for feature engineering and honest model comparison, with every run recorded instead of presenting one result as final.",
    lessons: [
      "Benchmarks matter more than impressive-looking isolated metrics.",
      "Model history makes experimentation accountable.",
      "Operational tooling is part of the machine-learning product.",
    ],
    insight:
      "The project tracks model versions, candidate trials, thresholds, feature importance, and strategy diagnostics instead of presenting a single accuracy score in isolation.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
