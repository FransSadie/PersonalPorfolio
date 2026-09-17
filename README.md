# Frans Portfolio

A one-page Next.js, TypeScript, and Tailwind CSS portfolio with a preserved cinematic hero and a retro-computing visual system.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- Projects: `data/projects.ts`
- Passions: `data/passions.ts`
- Profile and contact details: `data/profile.ts`
- Archived notes (not displayed): `content/notes/*.mdx`
- Skills: `data/skills.ts`. Add evidence-backed entries to a collection; every technology uses `components/floppy-disk.tsx`. Do not create technology-specific components.

Project build notes open inline. The Notes section has been removed. Skill collections use native disclosures to keep the curated inventory organized. About contains a short biography; Outside Tech includes climbing. See `docs/ai-context/CONTENT_EVIDENCE.md` for the public GitHub audit and resume reconciliation.

## Structure

- `app/` contains all routes.
- `components/` contains reusable UI primitives and layout pieces.
- `lib/notes.ts` is retained with the unused notes archive.
- `types/content.ts` defines the editable content model.
- `app/globals.css` centralizes design tokens, responsive layouts, and motion.
- `scripts/profile-scroll.mjs` optionally profiles a local production site through an existing QA browser's CDP websocket; see `docs/ai-context/PERFORMANCE.md`.

Content is server-rendered. Two small client components enhance navigation and visibility-based motion. No scroll listeners, animation library, or frame loops run on the site. Legacy section/detail URLs redirect to homepage fragments; the existing Next.js/Vercel deployment arrangement is retained.

## Commands

```bash
npm run dev
npm run build
npm run lint
```
