# AGENTS.md

## Core workflows
- `npm run dev` - start the Vite development server.
- `npm run build` - run TypeScript project build (`tsc -b`) and then bundle with Vite.
- `npm run lint` - run ESLint across the repo (`eslint .`).
- `npm run preview` - serve the built app locally with Vite preview.
- `npm test` - run the vitest suite (`vitest run`).

## Rain parser verification
- `npm run test:parsing` - parse all files in `examples/` and print point counts plus first/last samples.
- `scripts/test_parsing.ts` - TypeScript variant of the same parser verification harness.
