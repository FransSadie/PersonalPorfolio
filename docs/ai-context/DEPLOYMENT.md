# Deployment

## Local development

Requires a Node.js/npm environment compatible with Next.js 16.

```bash
npm install
npm run dev
```

Quality commands:

```bash
npm run lint
npm run build
npm start
```

## Configuration

No application environment variables are referenced, and no `.env.example` exists. `next.config.ts` defines permanent redirects from legacy section/detail URLs to homepage fragments. Default server image optimization remains enabled. The metadata base remains the existing Vercel URL in `app/layout.tsx`.

The production build has one static content route, `/`, plus Next.js's not-found fallback. After removing route files, stale `.next/dev/types` can reference old routes; starting Next.js dev regenerates these types without changing source type checks.

## Hosting and release

The local checkout is linked to the Vercel project `personalwebsite` through ignored `.vercel/project.json`. The Git remote is `https://github.com/FransSadie/PersonalPorfolio.git`, with `main` tracking `origin/main`.

The rebuild retains Next.js/npm and this deployment arrangement. No dependency, runtime-service, or environment change is required. The implementation does not introduce a hosting-provider migration or publish a production deployment.

No repository CI workflow or `vercel.json` exists. Vercel production-branch selection, automatic Git deployment, domains, preview behavior, and rollback history are external settings and cannot be verified from this repository. If Git integration is enabled, pushing the configured production branch normally creates a production deployment; confirm that branch in Vercel before relying on it.

## Release and rollback

The repository defines no custom release, promotion, or rollback process. Vercel dashboard/CLI deployment promotion and rollback are possible platform operations, but their configuration is not recorded here.
