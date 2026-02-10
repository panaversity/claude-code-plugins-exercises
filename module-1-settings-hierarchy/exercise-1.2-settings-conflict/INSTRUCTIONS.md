# Exercise 1.2 -- Settings Conflict

**Extensibility Layer: Settings Hierarchy** -- This exercise shows what happens when settings at different levels contradict each other.

## Goal

Debug unexpected Claude Code behavior by tracing through the three-level settings hierarchy. Find three separate conflicts where the active setting doesn't match what the developer expects.

## What You Have

- `user-settings.json` -- The developer's user-level settings (`~/.claude/settings.json`)
- `project-settings.json` -- The project-level settings (`.claude/settings.json`)
- `local-settings.json` -- The local-level settings (`.claude/settings.local.json`)
- `bug-reports.md` -- Three bug reports from the developer describing unexpected Claude behavior

## Your Tasks

### Step 1: Read the Bug Reports

Read `bug-reports.md` to understand the three symptoms the developer is experiencing.

### Step 2: Trace Each Conflict

For each bug report, trace through the settings hierarchy (local > project > user) to find which setting is actually active and why.

Create a table for each conflict:

| Level      | Setting Value            | Active? | Why?                     |
| ---------- | ------------------------ | ------- | ------------------------ |
| User       | `[value from user]`      | ?       | [precedence explanation] |
| Project    | `[value from project]`   | ?       | [precedence explanation] |
| Local      | `[value from local]`     | ?       | [precedence explanation] |
| **Result** | **`[what Claude uses]`** | --      | [final determination]    |

### Step 3: Fix Each Conflict

For each conflict, decide the correct fix:

- Should the developer change the local settings?
- Should the developer change the project settings?
- Should the developer remove a setting entirely?

Document your fix and explain why it's the right approach.

### Step 4: Write Prevention Rules

Create a `SETTINGS-HYGIENE.md` document with rules that prevent settings conflicts:

- When to check all three levels before changing a setting
- How to document why a setting is at a specific level
- A template for "settings changelog" entries

## Reflection

- Why is "just change the setting" not always the right fix?
- How would you discover these conflicts without the bug reports?
- What tool or command would help check active settings quickly?
- How does the `.gitignore` pattern for `settings.local.json` relate to these conflicts?
