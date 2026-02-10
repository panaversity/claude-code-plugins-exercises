# Exercise 6.1 -- Create Marketplace

**Extensibility Layer: Marketplace Distribution** -- Create a marketplace listing for your plugins.

## Goal

Create a plugin marketplace that lists two plugins, set up the directory structure, and configure it as a marketplace source in Claude Code.

## What You Have

- `plugins/productivity/` -- A pre-built productivity plugin with manifest
- `plugins/code-quality/` -- A pre-built code quality plugin with manifest

## Your Tasks

### Step 1: Understand Marketplace Structure

A marketplace is a directory (or git repository) containing:

```
my-marketplace/
+-- marketplace.json        <- Catalog listing all plugins
+-- productivity/           <- Plugin directory
|   +-- .claude-plugin/
|   |   +-- plugin.json
|   +-- skills/
+-- code-quality/           <- Plugin directory
    +-- .claude-plugin/
    |   +-- plugin.json
    +-- skills/
```

### Step 2: Create marketplace.json

Write a `marketplace.json` that lists both plugins:

```json
{
  "name": "my-team-plugins",
  "owner": {
    "name": "Your Name"
  },
  "plugins": [
    {
      "name": "productivity",
      "source": "./productivity",
      "description": "Daily workflow automation"
    },
    {
      "name": "code-quality",
      "source": "./code-quality",
      "description": "Code review and quality checks"
    }
  ]
}
```

### Step 3: Add as Local Marketplace

Register your marketplace as a source:

```
/plugin marketplace add ./plugins
```

### Step 4: Verify Discovery

1. Run `/plugin` and go to the Discover tab
2. Check that both plugins appear from your marketplace
3. Try installing one of them

### Step 5: Prepare for GitHub Distribution

Create a README for your marketplace explaining:

- What plugins are available
- How to add this marketplace as a source
- How to contribute a new plugin

## Reflection

- What's the difference between a marketplace and a plugin?
- Why would you create your own marketplace vs. just sharing plugin directories?
- What happens when two marketplaces list plugins with the same name?
- How would you organize a marketplace for a large organization with 20+ plugins?
