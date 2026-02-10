# Exercise 2.2 -- Hook Failures

**Extensibility Layer: Hooks** -- Debug a broken hooks configuration with exactly 5 bugs.

## Goal

Find and fix 5 bugs in a hooks setup where nothing works correctly. The PreToolUse hook doesn't fire, the PostToolUse hook runs on the wrong events, and the UserPromptSubmit hook crashes silently.

## What You Have

- `broken-hooks.json` -- The hooks configuration with bugs (would be in `.claude/settings.json`)
- `scripts/validate-commands.sh` -- PreToolUse hook script (has a bug)
- `scripts/format-on-save.sh` -- PostToolUse hook script (correct)
- `scripts/inject-context.sh` -- UserPromptSubmit hook script (has a bug)
- `hook-events-reference.md` -- Quick reference for valid hook event names and fields

## Your Tasks

### Step 1: Identify All 5 Bugs

Read through `broken-hooks.json` and the hook scripts. There are exactly 5 bugs. For each one:

| Bug # | Location    | What's Wrong  | Why It Fails            |
| ----- | ----------- | ------------- | ----------------------- |
| 1     | [file:line] | [description] | [technical explanation] |
| 2     | [file:line] | [description] | [technical explanation] |
| 3     | [file:line] | [description] | [technical explanation] |
| 4     | [file:line] | [description] | [technical explanation] |
| 5     | [file:line] | [description] | [technical explanation] |

### Step 2: Fix Each Bug

Create `fixed-hooks.json` and fixed script versions. For each fix, explain what you changed and why.

### Step 3: Test Each Hook

For each fixed hook, describe how you would test it:

1. What stdin input would you pipe to the script?
2. What output do you expect?
3. What exit code do you expect?

Example test command:

```bash
echo '{"tool_name": "Bash", "tool_input": {"command": "rm -rf /"}}' | bash scripts/validate-commands.sh
```

### Step 4: Write a Hook Debugging Checklist

Create a reusable checklist for debugging hooks:

- Configuration checks (JSON syntax, event names, matcher patterns)
- Script checks (executable permissions, shebang line, exit codes)
- Integration checks (stdin/stdout, error handling)

## Reflection

- Which bug was hardest to find? Why?
- Why do hooks fail silently instead of showing errors?
- How would you add error logging to hooks so failures are visible?
- What's the difference between a hook configuration bug and a hook script bug?
