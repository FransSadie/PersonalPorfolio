# Engineering Decisions

## 2026-09-12: one content page

The rebuild explicitly requires one-page navigation. Remove the old standalone section/project/note implementations and keep project build notes and MDX reading inline through native `details`. Permanent redirects preserve legacy incoming URLs. Trade-off: note bodies are part of the initial static HTML; there are only three current notes, but a much larger archive will need a deliberate payload review.

## Data-driven physical media

Use one Server Component, `FloppyDisk`, for all technologies. Typed skill collections carry names, categories, source evidence, optional serials, and optional accent overrides. Named collections use aligned rows with descriptions and a four-disk preview, with native expansion for additional skills. This keeps disk sizes consistent and avoids a giant ungrouped wall, a client-side filtering library, or one component per technology.

## Evidence before breadth

Use a dated public GitHub audit to select personal projects and substantiate skills. Omit the business-specific booking demo and an overlapping older Market Lens experiment. On 2026-09-16, reconcile skills and biography against the supplied resume. Prefer relevant breadth over copying every skill, preserve the resume's basic Azure Pipelines qualifier, and omit climbing coaching. The separate Experience & Education block was removed following user feedback; keep the curated skills and climbing hobby. Source references stay beside the skill data so future edits can be reviewed.

## Preserve the hero, reduce continuous work

Keep the horizon, two fonts, typography geometry, overlays, and ground grid. Fix the moving image at one scale and animate a small translation. Pause ambient motion offscreen and when hidden. Remove the full-viewport fixed SVG turbulence overlay and whole-section scroll-linked reveal effects; use short one-time heading entrances instead. Headless profiling did not reproduce the reported device-specific stutter, so no single root cause or universal 60fps guarantee is claimed.

## Progressive enhancement and existing deployment

Use semantic anchors, native disclosures, two small client boundaries, and CSS transform/opacity motion. No frame loops, scroll listeners, decorative React hydration, or new runtime dependencies. Preserve Next.js, npm, and the repository's existing Vercel deployment arrangement; the frontend rebuild does not require a hosting-provider migration.
