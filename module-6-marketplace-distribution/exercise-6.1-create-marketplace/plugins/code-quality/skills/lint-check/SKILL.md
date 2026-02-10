---
name: lint-check
description: Run linting checks and summarize issues by severity
---

# Lint Check Skill

Run the project's linter and produce a structured summary of issues grouped by severity.

## Steps

1. Detect the project type (package.json for JS/TS, pyproject.toml for Python)
2. Run the appropriate linter (eslint, ruff, etc.)
3. Parse the output and group by severity

## Output Format

```markdown
## Lint Report

### Errors (must fix)

- [file:line] [rule] [message]

### Warnings (should fix)

- [file:line] [rule] [message]

### Info (optional)

- [file:line] [rule] [message]

**Summary:** X errors, Y warnings, Z info
```
