# Claude Code Plugins & Extensibility: Exercise Guide

**A Hands-On Guide to Claude Code's Complete Extensibility System**

_By Panaversity -- Configure, Extend, Automate_

---

## How This Guide Works

Every exercise in this guide teaches one layer of Claude Code's extensibility system -- from configuring settings through building and distributing plugins to running autonomous iteration loops. These aren't abstract concepts. They are working configurations you build, test, and debug on real scenarios.

**The exercise pattern:**

Each module covers one extensibility layer with two exercises. Exercise X.1 is **Hands-on** -- you build or configure something real. Exercise X.2 is **Debug/Diagnose** -- you fix a broken configuration, audit a problematic setup, or analyze a failure.

**The three skills you'll develop:**

1. **Configuration architecture** -- Understanding how settings, hooks, and plugins layer together to create a complete extensibility system
2. **Plugin lifecycle mastery** -- From discovering existing plugins through creating and distributing your own
3. **Autonomous iteration design** -- Knowing when and how to use Ralph Wiggum Loop for self-correcting workflows

**Tool Guide:**

- Use **Claude Code** (terminal-based) for all exercises involving settings configuration, hook scripts, plugin installation, and Ralph Loop execution
- Use **Cowork** (desktop app) for exercises focused on evaluation, analysis, and marketplace research
- Most exercises work with either tool -- instructions note when one is strongly preferred

---

## Module 1: Settings Hierarchy

> **Core Skill:** Configure Claude Code's three-level settings hierarchy (user, project, local) with correct precedence for team collaboration.

### Exercise 1.1 -- Multi-Scope Configuration

**The Problem:**
A three-person development team needs to standardize Claude Code usage across their project while allowing personal preferences. Currently everyone has different settings and Claude behaves inconsistently across team members.

**Your Task:**

1. Review team member preference documents and project requirements
2. Create the user-level settings file (`~/.claude/settings.json`) for personal preferences
3. Create the project-level settings file (`.claude/settings.json`) for team standards
4. Create a local-level settings file (`.claude/settings.local.json`) for experimental overrides
5. Document which settings go at which level and why

**The Principle at Work:**
Settings hierarchy mirrors organizational structure: personal defaults, team agreements, and private experiments. The precedence order (local > project > user) ensures that specific context always wins over general defaults.

**What You'll Learn:**

- How to decide which settings belong at each level
- Why project settings should be committed to git but local settings should not
- The precedence rules that determine which setting wins when conflicts exist
- How settings hierarchy enables team collaboration without restricting individual preferences

---

### Exercise 1.2 -- Settings Conflict

**The Problem:**
A project where Claude behaves unexpectedly. The developer set `outputStyle` to `"Concise"` but Claude keeps responding with long, detailed explanations. Settings exist at multiple levels and something is overriding the developer's preference. Your job: trace through the hierarchy, find the conflict, and fix it.

**Your Task:**

1. Examine all three settings files and identify the conflicting values
2. Trace through the precedence order to determine which setting is actually active
3. Fix the settings so the developer gets their desired behavior
4. Document the precedence chain that caused the confusion

**The Twist:**
The conflict isn't just `outputStyle`. There are three separate settings conflicts across the hierarchy, each causing a different unexpected behavior. Finding all three requires understanding precedence at each level.

**What You'll Learn:**

- How to debug unexpected Claude behavior by checking settings at every level
- The most common configuration mistakes teams make with hierarchical settings
- Why documenting "why this setting is at this level" prevents future conflicts
- The debugging methodology: check local first, then project, then user

---

## Module 2: Hooks

> **Core Skill:** Create event-driven automation using Claude Code hooks to guarantee consistent behavior across all sessions.

### Exercise 2.1 -- Event Automation

**The Problem:**
Your team has three recurring issues: developers accidentally let Claude edit `.env` files, code doesn't get formatted after edits, and there's no record of what prompts were used in each session. You need hooks that prevent, automate, and log -- all without requiring developers to remember anything.

**Your Task:**

