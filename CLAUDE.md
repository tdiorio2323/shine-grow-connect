# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on port 8080
npm run build     # Production build
npm run build:dev # Development build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Deployment

This project is deployed via Vercel. It was originally scaffolded with Lovable (lovable.dev).

## Architecture

This is a single-page marketing/landing page built with Vite, React, TypeScript, and shadcn/ui.

### Tech Stack
- **Build**: Vite with SWC for React
- **UI**: shadcn/ui components with Radix primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Animations**: Framer Motion

### Project Structure
- `src/pages/Index.tsx` - Main landing page composing all sections
- `src/components/` - Page sections (Hero, About, Contact, FAQ, etc.)
- `src/components/ui/` - shadcn/ui primitives
- `src/hooks/` - Custom hooks (mobile detection, toast)
- `src/lib/utils.ts` - Utility functions (cn for className merging)

### Path Alias
`@/` maps to `src/` (configured in tsconfig.json and vite.config.ts)

### Design System
- Primary color: Sage green (calming/growth theme)
- Secondary: Soft peach (warmth)
- Accent: Sky blue
- Font: Plus Jakarta Sans
- CSS variables defined in `src/index.css` with light/dark mode support
- Custom utilities: `gradient-hero`, `shadow-soft`, `shadow-card`, `shadow-glow`

### shadcn/ui
Components are in `src/components/ui/`. Add new components via:
```bash
npx shadcn@latest add [component-name]
```

### TypeScript Config
Relaxed settings: `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals` are disabled.
