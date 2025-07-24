---
allowed-tools:
  - Bash
  - TodoWrite
description: Stage and commit changes with a message
argument-hint: "<commit message>"
---

# Commit Changes

I'll help you commit your changes with the message: $ARGUMENTS

Let me track the steps:
1. Check git status to see what files have changed
2. Stage all changes using git add
3. Create commit with the provided message

Process:

1. First, run git status to see all untracked and modified files
2. Stage all changes with git add -A
3. If no commit message is provided in $ARGUMENTS, analyze the changes to generate an appropriate commit message
4. Create the commit with the Claude Code attribution footer

Note: This command only stages and commits. It does not push to remote or create a PR.