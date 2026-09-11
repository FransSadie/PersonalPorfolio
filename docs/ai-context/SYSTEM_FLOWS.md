# System Flows

## Page request

1. Next.js resolves an App Router page.
2. The root layout supplies fonts, global chrome, and metadata.
3. The page imports content from `data/` or reads notes through `lib/notes.ts`.
4. Server-rendered HTML is returned. The small navigation client observes homepage sections and updates the active indicator.

## Homepage navigation

1. Header links target section IDs on `/`.
2. Native anchor scrolling moves to About, Projects, Tools, Outside Tech, Notes, or Contact.
3. A single `IntersectionObserver` updates the active navigation state without continuous scroll handlers.
4. Mobile navigation uses native `details`/`summary` behavior and closes after selection.

## Project browsing

1. `/projects` maps `data/projects.ts` into project cards.
2. A card links to `/projects/[slug]`.
3. The detail route finds the slug in the same in-memory project array or returns 404.
4. Project paths and metadata are generated from that array at build time.

## Notes

1. `getAllNotes()` scans `content/notes/*.mdx`, parses frontmatter, and sorts notes by date.
2. `/notes/[slug]` loads the matching file or returns 404.
3. MDX content is rendered server-side with the local component map and GitHub-Flavored Markdown.
4. Note paths and metadata are generated from the files at build time.

## Authentication, persistence, and integrations

There is no login, server session, API request flow, database, form submission, payment, upload, or background-processing flow. Contact and project actions are outbound links only.
