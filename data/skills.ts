export type SkillAccent = "coral" | "teal" | "amber" | "magenta" | "cream";

export type Skill = {
  name: string;
  category: string;
  serial?: string;
  accent?: SkillAccent;
  /** Auditable content provenance; this component does not hydrate. */
  sources: readonly string[];
};

export type SkillCollection = {
  id: string;
  name: string;
  description: string;
  accent: SkillAccent;
  skills: readonly Skill[];
};

const repo = "https://github.com/FransSadie";
const sources = {
  resume: "Frans_Sadie_Resume_v5.pdf#page=1",
  resumeProjects: "Frans_Sadie_Resume_v5.pdf#page=2",
  portfolio: `${repo}/PersonalPorfolio/blob/main/package.json`,
  profile: `${repo}/FransSadie/blob/main/README.md`,
  halo: `${repo}/Halo/blob/Main/apps/mobile/package.json`,
  haloSchema: `${repo}/Halo/blob/Main/supabase/schema.sql`,
  trace: `${repo}/TRACE/blob/Main/package.json`,
  rust: `${repo}/TRACE/blob/Main/src-tauri/Cargo.toml`,
  traceReadme: `${repo}/TRACE/blob/Main/README.md`,
  psyched: `${repo}/psyched/blob/main/package.json`,
  psychedReadme: `${repo}/psyched/blob/main/README.md`,
  research: `${repo}/market-lens-research/blob/main/requirements.txt`,
  researchUI: `${repo}/market-lens-research/blob/main/frontend/package.json`,
  researchReadme: `${repo}/market-lens-research/blob/main/README.md`,
  model: `${repo}/Market-lens-price/blob/main/app/models/train_baseline.py`,
};

// GitHub audited 2026-09-12; curated against the supplied resume on 2026-09-16.
// Serials are collection references, never versions or proficiency scores.
const collections: readonly SkillCollection[] = [
  {
    id: "languages", description: "The foundations for application code, queries, and the web.", name: "Languages", accent: "coral",
    skills: [
      { name: "Python", category: "Language", sources: [sources.resume, sources.model] },
      { name: "TypeScript", category: "Language", sources: [sources.resume, sources.portfolio] },
      { name: "SQL", category: "Query language", sources: [sources.resume, sources.haloSchema] },
      { name: "JavaScript", category: "Language", sources: [sources.resume, sources.researchUI] },
      { name: "C#", category: "Language", sources: [sources.resume, sources.resumeProjects] },
      { name: "HTML", category: "Markup", sources: ["app/page.tsx"] },
      { name: "CSS", category: "Stylesheets", sources: ["app/globals.css"] },
    ],
  },
  {
    id: "data", description: "Relational databases, data analysis, visualization, and model experiments.", name: "Data", accent: "teal",
    skills: [
      { name: "PostgreSQL", category: "Database", sources: [sources.resume, sources.psychedReadme] },
      { name: "pandas", category: "Data analysis", sources: [sources.resume, sources.model] },
      { name: "NumPy", category: "Numerical computing", sources: [sources.resume, sources.model] },
      { name: "scikit-learn", category: "Machine learning", sources: [sources.model] },
      { name: "MySQL", category: "Database", sources: [sources.resume, sources.resumeProjects] },
      { name: "SQLite", category: "Embedded database", sources: [sources.resume, sources.rust] },
      { name: "Matplotlib", category: "Visualization", sources: [sources.resume] },
      { name: "LightGBM", category: "Machine learning", accent: "amber", sources: [sources.model] },
      { name: "Supabase", category: "Data platform", sources: [sources.halo] },
    ],
  },
  {
    id: "backend", description: "APIs, business logic, integrations, and local AI services.", name: "Backend", accent: "amber",
    skills: [
      { name: "REST APIs", category: "Integrations", sources: [sources.resume, sources.researchReadme] },
      { name: "Node.js", category: "Runtime", sources: [sources.resume, sources.resumeProjects] },
      { name: "Express", category: "API framework", sources: [sources.resume, sources.resumeProjects] },
      { name: "FastAPI", category: "API framework", sources: [sources.research] },
      { name: "Django", category: "Web framework", sources: [sources.resume] },
      { name: "SQLAlchemy", category: "ORM", sources: [sources.research] },
      { name: "Ollama", category: "Local AI", accent: "magenta", sources: [sources.psychedReadme] },
    ],
  },
  {
    id: "frontend", description: "Application interfaces and responsive web experiences.", name: "Frontend", accent: "teal",
    skills: [
      { name: "React", category: "UI library", sources: [sources.resume, sources.halo] },
      { name: "Next.js", category: "Web framework", sources: [sources.portfolio] },
      { name: "Angular", category: "Web framework", sources: [sources.resume] },
      { name: "Tailwind CSS", category: "Styling", sources: [sources.portfolio] },
    ],
  },
  {
    id: "devops", description: "Linux environments, containers, source control, and deployment.", name: "DevOps", accent: "coral",
    skills: [
      { name: "Docker", category: "Containers", sources: [sources.resume] },
      { name: "Linux", category: "Systems", sources: [sources.resume] },
      { name: "Azure", category: "Cloud platform", sources: [sources.resume, sources.resumeProjects] },
      { name: "Git", category: "Version control", sources: [sources.resume, sources.profile] },
      { name: "GitHub", category: "Source hosting", sources: [sources.resume, sources.profile] },
      { name: "Vercel", category: "Deployment", sources: [sources.psychedReadme, "docs/ai-context/DEPLOYMENT.md"] },
      { name: "Azure Pipelines", category: "CI/CD basics", sources: [sources.resume] },
      { name: "Raspberry Pi", category: "Linux setup", sources: [sources.resume] },
      { name: "Virtual machines", category: "Environments", sources: [sources.resume] },
    ],
  },
  {
    id: "mobile", description: "Web-based applications packaged for phones and desktops.", name: "Mobile & desktop", accent: "magenta",
    skills: [
      { name: "Capacitor", category: "Mobile", sources: [sources.halo] },
      { name: "Tauri", category: "Desktop · exploring", sources: [sources.trace, sources.traceReadme] },
    ],
  },
  {
    id: "tools", description: "Notebooks, API testing, interface design, and development tooling.", name: "Tools", accent: "cream",
    skills: [
      { name: "Jupyter", category: "Notebooks", sources: [sources.resume] },
      { name: "Postman", category: "API testing", sources: [sources.resume] },
      { name: "Figma", category: "UI/UX design", sources: [sources.resume] },
      { name: "Vite", category: "Build tooling", sources: [sources.halo] },
      { name: "Vitest", category: "Testing", sources: [sources.trace] },
    ],
  },
];

// Display references only, not versions or proficiency ratings.
export const skillCollections: readonly SkillCollection[] = collections.map((collection) => ({
  ...collection,
  skills: collection.skills.map((skill, index) => ({ ...skill, serial: skill.serial ?? `${collection.id.slice(0, 4).toUpperCase()}-${String(index + 1).padStart(2, "0")}` })),
}));

export const skillCount = skillCollections.reduce((total, group) => total + group.skills.length, 0);
