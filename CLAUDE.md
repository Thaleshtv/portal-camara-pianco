# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portal da Câmara Municipal de Piancó - Site institucional built with Next.js 16 and React 19.

## Commands

```bash
npm run dev    # Start development server (localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS v4 (using `@theme inline` syntax in globals.css)
- **TypeScript**: Strict mode enabled
- **Font**: Roboto (via next/font/google)
- **Icons**: react-icons

## Architecture

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `public/assets/` - Static assets (images, icons)

## Path Aliases

Use `@/*` to import from `src/*`:
```typescript
import { Menu } from "@/components/Menu"
```

## Custom Tailwind Colors

Defined in `globals.css`:
- `blue-primary` (#267EAD) - Primary brand color
- `text-primary` (#3f3e50) - Primary text color

Usage: `bg-blue-primary`, `text-text-primary`, etc.

## Responsividade

Este site deve ser **extremamente responsivo**. Sempre utilize o container do Tailwind para manter consistência:

```tsx
<div className="container mx-auto px-4">
  {/* conteúdo */}
</div>
```

Todas as seções e componentes devem usar o mesmo padrão de container para garantir alinhamento consistente em todas as páginas.
