# Repository Guidelines

## Project Structure & Module Organization
- `src/app` holds the Next.js App Router entries (layouts, pages, and `globals.css`). Keep routes feature-focused; colocate page-level helpers under their route folder.
- `src/components` stores shared UI; `ui/` wraps shadcn primitives, so prefer composing from there before creating new primitives.
- `src/assets` contains icons and other imported assets; favor SVGs for reuse.
- `src/lib` houses cross-cutting utilities (formatters, config helpers). Keep them framework-agnostic when possible.
- Root configs: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `components.json`. `pnpm-lock.yaml` indicates pnpm is the package manager of record.

## Build, Test, and Development Commands
- `pnpm install` — install dependencies.
- `pnpm dev` — run the dev server with Turbopack; defaults to `http://localhost:3000`.
- `pnpm build` — create a production build.
- `pnpm start` — serve the production build locally.
- `pnpm lint` — run ESLint with the Next.js + Prettier setup.

## Coding Style & Naming Conventions
- Language: TypeScript-first; prefer typed props and return values for public helpers.
- Components: PascalCase file and export names; add `\"use client\"` only when required by client-side hooks/state.
- Helpers/constants: camelCase for functions, SCREAMING_SNAKE_CASE for constants, kebab-case for file names unless the file exports a component.
- Formatting: Prettier (with Tailwind plugin) + ESLint enforce 2-space indentation, trailing commas, and Tailwind class sorting. Run `pnpm lint` before pushing.
- Styling: TailwindCSS v4 utilities; avoid inline styles unless dynamic. Reuse tokens/utilities from existing components where possible.

## Testing Guidelines
- No automated tests are present yet; add `.test.tsx` or `.test.ts` near the code under test.
- Prefer component tests with React Testing Library and lightweight integration checks over brittle snapshots.
- Validate core flows manually after changes: navigation, form submissions, and locale-aware pages.
- Ensure new features ship with lint clean and, when added, targeted tests covering success and error states.

## Commit & Pull Request Guidelines
- Use Conventional Commit prefixes (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`) with concise subjects (<72 chars).
- Scope commits narrowly; avoid mixing refactors with behavioral changes.
- PRs should describe the change, rationale, and impact; include before/after screenshots for UI tweaks and note manual test steps taken.
- Link relevant issues or tickets; request review early if the change spans multiple routes/components.

## Environment & Configuration Tips
- Store secrets in `.env.local`; avoid committing environment files. Mirror needed keys in an `.env.example` entry when adding new config.
- When adding locales or feature flags, keep any shared config in `src/lib` and import it into route files to centralize behavior.
