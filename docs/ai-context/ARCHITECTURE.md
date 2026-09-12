# Architecture

## Overview

This repository is a single Next.js 16 App Router portfolio. It is static-first: pages are rendered from typed TypeScript data and local MDX files. There is no application API, database, authentication system, or server integration.

## Components and boundaries

- `app/`: route pages, root layout, metadata, and global styling. Dynamic project and note routes use `generateStaticParams`.
- `components/`: reusable presentation components. Most are Server Components; `site-navigation.tsx` is the only client-side interaction boundary.
- `data/`: canonical structured portfolio, profile, tool, and passion content.
- `content/notes/`: canonical MDX note files with frontmatter.
- `lib/notes.ts`: reads local MDX with Node `fs`, parses frontmatter with `gray-matter`, and renders it through `next-mdx-remote/rsc` and `remark-gfm`.
- `types/content.ts`: shared content contracts.
- `design-reference/`: images imported by `next/image` and the visual storyboard reference.

## Interaction

Route Server Components import local data directly. The homepage assembles the primary portfolio into anchor-linked sections; project and note detail routes remain for deeper reading. Note routes call `lib/notes.ts`, which reads `content/notes` from disk during rendering/build. Shared Server Components render the result. The navigation is the only Client Component: its observer tracks the active anchor and sets section visibility attributes for CSS animation. It reconnects when the route changes and stores no persistent browser state.

## Dependencies and services

Core runtime dependencies are Next.js, React, React DOM, `gray-matter`, `next-mdx-remote`, and `remark-gfm`. Tailwind CSS 4 supplies the styling toolchain. Google fonts are loaded through `next/font`.

The local `.vercel/project.json` links the checkout to a Vercel project named `personalwebsite`; that ignored file is machine-local and not part of the repository.

## Rendering and media

The page grid uses `minmax(0, 1fr)`; anchor sections participate in normal layout to avoid shifting navigation targets. The cinematic horizon is stored as WebP and rendered through `next/image` in the hero and contact sections, with below-the-fold images loading lazily. Shared spacing, border, shadow, colour, and motion tokens live in `app/globals.css`.

Floppy disks use CSS on ordinary project links, with descriptive copy and secondary actions underneath. No animation library, image asset, or client state is needed for the disks. Homepage project/note prefetching is disabled, avoiding route downloads during scrolling.
