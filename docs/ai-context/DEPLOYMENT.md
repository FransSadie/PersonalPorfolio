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

No application environment variables are referenced, and no `.env.example` exists. `next.config.ts` currently uses default configuration. The canonical metadata base is hardcoded in `app/layout.tsx`.

## Hosting and release

The local checkout is linked to the Vercel project `personalwebsite` through ignored `.vercel/project.json`. The Git remote is `https://github.com/FransSadie/PersonalPorfolio.git`, with `main` tracking `origin/main`.

No repository CI workflow or `vercel.json` exists. Vercel production-branch selection, automatic Git deployment, domains, preview behavior, and rollback history are external settings and cannot be verified from this repository. If Git integration is enabled, pushing the configured production branch normally creates a production deployment; confirm that branch in Vercel before relying on it.

## Release and rollback

The repository defines no custom release, promotion, or rollback process. Vercel dashboard/CLI deployment promotion and rollback are possible platform operations, but their configuration is not recorded here.
