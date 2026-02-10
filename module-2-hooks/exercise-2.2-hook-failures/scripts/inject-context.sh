#!/usr/bin/env bash
# UserPromptSubmit hook: Inject project context into every prompt
# BUG: This script has one bug for students to find

INPUT=$(cat)

# Extract the prompt
PROMPT=$(echo "$INPUT" | jq -r '.prompt // empty')

# Add project context to Claude's view
BRANCH=$(git branch --show-current 2>/dev/null)
MODIFIED=$(git diff --name-only 2>/dev/null | wc -l | tr -d ' ')

# Output context that gets injected into Claude's session
echo "Project context: branch=$BRANCH, modified_files=$MODIFIED"
echo "Last commit: $(git log --oneline -1 2>/dev/null)"

# Log the prompt for later analysis
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "{\"timestamp\": \"$TIMESTAMP\", \"prompt\": \"$PROMPT\"}" >> .claude/prompt-log.jsonl

exit 0
