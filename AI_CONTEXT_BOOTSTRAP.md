# AI Context Bootstrap Instructions

Use this file to add a lightweight, persistent AI/developer context system to this repository.

## Goal

Create a repo-level knowledge system that helps both developers and AI agents understand how the application works, while keeping the actual code as the ultimate source of truth.

Do **not** make functional application changes as part of this task.

---

## 1. Audit the repository

Before creating documentation, inspect the repository thoroughly enough to understand:

- overall architecture
- frontend/backend boundaries
- important modules and services
- API and data flow
- authentication/session flow
- configuration and environment variables
- build process
- deployment process
- CI/CD if present
- important external services and dependencies
- major business flows
- known technical debt
- areas of architectural uncertainty or risk

Do not guess. If something cannot be verified from the repository, state that clearly.

---

## 2. Create the context structure

Create:

```text
/docs/ai-context/
  ARCHITECTURE.md
  SYSTEM_FLOWS.md
  DEPLOYMENT.md
  DECISIONS.md
  CURRENT_STATE.md
```

### ARCHITECTURE.md

Document:

- major system components
- responsibilities and boundaries
- important directories/modules
- frontend/backend/API relationships
- data stores if applicable
- important dependencies/services
- how the main parts interact

Keep this high-level and useful. Do not turn it into a file-by-file inventory.

### SYSTEM_FLOWS.md

Document the important end-to-end flows in the application.

Examples:

- authentication/login/session
- API request flow
- core user journeys
- data persistence
- payments/claims/uploads/etc. where relevant
- background processing
- integrations

Use simple step-by-step flow descriptions where possible.

### DEPLOYMENT.md

Document:

- local development process
- build commands
- environment configuration
- environment variables
- CI/CD
- hosting/platforms
- deployment environments
- release process
- mobile/web deployment differences where applicable
- rollback or promotion process if identifiable

### DECISIONS.md

Create a lightweight engineering decision log.

Record important architectural or technical decisions that can be confidently inferred from the repository.

For each decision, include:

- decision
- reason
- affected areas
- constraints/trade-offs
- date if known

Never invent reasoning. If the reasoning is unclear, mark it as unknown.

### CURRENT_STATE.md

This is the primary fast-context file for developers and AI agents.

Keep it concise.

Include:

- what the application does
- current architecture
- important directories/files
- key dependencies
- critical system flows
- authentication model
- current deployment model
- important configuration
- known constraints
- known technical debt
- risky areas
- current architectural uncertainties
- anything someone should understand before modifying the repository

This file should describe the repository **as it exists now**.

---

## 3. Create or update AGENTS.md

If the repository does not contain a root-level `AGENTS.md`, create one.

If one already exists, preserve its existing instructions and add the following AI-context workflow.

## Required AI workflow

For every meaningful engineering task:

1. Read `/docs/ai-context/CURRENT_STATE.md` before making changes.
2. Read only the deeper context files relevant to the task.
3. Inspect the actual source code related to the task.
4. Treat the code as the ultimate source of truth.
5. Do not rely on documentation alone.
6. Before implementation, explain:
   - intended change
   - affected components
   - likely risks
7. Implement the change.
8. After implementation, determine whether the change materially affects:
   - architecture
   - system flows
   - deployment
   - configuration
   - dependencies
   - integrations
   - important engineering decisions
   - known constraints
   - technical debt
9. If yes, update the relevant `/docs/ai-context/` files in the same task.
10. Update `CURRENT_STATE.md` whenever the repository's current behaviour, architecture, dependencies, deployment model, or important flows materially change.
11. Do **not** update context documentation for trivial changes that do not affect system understanding.
12. Never document assumptions as facts. Verify against code.
13. Keep documentation concise and avoid duplication.
14. Finish every meaningful task with a short developer handoff.

---

## 4. Developer handoff format

At the end of meaningful tasks, provide:

```text
Developer Handoff

What changed:
Why:
Affected components:
Important implementation decisions:
Risks / side effects:
Configuration or deployment impact:
Documentation updated:
Anything the next developer should know:
```

Keep this short. The goal is human understanding, not exhaustive reporting.

---

## 5. Token-efficiency rules

Do not load every context file on every task.

Default reading order:

```text
AGENTS.md
    ↓
CURRENT_STATE.md
    ↓
Relevant source code
    ↓
Only relevant deeper context docs
```

Examples:

- UI-only change: usually no need to read `DEPLOYMENT.md`
- authentication change: likely read `ARCHITECTURE.md` + `SYSTEM_FLOWS.md`
- pipeline change: likely read `DEPLOYMENT.md`
- architectural refactor: likely read all relevant context documents

Keep `CURRENT_STATE.md` compact enough to serve as the fast entry point.

---

## 6. Documentation maintenance rule

The documentation is not a separate project.

Maintaining it is part of the definition of done for meaningful engineering changes.

However, avoid documentation churn.

Examples that normally **should not** trigger context updates:

- spacing changes
- colors
- copy/text changes
- minor styling
- isolated bug fixes that do not change system behaviour
- simple refactors with no architectural impact

Examples that **should** trigger context updates:

- new APIs
- authentication changes
- new dependencies
- new services
- new environment variables
- deployment changes
- CI/CD changes
- new integrations
- changed data flow
- changed business flow
- module ownership/boundary changes
- architectural refactors
- new technical constraints

---

## 7. Final output for this bootstrap task

When finished, show:

1. the files created or updated
2. a concise summary of the repository architecture you identified
3. important system flows found
4. deployment model identified
5. architectural uncertainty
6. risky or fragile areas
7. places where documentation could easily drift from the implementation

Do not make functional application changes during this bootstrap task.