1. Create a PreToolUse hook that blocks edits to `.env` files (exits with code 2 to block)
2. Create a PostToolUse hook that runs a formatter after file edits
3. Create a UserPromptSubmit hook that logs every prompt with a timestamp
4. Configure all three hooks in `.claude/settings.json`
5. Test each hook to verify it works correctly

**The Principle at Work:**
Hooks turn "Claude should do X" into "Claude's environment guarantees X." The difference is reliability: instructions can be forgotten, but hooks execute every time the matching event fires.

**What You'll Learn:**

- The stdin/stdout pattern: hooks receive JSON input and produce text or JSON output
- How exit codes control behavior: 0 = success, 2 = block the action
- Matcher patterns for targeting specific tools (Bash, Write, Edit)
- The difference between "intercept" hooks (block/allow) and "notify" hooks (fire-and-forget)

---

### Exercise 2.2 -- Hook Failures

**The Problem:**
A developer set up hooks but none of them work correctly. The PreToolUse hook that should block dangerous commands doesn't fire. The PostToolUse hook runs on the wrong events. The UserPromptSubmit hook crashes silently. You have the broken `hooks.json` and the hook scripts -- find and fix every bug.

**Your Task:**

1. Examine the broken hooks configuration and identify all bugs
2. For each bug, explain why it fails and what the correct configuration should be
3. Fix each bug in the configuration and scripts
4. Test the fixed hooks to verify they work

**Important Constraint:**
There are exactly 5 bugs across the configuration and scripts. Find all five.

**What You'll Learn:**

- Common hook configuration mistakes (wrong event names, bad matchers, missing fields)
- How to test hooks manually using stdin piping
- The difference between configuration errors (silent failures) and script errors (crashes)
- Debugging methodology: test the script independently, then test the configuration

---

## Module 3: Plugin Discovery

> **Core Skill:** Evaluate and select plugins from the marketplace based on workflow fit, scope, and compatibility.

### Exercise 3.1 -- Marketplace Explorer

**The Problem:**
You have five specific workflow needs for a new project but don't know which plugins (if any) exist to address them. Before building custom solutions, you need to survey the marketplace and evaluate what's available.

**Your Task:**

1. Review the five workflow needs described in the scenario document
2. For each need, research the Claude Code plugin marketplace to find matching plugins
3. Create a "Plugin Evaluation Matrix" comparing your findings
4. Write a recommendation for each need: install existing plugin, build custom, or skip

**The Meta-Exercise:**
This exercise teaches you to research before building -- the same principle that prevents reinventing the wheel in software development.

**What You'll Learn:**

- How to navigate the official plugin marketplace using `/plugin`
- Plugin categories: code intelligence, external integrations, development workflows, output styles
- The "build vs. buy" decision framework for AI capabilities
- How to evaluate plugin fit based on your specific workflow requirements

---

### Exercise 3.2 -- Plugin Audit

**The Problem:**
A developer installed 4 plugins on a project but the setup has problems: 2 plugins are redundant (overlapping capabilities), 1 conflicts with project settings, and 1 is installed at the wrong scope. You need to audit the plugin setup and fix every issue.

**Your Task:**

1. Review the current plugin installation list and settings
2. Identify the 2 redundant plugins and recommend which to keep
3. Find the plugin that conflicts with project settings and resolve the conflict
4. Identify the wrong-scope plugin and reinstall at the correct scope
5. Write a "Plugin Audit Checklist" that prevents these issues for future projects

**What You'll Learn:**

- How plugin capabilities can overlap and create confusion
- How plugins interact with project settings (and when they conflict)
- Installation scopes (user/project/local) and when each is appropriate
- The importance of auditing plugin setups regularly

---

## Module 4: Plugin Usage

> **Core Skill:** Install, configure, and use plugins effectively as part of your development workflow.

### Exercise 4.1 -- Install and Use

**The Problem:**
You have a small TypeScript project that needs better code intelligence and git workflow automation. You'll install two plugins -- one for language server integration and one for commit workflows -- and verify both work correctly with a real codebase.

**Your Task:**

1. Install the `commit-commands` plugin from the official marketplace
2. Make a small change to the provided project
3. Use `/commit-commands:commit` to create a commit
4. Verify the commit was created correctly
5. Document the complete workflow: install, use, verify

