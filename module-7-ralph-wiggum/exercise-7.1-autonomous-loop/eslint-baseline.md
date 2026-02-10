# ESLint Baseline Output

Run date: 2026-02-01

```
src/userService.js
  2:1   error  Unexpected var, use let or const    no-var
  3:5   error  'unusedConfig' is assigned but never used  no-unused-vars
  6:3   error  Unexpected console statement        no-console
  7:8   error  Unexpected var, use let or const    no-var
  8:22  error  Expected '===' and instead saw '==' eqeqeq
  16:3  error  Unexpected var, use let or const    no-var
  23:3  error  Unexpected console statement        no-console
  28:3  error  Unexpected var, use let or const    no-var
  29:8  error  Unexpected var, use let or const    no-var
  30:22 error  Expected '===' and instead saw '==' eqeqeq
  34:14 error  Expected '!==' and instead saw '!=' eqeqeq
  36:5  error  Unexpected console statement        no-console

src/taskService.js
  2:1   error  Unexpected var, use let or const    no-var
  4:1   error  Unexpected var, use let or const    no-var
  8:3   error  Unexpected var, use let or const    no-var
  18:5  error  Unexpected console statement        no-console
  24:3  error  Unexpected var, use let or const    no-var
  25:8  error  Unexpected var, use let or const    no-var
  26:22 error  Expected '===' and instead saw '==' eqeqeq
  33:8  error  Unexpected var, use let or const    no-var
  34:22 error  Expected '===' and instead saw '==' eqeqeq
  37:5  error  Unexpected console statement        no-console
  44:3  error  'unusedFilter' is assigned but never used  no-unused-vars

src/notificationService.js
  (8 additional errors: no-var, eqeqeq, no-console, no-unused-vars)

Total: 23 problems (23 errors, 0 warnings)
```

**Error categories:**

- `no-var`: 11 occurrences
- `eqeqeq`: 5 occurrences
- `no-console`: 5 occurrences
- `no-unused-vars`: 2 occurrences
