# Performance and verification

Initial rebuild implementation and QA: 2026-09-12 to 2026-09-16. The measurements below describe the initial rebuild before the subsequent copy/imagery cleanup. Production build tested on localhost with headless Chromium through agent-browser. The reported hero stutter was not reproducible in the baseline recording; these results do not establish a single root cause or guarantee 60fps on physical devices.

## Audit and changes

The hero retains its horizon image, title composition, typography, overlays, and ground grid. The previous full-viewport fixed SVG turbulence layer and whole-section scroll-linked effects were removed. The hero image now translates at a constant scale; IntersectionObserver pauses its CSS animation offscreen, and visibility/reduced-motion preferences also suspend it. Short one-time heading entrances replace section-wide effects.

Content and physical objects render on the server. Only navigation and page effects are client boundaries. Application code has no scroll listeners, mouse tracking, requestAnimationFrame loops, animation library, WebGL, or decorative hydration. Hover and entrance motion use transform/opacity. No runtime dependency was added.

The existing hero uses responsive next/image output and preload. There are no below-fold image requests. The two next/font families are retained; metadata uses the system monospace stack. The final browser load contained 834 elements (including collapsed content), six JavaScript resources totaling 145,102 encoded bytes, and two font resources totaling 30,916 encoded bytes. Encoded resource sizes describe this local browser load, not a bundle-analyzer estimate or total network transfer.

## Scroll profiling

`scripts/profile-scroll.mjs` attaches to an existing Chromium CDP websocket. Open the production site on localhost:3100, set the viewport to 1440 x 900, and run with a Node version that provides global WebSocket:

```text
npm run build
npm run start -- --port 3100
node scripts/profile-scroll.mjs <browser-websocket> <output.json> baseline 4
```

The script performs four alternating 900px scroll gestures at 900px/second under 4x CPU throttling. It collects Chrome timeline events and a test-only animation-frame timestamp probe, then resets CPU throttling. Long tasks are measured through PerformanceObserver during the gesture sequence. The probe is not shipped to visitors. `no-noise` and `no-drift` are optional CSS isolation variants used against the old implementation.

| Recording | Date | p95 frame gap | Gaps >34ms | Paint events / total ms | Raster events / total ms | Style recalculation ms |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Original baseline | Sep 12 | 7.1ms | 0 | 305 / 29.67 | 212 / 3.20 | 231.52 |
| Original, noise disabled | Sep 12 | 7.1ms | 0 | 308 / 25.82 | 214 / 3.21 | 234.32 |
| Original, drift disabled | Sep 12 | 7.1ms | 0 | 308 / 30.71 | 214 / 3.12 | 188.65 |
| Final rebuild | Sep 16 | 7.1ms | 1 | 29 / 52.76 | 28 / 3.94 | 254.55 |

The final recording observed zero long tasks (>50ms). Earlier trace summaries contained a zero long-task count from a RunTask filter, but their trace categories did not capture RunTask events; those counts are not valid baseline measurements. The script now uses the browser's Long Tasks API and reports null when unsupported.

Paint/raster event counts decreased, but aggregate timing did not improve uniformly. Disabling drift reduced style time in one baseline experiment without changing frame-gap results. Different recording dates, background workloads, warm caches, and headless rendering prevent attributing a percentage speedup to any one change. Animation-frame timestamps are not proof of delivered display frames. A warm local vitals sample recorded CLS 0 and LCP 72ms; it is not representative of an internet visit.

## Verification

- Production build, TypeScript checking, ESLint, and git diff whitespace checks passed.
- Entire page visually inspected on desktop and mobile; preserved hero compared against its original screenshot. Final disk casing adjustment inspected at 1440px and 390px.
- Layout bounds checked at 1440, 1024, 768, 390, and 320px, at normal and 200% root text size with disclosures expanded: no horizontal overflow, clipped label text, labels outside their casings, or disks outside their grids. These are text-enlargement checks, not browser-zoom or real-device certification.
- Mobile menu selection, Escape/focus return, section anchors, active navigation, keyboard disclosure expansion, note deep links, and legacy 308 redirects verified. No duplicate IDs or browser runtime errors observed.
- Reduced motion produced zero running animations and immediate anchor scrolling. Hero motion paused offscreen.
- Axe 4.12.1 reported zero automatic violations and 44 passing rules. One contrast rule remained incomplete for 38 nodes involving imagery/pseudo-elements; this is not complete accessibility certification.

Raw traces and screenshots were saved outside the repository in the local temporary directory. No automated test dependency or generated artifact was added. Physical low-end phone testing, screen-reader testing, and deployed network measurements remain unperformed. For device-specific stutter, reproduce on the affected browser/device before making further aesthetic changes.

## Copy and imagery follow-up, 2026-09-16

The user requested removal of filler text, a richer background below the hero, relevant imagery, and data/full-stack/integration project priority. Five generated images add 304,554 bytes of source WebP assets; next/image serves responsive versions and lazy-loads all five. Their containers reserve space before loading. The background is static CSS with no fixed layers or new animation loop. The hero background remains unchanged; its decorative labels and blinking cursor were removed.

