---
name: code-review
description: Run a structured code review checklist on specified files
arguments:
  - name: files
    description: Files or directory to review
    required: true
  - name: focus
    description: Review focus area (security, performance, readability, all)
    required: false
    default: all
---

# Code Review Skill

Review the specified files using this structured checklist:

## Security Review

- [ ] No hardcoded secrets or credentials
- [ ] Input validation on all user-facing functions
- [ ] SQL queries use parameterized statements
- [ ] No eval() or dynamic code execution
- [ ] Error messages don't leak internal details

## Performance Review

- [ ] No unnecessary database queries in loops
- [ ] Large data sets are paginated
- [ ] Async operations are properly awaited
- [ ] No memory leaks (event listeners cleaned up)

## Readability Review

- [ ] Functions are under 50 lines
- [ ] Variable names are descriptive
- [ ] Complex logic has comments explaining "why"
- [ ] Consistent formatting throughout

## Output Format

For each file reviewed, produce:

```
FILE: [path]
ISSUES FOUND: [count]
SEVERITY: [high/medium/low]

1. [Line X] [SEVERITY] [Description]
   FIX: [Suggested fix]

2. [Line Y] [SEVERITY] [Description]
   FIX: [Suggested fix]
```
