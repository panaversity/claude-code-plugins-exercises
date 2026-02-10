# Workflow Scenario: Code Quality Cycle

## The Situation

You've been handed a TypeScript project (in `project/`) with several code quality issues:

- Unused imports
- Missing type annotations
- Inconsistent formatting
- Dead code (unused functions)
- Missing input validation

## The Desired Workflow

You want to create a repeatable development cycle that uses plugins:

1. **Identify issues**: Have Claude scan the code for quality problems
2. **Fix one issue at a time**: Make each fix in isolation
3. **Commit each fix**: Use the commit-commands plugin for clean, atomic commits
4. **Verify**: After all fixes, verify the code still works

## Success Criteria

- Each code quality issue is fixed in a separate commit
- Commit messages are descriptive and follow conventional commit format
- The workflow is documented so any team member can repeat it
- Total workflow completes in under 30 minutes
