# Current State

## Purpose

Frans Sadie's one-page personal portfolio combines a preserved cinematic hero with a retro software archive, a physical floppy-disk skills collection, personal interests and direct contact links.

## Architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4; static-first, with no API, database, authentication, or CMS.
- `/` is the only content page. Legacy section and detail URLs redirect to homepage fragments through `next.config.ts`.
- `app/page.tsx` composes six section components. Content and decorative objects remain Server Components.
- `data/skills.ts` defines seven typed collections and 43 curated skills backed by the supplied resume and repository evidence. Data and backend collections follow languages. `FloppyDisk` renders every technology; native `details` expands collections without client state.
- Projects are curated from public GitHub README/source evidence in `data/projects.ts`. No GitHub requests run at build time or in visitors' browsers.
- Project order prioritizes data, full-stack, and integrations: Market Lens Research, Market Lens Price, PSYCHED, Halo, Trace.
- Below the preserved hero, a static retro gradient supports descriptive section copy. About is a text profile; the separate Experience & Education block was removed at the user's request. Skill collections use aligned rows with four-disk previews and native expansion. Outside Tech includes climbing and four existing hobbies in a centered responsive layout, with generated subject images optimized and lazy-loaded through next/image; provenance and prompts are recorded in `public/images/README.md`.
- Notes have been removed from the homepage and navigation. Legacy `/notes` and `/notes/*` URLs redirect to `/`. Old MDX sources and their renderer are retained as unused archive files.
- Two small client boundaries: `site-navigation.tsx` tracks active sections and mobile-menu dismissal; `page-effects.tsx` queues one-time entrances for every project, skill collection, hobby image, and section heading, with at most two reveal groups active. The hero artwork is static to eliminate continuous drift work.
- No scroll listeners, requestAnimationFrame loops, animation library, fixed noise filter, or whole-section scroll timelines in application code.

## Important locations

- `app/layout.tsx`, `app/globals.css`: metadata, two font families, shared design tokens and responsive styling.
- `components/hero.tsx`: preserved horizon image, title composition, gradient overlays, and grid.
- `components/floppy-disk.tsx`, `components/skills-section.tsx`, `data/skills.ts`: reusable disk and grouped collection rendering.
- `components/project-media.tsx`, `data/projects.ts`: software sleeves and project content.
- `data/profile.ts`, `data/passions.ts`: editable personal content.
- `docs/ai-context/CONTENT_EVIDENCE.md`: GitHub and resume provenance, curation decisions, and claim limits.
- `docs/ai-context/PERFORMANCE.md`: profiling method, measurements, and QA limitations.

## Deployment and configuration

Existing Next.js/npm and Vercel architecture is retained. No dependencies were added or removed. `next.config.ts` now supplies permanent legacy URL redirects. The ignored local Vercel link points to `personalwebsite`. No application environment variables or CI workflow are introduced. The metadata base remains the existing Vercel URL.

## Constraints and risks

- `Frans_Sadie_Resume_v5.pdf` was supplied and reconciled on 2026-09-16. Skills and the short biography draw from the resume; detailed employment and education entries are no longer displayed. The PDF remains a local source, not a public download.
- Azure Pipelines is labeled basic experience; Tauri remains exploratory. TRACE's README reports an unfinished desktop scaffold. The selection deliberately omits some resume skills and incidental project dependencies.
- Climbing was explicitly requested as a hobby; coaching is excluded. Other interests and contact details come from existing local content. Generated images do not depict the owner's actual possessions or outings.
- Content updates require a build and deployment. GitHub status and URLs are a dated manual audit.
- Archived MDX code is no longer imported by the homepage; existing dependencies are retained.
- CSS and IntersectionObserver provide progressive enhancement. Verify keyboard navigation, disclosure expansion, fragment redirects, offscreen motion, and reduced-motion after interaction changes.
- Headless CPU-throttled profiling is not proof of performance on physical low-end phones. See PERFORMANCE.md.

## Targeted polish after rollback, 2026-09-17

Restored the exact pre-refinement state from commit `5845ead` before making the targeted changes. The original hero image, typography, buttons, cream About profile, content, and section order remain. Hero content moves only 36px inward on desktop, with a small vertical spacing adjustment. Navigation uses numbered segmented tabs and a filled active state. A brief hero-text entrance and one-time object reveals use transform/opacity. Every project, skill collection, and hobby image can reveal as it enters view; at most two groups animate concurrently and classes/compositing hints are released after one second. Expanding skills triggers a short shelf entrance. Live reduced-motion changes clear active reveals. Native disclosures and the single FloppyDisk renderer remain. Skill display references are derived from the existing collection data. Body text stays selectable; no editable-text wrapper or site caret configuration was found.

## Interaction pass, 2026-09-17

Preserves the current design and content. Separate hero-name entrances, an animated navigation marker, project sleeve reflections, floppy/photograph hover feedback, press states, and native disclosure entrances supplement section reveals. Tiny hero/contact indicators animate only while visible and the tab is active. A two-pixel native CSS scroll-progress line is progressively enhanced in supporting browsers. Reduced motion disables animation. No new dependencies or JavaScript scroll loops.
