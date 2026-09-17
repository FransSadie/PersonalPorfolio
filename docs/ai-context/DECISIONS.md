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

## 2026-09-17: exact rollback followed by targeted polish

Restore `5845ead` rather than approximating the rejected refinement. Keep the original hero and cream About layout. Use segmented numbered navigation, limited staged section entrances, and stronger media hover feedback. A drift-disabled profiling comparison substantially reduced style recalculation, so retain static hero framing. Animated navigation background colors introduced repeat paint work; remove that transition while retaining instantaneous active colors and a transform-based underline. Preserve selection and anchor focus: no site-created editable caret was found.

## Notes removal and broader motion

Remove Notes from the homepage, metadata, navigation, and fragment behavior; redirect old notes paths to the homepage. Keep note source files archived rather than deleting the writing. Extend one-time motion to every project, skill shelf, and hobby image, with at most two groups active. Add brief hero-text and skill-expansion entrances while retaining static hero imagery. On small screens remove sideways travel and rotation to prevent transient overflow. Respect live reduced-motion changes and release temporary layers after one second.

## Interactions beyond scrolling

Keep the established layout, content, and hero artwork. Use CSS for hover/focus/press/disclosure motion, with observer-gated small ambient indicators. Use native CSS scroll timelines only for the thin progress indicator, with omission as the fallback. Keep Notes removed and avoid animation libraries or continuous JavaScript work.
