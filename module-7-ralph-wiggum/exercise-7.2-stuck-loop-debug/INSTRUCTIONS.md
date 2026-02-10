# Exercise 7.2 -- Stuck Loop Debug

**Extensibility Layer: Ralph Wiggum Loop** -- Diagnose why an autonomous loop got stuck and design the corrected configuration.

## Goal

Analyze an activity log from a Ralph Wiggum Loop that ran for 12 iterations without completing. Identify the root cause of the stuck loop and write the corrected loop configuration.

## What You Have

- `activity-log.md` -- Complete activity log showing all 12 iterations
- `original-command.md` -- The original `/ralph-loop` command that was used
- `project-context.md` -- Description of the project and what the loop was trying to do

## Your Tasks

### Step 1: Read the Activity Log

Read `activity-log.md` carefully. Track:

- What Claude attempted in each iteration
- When progress stopped (error count stopped decreasing)
- What error(s) kept repeating

### Step 2: Identify the Stuck Point

Answer these questions:

1. At which iteration did the loop get stuck?
2. What error repeated from that point?
3. Why couldn't Claude fix it?

### Step 3: Diagnose the Root Cause

The stuck loop has one primary root cause. Identify which category it falls into:

| Root Cause Category      | Symptoms                                       |
| ------------------------ | ---------------------------------------------- |
| Vague completion promise | Loop never recognizes it's done                |
| Non-deterministic output | Same fix applied, undone, reapplied            |
| Wrong task scope         | Error requires external action Claude can't do |
| Missing context          | Claude doesn't understand why the fix fails    |
| Circular dependency      | Fix A breaks B, fix B breaks A                 |

### Step 4: Write the Corrected Command

Write the corrected `/ralph-loop` command that would avoid the stuck state:

- Better task description
- Better completion promise
- Appropriate max-iterations
- Any pre-conditions that should be met before starting

### Step 5: Create a Troubleshooting Checklist

Write a "Ralph Loop Troubleshooting Checklist" for common stuck-loop patterns:

```markdown
## When Your Loop Gets Stuck

### Quick Checks

- [ ] Is the error count decreasing between iterations?
- [ ] Is the same error repeating?
- [ ] Is Claude applying and reverting the same fix?

### Common Fixes

1. [Pattern] -> [Fix]
2. [Pattern] -> [Fix]
3. [Pattern] -> [Fix]
```

## Reflection

- Why is `--max-iterations` a safety net, not a success signal?
- What's the difference between a loop that's "slow" and one that's "stuck"?
- When should you cancel a loop vs. let it keep trying?
- How does the completion promise quality correlate with loop success?
