# Content Evidence

Audit date: 2026-09-12. Public GitHub metadata, READMEs, dependency manifests, and selected source files were read using the GitHub API. The profile is https://github.com/FransSadie.

## Resume reconciliation

On 2026-09-16, both pages of the supplied `Frans_Sadie_Resume_v5.pdf` were extracted and visually inspected. The curated inventory now contains 43 skills from this source and the existing repository evidence. The PDF remains in the repository root as local evidence; it is not copied to `public/` or offered as a download.

The short About biography reflects the resume's fintech, internal tooling, client application, and UI/UX background. The user subsequently requested removal of the separate Experience & Education block; the WDAS role, client POS/booking entry, diploma details, dates, and their display data were removed. Resume-backed skills remain. No relationship between the unnamed client project and the public Booking-Demo1 repository is assumed.

Climbing coaching is excluded at the user's request. Climbing appears only as a hobby. School history, spoken languages, relocation details, the phone number, generic utility apps, and the full design-tool inventory were not copied into the site.

## Selected projects

| Project | Evidence | Presentation decision |
| --- | --- | --- |
| Halo | [README](https://github.com/FransSadie/Halo/blob/Main/README.md), apps/mobile/package.json | Public mobile-first scam-safety MVP; no production-readiness claim. |
| Trace | [README](https://github.com/FransSadie/TRACE/blob/Main/README.md), package.json, src-tauri/Cargo.toml | Desktop knowledge-base scaffold. README says Rust compilation was not verified. Tauri is marked exploring; Rust is not part of the curated skill selection. |
| PSYCHED | [README](https://github.com/FransSadie/psyched/blob/main/README.md), package.json | Local AI journaling/coaching prototype; no medical claims. |
| Market Lens Research | [README](https://github.com/FransSadie/market-lens-research/blob/main/README.md), requirements.txt, frontend/package.json | Research desk, rankings, and scans; current README explicitly moves away from prediction infrastructure. |
| Market Lens / Price | [README](https://github.com/FransSadie/Market-lens-price/blob/main/README.md), requirements.txt, app/models/train_baseline.py | Distinct modeling experiment with LightGBM and logistic-regression benchmarking. |

All five repositories were public, non-forks, and non-archived at audit time. Public/non-archived does not establish ongoing maintenance: displayed status describes the README's implementation stage. None supplied a live homepage URL, so no live URL was invented.

Excluded: Booking-Demo1 is a public demo tailored to a named wellness business; it was omitted from the personal-project selection. Market-Lens-news overlaps the newer research/model projects and documents a price-first pivot. The profile README repository and this portfolio are not added as filler projects. Private/corporate repositories were not used to populate the public project archive.

## Skills

Every entry in `data/skills.ts` has a `sources` array. This is the canonical evidence map rather than a second duplicated list in documentation.

- Language and framework evidence: source files and dependency manifests from the portfolio, Halo, TRACE, PSYCHED, and Market Lens.
- pandas, NumPy, scikit-learn, and LightGBM: imports and model training code in Market-lens-price/app/models/train_baseline.py, not just a generic ML claim.
- SQL: Halo's schema. SQLite: TRACE's rusqlite dependency/scaffold. PostgreSQL and Ollama: PSYCHED's documented implementation.
- Git/GitHub: public profile and repositories. Vercel: existing portfolio deployment metadata and PSYCHED deployment notes.
- Resume additions include C#, Angular, Express, Django, MySQL, Matplotlib, Docker, Linux, Azure, Azure Pipelines, Raspberry Pi setup, virtual machines, Jupyter, Postman, and Figma. Azure Pipelines is explicitly labeled `CI/CD basics`, matching the resume. No GitHub Actions or Kubernetes experience is inferred.
- The selection prioritizes data, full-stack, and integration work. Java, R, Seaborn, VS Code, and overlapping creative tools were omitted; incidental UI/validation/lint dependencies were trimmed from the previous list. This is a curated selection, not an exhaustive resume transcript or proficiency ranking.
- Accent and serial fields describe the visual collection only. No proficiency percentages or invented software versions are shown.

## Personal content and imagery

Contact links and the music, games, fitness, and reading interests come from the existing repository. Climbing is supported by the user's request and resume. No specific climbing trips, competition results, personal photographs, or other events are claimed.

All four design-reference images were inspected. The cinematic horizon is preserved because the user explicitly required the current hero. Other reference images are retained for reference, not copied into the new page.

Five generated subject photographs illustrate the hobbies without being presented as documentary photos of the owner's possessions or activities. Exact prompts and provenance are in `public/images/README.md`; the workspace image is retained only as an unused reference. The unchanged cinematic hero is followed by a static gradient and an ordered About profile. Project descriptions and priority remain repository-backed: Market Lens Research, Market Lens Price, PSYCHED, Halo, then Trace.
