# Project Guidelines

## Stack And Architecture

- This workspace is a Next.js 16 App Router app using React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.
- Keep route code under `src/app`. Use route-local folders such as `_components` and `_data` for feature-specific UI and mock data.
- Treat `src/components/ui` as the shared design-system layer. Prefer adding or extending shadcn/ui primitives there instead of building new low-level UI wrappers in feature folders.
- Use `docs/01_basic_design/` for product context when implementing auth and platform flows.

## Build And Validation

- Use Yarn for all package management and scripts.
- Main commands:
  - `yarn dev`
  - `yarn build`
  - `yarn eslint src eslint.config.mjs --max-warnings=0`
- Lint must stay warning-free. The workspace treats warnings as failures in normal agent validation.

## Styling And UI

- Follow the existing shadcn/ui setup from `components.json` and import shared primitives from `@/components/ui/*`.
- Prefer shadcn composition over bespoke interactive markup. If a shadcn component exists for the need, use it before creating a custom primitive.
- Use the project theme tokens from `src/app/globals.css`, especially the `pn-*` colors, spacing, typography, and animation tokens.
- Avoid introducing raw Tailwind palette classes for product UI when a matching `pn-*` token or shadcn semantic token already exists.
- Keep imports on workspace aliases: `@/components`, `@/components/ui`, `@/lib`, and `@/lib/utils`.

## Code Conventions

- Keep TypeScript strict and avoid deprecated React types in component APIs.
- Be explicit about client boundaries. Add `"use client"` only for files that need hooks, event handlers, or browser APIs.
- Follow the workspace import ordering enforced by ESLint: builtin, external, internal `@/**`, relative, then type imports.
- Preserve semicolon-based formatting and let ESLint and Prettier shape final import and whitespace layout.
- When editing auth UI, preserve the existing font setup from `src/app/(auth)/layout.tsx` and the multi-step flow structure under `src/app/(auth)/login/`.

## Practical Defaults For Agents

- Before adding a new dependency, confirm the need against the existing Next.js, shadcn, and utility stack.
- Before creating a new shared component, check whether the same need should live in `src/components/ui` or remain local to a route.
- When changing visuals, prefer updating shared tokens in `src/app/globals.css` over scattering one-off values across components.
