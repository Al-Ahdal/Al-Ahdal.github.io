<!--
This file guides AI coding agents (Copilot/assistant) working on this repository.
Keep entries concise and reference concrete files/commands found in the repo.
-->

# Copilot / Assistant instructions for this repository

- Purpose: This is a static portfolio site built with Vite + React + TypeScript and deployed to GitHub Pages (see `.github/workflows/deploy-pages.yml`).
- Primary entry points: `src/main.tsx` and `src/App.tsx`.

## Big picture
- Vite app using React + TypeScript. The site is a single-page app routed by `react-router-dom` with pages located under `src/pages` (see `src/App.tsx`).
- UI primitives and components: `src/components/ui/*` contains small shadcn-style / Radix primitives; higher-level sections live in `src/components` (e.g. `HeroSection.tsx`, `ProjectsSection.tsx`).
- Global providers are mounted in `src/App.tsx`: `QueryClientProvider` (react-query), `ThemeProvider` (theme + tailwind dark class), and `TooltipProvider`.

## Build / dev / deploy
- Common commands (run from repo root):

```bash
npm install
npm run dev        # local development (Vite)
npm run build      # production build -> outputs to `dist`
npm run preview    # preview built site
npm run build:dev  # dev-mode build (used rarely)
npm run lint       # run ESLint
```

- The GH Actions workflow (`.github/workflows/deploy-pages.yml`) runs Node 20, runs `npm install` and `npm run build`, and uploads `./dist` to GitHub Pages. The Vite `base` option is set from `process.env.BASE` (see `vite.config.ts`) — set `BASE` in Actions or locally when building for a subpath.

## Project-specific conventions & patterns
- Path alias `@` resolves to `./src` (see `vite.config.ts`). Prefer imports like `import X from '@/components/...'`.
- Pages live in `src/pages`. Add routes in `src/App.tsx` and place new top-level views under `src/pages`.
- UI primitives vs sections:
  - Put low-level UI building blocks in `src/components/ui/*`.
  - Put page sections and composition in `src/components/*` (e.g. `HeroSection.tsx`).
- The repo uses Radix UI components and shadcn-style wrappers — follow existing prop + className patterns when creating new primitives.
- A development-only component tagger was previously used during development; no component-tagging plugin is required for normal development or deployment.

## State, data fetching, and side effects
- React Query (`@tanstack/react-query`) is used for remote/stateful data; `QueryClient` is created in `src/App.tsx`. When adding fetches, prefer React Query hooks for caching and error handling.

## Styling and theming
- Tailwind CSS is used; global styles in `src/index.css` and `App.css`. The `ThemeProvider` uses a `class` attribute (dark mode via `class` on `html`/`body`).

## Files to inspect for examples
- `src/App.tsx` — global providers, router, and route ordering convention (add routes above catch-all `*`).
- `vite.config.ts` — alias `@`, `base` env handling, dev plugin usage.
- `src/components/ui/*` — examples of small UI primitives (tooltips, toasts, buttons).
- `src/pages/Index.tsx` — pattern for assembling sections into a page.

## Coding style & checks
- ESLint is configured and available via `npm run lint`. Follow existing file-level patterns (TypeScript + React functional components, no default exports unless already used).
- Keep TypeScript types in `src/types` and translations in `src/lib/translations.ts`.

## When making changes
- Run `npm run dev` to verify UI locally on `http://localhost:8080` (Vite dev server configured to use port 8080).
- For GitHub Pages builds, ensure `BASE` is set correctly if deploying to a subpath (the workflow defaults to root `/`).

## Examples (quick reference)
- Importing a UI primitive: `import { Button } from '@/components/ui/button';`
- Adding a new page: create `src/pages/Foo.tsx`, add `<Route path="/foo" element={<Foo />} />` above the catch-all in `src/App.tsx`.

## Non-goals / Do not change
- Do not alter the GH Actions workflow's Node version or artifact path unless you update the workflow as well.

---
If something in these notes is unclear or you'd like more examples (component patterns, preferred props, or small PRs to show changes), say which area and I'll expand the document.
