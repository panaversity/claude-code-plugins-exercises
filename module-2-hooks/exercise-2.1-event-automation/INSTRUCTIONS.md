# Exercise 2.1 -- Event Automation

**Extensibility Layer: Hooks** -- Build hooks that guarantee consistent behavior across all Claude Code sessions.

## Goal

Create three hooks that solve three real workflow problems: preventing dangerous edits, automating formatting, and logging prompts. Each hook uses a different event type and demonstrates a different hook pattern.

## What You Have

- `hooks-template.json` -- A starter template showing the hooks configuration structure
- `project/` -- A sample project directory with source files you'll be working with
- `scripts/` -- Empty directory where you'll create your hook scripts

## Your Tasks

### Step 1: Safety Hook (PreToolUse -- Block)

Create a PreToolUse hook that **blocks** Claude from editing `.env` files.

Requirements:

- Matcher: targets `Write` and `Edit` tools
- Script receives JSON via stdin with `tool_input` containing the file path
- If the file path contains `.env`, exit with code `2` and print an error message
- For all other files, exit with code `0` (allow the operation)

Create the script at `scripts/block-env-edits.sh` and configure it in your hooks JSON.

**Test it:** Try asking Claude to edit a `.env` file -- it should be blocked.

### Step 2: Quality Hook (PostToolUse -- Format)

Create a PostToolUse hook that runs a formatter after Claude edits files.

Requirements:

- Matcher: targets `Write` and `Edit` tools
- Script checks the file extension of the edited file
- For `.js` and `.ts` files: runs `npx prettier --write <filepath>`
- For `.py` files: runs `ruff format <filepath>` (if ruff is installed)
- For other files: does nothing
- Always exits with code `0`

Create the script at `scripts/auto-format.sh` and configure it.

### Step 3: Logging Hook (UserPromptSubmit -- Log)

Create a UserPromptSubmit hook that logs every prompt with a timestamp.

Requirements:

- Receives JSON with a `prompt` field via stdin
- Extracts the prompt text using `jq`
- Appends a JSON log line to `project/.claude/activity-logs/prompts.jsonl`
- Creates the log directory if it doesn't exist
- Always exits with code `0`

Create the script at `scripts/log-prompt.sh` and configure it.

### Step 4: Combine and Test

Create a complete `.claude/settings.json` that configures all three hooks together. Test each hook:

1. Try editing a `.env` file (should be blocked)
2. Edit a `.js` file (should be auto-formatted after save)
3. Submit a prompt (should appear in the log file)

## Reflection

- What's the difference between a hook that blocks (exit 2) and one that logs (exit 0)?
- Why is a formatting hook more reliable than telling Claude "always run prettier"?
- What happens if a hook script crashes? Does it block Claude or fail silently?
- What other workflows could you automate with hooks?
