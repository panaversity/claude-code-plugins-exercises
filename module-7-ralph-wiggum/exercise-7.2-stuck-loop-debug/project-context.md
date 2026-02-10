# Project Context

## The Project

A Python FastAPI application with:

- 12 API endpoints in `src/`
- 8 test files in `tests/`
- MyPy for type checking
- Pytest for tests
- A `config.yaml` that's referenced in code but doesn't exist in the repo

## Known Issues Before the Loop

1. **5 MyPy type errors** -- missing type annotations on function parameters
2. **3 failing tests** -- 2 due to missing config.yaml, 1 due to an actual bug
3. **Missing config.yaml** -- referenced in code but never committed to repo

## What the Developer Wanted

Fix all type errors and make all tests pass. They didn't realize one of the test failures required creating a `config.yaml` file that they need to provide (it contains environment-specific values).