The same 4x CPU scroll test recorded a 7.1ms p95 frame gap, one gap over 34ms, zero observed long tasks, 12 Paint events (9.28ms total), and 10 RasterTask events (1.59ms total). These remain local, headless observations rather than device guarantees. Desktop/mobile screenshots, all six loaded images including the hero, responsive bounds at 320–1440px and 200% text size, keyboard skill expansion, mobile-menu focus, project ordering, and absence of the requested filler strings were checked. Build and lint passed. The shorter Contact section also prompted an IntersectionObserver footer check so active navigation can select Contact at the bottom of the page.

## Layout correction after feedback

The background was simplified to a static gradient scoped below the hero. Useful descriptions were restored, About became a structured text profile, and all skill collections now use consistent rows with four-disk previews. The unused About image is no longer requested by the page. The hero's image, overlays, grid, and motion remain unchanged. This correction adds no JavaScript or animation work.

Production build and lint passed. Browser layout checks passed at 320, 390, 768, 1024, and 1440px with normal and 200% root text size, including expanded collections. About identity spacing was separately inspected at 320px with enlarged text. Native keyboard expansion, mobile-menu focus, Contact highlighting at page end, 38 unique skills, hero motion pausing offscreen, and the absence of the removed decorative labels were checked. No new scroll-performance measurement is claimed for this layout-only correction.

## Resume content update: 2026-09-16

Build, TypeScript, lint, and diff whitespace checks passed after resume curation. Browser checks found 43 unique skills in seven collections, three resume highlights, and five hobby cards. All five hobby images loaded; no browser errors or framework error overlay were detected. Expanded collection bounds passed at 320, 390, 768, 1024, and 1440px with normal and 200% root text size. Keyboard Enter expanded DevOps to reveal all nine entries. Desktop and mobile screenshots were inspected for the experience block and climbing card. The original hero asset remains outside the gradient wrapper. This content/layout update adds no client code; scroll performance was not remeasured.

## Rollback and targeted polish, 2026-09-17

Restored commit `5845ead` exactly before editing and visually checked the restored hero. The rejected working diff was saved outside the repository as `portfolio-rejected-refinement.patch`. Kept the original imagery, text, project order, About panel, and skill inventory. Changes are limited to hero positioning/static framing, segmented navigation, staged section entrances, and tactile details.

Same-session headless Chromium, 1440x900, four alternating 900px gestures, 4x CPU throttling:

| Variant | p95 frame gap | Gaps >34ms | Long tasks | Paint count / ms | Style recalculation ms |
| --- | ---: | ---: | ---: | ---: | ---: |
| Restored baseline | 7.1ms | 0 | 0 | 29 / 26.15 | 161.67 |
| Restored with drift disabled | 7.1ms | 0 | 0 | 24 / 19.19 | 24.36 |
| Initial targeted polish | 13.9ms | 1 | 0 | 228 / 144.90 | 117.80 |
| Final, nav color transition removed | 7.1ms | 0 | 0 | 36 / 33.69 | 78.00 |

Removing the navigation background-color transition resolved the measured frame-gap regression; temporary layer promotion alone did not. Final reveals retain visible 28px motion, 80ms staging, and 520-650ms durations. The hero's continuous drift was removed without changing its image or overlays. Device-specific stutter was not reproduced; these results do not guarantee physical-phone performance.

Build, TypeScript, lint, and responsive bounds passed (320-1440px, normal and 200% root text, expanded skills). Restored/final desktop hero and mobile About were visually inspected. Mobile section selection transfers focus and closes the menu; keyboard skill expansion passes. All 43 skills remain. No editable wrappers or browser errors were found, and body selection remains automatic. Reduced-motion emulation produces zero running animations and immediate scrolling. No new dependencies, routes, or deployment changes. Raw artifacts use `portfolio-restored-*` and `portfolio-targeted-*` in the user's temporary directory.

## Notes removal and additional animation

Build, lint, responsive bounds (320-1440px at 100% and 200% root text size), and reduced-motion checks passed. All 43 skills remain. Notes is absent from the page and navigation; `/notes` and `/notes/test` return 308 redirects to `/`. No browser errors were reported. Mobile Contact was visually checked after removing the intervening Notes section.

A full-page downward scroll through the new individual-group reveals at 4x CPU throttling recorded a 7.2ms p95 frame gap, two gaps over 34ms, and zero long tasks. Paint: 141 events / 183.11ms; raster: 252 / 18.20ms. This longer traversal is not directly comparable with four-gesture hero recordings. Physical-phone performance remains unverified. Reduced motion produced zero running animations and automatic/immediate scrolling. Traces and screenshot use the `portfolio-no-notes-` prefix in the temporary directory.

## Interaction pass, 2026-09-17

Build, TypeScript, lint, and diff whitespace checks passed. Browser verification confirmed project hover transforms, keyboard Enter skill expansion, 43 disks, and no console errors. Settled layout bounds passed at 320/390/768/1024/1440px with 100% and 200% root text size (motion disabled during geometry measurement). Reduced-motion emulation, after allowing the media change to settle, reports zero running animations and immediate scrolling. Desktop hero and mobile skills screenshots were inspected.

Full-page downward scrolling in headless Chromium at 4x CPU recorded 13.9ms p95 frame gap, three gaps over 34ms, zero long tasks, 251 paints / 292.92ms, and 1019.86ms style recalculation. The added staggered child motion and progress indicator increase rendering work compared with the previous 7.2ms run; this remains a synthetic check, not physical-device validation. Raw result: portfolio-interactions-profile.json in the user temporary directory.
