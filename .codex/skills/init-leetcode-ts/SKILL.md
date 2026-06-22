---
name: init-leetcode-ts
description: Initialize TypeScript LeetCode problem files in a local repository without implementing the solution. Use when the user asks to scaffold, initialize, or add LeetCode TypeScript entry files and tests from a problem URL, title, or number, especially when they want to implement the algorithm themselves later.
---

# Init LeetCode TS

## Overview

Create the minimal TypeScript problem entry and test files that match the repository's existing LeetCode conventions. Do not implement the algorithm unless the user explicitly asks for an implementation.

## Workflow

1. Inspect the repository before writing files.
   - Use `rg --files` or `find` to locate existing TypeScript LeetCode folders, package scripts, test config, and nearby examples.
   - Prefer the repository's current naming, exports, imports, and test framework over inventing a new structure.

2. Derive the problem metadata.
   - Extract the problem number from the URL or user text, such as `455` from `assign-cookies`.
   - Use the LeetCode function name when it is known from the prompt or problem page, such as `findContentChildren` for problem 455.
   - If the function name cannot be inferred locally, ask a concise question or create the conventional file path and leave a clearly named placeholder only when that is acceptable.

3. Create the problem directory and files.
   - For this repository shape, use `typescript/src/leetcode<number>/leetcode<number>.ts`.
   - Create `typescript/src/leetcode<number>/leetcode<number>.test.ts`.
   - Keep the entry file as a signature plus placeholder:

```ts
function functionName(args: ArgTypes): ReturnType {
  throw new Error('Not implemented');
}

export default functionName;
```

4. Add tests only, not solution logic.
   - Import the default export from `./leetcode<number>`.
   - Add the official LeetCode examples first.
   - Add a small number of useful boundary cases when they are obvious and cheap.
   - Use the existing assertion style, usually `test(...)` and `expect(...).toEqual(...)` in Vitest.

5. Validate without requiring the tests to pass.
   - Run type checking or formatting if available and cheap.
   - Do not run the new problem test as the main validation while the placeholder throws `Not implemented`, unless the user asks to see the expected failing test.
   - Mention that tests are expected to fail until the user implements the solution.

## Guardrails

- Do not solve the LeetCode problem by default.
- Do not fetch web content unless the user asks for current details or the function signature/examples cannot be inferred from local context.
- Do not change unrelated problem files.
- Do not add README or extra documentation files to the LeetCode repository for a simple scaffold.
- Preserve existing user changes in the worktree.
