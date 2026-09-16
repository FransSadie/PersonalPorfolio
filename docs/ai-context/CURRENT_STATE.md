# Current State

## Purpose

Frans Sadie's one-page personal portfolio combines a preserved cinematic hero with a retro software archive, a physical floppy-disk skills collection, personal interests, inline notes, and direct contact links.

## Architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4; static-first, with no API, database, authentication, or CMS.
- `/` is the only content page. Legacy section and detail URLs redirect to homepage fragments through `next.config.ts`.
- `app/page.tsx` composes seven section components. Content and decorative objects remain Server Components.
- `data/skills.ts` defines seven typed collections and 43 curated skills backed by the supplied resume and repository evidence. Data and backend collections follow languages. `FloppyDisk` renders every technology; native `details` expands collections without client state.
- Projects are curated from public GitHub README/source evidence in `data/projects.ts`. No GitHub requests run at build time or in visitors' browsers.
- Project order prioritizes data, full-stack, and integrations: Market Lens Research, Market Lens Price, PSYCHED, Halo, Trace.
- Below the preserved hero, a static retro gradient supports descriptive section copy. About is a text profile; the separate Experience & Education block was removed at the user's request. Skill collections use aligned rows with four-disk previews and native expansion. Outside Tech includes climbing and four existing hobbies in a centered responsive layout, with generated subject images optimized and lazy-loaded through next/image; provenance and prompts are recorded in `public/images/README.md`.
- Notes in `content/notes/*.mdx` render server-side inside native disclosures on the homepage.
- Two small client boundaries: `site-navigation.tsx` tracks active sections and mobile-menu dismissal; `page-effects.tsx` manages visible hero animation, one-time heading entrances, and note-fragment opening.
- No scroll listeners, requestAnimationFrame loops, animation library, fixed noise filter, or whole-section scroll timelines in application code.

## Important locations

- `app/layout.tsx`, `app/globals.css`: metadata, two font families, shared design tokens and responsive styling.
- `components/hero.tsx`: preserved horizon image, title composition, gradient overlays, and grid.
- `components/floppy-disk.tsx`, `components/skills-section.tsx`, `data/skills.ts`: reusable disk and grouped collection rendering.
- `components/project-media.tsx`, `data/projects.ts`: software sleeves and project content.
- `data/profile.ts`, `data/passions.ts`, `content/notes/`: editable personal content.
- `docs/ai-context/CONTENT_EVIDENCE.md`: GitHub and resume provenance, curation decisions, and claim limits.
- `docs/ai-context/PERFORMANCE.md`: profiling method, measurements, and QA limitations.

## Deployment and configuration

Existing Next.js/npm and Vercel architecture is retained. No dependencies were added or removed. `next.config.ts` now supplies permanent legacy URL redirects. The ignored local Vercel link points to `personalwebsite`. No application environment variables or CI workflow are introduced. The metadata base remains the existing Vercel URL.

## Constraints and risks

- `Frans_Sadie_Resume_v5.pdf` was supplied and reconciled on 2026-09-16. Skills and the short biography draw from the resume; detailed employment and education entries are no longer displayed. The PDF remains a local source, not a public download.
- Azure Pipelines is labeled basic experience; Tauri remains exploratory. TRACE's README reports an unfinished desktop scaffold. The selection deliberately omits some resume skills and incidental project dependencies.
- Climbing was explicitly requested as a hobby; coaching is excluded. Other interests and contact details come from existing local content. Generated images do not depict the owner's actual possessions or outings.
- Content updates require a build and deployment. GitHub status and URLs are a dated manual audit.
- MDX is trusted repository content; frontmatter is type-cast and note discovery uses synchronous filesystem reads.
- CSS and IntersectionObserver provide progressive enhancement. Verify keyboard navigation, disclosure expansion, fragment redirects, offscreen motion, and reduced-motion after interaction changes.
- Headless CPU-throttled profiling is not proof of performance on physical low-end phones. See PERFORMANCE.md.
