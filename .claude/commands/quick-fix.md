---
allowed-tools:
  - Bash
  - Grep
  - TodoWrite
description: Quick commit for small fixes (auto-generates commit message)
argument-hint: "[optional: specific file or area]"
---

# Quick Fix Commit

I'll help you quickly commit small changes. I'll analyze the changes and generate an appropriate commit message automatically.

If you provided an argument ($ARGUMENTS), I'll focus on that specific area.

Steps:
1. Check git status and git diff to understand the changes
2. Analyze the changes to determine the type of fix (typo, docs, style, refactor, etc.)
3. Generate an appropriate commit message based on the changes
4. Stage and commit all changes

The commit message will follow conventional commit format:
- fix: for bug fixes
- docs: for documentation changes
- style: for formatting changes
- refactor: for code improvements
- chore: for maintenance tasks

This is perfect for quick fixes like typos, small documentation updates, or minor code improvements.