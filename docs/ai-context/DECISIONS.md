# Engineering Decisions

Dates and original reasoning are unknown unless stated.

## Static-first App Router

- **Decision:** Use Next.js App Router pages with local content and statically generated dynamic paths.
- **Evidence/reason:** The route implementation and build behavior are verifiable; the original motivation is unknown.
- **Affected areas:** `app/`, `data/`, `content/notes/`, `lib/notes.ts`.
- **Trade-off:** Simple deployment and no runtime data service, but content updates require a rebuild.

## Repository-backed content

- **Decision:** Keep structured portfolio content in TypeScript and notes in MDX.
- **Evidence/reason:** Verified in `data/`, `content/notes/`, and `lib/notes.ts`; original rationale is unknown.
- **Trade-off:** Content is versioned and typed, but non-developers have no CMS editing flow.

## Server-first presentation

- **Decision:** Keep content server-rendered and isolate active-section tracking to one navigation Client Component.
- **Reason:** Preserve fast static rendering while making one-page navigation clear.
- **Trade-off:** A small hydration cost for active navigation, with no scroll listener or animation library.

## One-page primary journey

- **Decision:** Make homepage anchor sections the primary portfolio experience while retaining detail routes for deeper reading.
- **Reason:** The September 2026 direction explicitly prioritizes a continuous one-page journey.
- **Affected areas:** Homepage, header navigation, project and note links.
- **Trade-off:** Fast scanning on one page, with a longer initial document and duplicated summaries on detail routes.

## Restrained retro identity

- **Decision:** Express the retro-futurist identity through typography, a small palette, physical-artifact section compositions, two supplied images, and one generated cinematic horizon rather than a generic card system or heavy interactive effects.
- **Reason:** The September 2026 redesign prioritizes speed, clarity, and a more mature presentation.
- **Affected areas:** Global styles, layout, navigation, hero, cards, and content routes.
- **Trade-off:** Less spectacle in exchange for better readability and substantially lower rendering complexity.

## Stable section layout (2026-09-12)

- **Decision:** Replace whole-section `content-visibility` placeholders with normal layout and an explicit shrinkable page-grid column.
- **Evidence:** The earlier `contain-intrinsic-size: auto 900px` reserved width as well as height. Browser testing measured 526px horizontal overflow at a 390px viewport. Variable section heights also complicated anchor navigation.
- **Trade-off:** The small static document lays out up front; lazy images, paused off-screen animation, and disabled route prefetching reduce ongoing work without changing target positions.

## CSS floppy disks and bounded motion (2026-09-12)

- **Decision:** Render each project as a CSS floppy-disk link, with its summary and source links underneath. Preserve detail routes.
- **Reason:** Meet the retro art direction without extra assets, client components, animation libraries, or disclosure state.
- **Trade-off:** Small hover transforms and shutter opacity changes provide feedback. Ambient movement is limited to the cursor and toolkit LED, gated by the existing section observer.
