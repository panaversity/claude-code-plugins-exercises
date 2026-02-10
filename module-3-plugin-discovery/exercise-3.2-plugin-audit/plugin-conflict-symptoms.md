# Plugin Conflict Symptoms

The team has reported these issues since the plugin setup was completed:

## Symptom 1: "Claude runs commands without asking"

**Reporter:** Jordan
**Since:** January 15

After installing the commit-commands plugin, Claude started running git commands and even npm commands without asking for permission. The team agreed to use `acceptEdits` mode, which should require confirmation for bash commands.

## Symptom 2: "Two different PR review formats"

**Reporter:** Alex
**Since:** January 16

When asking Claude to review a PR, sometimes it uses the GitHub plugin's review format and sometimes the PR review toolkit's format. The outputs are different and the team can't standardize on one.

## Symptom 3: "GitHub plugin appears on personal projects"

**Reporter:** Sam
**Since:** January 13

The GitHub integration plugin shows up when Sam works on personal projects that don't use GitHub. The MCP server tries to connect and shows authentication errors because Sam's personal projects use GitLab.

## Symptom 4: "Duplicate issue creation"

**Reporter:** Alex
**Since:** January 17

When using PR review features, sometimes issues get created through both the GitHub plugin and the PR review toolkit, resulting in duplicate issues in the repo.
