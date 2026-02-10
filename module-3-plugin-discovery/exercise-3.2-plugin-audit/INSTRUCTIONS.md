# Exercise 3.2 -- Plugin Audit

**Extensibility Layer: Plugins** -- Audit a project's plugin setup and fix redundancy, conflicts, and scope issues.

## Goal

Diagnose four problems in a project's plugin setup: two redundant plugins, one settings conflict, and one wrong-scope installation. Fix each issue and create an audit checklist for future projects.

## What You Have

- `installed-plugins.md` -- The current list of installed plugins with their scopes and descriptions
- `project-settings.json` -- The project's settings file that one plugin conflicts with
- `plugin-conflict-symptoms.md` -- Symptoms the team is experiencing from the broken setup

## Your Tasks

### Step 1: Identify the Redundant Plugins

Read `installed-plugins.md` and identify the two plugins with overlapping capabilities. For each pair:

- What capabilities overlap?
- Which plugin is better for this project and why?
- What would happen if both remain installed?

### Step 2: Find the Settings Conflict

One installed plugin has a configuration that contradicts the project settings. Compare `installed-plugins.md` with `project-settings.json` to find:

- Which plugin conflicts?
- What setting does it override?
- How should the conflict be resolved?

### Step 3: Fix the Scope Issue

One plugin is installed at the wrong scope. Read the symptoms in `plugin-conflict-symptoms.md` to identify:

- Which plugin is at the wrong scope?
- What scope should it be at?
- Why does the current scope cause problems?

### Step 4: Write the Fixes

For each issue, document the fix:

| Issue        | Plugin(s)     | Problem            | Fix Command                                              |
| ------------ | ------------- | ------------------ | -------------------------------------------------------- |
| Redundancy 1 | [name + name] | [overlap]          | `/plugin uninstall [name]@[source]`                      |
| Redundancy 2 | [name + name] | [overlap]          | `/plugin uninstall [name]@[source]`                      |
| Conflict     | [name]        | [setting conflict] | [describe resolution]                                    |
| Wrong Scope  | [name]        | [scope issue]      | `/plugin uninstall` + `/plugin install` at correct scope |

### Step 5: Create a Plugin Audit Checklist

Write a reusable checklist for auditing any project's plugin setup:

- Redundancy detection
- Settings conflict detection
- Scope verification
- Plugin health check

## Reflection

- How did the redundant plugins get installed? What process would prevent this?
- Why do settings conflicts between plugins and project settings cause confusing behavior?
- What's the cost of having too many plugins installed?
- How often should a team audit their plugin setup?
