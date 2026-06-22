# Repository Guidelines

## Project Structure & Module Organization

This repository stores LeetCode solutions by language. JavaScript solutions live in `javascript/src/`, grouped by source or topic such as `leetcode101/array/leetcode1/` and `offer/offer03/`. TypeScript solutions live in `typescript/src/leetcode<number>/`, with shared declarations in `typescript/src/types/`. Go solutions live under `golang/leetcode/`. The `rust/` directory currently has no active project files.

Keep each problem self-contained: place the implementation and test together, for example `leetcode169.ts` and `leetcode169.test.ts`.

## Build, Test, and Development Commands

Run commands from the language subdirectory unless noted.

- `cd typescript && pnpm install`: install TypeScript tooling.
- `cd typescript && pnpm test 169`: run the test target for `src/leetcode169`.
- `cd typescript && pnpm run test:all`: run all TypeScript tests.
- `cd typescript && pnpm run check`: run typecheck, lint, format check, and all tests.
- `cd javascript && pnpm install`: install JavaScript Jest and ESLint dependencies.
- `cd javascript && pnpm exec jest src/leetcode101/array/leetcode1`: run a JavaScript test path.
- `cd golang && go test ./...`: run all Go tests.

There is no repository-wide build step; solutions are tested in place.

## Coding Style & Naming Conventions

Use one directory per problem named `leetcode<number>` or `offer<number>`. Match file names to the directory when practical: `leetcode80.go`, `leetcode80_test.go`, `leetcode80.ts`, `leetcode80.test.ts`.

TypeScript is strict CommonJS targeting ES2021. Prefer small pure functions, default exports for single-solution files, and clear local variables. Use `pnpm run format` and `pnpm run lint:fix` in `typescript/` before committing TS changes. JavaScript follows Airbnb base ESLint rules with `no-console` allowed. Go code should be formatted with `gofmt`.

## Testing Guidelines

Tests should cover standard examples plus at least one edge case. TypeScript uses Vitest globals and `*.test.ts`; JavaScript uses Jest and `*.test.js`; Go uses the standard `testing` package and `*_test.go`.

Prefer focused tests while developing, then run the relevant full suite before opening a PR. For TypeScript changes, `pnpm run check` is the expected final verification.

## Commit & Pull Request Guidelines

Recent history uses concise Conventional Commit-style messages, usually `feat: ...`, such as `feat: leetcode45` or `feat: add leetcode55,80,289`. Follow that pattern and mention the problem numbers changed.

Pull requests should include a short description, touched language/problem directories, and verification commands. Link related issues when available. Screenshots are not needed for algorithm-only changes.

## Agent-Specific Instructions

Do not rewrite unrelated solutions while adding a problem. Preserve existing layout and tools, and avoid dependencies unless a test or solution requires them.
