# Internal Marketplace: acme-corp-plugins

## acme-test-standards

- **Version:** 2.1.0
- **Components:** Skills (generate-tests, validate-test-structure), Hooks (PreToolUse: enforce test naming, PostToolUse: run coverage after test edits), Agents (test-reviewer)
- **Last Updated:** 2026-02-05
- **Author:** @acme-platform-team
- **Description:** Company-standard test generation following ACME Corp testing guidelines. Enforces naming conventions, directory structure, and minimum coverage requirements. Includes a test review agent.
- **Downloads:** Internal only (85 installs across 12 teams)
- **Note:** Maintained by platform team with SLA. Updated weekly. Requires ACME test config in project root. Only works with Jest (no Vitest support).

## acme-ci-bridge

- **Version:** 1.3.0
- **Components:** MCP server (Jenkins API), Skills (check-pipeline, trigger-build)
- **Last Updated:** 2026-01-20
- **Author:** @acme-devops
- **Description:** Bridge between Claude Code and ACME Corp CI/CD pipeline. Not directly related to testing but can trigger test runs.
- **Downloads:** Internal only (60 installs)
