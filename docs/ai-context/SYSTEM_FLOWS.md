# System Flows

## Page request

1. Next.js statically renders `/` from typed local content and local MDX.
2. The document contains all seven sections, skill collections, project build notes, and note bodies.
3. Two small client enhancements activate navigation and bounded motion. Reading, contact links, and native disclosures also work without JavaScript.

## Navigation

1. Header links target `#home`, `#about`, `#projects`, `#skills`, `#outside`, `#notes`, or `#contact`.
2. Native scrolling honors the sticky header offset and reduced-motion preference.
3. IntersectionObserver updates the current navigation indicator without a scroll listener.
4. Mobile menu closes on selection, Escape, or outside pointer input; selected sections receive focus without an extra scroll.

## Skills

1. `SkillsSection` reads seven named collections from `data/skills.ts`.
2. It renders previews using one `FloppyDisk` component, with category, optional serial, and inherited/overridden accent.
3. Native `details` exposes the remaining disks with keyboard or pointer input. There are no percentages, skill ratings, or per-technology components.
4. Collections occupy aligned rows with a description beside a four-column disk grid. On smaller screens the description moves above the disks; narrow screens use two disk columns.

## Projects and notes

Projects expose a direct public GitHub source link and native inline build notes. A live link renders only if a verified URL is supplied in project data.

Notes are sorted and rendered server-side into individual `details` elements. Readers expand a title without leaving the homepage. A `#note-<slug>` fragment opens the matching note through `PageEffects`.

Old section URLs and `/projects/<slug>` or `/notes/<slug>` redirect to corresponding fragments. The removed booking demo redirects to the project overview.

## Motion

An IntersectionObserver tracks hero visibility. The hero image and cursor run only while visible, the tab is active, and reduced motion is off. A second observer triggers a single short transform/opacity entrance on section headings and then unobserves them. Floppy and project hover effects are limited to fine pointers with hover capability.

## Contact and integrations

Email uses a mailto link. GitHub and LinkedIn use direct outbound links. No form, API, analytics, login, payment, upload, or database flow is present. GitHub evidence is reviewed during development and stored with content, not fetched for visitors.
