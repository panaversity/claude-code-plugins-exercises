# Exercise 5.1 -- Package Skills Plugin

**Extensibility Layer: Plugin Packaging** -- Turn existing skills into an installable plugin.

## Goal

Package three existing skills (SKILL.md files) into a proper plugin with directory structure and manifest. The skills themselves don't change -- you're adding the structure that makes Claude Code recognize them as a plugin.

## What You Have

- `skills/code-review/SKILL.md` -- A skill for code review checklists
- `skills/code-review/examples/` -- Example inputs and outputs for the skill
- `skills/test-generator/SKILL.md` -- A skill for generating test cases
- `skills/doc-writer/SKILL.md` -- A skill for generating documentation

## Your Tasks

### Step 1: Review the Skills

Read each SKILL.md file and understand what it does. Note:

- What slash command does each skill use?
- What inputs does each skill expect?
- Are there any dependencies between the skills?

### Step 2: Create the Plugin Structure

Reorganize the files into the proper plugin directory layout:

```
team-devtools/
+-- .claude-plugin/
|   +-- plugin.json          <- You create this
+-- skills/
|   +-- code-review/
|   |   +-- SKILL.md
|   |   +-- examples/
|   +-- test-generator/
|   |   +-- SKILL.md
|   +-- doc-writer/
|       +-- SKILL.md
+-- README.md                <- You create this
```

### Step 3: Create the Plugin Manifest

Write `.claude-plugin/plugin.json` with all required fields:

```json
{
  "name": "team-devtools",
  "description": "...",
  "version": "1.0.0",
  "author": {
    "name": "Your Name"
  }
}
```

### Step 4: Test Locally

Test the plugin using the `--plugin-dir` flag:

```
claude --plugin-dir ./team-devtools
```

Verify each skill is accessible:

```
/team-devtools:code-review
/team-devtools:test-generator
/team-devtools:doc-writer
```

### Step 5: Document the Plugin

Create a `README.md` inside the plugin directory that explains:

- What the plugin does
- What skills it includes
- How to install it
- Example usage for each skill

## Key Insight

Packaging is about organization, not transformation. The skills themselves are identical -- you're adding a manifest and structure that tells Claude Code "this is a plugin." This separation of content from packaging is a fundamental pattern in software distribution.

## Reflection

- What's the minimum viable plugin? (How few files can you have?)
- How does namespacing (`/team-devtools:code-review`) prevent conflicts with other plugins?
- What would happen if two plugins had skills with the same name?
- When would you add hooks or MCP configs to this plugin?