**The Principle at Work:**
Plugins extend Claude Code's capabilities without custom configuration. The workflow is: discover, install, use, verify -- the same pattern for any plugin.

**What You'll Learn:**

- The complete plugin installation workflow
- How plugin commands are namespaced (e.g., `/commit-commands:commit`)
- How to verify a plugin is working correctly after installation
- The difference between user-scope and project-scope installation

---

### Exercise 4.2 -- Plugin Workflow Chain

**The Problem:**
Individual plugins are useful, but the real power comes from combining them. You need to create a development workflow that chains multiple plugin capabilities: analyze code, make changes, and commit -- all using plugin commands.

**Your Task:**

1. Install the plugins listed in the scenario
2. Use plugin commands to analyze the provided project
3. Make improvements based on the analysis
4. Commit the changes using the commit plugin
5. Document the chained workflow as a repeatable process

**The Challenge:**
Write a CLAUDE.md section that describes this chained workflow so any team member can replicate it without remembering the individual steps.

**What You'll Learn:**

- How multiple plugins compose into a workflow
- The value of documenting plugin chains in CLAUDE.md
- How plugin capabilities complement each other
- When chaining plugins is better than building a custom solution

---

## Module 5: Plugin Packaging

> **Core Skill:** Package Claude Code skills, hooks, and configurations into distributable plugins with proper manifest structure.

### Exercise 5.1 -- Package Skills Plugin

**The Problem:**
You have three working skills (SKILL.md files) that your team uses frequently. Currently they're copied manually between projects. You need to package them into a proper plugin so they can be installed with a single command.

**Your Task:**

1. Review the three provided skills and their current structure
2. Create the plugin directory structure with `.claude-plugin/plugin.json`
3. Move skills into the correct plugin layout
4. Test the plugin locally using `--plugin-dir`
5. Verify all three skills are accessible via the plugin namespace

**Key Insight:**
Packaging is just organization plus a manifest. The skills themselves don't change -- you're adding structure around them so Claude Code recognizes the bundle as a plugin.

**What You'll Learn:**

- The plugin directory structure (`.claude-plugin/`, `skills/`, root layout)
- The minimum viable `plugin.json` manifest (4 required fields)
- How to test plugins locally before distribution
- How namespacing works (`/plugin-name:skill-name`)

---

### Exercise 5.2 -- Full Plugin Bundle

**The Problem:**
A complete "Team Productivity" plugin needs skills, hooks, and an MCP server configuration bundled together. This is the full plugin packaging exercise -- everything you've learned about skills, hooks, and plugins combined into one distributable package.

**Your Task:**

1. Review the requirements for the Team Productivity plugin
2. Create skills for the three specified workflows
3. Write hooks that automate the team's standards
4. Add the MCP server configuration
5. Create the plugin manifest and directory structure
6. Test the complete bundle locally

**What You'll Learn:**

- How skills, hooks, agents, and MCP configs coexist in a plugin
- The full plugin directory layout for multi-component plugins
- Testing strategies for complex plugins (component-by-component, then integrated)
- Documentation requirements for team-facing plugins

---

## Module 6: Marketplace Distribution

> **Core Skill:** Create plugin marketplaces and distribute plugins to teams and the community.

### Exercise 6.1 -- Create Marketplace

**The Problem:**
You have two plugins ready to share with your team, but they need a marketplace to discover and install them easily. You need to create a marketplace listing, organize the directory structure, and configure it as a marketplace source.

**Your Task:**

1. Create the marketplace directory structure
2. Write a `marketplace.json` listing the two provided plugins
3. Add the plugins to the marketplace directory
4. Configure the marketplace as a source using `/plugin marketplace add`
5. Verify plugins appear in the Discover tab

**The Principle at Work:**
A marketplace is just a catalog -- a `marketplace.json` file that points to plugin directories. The infrastructure is simple; the value is in organization and discoverability.

**What You'll Learn:**

- The `marketplace.json` format and required fields
- How marketplace sources work (local, GitHub, GitLab)
- The relationship between plugins and marketplaces (apps vs. app store)
- How to test marketplace listings locally before publishing

