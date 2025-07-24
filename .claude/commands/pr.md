---
allowed-tools:
  - Bash
  - TodoWrite
description: Create a complete PR workflow (add, commit, push, PR)
argument-hint: "<commit message>"
---

# Create Pull Request Workflow

I'll help you create a pull request with the commit message: $ARGUMENTS

First, let me use TodoWrite to track the workflow steps:
1. Check git status
2. Stage all changes
3. Create commit with message
4. Push to remote
5. Create pull request

Then execute each step:

1. First, check the current git status to see what files have changed
2. Stage all changes using git add
3. Commit with the provided message (or generate one if not provided)
4. Push the current branch to remote (creating upstream if needed)
5. Create a pull request using gh CLI

Important:
- If no commit message is provided in $ARGUMENTS, analyze the changes and generate an appropriate commit message
- Ensure the commit message includes the Claude Code attribution footer
- Handle any pre-commit hooks that might modify files
- Create a meaningful PR title and description based on the changes

Let's start the workflow!