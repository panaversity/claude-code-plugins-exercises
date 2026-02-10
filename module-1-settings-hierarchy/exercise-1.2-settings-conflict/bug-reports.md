# Bug Reports: Unexpected Claude Behavior

## Bug 1: "Claude won't stop talking"

**Reporter:** Alex (Backend Lead)
**Date:** 2026-01-20

I set my output style to `Concise` in my user settings because I just want brief answers. But when I work on the TaskFlow project, Claude gives me long, detailed responses every time. I've double-checked `~/.claude/settings.json` and it clearly says `"outputStyle": "Concise"`. What's going on?

**Expected:** Concise responses (brief, code-focused)
**Actual:** Verbose responses (long explanations with examples)

---

## Bug 2: "Claude is running wild"

**Reporter:** Jordan (Frontend Developer)
**Date:** 2026-01-21

We agreed as a team to use `acceptEdits` mode so Claude asks before running bash commands. But yesterday Claude ran `npm install`, `npm audit fix`, and even `rm -rf node_modules` without asking me anything. It just did whatever it wanted. Our project settings clearly say `acceptEdits` but Claude is acting like it has full autonomy.

**Expected:** Claude asks before running bash commands
**Actual:** Claude runs everything without asking

---

## Bug 3: "Wrong environment in API calls"

**Reporter:** Sam (DevOps)
**Date:** 2026-01-22

The team set `PROJECT_ENV=development` in our project settings so Claude uses the development API endpoints when generating code. But Claude keeps generating code that points to the staging API. I didn't change anything -- why is it using staging?

**Expected:** `PROJECT_ENV` = `development` (dev API endpoints)
**Actual:** `PROJECT_ENV` = `staging` (staging API endpoints)
