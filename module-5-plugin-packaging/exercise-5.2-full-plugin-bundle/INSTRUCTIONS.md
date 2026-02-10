# Exercise 5.2 -- Full Plugin Bundle

**Extensibility Layer: Plugin Packaging** -- Build a complete plugin with skills, hooks, and MCP configuration.

## Goal

Create a "Team Productivity" plugin that bundles multiple component types: skills for common workflows, hooks for automation, and documentation. This is the full plugin packaging exercise.

## What You Have

- `requirements.md` -- The team's requirements for the productivity plugin
- No starter files -- you build everything from scratch

## Your Tasks

### Step 1: Review Requirements

Read `requirements.md` to understand what the Team Productivity plugin should include.

### Step 2: Create the Plugin Directory Structure

```
team-productivity/
+-- .claude-plugin/
|   +-- plugin.json
+-- skills/
|   +-- standup-report/
|   |   +-- SKILL.md
|   +-- pr-summary/
|   |   +-- SKILL.md
|   +-- sprint-retro/
|       +-- SKILL.md
+-- hooks/
|   +-- hooks.json
|   +-- auto-format.sh
|   +-- log-activity.sh
+-- README.md
```

### Step 3: Create the Skills

Build three skills based on the requirements:

1. **standup-report**: Generates a daily standup report from recent git activity
2. **pr-summary**: Creates a PR description from the current branch's changes
3. **sprint-retro**: Generates a sprint retrospective from the past week's activity

### Step 4: Create the Hooks

Build two hooks:

1. **auto-format**: PostToolUse hook that formats code after edits
2. **log-activity**: UserPromptSubmit hook that logs all prompts for activity tracking

Configure both in `hooks/hooks.json`.

### Step 5: Create the Manifest and README

Write `plugin.json` with all metadata and a `README.md` with:

- Plugin description
- Component list (skills, hooks)
- Installation instructions
- Usage examples

### Step 6: Test the Complete Bundle

Test each component:

1. Verify skills are accessible via namespace
2. Verify hooks fire on the correct events
3. Verify the README is accurate

## Reflection

- How do skills, hooks, and MCP configs interact within a plugin?
- What testing strategy works best for multi-component plugins?
- When would you split a large plugin into multiple smaller ones?
- How do you version a plugin when individual components change?
