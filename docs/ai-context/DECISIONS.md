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
