# Current State

## Purpose

Frans Sadie's personal portfolio presents projects, engineering interests, tools, passions, notes, and contact links in a minimal editorial interface with restrained retro-futurist details.

## Architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.
- Static-first Server Components; no API, backend service, database, or authentication.
- Content lives in `data/*.ts`; notes live in `content/notes/*.mdx` and are read by `lib/notes.ts`.
- Static project and note detail paths are generated from repository content.
- The homepage is the primary one-page experience; header links scroll to About, Projects, Tools, Outside Tech, Notes, and Contact sections.
- Most presentation is server-rendered. `site-navigation.tsx` is the only Client Component and uses `IntersectionObserver` for the active section indicator.

## Important locations

- `app/layout.tsx`: shared layout, fonts, site metadata, and canonical metadata base.
- `app/page.tsx`: primary one-page portfolio and anchor sections.
- `app/projects/[slug]/page.tsx`, `app/notes/[slug]/page.tsx`: dynamic static routes.
- `data/projects.ts`, `data/profile.ts`, `data/passions.ts`: primary structured content.
- `lib/notes.ts`: file reading, frontmatter parsing, and MDX rendering.
- `design-reference/`: source imagery and visual reference, including the generated cinematic horizon used by the hero and contact ending.

## Deployment and configuration

The checkout has a local Vercel link to project `personalwebsite` and Git remote `FransSadie/PersonalPorfolio`. No environment variables, CI workflow, `vercel.json`, application tests, or custom Next.js configuration are present. Vercel's production branch and automatic Git deployment settings are not verifiable from repository files.

## Constraints and risks

- Content changes require a build/deployment; there is no CMS.
- MDX frontmatter is type-cast rather than runtime-validated, so malformed content can fail or render incorrectly.
- Note discovery uses synchronous filesystem access and assumes `content/notes` exists.
- The metadata base is hardcoded to a Vercel URL and can drift if the public domain changes.
- External GitHub/contact URLs and manually maintained project details can become stale.
- There is lint/build verification but no automated test suite or repository CI.
- Responsive behavior relies on CSS breakpoints and native mobile navigation markup; test keyboard, anchor scrolling, and active-section behavior when changing them.
- Visual motion is CSS-only except for section detection. Preserve reduced-motion overrides and avoid adding frame loops or scroll handlers.

## Before modifying

Read the actual route, component, and content source involved. Update these context files only when system behavior, boundaries, dependencies, deployment, configuration, or important constraints materially change.