---

### Exercise 6.2 -- Cross-Marketplace

**The Problem:**
You're evaluating plugins from three different marketplace sources (official Anthropic, a community marketplace, and a company-internal marketplace). Each has plugins that partially overlap. You need to compare them and recommend the best plugin for a specific need.

**Your Task:**

1. Review the three marketplace listings provided
2. Compare overlapping plugins across marketplaces
3. Evaluate each based on: feature fit, maintenance quality, scope, and trust level
4. Write a recommendation document with your analysis
5. Create a "marketplace evaluation framework" for future decisions

**What You'll Learn:**

- How to evaluate plugin quality across different sources
- Trust considerations: official vs. community vs. internal marketplaces
- Feature overlap resolution: when two plugins solve the same problem
- Documentation standards for plugin recommendations

---

## Module 7: Ralph Wiggum Loop

> **Core Skill:** Design and execute autonomous iteration loops with proper completion promises, safety guardrails, and cost awareness.

### Exercise 7.1 -- Autonomous Loop

**The Problem:**
You have a project with 23 ESLint errors across 8 files. Fixing them manually means: run ESLint, copy errors, paste to Claude, review fixes, run ESLint again -- repeated 6-8 times. Ralph Wiggum Loop can automate this entire cycle.

**Your Task:**

1. Review the provided project and count the ESLint errors
2. Design a completion promise (either natural output or embedded `<promise>` pattern)
3. Set appropriate `--max-iterations` based on error count
4. Execute the Ralph Loop and monitor progress
5. Review the results: verify all errors are fixed and no unintended changes were made

**Important Constraint:**
Start with `--max-iterations 15`. If the loop doesn't complete, analyze why before increasing the limit.

**What You'll Learn:**

- How to write effective completion promises (specific, objective, terminal)
- The `--max-iterations` safety mechanism and how to size it
- How Stop hooks intercept Claude's exit to reinject continuation prompts
- The difference between natural output promises and embedded `<promise>` markers
- Cost awareness: each iteration consumes API credits

---

### Exercise 7.2 -- Stuck Loop Debug

**The Problem:**
An activity log from a Ralph Wiggum Loop that ran for 12 iterations without completing. The same error repeats starting at iteration 5. The developer doesn't understand why the loop got stuck or how to fix it. You need to diagnose the root cause and design the corrected loop configuration.

**Your Task:**

1. Read the activity log and trace the loop's progress
2. Identify where the loop got stuck and what caused the repetition
3. Diagnose the root cause (vague completion promise? non-deterministic output? wrong task scope?)
4. Write the corrected `/ralph-loop` command with a better completion promise and guardrails
5. Create a "Ralph Loop Troubleshooting Checklist" for common stuck-loop patterns

**What You'll Learn:**

- Common Ralph Loop failure patterns: vague promises, non-deterministic output, scope creep
- How to read loop activity logs to diagnose issues
- The relationship between completion promise quality and loop success
- When to use embedded `<promise>` patterns vs. natural tool output
- Why `--max-iterations` is a safety net, not a success signal

---

## Module 8: Integration Capstones

> **Choose one. Spend real time on it. This is where everything comes together.**

### Capstone A -- Full Plugin from Scratch

**The Problem:**
Build a complete "Code Review" plugin that includes skills for review patterns, hooks for automated checks, and documentation for team adoption. Package it, test it, and create a marketplace entry.

**Your Task:**

1. Design the plugin: define skills, hooks, and configurations needed
2. Create each component: skills for review checklists, hooks for pre-commit checks
3. Write the plugin manifest (`plugin.json`)
4. Create marketplace entry (`marketplace.json`)
5. Test the complete plugin locally with `--plugin-dir`
6. Write user documentation explaining how to install and use the plugin

**Deliverables:**

- Working plugin directory with all components
- Plugin manifest and marketplace listing
- User documentation (README.md inside the plugin)
- Test results showing all components work together

**Estimated Time:** 2-4 hours

---

### Capstone B -- Team Extensibility Kit

