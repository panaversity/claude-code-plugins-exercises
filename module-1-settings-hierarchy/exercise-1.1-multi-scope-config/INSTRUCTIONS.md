# Exercise 1.1 -- Multi-Scope Configuration

**Extensibility Layer: Settings Hierarchy** -- Configure Claude Code's three-level settings system for team collaboration.

## Goal

Learn to design and create settings at all three levels (user, project, local) with correct precedence for a realistic team scenario.

## What You Have

- `team-profiles/` -- Three developer profiles describing each team member's preferences and role
- `project-requirements.md` -- The team's agreed-upon standards for this project
- `settings-template.json` -- A starter template showing available Claude Code settings options

## Your Tasks

### Step 1: Understand the Team

Read the three developer profiles and the project requirements. Note where personal preferences conflict with team standards.

### Step 2: Design User Settings

For each team member, create a `user-settings.json` that captures their personal preferences. These would go in `~/.claude/settings.json` on each person's machine.

Consider: What preferences are personal (output style, model choice, verbosity) vs. what should be standardized at the project level?

### Step 3: Create Project Settings

Create a `.claude/settings.json` file that enforces the team's agreed standards. This file will be committed to git so every team member gets the same standards.

Include:

- Permission rules (what Claude can/cannot modify)
- Denied operations (e.g., reading `.env` files)
- Allowed tool patterns (e.g., `Bash(npm run test:*)`)

### Step 4: Create Local Override

Create a `.claude/settings.local.json` for one team member who needs temporary experimental settings for a feature branch they're working on.

### Step 5: Document the Hierarchy

Create a `SETTINGS-MAP.md` document that shows:

- Every setting and which level it's configured at
- Why each setting is at that level (not another)
- What happens when a new team member joins (what do they get automatically?)

## Reflection

- Which settings caused the most debate about which level they belong at?
- What would break if the project settings file were deleted?
- How does this hierarchy prevent the "works on my machine" problem?
- What settings should NEVER be at the project level? Why?
