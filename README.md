# Frans Portfolio

A static-first personal portfolio built with Next.js, TypeScript, Tailwind CSS, and MDX. The site is framed as a warm retro-futurist evening: part workshop, part field archive, and part old computer interface.

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
- Notes: `content/notes/*.mdx`
- Tools: `data/profile.ts`

## Structure

- `app/` contains all routes.
- `components/` contains reusable UI primitives and layout pieces.
- `lib/notes.ts` loads and renders local MDX notes.
- `types/content.ts` defines the editable content model.

## Commands

```bash
npm run dev
npm run build
npm run lint
```
