# Architecture

## Overview

This repository is a single Next.js 16 App Router portfolio. It is static-first: pages are rendered from typed TypeScript data and local MDX files. There is no application API, database, authentication system, or server integration.

## Components and boundaries

- `app/`: route pages, root layout, metadata, and global styling. Dynamic project and note routes use `generateStaticParams`.
- `components/`: reusable presentation components. Most are Server Components; `site-navigation.tsx` and `intro-gate.tsx` are client-side interaction boundaries.
- `data/`: canonical structured portfolio, profile, tool, and passion content.
- `content/notes/`: canonical MDX note files with frontmatter.
- `lib/notes.ts`: reads local MDX with Node `fs`, parses frontmatter with `gray-matter`, and renders it through `next-mdx-remote/rsc` and `remark-gfm`.
- `types/content.ts`: shared content contracts.
- `design-reference/`: images imported by `next/image` and the visual storyboard reference.

## Interaction

Route Server Components import local data directly. The homepage assembles the primary portfolio into anchor-linked sections; project and note detail routes remain for deeper reading. Note routes call `lib/notes.ts`, which reads `content/notes` from disk during rendering/build. Shared Server Components render the result. The navigation is the only Client Component and observes sections to show the active anchor; it stores no persistent browser state.

## Dependencies and services

Core runtime dependencies are Next.js, React, React DOM, `gray-matter`, `next-mdx-remote`, and `remark-gfm`. Tailwind CSS 4 supplies the styling toolchain. Google fonts are loaded through `next/font`.

The local `.vercel/project.json` links the checkout to a Vercel project named `personalwebsite`; that ignored file is machine-local and not part of the repository.
