# Architecture

The portfolio has one static Next.js App Router content page. `app/page.tsx` composes Hero, About, Projects, Skills, Outside Tech, Notes, and Contact. `app/layout.tsx` supplies the header, main landmark, skip link, footer, metadata, and two `next/font` families. `app/globals.css` centralizes palette, surfaces, spacing, typography, shadows, motion, and breakpoints.

## Content and component boundaries

- `data/projects.ts`: typed public personal projects, descriptions, explicit prototype/scaffold status, stack, source URL, and inline build notes. `ProjectMedia` is the single project presentation.
- `data/skills.ts`: `Skill`, `SkillAccent`, and `SkillCollection` types; seven deduplicated collections with source evidence. Optional serials are collection references, not ratings or versions.
- `FloppyDisk` is a Server Component shared by all technologies. `SkillsSection` maps data into aligned collection rows with descriptions and up to four disks initially. Additional disks are inside native `details`; no filtering state, library, or decorative hydration is required. Disks use a consistent four-column grid, reducing to two columns on narrow screens.
- `data/profile.ts`: contact links. About renders its short biography directly; the separate resume highlights and their data model were removed at the user's request.
- `data/passions.ts`: personal interests with typed static image imports and alt text. Five generated interest images, including climbing, use next/image for responsive optimized output, intrinsic layout, and lazy loading. Cards wrap into centered rows of three, two, or one. A previously generated workspace image remains an unused reference in `public/images/`.
- `content/notes/*.mdx`: canonical notes. `lib/notes.ts` reads frontmatter and renders MDX through `next-mdx-remote/rsc` and `remark-gfm`. `NotesSection` renders all note bodies at build time into native disclosures.
- `design-reference/`: retained source references. Only the existing cinematic horizon is used as a site image; the other references are not pasted into the rebuilt sections.

## Client boundaries

`SiteNavigation` uses IntersectionObserver to maintain the active section and native `details` for mobile navigation. A footer observer selects Contact at the page end because the compact final section cannot always reach the main observer's viewport band. It dismisses the menu on selection, outside pointer input, or Escape. Anchor targets can receive programmatic focus.

`PageEffects` renders no markup and stores no React state. It pauses hero CSS animations when offscreen, when the page is hidden, or when reduced motion is requested. It applies short entrances to section headings once. It also opens note disclosures for `#note-*` deep links.

All project objects, disks, skill disclosures, note content, and section bodies are server-rendered. There are no runtime integrations, background tasks, or persistent browser data.

## Routing and dependencies

Legacy section/detail page implementations were removed. `next.config.ts` permanently redirects their URLs to homepage fragments, including a special fallback for the removed business booking demo. Runtime dependencies remain Next.js, React/React DOM, gray-matter, next-mdx-remote, and remark-gfm; Tailwind is the styling toolchain. No new package is required.

`scripts/profile-scroll.mjs` is optional development tooling that attaches to a locally running QA browser through CDP. It is not included in the site bundle and writes traces only to the supplied output path.
