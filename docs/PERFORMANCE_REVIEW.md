# Performance and UI review — 2026-09-12

## Main findings and fixes

- Whole-section `contain-intrinsic-size: auto 900px` reserved a 900px width as well as height. On a 390px viewport, this produced 526px of horizontal overflow. Normal section layout and a `minmax(0, 1fr)` page grid fix it.
- Navigation mounted its observer only once, leaving the active section stale after client-side route returns. It now reconnects on pathname changes. Header section links use native anchors.
- Project and note links downloaded route data while scrolling. Homepage prefetching is now disabled; details load when selected.
- The hero cursor and toolkit LED now pause outside the viewport through the existing observer. Mobile disables the LED pulse. Reduced motion disables animations and transitions.
- Dark dossier paragraph colours leaked into dark detail pages. Text colours are now scoped correctly.
- Project disks share a responsive grid on the homepage and project index. Descriptions stay beneath the disks; no content depends on hover.

## Local production measurements

Measured with headless Microsoft Edge on this Windows machine using Playwright and Chrome DevTools metrics. Desktop: 1440 × 900 at DPR 1. Mobile viewport: 390 × 844 at DPR 2. Both used a 4.5-second scripted full-page scroll. These are local lab samples, not real-phone or public Vercel measurements.

| Measurement | Before | After |
| --- | ---: | ---: |
| Mobile horizontal overflow | 526px | 0px |
| Desktop main-thread task time during scroll | 379ms | 320ms |
| Mobile main-thread task time during scroll | 312ms | 225ms |
| Desktop layout time during scroll | 6.09ms | 0.21ms |
| Mobile layout time during scroll | 8.21ms | 0.11ms |
| Route prefetch requests in desktop browsing sequence | 64 | 0 |
| Route prefetch requests in mobile browsing sequence | 53 | 0 |

The sampled 95th-percentile frame interval was 7.2ms desktop and 7.1ms mobile viewport on this high-refresh host. There was one desktop frame above 25ms and none in the mobile sample. Initial CLS was zero. This is not a guarantee of 60fps on every device.

## Assets and bundle

- Initial compressed JavaScript responses total approximately 147.5 KB; no animation or UI library was added.
- Compressed stylesheet response: approximately 8.3 KB.
- Initial optimized horizon response: approximately 35 KB desktop / 11 KB mobile. The existing 54 KB WebP source is retained.
- Two requested WOFF2 fonts total approximately 31 KB, self-hosted by Next.js.
- Images below the fold remain lazy. The second scrapbook picture is hidden on narrow phones.
- Original PNG artwork and the storyboard remain reference files; they do not appear in the emitted static media. Existing declared packages remain unchanged.

## Verification

- Production build and ESLint.
- Responsive geometry at 320, 360, 390, 600, 768, 1000, 1024, 1280, and 1440px.
- Desktop/mobile section navigation, cross-route return, project opening, image loading, and public route responses.
- Keyboard skip link, focus indication, mobile menu Escape handling, reduced motion, and enlarged text.
- Automated axe WCAG A/AA checks on home, about, projects, Halo detail, an MDX note, and contact.
- Visual screenshots of every homepage section on desktop and mobile.

Browser tooling and screenshots were kept in a temporary QA directory; no test dependency or deployment setting was added to the site.
