# Exercise 4.2 -- Plugin Workflow Chain

**Extensibility Layer: Plugins** -- Chain multiple plugins into a repeatable development workflow.

## Goal

Combine multiple plugin capabilities into a single development workflow: analyze code, make improvements, and commit changes -- all using plugin commands. Then document the chain so any team member can replicate it.

## What You Have

- `project/` -- A TypeScript project with code quality issues (unused imports, missing types, inconsistent formatting)
- `workflow-scenario.md` -- Description of the development workflow you're building

## Your Tasks

### Step 1: Install Required Plugins

Install the plugins needed for this workflow:

1. `commit-commands` -- for git operations
2. Check if any other available plugins would help with the code quality workflow

### Step 2: Run the Workflow

Execute this development cycle using plugin commands:

1. **Analyze**: Ask Claude to identify all code quality issues in the project
2. **Fix**: Have Claude fix each issue (one at a time, verifying each fix)
3. **Commit**: Use `/commit-commands:commit` to commit each fix separately

### Step 3: Document the Chain

Create a CLAUDE.md section that describes this chained workflow:

```markdown
## Development Workflow (Plugin-Powered)

### Code Quality Cycle

1. [Step with plugin command]
2. [Step with plugin command]
3. [Step with plugin command]

### When to Use

[describe scenarios]

### Plugins Required

[list with installation commands]
```

### Step 4: Compare With and Without Plugins

Describe how this workflow would look WITHOUT plugins:

- What extra steps would be needed?
- What manual commands would replace plugin commands?
- How much time does the plugin chain save per cycle?

## Reflection

- How does documenting the workflow in CLAUDE.md help new team members?
- What's the maximum number of plugins you'd chain before it becomes complex?
- When is chaining plugins better than building a single custom plugin?
- How would you handle a workflow where one plugin step fails?
