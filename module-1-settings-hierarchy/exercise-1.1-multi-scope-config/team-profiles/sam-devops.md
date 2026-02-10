# Developer Profile: Sam (DevOps Engineer)

## Role

DevOps engineer, 3 years experience. Manages CI/CD, infrastructure, and deployment.

## Personal Preferences

- Prefers **Concise** output style -- experienced, just needs the facts
- Uses `claude-sonnet-4-5-20250929` model (fast enough for ops work)
- Wants co-authored-by attribution in commits
- Uses `acceptEdits` permission mode generally

## Working Style

- Heavy bash/terminal user
- Runs infrastructure scripts frequently
- Needs access to deploy/ directory (unlike other team members)

## Current Task

Currently testing a new Kubernetes deployment config on a feature branch.
Needs to temporarily:

- Enable sandbox mode for testing
- Override output style to Verbose (debugging deployment issues)
- Set `PROJECT_ENV` to `staging` (testing against staging environment)

These overrides should NOT affect the rest of the team.
