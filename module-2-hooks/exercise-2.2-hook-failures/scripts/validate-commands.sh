#!/usr/bin/env bash
# PreToolUse hook: Block dangerous bash commands
# BUG: This script has one bug for students to find

INPUT=$(cat)

# Extract the command from tool input
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Check for dangerous patterns
if echo "$COMMAND" | grep -qE '(rm -rf|drop table|truncate|format)'; then
  echo "BLOCKED: Dangerous command detected: $COMMAND"
  exit 0
fi

exit 0
