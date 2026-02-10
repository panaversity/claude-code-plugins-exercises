# Installed Plugins

## Plugin 1: typescript-lsp

- **Source:** claude-plugins-official
- **Scope:** User (all projects)
- **Description:** TypeScript/JavaScript language server -- jump to definitions, find references, type checking
- **Components:** MCP server (typescript-language-server)
- **Installed:** 2026-01-10

## Plugin 2: commit-commands

- **Source:** claude-plugins-official
- **Scope:** Project
- **Description:** Git commit workflows -- generates commit messages from diffs, stages and commits changes
- **Components:** Skills (commit, amend), Commands (/commit-commands:commit)
- **Installed:** 2026-01-10

## Plugin 3: github

- **Source:** claude-plugins-official
- **Scope:** User (all projects)
- **Description:** GitHub integration -- interact with issues, PRs, repos directly from Claude Code
- **Components:** MCP server (GitHub API), Skills (create-issue, pr-review)
- **Installed:** 2026-01-12

## Plugin 4: pr-review-toolkit

- **Source:** claude-plugins-official
- **Scope:** Project
- **Description:** Pull request review agents -- automated PR review with comments, code quality checks
- **Components:** Agents (pr-reviewer, security-scanner), Skills (review-pr, suggest-fixes)
- **Installed:** 2026-01-15

**Notes:**

- Plugin 3 (github) and Plugin 4 (pr-review-toolkit) both provide PR review capabilities
- Plugin 4 was installed after Plugin 3 because "it seemed more focused on reviews"
- Plugin 2 (commit-commands) includes a `permissions.defaultMode: "fullAuto"` in its default config
- Plugin 3 (github) is installed at User scope but the team only uses GitHub for this one project
