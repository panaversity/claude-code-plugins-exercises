# Capstone C -- Your Workflow

**Audit, Improve, and Validate Your Own Claude Code Extensibility Setup**

## Goal

Turn the lens on yourself. Audit your own Claude Code workflow across every extensibility layer, identify the biggest gaps, build the missing pieces, and measure the improvement in a real session.

## Why This Capstone

The other capstones give you a scenario. This one uses your actual workflow. The skills you built in Modules 1-7 should directly improve how you work with Claude Code every day. If they don't, something was missed.

## Your Task

### Phase 1: Extensibility Audit

Rate your current setup on each layer using this scorecard:

| Layer                 | Not Using (0) | Basic (1)               | Configured (2)                    | Optimized (3)                          |
| --------------------- | ------------- | ----------------------- | --------------------------------- | -------------------------------------- |
| User Settings         | Defaults only | Some preferences set    | Model, style, permissions tuned   | Per-project profiles                   |
| Project Settings      | None          | Basic `.claude/` exists | Team rules, denied patterns       | Full team config with documentation    |
| Local Settings        | None          | Exists but default      | Environment-specific overrides    | Gitignored with clear purpose          |
| PreToolUse Hooks      | None          | One safety hook         | Multiple with matchers            | Comprehensive with logging             |
| PostToolUse Hooks     | None          | One quality hook        | Format + lint automation          | Full CI-lite pipeline                  |
| Prompt Logging        | None          | Manual notes            | UserPromptSubmit hook             | Structured JSONL with analysis         |
| Plugin Discovery      | Never browsed | Browsed once            | Regular evaluation                | Evaluation framework for team          |
| Installed Plugins     | None          | 1-2 basics              | Curated set at correct scopes     | Documented with rationale              |
| Custom Plugins        | None          | One skill bundled       | Multi-component plugin            | Published to marketplace               |
| Ralph Loop Usage      | Never used    | Tried once              | Regular use with good promises    | Documented patterns for common tasks   |
| Ralph Loop Safety     | No guardrails | Max-iterations set      | Version control + max-iterations  | Cost tracking + automatic checkpoints  |

Produce: `audit/scorecard.md` with your honest ratings and evidence for each.

### Phase 2: Gap Analysis

From your scorecard, identify the three largest gaps:

1. **Gap 1**: The layer where you scored lowest or where improvement would have the highest impact
2. **Gap 2**: The layer where you scored "Basic" but use Claude Code daily (high frequency, low optimization)
3. **Gap 3**: The layer you've never tried but the exercises showed would be valuable

For each gap, write:

- Current state (what you have now)
- Target state (what "Optimized" looks like for your workflow)
- Effort estimate (how long to close the gap)
- Expected impact (what changes in your daily work)

Produce: `audit/gap-analysis.md` with prioritized improvements.

### Phase 3: Build the Missing Pieces

For each of your three gaps, create the actual artifacts:

**If your gap is Settings:**
- Create or improve your settings files at all three levels
- Document the rationale for each setting

**If your gap is Hooks:**
- Create hooks for your most common pain points
- Write and test the hook scripts
- Verify they work with a real Claude session

**If your gap is Plugins:**
- Find and install plugins for your workflow
- Or package your existing skills into a plugin
- Test the plugin in a real session

**If your gap is Ralph Loop:**
- Identify a real task you do repeatedly
- Design a completion promise and safety config
- Run the loop on a real (non-critical) task

Produce: The actual working artifacts in `improvements/gap-1/`, `improvements/gap-2/`, `improvements/gap-3/`.

### Phase 4: Before/After Test

Run two real Claude Code sessions on the same type of task:

1. **Before session**: Use your pre-capstone setup (disable new artifacts temporarily)
   - Record: time spent, number of manual interventions, quality of output
   - Save the session log or key observations

2. **After session**: Use your improved setup with all new artifacts active
   - Record: same metrics
   - Save the session log or key observations

Produce: `audit/before-after.md` comparing both sessions with specific metrics.

### Phase 5: Personal Extensibility Checklist

Based on everything you learned, create a checklist you'll use for every new project:

```markdown
## Project Extensibility Setup Checklist

### Day 1 (Start of project)
- [ ] ...
- [ ] ...

### Week 1 (After initial development)
- [ ] ...
- [ ] ...

### Ongoing (Regular maintenance)
- [ ] ...
- [ ] ...
```

The checklist should be specific to your workflow, not generic. Reference the exact settings, hooks, and plugins that work for you.

Produce: `MY-EXTENSIBILITY-CHECKLIST.md` at the project root.

## Deliverables

1. `audit/scorecard.md` -- Extensibility audit with ratings and evidence
2. `audit/gap-analysis.md` -- Three prioritized gaps with improvement plans
3. `improvements/gap-1/` -- Working artifacts for gap 1
4. `improvements/gap-2/` -- Working artifacts for gap 2
5. `improvements/gap-3/` -- Working artifacts for gap 3
6. `audit/before-after.md` -- Comparative session analysis with metrics
7. `MY-EXTENSIBILITY-CHECKLIST.md` -- Personal checklist for future projects

## Estimated Time

2-4 hours (depends on your current setup -- the less you have, the more you'll build)

## Reflection

After completing your workflow audit:

- Which gap surprised you the most -- something you didn't realize was missing?
- Which improvement had the biggest impact relative to the effort to create it?
- How much of your "Claude Code friction" was solvable with extensibility you already had access to?
- What's the one artifact you'll copy to every new project from now on?
