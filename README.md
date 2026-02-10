# Claude Code Plugins & Extensibility: Practical Exercises

**By Panaversity -- Master the Full Plugin Lifecycle**

Welcome! This package contains 14 exercises + 3 capstone projects covering Claude Code's extensibility system -- from settings hierarchy and hooks through plugin creation, marketplace distribution, and autonomous iteration with Ralph Wiggum Loop. You'll configure real settings, write working hooks, build plugins from scratch, and run autonomous loops.

---

## Package Structure

```
plugins-exercises/
+-- README.md                                       <- You are here
+-- EXERCISE-GUIDE.md                               <- Full pedagogical guide
+-- module-1-settings-hierarchy/
|   +-- exercise-1.1-multi-scope-config/            (configure settings across 3 levels)
|   +-- exercise-1.2-settings-conflict/             (debug conflicting settings)
+-- module-2-hooks/
|   +-- exercise-2.1-event-automation/              (build hooks for real workflows)
|   +-- exercise-2.2-hook-failures/                 (fix broken hooks.json)
+-- module-3-plugin-discovery/
|   +-- exercise-3.1-marketplace-explorer/          (evaluate plugins for workflow needs)
|   +-- exercise-3.2-plugin-audit/                  (audit and fix a broken plugin setup)
+-- module-4-plugin-usage/
|   +-- exercise-4.1-install-and-use/               (install and verify plugins)
|   +-- exercise-4.2-plugin-workflow-chain/          (chain plugins for a complete workflow)
+-- module-5-plugin-packaging/
|   +-- exercise-5.1-package-skills-plugin/         (package skills into a plugin)
|   +-- exercise-5.2-full-plugin-bundle/            (build a complete plugin bundle)
+-- module-6-marketplace-distribution/
|   +-- exercise-6.1-create-marketplace/            (create a marketplace listing)
|   +-- exercise-6.2-cross-marketplace/             (evaluate and compare marketplaces)
+-- module-7-ralph-wiggum/
|   +-- exercise-7.1-autonomous-loop/               (run your first Ralph Wiggum loop)
|   +-- exercise-7.2-stuck-loop-debug/              (diagnose a stuck loop from logs)
+-- module-8-capstones/
    +-- capstone-A-full-plugin/                     (build a complete plugin from scratch)
    +-- capstone-B-team-extensibility-kit/          (design extensibility for a team)
    +-- capstone-C-your-workflow/                   (audit and extend your own workflow)
```

---

## How to Get Started

### With Cowork (Recommended for Beginners)

1. Open Claude Desktop app on macOS
2. Switch to the Cowork tab
3. Point Cowork at the exercise folder you want to work on
4. Read the INSTRUCTIONS.md file in the exercise folder
5. Start working through the steps with Claude

### With Claude Code (For Terminal Users)

1. Open your terminal
2. Navigate to the exercise folder: `cd module-1-settings-hierarchy/exercise-1.1-multi-scope-config`
3. Launch Claude Code
4. Read the INSTRUCTIONS.md and start working

---

## Recommended Order

**Week 1 (Settings Hierarchy):** Exercises 1.1, 1.2
**Week 2 (Hooks):** Exercises 2.1, 2.2
**Week 3 (Plugin Discovery):** Exercises 3.1, 3.2
**Week 4 (Plugin Usage):** Exercises 4.1, 4.2
**Week 5 (Plugin Packaging):** Exercises 5.1, 5.2
**Week 6 (Marketplace Distribution):** Exercises 6.1, 6.2
**Week 7 (Ralph Wiggum Loop):** Exercises 7.1, 7.2
**Week 8 (Capstone):** Choose one capstone project

---

## The Extensibility Problem-Solving Framework

Use this for every exercise:

1. **Understand** -- What does this component do and why does it exist?
2. **Configure** -- Set it up correctly (settings, hooks, plugins, loops).
3. **Test** -- Verify the configuration works as expected.
4. **Debug** -- When something breaks, trace the cause through the extensibility layers.
5. **Integrate** -- Combine components into a cohesive workflow.
6. **Share** -- Package and distribute your work for others.

---

## Self-Assessment Rubric

| Criteria               |         Beginner (1)         |         Developing (2)          |             Proficient (3)             |                  Advanced (4)                  |
| ---------------------- | :--------------------------: | :-----------------------------: | :------------------------------------: | :--------------------------------------------: |
| Settings Understanding |  Uses only default settings  |      Configured one level       |  Manages all 3 levels with precedence  |   Designs team-wide configuration strategies   |
| Hook Design            |     Cannot create hooks      |    Basic single-event hooks     |    Multi-event hooks with matchers     |  Hook systems with error handling and logging  |
| Plugin Usage           |    Cannot install plugins    | Installs and uses basic plugins |   Evaluates plugin fit for workflows   |      Chains plugins for complex workflows      |
| Plugin Creation        |    Cannot create plugins     | Basic manifest with skills only |  Full plugin bundle with hooks + MCP   | Production-quality plugins with documentation  |
| Marketplace Knowledge  |   Unaware of marketplaces    |    Uses official marketplace    |     Creates personal marketplaces      |   Manages multi-source marketplace strategy    |
| Autonomous Iteration   |    Never used Ralph Loop     |   Basic loop with simple task   | Effective completion promises + safety | Complex multi-stage loops with cost management |
| Integration Thinking   | Components used in isolation |      Combines 2 components      |  Full extensibility stack configured   |      Team-wide extensibility architecture      |

---

_Built for Panaversity's AI-Native Development Curriculum_
