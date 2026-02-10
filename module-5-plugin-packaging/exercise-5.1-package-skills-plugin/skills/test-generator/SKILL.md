---
name: test-generator
description: Generate test cases for a function or module
arguments:
  - name: target
    description: Function or module to generate tests for
    required: true
  - name: framework
    description: Test framework to use (jest, vitest, pytest, unittest)
    required: false
    default: jest
---

# Test Generator Skill

Generate comprehensive test cases for the specified function or module.

## Test Categories to Cover

1. **Happy path**: Normal expected inputs produce expected outputs
2. **Edge cases**: Empty inputs, maximum values, boundary conditions
3. **Error cases**: Invalid inputs, missing parameters, type mismatches
4. **Integration**: Interaction with dependencies (mock where needed)

## Output Format

Generate a complete test file:

```typescript
describe("[FunctionName]", () => {
  // Happy path tests
  it("should [expected behavior] when [condition]", () => {
    // Arrange, Act, Assert
  });

  // Edge case tests
  it("should handle [edge case]", () => {
    // ...
  });

  // Error case tests
  it("should throw when [error condition]", () => {
    // ...
  });
});
```

## Guidelines

- Each test should test ONE behavior
- Use descriptive test names that explain the scenario
- Mock external dependencies, don't mock the function under test
- Minimum 5 tests per function
