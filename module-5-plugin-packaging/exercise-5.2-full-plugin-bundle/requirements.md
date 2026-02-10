# Team Productivity Plugin Requirements

## Context

A three-person development team wants a single plugin that standardizes their daily workflows. Currently, each team member has their own ad-hoc approach to standup reports, PR descriptions, and sprint retros. The plugin should make these workflows consistent and automated.

## Required Skills

### 1. Standup Report (`standup-report`)

- Reads recent git log (last 24 hours) for the current user
- Summarizes: what was done, what's in progress, any blockers
- Output format: structured markdown with sections for Yesterday/Today/Blockers
- Should work with any git repository

### 2. PR Summary (`pr-summary`)

- Reads the diff between current branch and main
- Generates a PR description with: summary, changes list, testing notes
- Should follow the team's PR template format
- Include the number of files changed and lines added/removed

### 3. Sprint Retro (`sprint-retro`)

- Reads git log for the past 7 days (all authors)
- Summarizes: what went well, what could improve, action items
- Groups by author for individual contributions
- Output format: structured markdown suitable for team meeting

## Required Hooks

### 1. Auto-Format (`auto-format`)

- Event: PostToolUse
- Matcher: Write|Edit
- Behavior: Run prettier on JS/TS files, ruff on Python files
- Exit code: always 0 (non-blocking)

### 2. Activity Logger (`log-activity`)

- Event: UserPromptSubmit
- Behavior: Log each prompt with timestamp to `.claude/activity-log.jsonl`
- Purpose: Track team activity for sprint retro generation
- Exit code: always 0 (non-blocking)

## Plugin Metadata

- Name: `team-productivity`
- Version: `1.0.0`
- Description: "Daily workflow automation for development teams"
- Author: your name

## Quality Requirements

- All skills should have clear YAML frontmatter
- Hook scripts must handle missing dependencies gracefully (e.g., if prettier isn't installed)
- README should include installation instructions for both user and project scope
