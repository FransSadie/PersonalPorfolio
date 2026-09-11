# Repository Working Instructions

## AI context workflow

For every meaningful engineering task:

1. Read `docs/ai-context/CURRENT_STATE.md` before making changes.
2. Read only the deeper context files relevant to the task.
3. Inspect the related source code; code is the ultimate source of truth.
4. Before implementation, state the intended change, affected components, and likely risks.
5. After implementation, determine whether architecture, flows, deployment, configuration, dependencies, integrations, decisions, constraints, or technical debt changed.
6. If they did, update the relevant `docs/ai-context/` files in the same task, including `CURRENT_STATE.md` when current behavior or architecture materially changes.
7. Avoid documentation churn for styling, copy, and other changes that do not affect system understanding.
8. Never document assumptions as facts. Keep context concise and avoid duplication.
9. Finish meaningful tasks with this short handoff:

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

Default reading order: `AGENTS.md` -> `docs/ai-context/CURRENT_STATE.md` -> relevant source -> only relevant deeper context.
