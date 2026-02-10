# Capstone A -- Full Plugin from Scratch

**Integration of Settings, Hooks, Plugins, and Marketplace**

## Goal

Build a complete "Code Review" plugin from nothing -- skills for review patterns, hooks for automated checks, marketplace entry for distribution. This capstone tests your ability to combine every extensibility layer into a single, working, distributable package.

## What You Build

A plugin called `code-review-toolkit` that includes:

- **3 skills**: PR review checklist, security audit, performance review
- **2 hooks**: PreToolUse (block commits without review), PostToolUse (auto-format review output)
- **1 MCP config**: Connection to your team's issue tracker (simulated)
- **Plugin manifest**: `plugin.json` with all metadata
- **Marketplace entry**: `marketplace.json` listing the plugin

## Your Task

### Phase 1: Design the Plugin

Before writing any code, design the plugin architecture:

1. List every component the plugin will include (skills, hooks, configs)
2. Define the directory structure
3. Write the `plugin.json` manifest with all required fields
4. Document how components interact (e.g., "the pre-commit hook checks if the review skill was run")

Produce: `design.md` with the complete plugin architecture.

**Expected structure:**

```
code-review-toolkit/
  .claude-plugin/
    plugin.json
  skills/
    pr-review/
      SKILL.md
    security-audit/
      SKILL.md
    performance-review/
      SKILL.md
  hooks/
    hooks.json
  scripts/
    block-unreviewed-commits.sh
    format-review-output.sh
  .mcp.json
  README.md
```

### Phase 2: Build the Skills

Create three skills with proper YAML frontmatter:

1. **PR Review** (`skills/pr-review/SKILL.md`): A checklist-based review that checks code quality, test coverage, documentation, and security. Should accept a file path or diff as input.

2. **Security Audit** (`skills/security-audit/SKILL.md`): Checks for common security issues -- hardcoded secrets, SQL injection patterns, missing input validation, insecure dependencies. Should output a structured report.

3. **Performance Review** (`skills/performance-review/SKILL.md`): Identifies performance concerns -- N+1 queries, missing indexes, unnecessary re-renders, large bundle imports. Should categorize findings by severity.

Each skill must include:

- YAML frontmatter (name, description, version)
- Clear instructions section
- Input/output format specification
- At least one example

### Phase 3: Build the Hooks

Create two hooks in `hooks/hooks.json`:

1. **Block Unreviewed Commits** (PreToolUse, matcher: "Bash"):
   - Intercepts `git commit` commands
   - Checks if a review artifact exists (e.g., `.reviews/last-review.md`)
   - Blocks the commit if no review was done (exit code 2)
   - Passes through if review exists (exit code 0)

2. **Format Review Output** (PostToolUse, matcher: "Write"):
   - Runs after any file write
   - If the written file is in `.reviews/`, formats it with consistent headers
   - Otherwise passes through

Write the corresponding shell scripts in `scripts/`.

### Phase 4: Create the Marketplace Entry

1. Create `marketplace.json` in the plugin root
2. Include all required fields: name, version, description, author, source
3. Add the plugin to a simulated marketplace directory
4. Document installation instructions

### Phase 5: Test Everything

Test each component individually, then test the integrated plugin:

1. **Skills test**: Invoke each skill and verify output format
2. **Hooks test**: Attempt a commit without review (should block), then with review (should pass)
3. **Integration test**: Run a full workflow -- review code, generate report, commit with review artifact
4. **Marketplace test**: Verify the plugin appears correctly in a marketplace listing

Produce: `test-results.md` documenting each test and its outcome.

### Phase 6: Write Documentation

Create `README.md` inside the plugin with:

- What the plugin does (1 paragraph)
- Installation instructions (2 methods: marketplace and manual)
- Usage guide for each skill
- Hook behavior documentation
- Troubleshooting section

## Deliverables

1. `design.md` -- Plugin architecture document
2. `code-review-toolkit/` -- Complete plugin directory with all components
3. `code-review-toolkit/README.md` -- User documentation
4. `test-results.md` -- Test evidence for all components
5. `marketplace.json` -- Marketplace listing

## Estimated Time

2-4 hours

## Reflection

After completing the plugin:

- Which component was hardest to get right -- skills, hooks, or the manifest?
- How would you handle plugin updates (versioning, backwards compatibility)?
- What would change if this plugin needed to work across 10 different team projects?
- How does the marketplace entry affect discoverability vs. just sharing a Git repo?