**The Problem:**
Design the complete extensibility setup for a three-person development team working on a shared project. Each team member has different preferences but the team needs shared standards.

**Your Task:**

1. Design the settings hierarchy: user settings for each team member, shared project settings, local overrides
2. Create project hooks: formatting, safety checks, prompt logging
3. Create a recommended plugins list with installation instructions
4. Build a custom team plugin that bundles team-specific skills and hooks
5. Write onboarding documentation for new team members

**Deliverables:**

- Settings files for all three hierarchy levels
- Complete hooks configuration with scripts
- Plugin recommendation document
- Custom team plugin (packaged and tested)
- Team onboarding guide

**Estimated Time:** 2-4 hours

---

### Capstone C -- Your Workflow

**The Problem:**
Audit your own Claude Code workflow and identify what's missing from your extensibility setup.

**Your Task:**

1. **Audit**: Rate your current setup for each extensibility layer (settings, hooks, plugins, automation)
2. **Gaps**: Identify the 3 largest gaps in your extensibility setup
3. **Build**: Create the missing settings, hooks, or plugins for your top 3 gaps
4. **Test**: Run a real Claude session using your new extensibility setup
5. **Reflect**: Compare the session quality before and after

**Deliverables:**

- Extensibility audit scorecard (7 areas x 4-point scale)
- Gap analysis with prioritized improvements
- Implemented artifacts for top 3 gaps
- Before/after comparison from a real session
- Personal extensibility checklist for future projects

**Estimated Time:** 2-4 hours (depends on current setup)

---

## Assessment Rubric

For each exercise, evaluate yourself on:

| Criteria               |          Beginner (1)          |           Developing (2)            |                 Proficient (3)                 |                Advanced (4)                |
| ---------------------- | :----------------------------: | :---------------------------------: | :--------------------------------------------: | :----------------------------------------: |
| Settings Understanding |       Uses only defaults       |        Configured one level         |  Manages all 3 levels with correct precedence  | Designs team-wide configuration strategies |
| Hook Implementation    |      Cannot create hooks       |   Basic hooks, no error handling    | Multi-event hooks with matchers and exit codes | Production hooks with logging and testing  |
| Plugin Evaluation      |  Cannot navigate marketplace   |         Browses marketplace         |          Evaluates fit systematically          |  Creates evaluation frameworks for teams   |
| Plugin Creation        |     Cannot create manifest     |     Basic manifest with skills      |          Full bundle with hooks + MCP          |   Production plugins with docs and tests   |
| Marketplace Competence | Unaware of marketplace concept |      Uses official marketplace      |         Creates personal marketplaces          |     Multi-source marketplace strategy      |
| Autonomous Iteration   |     Never used Ralph Loop      | Basic loop, poor completion promise |     Effective promises with safety limits      |     Complex loops with cost management     |
| Integration Thinking   |    Components in isolation     |        Combines 2 components        |            Full extensibility stack            |    Team-wide extensibility architecture    |

---

## Quick Reference: The Extensibility Stack

Use this as a checklist for setting up any project:

### Layer 1: Settings

- [ ] User settings configured (`~/.claude/settings.json`)
- [ ] Project settings committed (`.claude/settings.json`)
- [ ] Local settings gitignored (`.claude/settings.local.json`)

### Layer 2: Hooks

- [ ] Safety hooks (PreToolUse: block dangerous operations)
- [ ] Quality hooks (PostToolUse: format, lint, test)
- [ ] Logging hooks (UserPromptSubmit: track activity)

### Layer 3: Plugins

- [ ] Marketplace surveyed for existing solutions
- [ ] Relevant plugins installed at correct scope
- [ ] Custom plugin created for team-specific needs

### Layer 4: Automation

- [ ] Ralph Loop candidates identified (10+ iteration tasks)
- [ ] Completion promises designed (specific, objective, terminal)
- [ ] Safety guardrails set (--max-iterations, version control)

---

_Built for Panaversity's AI-Native Development Curriculum. These exercises work with Claude Code (terminal) or Cowork (desktop app). Basic terminal familiarity is helpful -- the exercises build skills progressively._
