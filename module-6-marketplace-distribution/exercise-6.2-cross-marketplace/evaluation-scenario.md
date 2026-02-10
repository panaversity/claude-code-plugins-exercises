# Evaluation Scenario: Automated Testing Workflow

## Your Situation

You're working on a Node.js/TypeScript API project with 40 endpoints and growing. The team writes tests manually, but coverage is inconsistent (currently 45%). You want a plugin that helps generate and maintain tests automatically.

## Specific Requirements

1. **Test generation**: Given a function or endpoint, generate comprehensive test cases
2. **Coverage tracking**: Show which endpoints/functions lack tests
3. **Test maintenance**: When code changes, flag tests that might be outdated
4. **Framework support**: Must work with Jest or Vitest

## Constraints

- Budget: team can spend time on setup but not on maintaining a custom solution
- Security: plugin will have access to source code (no secrets in codebase)
- Timeline: need a solution within 1 week
