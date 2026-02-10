# Hook Events Quick Reference

## Valid Event Names (Case-Sensitive)

| Event Name         | When It Fires            | Common Matchers                 |
| ------------------ | ------------------------ | ------------------------------- |
| `PreToolUse`       | Before a tool runs       | `Bash`, `Write`, `Edit`, `Read` |
| `PostToolUse`      | After a tool completes   | `Bash`, `Write`, `Edit`, `Read` |
| `UserPromptSubmit` | When user submits prompt | (no matcher needed)             |
| `SessionStart`     | Session begins           | (no matcher needed)             |
| `SessionEnd`       | Session closes           | (no matcher needed)             |
| `Stop`             | Claude about to exit     | (no matcher needed)             |

## Matcher Rules

- Matchers are **case-sensitive**: `Bash` works, `bash` does NOT
- Use `|` for OR: `Write|Edit` matches either tool
- Use `.*` for wildcards: `Notebook.*` matches all notebook tools
- Omit matcher or use `""` to match ALL tools for that event

## Exit Codes

| Exit Code | Meaning                        |
| --------- | ------------------------------ |
| `0`       | Success -- stdout is processed |
| `2`       | Block the action -- show error |
| Other     | Non-blocking warning           |

## Hook Script Requirements

- Must have `#!/usr/bin/env bash` shebang line
- Must be executable (`chmod +x script.sh`)
- Must read stdin (JSON input)
- Must produce output on stdout
- Must be invoked with `bash` prefix in command: `"bash scripts/name.sh"`

## JSON Input Fields

### PreToolUse / PostToolUse

```json
{
  "session_id": "abc123",
  "cwd": "/path/to/project",
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": {
    "command": "npm test",
    "description": "Run tests"
  }
}
```

### UserPromptSubmit

```json
{
  "session_id": "abc123",
  "prompt": "Help me fix the login bug"
}
```
