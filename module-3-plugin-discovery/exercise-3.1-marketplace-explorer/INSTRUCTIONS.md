# Exercise 3.1 -- Marketplace Explorer

**Extensibility Layer: Plugins** -- Evaluate plugins from the marketplace based on workflow fit.

## Goal

Learn to survey the Claude Code plugin marketplace and make informed decisions about which plugins to install for a specific project. The "build vs. buy" decision starts with knowing what already exists.

## What You Have

- `workflow-needs.md` -- Five specific workflow needs for a new project
- `evaluation-template.md` -- A template for your Plugin Evaluation Matrix

## Your Tasks

> **Note**: The plugin marketplace evolves over time. If no plugin matches a workflow need, that's a valid finding — recommend "Build Custom" and describe what you'd create. The evaluation PROCESS matters more than finding a perfect match.

### Step 1: Review the Workflow Needs

Read `workflow-needs.md` carefully. Each need describes a concrete workflow problem that might be solved by an existing plugin.

### Step 2: Survey the Marketplace

For each workflow need:

1. Run `/plugin` in Claude Code and browse the Discover tab
2. Search for plugins that match the need
3. Read the plugin descriptions and check what components they include
4. Note: some needs may have multiple matching plugins, some may have none

### Step 3: Create the Evaluation Matrix

Fill in the evaluation template for each workflow need:

| Need | Plugin Found | Capabilities Match  | Scope Fit      | Maintenance    | Recommendation       |
| ---- | ------------ | ------------------- | -------------- | -------------- | -------------------- |
| 1    | [name]       | [full/partial/none] | [user/project] | [active/stale] | [install/build/skip] |

### Step 4: Write Recommendations

For each workflow need, write a 2-3 sentence recommendation:

- **Install**: Which plugin and at what scope
- **Build Custom**: What you'd need to create (skill? hook? full plugin?)
- **Skip**: Why the need isn't worth addressing now

### Step 5: Create a Decision Framework

Write a reusable "Plugin Decision Framework" document that any team member can follow when evaluating plugins for future projects.

## Reflection

- How many of the 5 needs had existing plugin solutions?
- What criteria mattered most in your evaluation: features, maintenance, or trust?
- When is it better to build a custom skill vs. install a plugin?
- How would your evaluation change if the project were for a team of 10?
