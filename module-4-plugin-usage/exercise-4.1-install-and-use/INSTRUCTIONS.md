# Exercise 4.1 -- Install and Use

**Extensibility Layer: Plugins** -- Complete the full plugin lifecycle: discover, install, use, verify.

## Goal

Install a plugin from the official marketplace and use it on a real project. Experience the complete workflow from installation through verification.

## What You Have

- `project/` -- A small TypeScript project with uncommitted changes ready for a commit

## Your Tasks

### Step 1: Install the commit-commands Plugin

Install from the official marketplace:

```
/plugin install commit-commands@claude-plugins-official
```

Choose **User** scope so it's available across all projects.

### Step 2: Verify Installation

1. Run `/plugin` and go to the **Installed** tab
2. Confirm `commit-commands` appears in the list
3. Check what commands the plugin provides

### Step 3: Make a Change

Edit a file in the `project/` directory. Add a comment, fix a typo, or add a new function -- any small change.

### Step 4: Use the Plugin

Use the commit-commands plugin to commit your change:

```
/commit-commands:commit
```

Observe:

- How does the plugin generate the commit message?
- Does it stage the correct files?
- What does the commit look like in `git log`?

### Step 5: Document the Workflow

Create a `PLUGIN-WORKFLOW.md` documenting:

1. How you discovered the plugin
2. Installation command and scope choice
3. How to use the plugin's commands
4. How to verify it's working

## Bonus Challenge

Install a second plugin (e.g., `typescript-lsp` if you have TypeScript installed) and compare the installation experience. What's different about plugins that include MCP servers vs. pure skill/command plugins?

## Reflection

- How does the plugin namespace work (e.g., `/commit-commands:commit`)?
- What's the difference between user scope and project scope for this plugin?
- How would you recommend this plugin to a teammate?
- What happens if you uninstall the plugin -- do past commits change?
