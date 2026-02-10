# Project Requirements: TaskFlow API

## Team Agreement (Signed off 2026-01-15)

### Security Standards

- Claude must NEVER read `.env` or `.env.*` files
- Claude must NEVER modify files in `deploy/` without confirmation
- All bash commands involving `rm` require confirmation

### Quality Standards

- Permission mode: `acceptEdits` (Claude can edit files, but ask before bash commands)
- Always include co-author attribution in commits
- Environment variable `PROJECT_ENV` should be set to `development`

### Tool Restrictions

- Allow: `Bash(npm run test:*)`, `Bash(npm run lint:*)`, `Bash(npm run build)`
- Allow: `Read`, `Write`, `Edit` on `src/` and `tests/` directories
- Deny: `Read(./.env)`, `Read(./.env.*)`, `Write(deploy/*)`

### Workflow Preferences

- Claude should use explanatory output style for this project (team learning phase)
- Sandbox mode should be enabled at the project level
