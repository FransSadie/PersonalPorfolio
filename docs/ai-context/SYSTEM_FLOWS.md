# System Flows

## Page request

1. Next.js statically renders `/` from typed local content.
2. The document contains six sections, skill collections, and project build notes.
3. Two small client enhancements activate navigation and bounded motion. Reading, contact links, and native disclosures also work without JavaScript.

## Navigation

1. Header links target `#home`, `#about`, `#projects`, `#skills`, `#outside`, or `#contact`.
2. Native scrolling honors the sticky header offset and reduced-motion preference.
3. IntersectionObserver updates the current navigation indicator without a scroll listener.
4. Mobile menu closes on selection, Escape, or outside pointer input; selected sections receive focus without an extra scroll.

## Skills

1. `SkillsSection` reads seven named collections from `data/skills.ts`.
2. It renders previews using one `FloppyDisk` component, with category, optional serial, and inherited/overridden accent.
3. Native `details` exposes the remaining disks with keyboard or pointer input. There are no percentages, skill ratings, or per-technology components.
4. Collections occupy aligned rows with a description beside a four-column disk grid. On smaller screens the description moves above the disks; narrow screens use two disk columns.

## Projects and archived notes

Projects expose a direct public GitHub source link and native inline build notes. A live link renders only if a verified URL is supplied in project data.

Notes are no longer rendered. `/notes` and `/notes/*` redirect to `/`; no note-fragment opening handler remains. Other legacy section/project redirects remain unchanged.


## Motion

IntersectionObserver queues visible section headings and each media/skill group for one-time transform/opacity entrances, with at most two active groups. One-second timers release temporary classes; reduced-motion changes cancel active reveals. Hero text enters once, while the background stays static. Skill disclosure grids animate on opening. Body content remains readable without JavaScript.

## Contact and integrations

Email uses a mailto link. GitHub and LinkedIn use direct outbound links. No form, API, analytics, login, payment, upload, or database flow is present. GitHub evidence is reviewed during development and stored with content, not fetched for visitors.

Pointer hover animates navigation labels, project sleeve reflections, floppy hardware, and hobby captions. Focus provides navigation/project/contact feedback; native summary activation reveals project text or a staggered disk shelf. Press states respond on links and touch surfaces. Ambient indicator animation is enabled only for visible hero/contact sections while the document is active. Native CSS scroll progress requires browser timeline support.
