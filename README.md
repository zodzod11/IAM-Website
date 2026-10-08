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
| Form Backend | Next.js API Route + Resend |
| Deployment | Vercel (recommended) |

## Quick Start

```bash
pnpm install
pnpm dev
```

Then open **http://localhost:3000**.

## Project Structure

```
src/
├── app/              ← Next.js App Router pages
│   ├── api/contact/  ← Form submission endpoint
│   ├── services/     ← Service division pages
│   ├── work/         ← Portfolio
│   ├── about/        ← About IAM
│   └── contact/      ← Contact form
├── components/
│   ├── layout/       ← Navbar, Footer
│   ├── sections/     ← Hero, ServiceCards, WhyIAM, FeaturedWork, CTA, etc.
│   ├── ui/           ← Button, Card, SectionHeading
│   └── forms/        ← ContactForm (client-side submission)
├── content/          ← Structured data (services, projects)
└── globals.css       ← Tailwind v4 theme + brand variables
```

## Environment Variables

Create a `.env` file in the project root:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Get one at [resend.com](https://resend.com) (free tier available).

## Pages

| Route | Content |
|---|---|
| `/` | Homepage — hero, service cards, differentiators, featured work, CTA |
| `/services` | Services overview — 3 divisions with links |
| `/services/events` | Event Production — features, audience, process, pricing |
| `/services/systems` | AV Systems — features, audience, process, pricing |
| `/services/church-av` | Church AV Training — features, audience, process, pricing |
| `/work` | Portfolio — project gallery |
| `/about` | About IAM — story, values, team |
| `/contact` | Contact form with inline validation and submission |

## Brand Colors

Defined in `src/app/globals.css` via CSS custom properties. Currently using
placeholder accent (#c8963e) until the final IAM brand palette is approved.

## Deploy

```bash
# Push to GitHub, then deploy with Vercel:
pnpm dlx vercel
```
