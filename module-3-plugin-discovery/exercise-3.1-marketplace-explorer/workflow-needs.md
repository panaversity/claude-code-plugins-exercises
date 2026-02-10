# Project Workflow Needs: TaskFlow API

You're starting a new TypeScript/Node.js API project with a three-person team. Here are five workflow gaps you've identified:

## Need 1: Code Intelligence

**Problem:** Claude doesn't know where functions are defined or what types they expect. When refactoring, it often guesses wrong about function signatures.

**Desired capability:** Jump-to-definition, find-all-references, type checking -- the same intelligence VS Code provides.

**Context:** TypeScript project, ~50 files, using Express + Prisma.

---

## Need 2: Git Workflow Automation

**Problem:** Creating commits is tedious: stage files, write a message, verify nothing was missed. The team wants Claude to handle the git workflow.

**Desired capability:** Automated commit message generation, staged change review, commit creation -- all without leaving Claude Code.

**Context:** Team uses conventional commits (feat:, fix:, docs:, etc.).

---

## Need 3: External Issue Tracking

**Problem:** The team tracks issues in GitHub Issues. Currently, team members manually copy issue details into Claude sessions. Claude has no direct access to issues.

**Desired capability:** Read GitHub issues, link commits to issues, create new issues from Claude Code.

**Context:** Public repo on GitHub, standard issue labels.

---

## Need 4: Code Review Assistance

**Problem:** Pull request reviews take 30-60 minutes each. The team wants Claude to do a first pass on PRs, flagging potential issues before human review.

**Desired capability:** PR review with comments, code quality checks, security scanning.

**Context:** Team does 3-5 PRs per week, mostly feature additions.

---

## Need 5: Custom Output Formatting

**Problem:** Claude's default output style doesn't match the team's documentation standards. They want all code explanations to follow a specific format: problem, solution, tradeoffs.

**Desired capability:** Consistent output formatting across all team members' sessions.

**Context:** Team has a style guide but enforcement is manual.
