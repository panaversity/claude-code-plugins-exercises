# Exercise 6.2 -- Cross-Marketplace Evaluation

**Extensibility Layer: Marketplace Distribution** -- Compare plugins across different marketplace sources.

## Goal

Evaluate plugins from three different marketplace sources to find the best solution for a specific workflow need. Learn to assess plugin quality, trust, and fit across different sources.

## What You Have

- `marketplace-listings/official.md` -- Plugins from the official Anthropic marketplace
- `marketplace-listings/community.md` -- Plugins from a community marketplace
- `marketplace-listings/internal.md` -- Plugins from a company-internal marketplace
- `evaluation-scenario.md` -- The specific workflow need you're evaluating for

## Your Tasks

### Step 1: Read the Evaluation Scenario

Read `evaluation-scenario.md` to understand the specific workflow need.

### Step 2: Inventory Available Plugins

From each marketplace listing, identify plugins relevant to the scenario:

| Marketplace | Plugin Name | Version | Components         | Last Updated |
| ----------- | ----------- | ------- | ------------------ | ------------ |
| Official    | [name]      | [ver]   | [skills/hooks/MCP] | [date]       |
| Community   | [name]      | [ver]   | [skills/hooks/MCP] | [date]       |
| Internal    | [name]      | [ver]   | [skills/hooks/MCP] | [date]       |

### Step 3: Evaluate Each Candidate

For each relevant plugin, assess:

1. **Feature fit**: Does it solve the actual problem?
2. **Component quality**: Are skills well-structured? Are hooks reliable?
3. **Trust level**: Official (highest), internal (medium), community (lowest)
4. **Maintenance**: When was it last updated? Is the author active?
5. **Compatibility**: Any conflicts with current project settings?

### Step 4: Write Recommendations

Create a recommendation document:

- Which plugin to install and from which marketplace
- Rationale for the choice
- Risk assessment (what could go wrong)
- Fallback plan (if the chosen plugin doesn't work out)

### Step 5: Create an Evaluation Framework

Write a reusable "Marketplace Evaluation Framework" document that your team can use for future plugin decisions.

## Reflection

- How does trust level affect your plugin choice?
- When would you choose a community plugin over an official one?
- How do you verify a community plugin is safe to install?
- What's the cost of evaluating plugins vs. just building custom?
