# Sample Code Review Output

## Input

File: `src/auth.ts` with hardcoded API key and missing input validation.

## Expected Output

```
FILE: src/auth.ts
ISSUES FOUND: 3
SEVERITY: high

1. [Line 5] [HIGH] Hardcoded API key in source code
   FIX: Move to environment variable: process.env.API_KEY

2. [Line 12] [HIGH] No input validation on email parameter
   FIX: Add email format validation before database query

3. [Line 28] [MEDIUM] Error message exposes database table name
   FIX: Replace with generic "Authentication failed" message
```
