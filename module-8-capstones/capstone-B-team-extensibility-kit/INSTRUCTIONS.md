# Capstone B -- Team Extensibility Kit

**Integration of Settings Hierarchy, Hooks, Plugins, and Automation for a Real Team**

## Goal

Design the complete extensibility setup for a three-person development team working on a shared project. Every extensibility layer -- settings, hooks, plugins, and Ralph Wiggum automation -- must work together as a cohesive system.

## The Scenario

You are the tech lead for a team building a Node.js API. Your team:

- **Morgan (backend lead)**: Prefers concise output, uses Opus model, works on `src/api/` and `src/services/`. Needs strict type checking and database migration safety.
- **Riley (frontend developer)**: Prefers verbose output, uses Sonnet model, works on `src/components/` and `src/pages/`. Needs CSS formatting hooks and component generation skills.
- **Casey (DevOps engineer)**: Needs local overrides for staging/production testing. Works on `infrastructure/`, `docker/`, and CI/CD configs. Must never accidentally modify production configs from development.

The team agrees on:

- No secrets in code (enforced, not just agreed)
- Conventional commits required
- All PRs must have tests
- Code formatting on save

## Your Task

### Phase 1: Settings Architecture

Design and create settings at all three levels:

1. **User settings** (`~/.claude/settings.json`): Create three versions -- one per team member reflecting their personal preferences (model, output style, default permissions)

2. **Project settings** (`.claude/settings.json`): Team-wide agreements -- allowed tools, denied patterns (no `rm -rf`, no force push to main), shared permissions

3. **Local settings** (`.claude/settings.local.json`): Create Casey's local overrides for staging environment testing -- different allowed commands, environment-specific paths

Produce: `settings/` directory with all settings files, plus `settings/RATIONALE.md` explaining every decision.

### Phase 2: Hooks System

Create a complete hooks configuration:

1. **PreToolUse hooks**:
   - Block `.env` file edits (security)
   - Block `git push --force` to main (safety)
   - Block database migration commands without explicit flag (safety)

2. **PostToolUse hooks**:
   - Auto-format with Prettier after file writes to `src/` (quality)
   - Run ESLint check after JavaScript/TypeScript modifications (quality)

3. **UserPromptSubmit hooks**:
   - Log all prompts to `.claude/prompt-log.jsonl` with timestamps (observability)

4. **Stop hooks** (for Ralph Wiggum integration):
   - Check if current task has a completion promise
   - If yes, verify the promise is met before allowing exit

Produce: `hooks/hooks.json` plus all scripts in `hooks/scripts/`.

### Phase 3: Plugin Selection and Installation

1. Survey available plugins for the team's needs:
   - Git workflow (commits, PRs, branching)
   - Code quality (linting, formatting, type checking)
   - Testing (test generation, coverage tracking)

2. Create a recommendation document comparing at least 2 options per need

3. Write installation instructions specifying the correct scope for each:
   - Which plugins go at user scope (personal tools)?
   - Which go at project scope (team standards)?

Produce: `plugins/recommendations.md` with analysis and `plugins/install-guide.md` with commands.

### Phase 4: Custom Team Plugin

Build a `team-standards` plugin that bundles team-specific assets:

1. **Skills**:
   - `pr-template`: Generates a PR description from staged changes
   - `onboarding-checklist`: Generates setup checklist for new team members
   - `sprint-standup`: Generates standup report from recent git activity

2. **Hooks**:
   - Conventional commit message validation (PreToolUse on Bash matcher for `git commit`)
   - Test file existence check before PR creation

3. **Plugin manifest** (`plugin.json`) with proper metadata

Produce: `plugins/team-standards/` with the complete plugin.

### Phase 5: Automation Patterns

Design Ralph Wiggum Loop configurations for common team tasks:

1. **Lint-fix loop**: Fix all ESLint errors in a project
   - Task description, completion promise, max-iterations
   - Expected iteration count, cost estimate

2. **Test-coverage loop**: Increase test coverage to target percentage
   - Task description, completion promise, max-iterations
   - Explain why this one is harder to promise

3. **Migration loop**: Apply and verify database migrations
   - Task description, completion promise, max-iterations
   - Document the safety concerns specific to this use case

Produce: `automation/ralph-patterns.md` with all three configurations.

### Phase 6: Onboarding Documentation

Write the team onboarding guide that a new developer would follow:

1. Install prerequisites (Claude Code, required plugins)
2. Clone the repo and set up local environment
3. Configure personal settings (link to templates)
4. Verify hooks are working (test each hook)
5. Run a test Ralph Loop to confirm automation works
6. Troubleshooting section for common setup issues

Produce: `ONBOARDING.md` at the project root.

## Deliverables

1. `settings/` -- All settings files with rationale document
2. `hooks/hooks.json` + `hooks/scripts/` -- Complete hooks system
3. `plugins/recommendations.md` -- Plugin evaluation and recommendations
4. `plugins/install-guide.md` -- Scoped installation instructions
5. `plugins/team-standards/` -- Custom team plugin (packaged and tested)
6. `automation/ralph-patterns.md` -- Ralph Loop configurations for 3 tasks
7. `ONBOARDING.md` -- New developer setup guide

## Estimated Time

2-4 hours

## Reflection

After completing the kit:

- Which extensibility layer provides the most value for the least setup effort?
- Where do settings, hooks, and plugins overlap -- and how do you avoid redundancy?
- How would this kit change for a 10-person team vs. a 3-person team?
- What's the maintenance cost of this extensibility kit over 6 months?
