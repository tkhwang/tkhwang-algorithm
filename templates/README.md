# Algorithm Templates (TDD Ready)

This directory contains standalone algorithm snippets that can be iterated on with a fast Vitest-powered feedback loop.

## Getting Started

```bash
npm install
npm run test:watch
```

- `npm run test:watch` keeps Vitest in watch mode for TDD.
- `npm test` runs the entire suite in CI mode.
- `npm run typecheck` verifies the TypeScript definitions without emitting JS.

## Adding A New Algorithm Template

1. Create a folder (e.g. `./binary-search`).
2. Add your implementation (e.g. `binary-search/binarySearch.ts`).
3. Add colocated tests (e.g. `binary-search/binarySearch.test.ts`).
4. Keep iterating with `npm run test:watch` until the tests pass.

Vitest automatically picks up any `*.test.ts` file under this directory, so you can organize helper modules however you like.

## Shared Conventions

- Use TypeScript for algorithms to benefit from editor tooling.
- Export pure functions or small classes so they are easy to test.
- Prefer explicit inputs/outputs rather than `console.log` based verification.
- Keep README files scoped to the intuition or blog posts that accompany the code.
