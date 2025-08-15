# React SPA Boilerplate

React Single Page Application (SPA) starter.

## Stack

| Area        | Tooling                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build / Dev | [Vite](https://vite.dev) + [Bun](https://bun.sh)                                                                                                               |
| UI          | [React](https://react.dev) + [Tailwind CSS ](https://tailwindcss.com)                                                                                          |
| Language    | [TypeScript](https://www.typescriptlang.org) (strict)                                                                                                          |
| Testing     | [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) + [jsdom](https://github.com/jsdom/jsdom) |
| Lint / Format | [Biome](https://biomejs.dev) + [Prettier](https://prettier.io/) ([tailwind plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss))               |

## Project layout

```sh
.github/
└── workflows/            # GitHub Actions workflows
.vscode/
└── settings.json         # Project specific VS Code settings
public/                   # Static assets (copied as-is)
src/
└── ...                   # Source files with some example files
.gitignore
.prettierignore           # Files ignored by Prettier
.prettierrc.cjs           # Formatting config for Tailwind plugin and  languages not supported by Biome
biome.json                # Formatting & linting config
bun.lock                  # Dependency lockfile
LICENSE
package.json              # Project manifest
README.md
tsconfig.app.json         # App TypeScript config
tsconfig.json
tsconfig.node.json        # Script TypeScript config
vitest.config.ts          # Build & Testing config
```

## Getting Started

Install dependencies:

```sh
bun install
```

Start the dev server:

```sh
bun run dev
```

Visit: http://localhost:5173

## Common Scripts

```sh
# Development
bun run dev

# Typecheck + Biome
bun run check

# Auto-fix formatting/lint
bun run fix

# Tests
bun run test
bun run test:watch
bun run test:coverage

# Build production bundle (outputs to dist)
bun run build

# Preview production build locally
bun run preview

# Generate type scale CSS (updates src/ui/styles/typescale.css)
bun run generate:typescale
```

## Styling & Type Scale

Tailwind is enabled through the official Vite plugin. A custom type scale is generated via
[`@gud/typescale`](https://github.com/ryangoree/gud-typescale):

```sh
bun run generate:typescale
```

Regenerate after adjusting your scale config (see [`package.json`](./package.json) script for output
path).

## Path Aliases

Alias `#/*` maps to `src/*` in [`tsconfig.app.json`](./tsconfig.app.json) and is resolved by
[`vite-tsconfig-paths`](https://github.com/aleclarson/vite-tsconfig-paths).

Example:

```ts
import { App } from "#/ui/App";
import "#/ui/styles/index.css";
```

## Production Build & Deployment

1. Build: `bun run build` (outputs to `dist/`)
2. Preview locally: `bun run preview`
3. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3, Cloudflare Pages, etc.)

If deploying under a sub-path, set `VITE_BASE_PATH` at build time:

```sh
VITE_BASE_PATH=/my-app bun run build
```

## Automation

### Repo setup

To enable automatic GH Pages deployment: **Settings** → **Pages** → **Build and deployment** →
   **Source** = **GitHub Actions**.

### Workflows

- PR checks: [`.github/workflows/pull-request.yml`](./.github/workflows/pull-request.yml)
- GH Pages Deploy: [`.github/workflows/gh-pages.yml`](./.github/workflows/gh-pages.yml)

## License

This boilerplate uses the Apache-2.0 license by default, but the boilerplate itself is provided
without restrictions. You can change the license in [`LICENSE`](./LICENSE) and
[`package.json`](./package.json) as needed.
