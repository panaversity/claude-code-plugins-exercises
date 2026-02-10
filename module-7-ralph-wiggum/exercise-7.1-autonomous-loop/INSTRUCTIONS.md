# Exercise 7.1 -- Autonomous Loop

**Extensibility Layer: Ralph Wiggum Loop** -- Run your first autonomous iteration loop with proper safety guardrails.

## Goal

Set up and execute a Ralph Wiggum Loop to fix ESLint errors in a project autonomously. Learn to design completion promises, set safety limits, and monitor loop progress.

## What You Have

- `project/` -- A JavaScript project with 23 deliberate ESLint errors across 8 files
- `eslint-baseline.md` -- The initial ESLint output showing all 23 errors

## Prerequisites

- Ralph Wiggum plugin installed (`/plugin install ralph-loop@claude-plugins-official`)
- ESLint installed in the project (`npm install`)

> **Setup check**: Run `cd project && npm install && npx eslint src/ --format compact` before starting. You should see 23 errors. If ESLint is not installed or errors differ from `eslint-baseline.md`, resolve the setup issue first.

## Your Tasks

### Step 1: Understand the Errors

Run ESLint on the project and confirm the error count:

```bash
npx eslint src/ --format compact
```

Compare with `eslint-baseline.md` to verify you see the same 23 errors.

### Step 2: Design Your Completion Promise

Choose one approach:

**Approach A -- Natural Output:**

```
--completion-promise "0 problems"
```

This relies on ESLint's output format. Test it: does ESLint output "0 problems" when there are no errors?

**Approach B -- Embedded Promise (Recommended):**

```
Output <promise>LINT_CLEAN</promise> when all ESLint errors are resolved.
--completion-promise "LINT_CLEAN"
```

This is more reliable because you control the exact completion signal.

### Step 3: Set Safety Guardrails

- `--max-iterations 15` (23 errors should resolve in 8-12 iterations)
- Create a git branch: `git checkout -b eslint-cleanup`
- Commit current state: `git commit -am "Checkpoint before Ralph Loop"`

### Step 4: Run the Loop

```bash
/ralph-loop "Fix all ESLint errors in src/:
- Run npx eslint src/ to see current errors
- Fix errors file by file
- Re-run ESLint after each file to verify fixes
- Do not change any program behavior, only fix lint errors
Output <promise>LINT_CLEAN</promise> when eslint reports 0 problems." \
--max-iterations 15 \
--completion-promise "LINT_CLEAN"
```

### Step 5: Monitor Progress

While the loop runs, observe:

- How many iterations does it take?
- Does the error count decrease consistently?
- Does Claude fix one file at a time or jump around?

### Step 6: Review Results

After the loop completes (or hits max iterations):

1. Run `npx eslint src/` to verify all errors are fixed
2. Run `git diff` to see what changed
3. Check that the program still works (no behavioral changes)

## Important Constraint

If the loop hits 15 iterations without completing, DON'T just increase the limit. Instead:

1. Cancel with `/cancel-ralph`
2. Check what's still failing
3. Diagnose why: is the completion promise wrong? Is Claude stuck on a specific error?

## Reflection

- How did the completion promise affect loop behavior?
- What would happen if you used a vague promise like "everything is fixed"?
- How does `--max-iterations` protect against runaway costs?
- When would you use Approach A (natural output) vs. Approach B (embedded promise)?
