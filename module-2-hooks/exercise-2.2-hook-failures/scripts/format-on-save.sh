#!/usr/bin/env bash
# PostToolUse hook: Auto-format files after edits
# This script is CORRECT -- no bugs here

INPUT=$(cat)

# Extract the file path from tool input
FILEPATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Skip if no file path
[ -z "$FILEPATH" ] && exit 0

# Format based on extension
case "$FILEPATH" in
  *.js|*.ts|*.jsx|*.tsx)
    npx prettier --write "$FILEPATH" 2>/dev/null
    ;;
  *.py)
    ruff format "$FILEPATH" 2>/dev/null
    ;;
esac

exit 0
