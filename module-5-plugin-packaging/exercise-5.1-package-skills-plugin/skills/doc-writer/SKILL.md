---
name: doc-writer
description: Generate documentation for a module or API
arguments:
  - name: target
    description: Module, function, or API to document
    required: true
  - name: format
    description: Output format (markdown, jsdoc, docstring)
    required: false
    default: markdown
---

# Documentation Writer Skill

Generate clear, structured documentation for the specified target.

## Documentation Sections

1. **Overview**: What does this module/function do? (1-2 sentences)
2. **Parameters**: Each parameter with type, description, and default value
3. **Return Value**: What it returns and the type
4. **Examples**: At least 2 usage examples
5. **Edge Cases**: Notable edge cases and how they're handled
6. **Related**: Links to related functions or modules

## Output Format (Markdown)

```markdown
## [FunctionName]

[Overview sentence]

### Parameters

| Parameter | Type   | Required | Default | Description |
| --------- | ------ | -------- | ------- | ----------- |
| name      | string | yes      | --      | Description |

### Returns

`ReturnType` -- Description of return value

### Examples

\`\`\`typescript
// Example 1: Basic usage
const result = functionName(arg1, arg2)

// Example 2: With options
const result = functionName(arg1, { option: value })
\`\`\`

### Edge Cases

- Empty input: Returns empty array
- Invalid type: Throws TypeError
```

## Guidelines

- Write for the reader who knows the language but not the codebase
- Examples should be copy-pasteable
- Don't document obvious things ("this function takes a string parameter called name")
