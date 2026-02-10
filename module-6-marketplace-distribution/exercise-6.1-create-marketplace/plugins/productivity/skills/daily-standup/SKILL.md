---
name: daily-standup
description: Generate a daily standup report from recent git activity
---

# Daily Standup Report

Read the git log for the past 24 hours and generate a structured standup report.

## Output Format

```markdown
## Standup Report - [Date]

### Yesterday

- [Completed work items from git log]

### Today

- [Planned work based on open branches and recent context]

### Blockers

- [Any identified blockers or issues]
```

Run `git log --since="24 hours ago" --oneline --author="$(git config user.name)"` to get recent activity.
