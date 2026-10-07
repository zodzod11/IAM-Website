# Impact - Audio & Media — Website

Official website for **Impact - Audio & Media** (IAM), a live-event production,
AV systems, and technical training company serving New England.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Package Manager | pnpm |
| Deployment | Vercel (planned) |

## Quick Start

```bash
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── app/           ← Next.js App Router pages
│   ├── services/  ← Service division pages
│   ├── work/      ← Portfolio
│   ├── about/     ← About IAM
│   └── contact/   ← Contact form
├── components/    ← Reusable UI components
│   ├── layout/    ← Navbar, Footer
│   ├── sections/  ← Page sections (Hero, ServiceCards, etc.)
│   ├── ui/        ← Primitives (Button, Card, etc.)
│   └── forms/     ← Contact form
├── content/       ← Structured data (services, projects)
└── globals.css    ← Tailwind v4 theme + brand variables
```

## Build Phases

See `/docs/build-plan.md` for the full development roadmap.

## Brand Colors

All brand colors are defined in `src/app/globals.css` via CSS custom
properties and the Tailwind v4 `@theme` block. Colors are placeholders
until the final IAM brand palette is approved.
