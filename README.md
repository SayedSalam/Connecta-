# CONNECTA — Social Media Management & Analytics Platform

A premium, enterprise-grade MarTech front-end built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, **Framer Motion**, **Recharts** and **lucide-react**.
Front-end only — all data comes from typed mock services designed for easy backend swap.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Design system

| Token          | Value     | Usage                               |
| -------------- | --------- | ----------------------------------- |
| Digital Violet | `#8B5CF6` | Primary — `brand-violet`            |
| Social Blue    | `#2563EB` | Secondary — `brand-blue`            |
| Neon Pink      | `#EC4899` | Accent (AI, highlights) — `brand-pink` |
| Light bg / card| `#F8FAFC` / `#FFFFFF` | via CSS vars in `globals.css` |
| Dark bg / card | `#020617` / `#0F172A` | via `.dark` CSS vars          |

Typography: **Inter** (English) + **Cairo** (Arabic), loaded through `next/font`.
Dark/light mode is handled by `next-themes` (`darkMode: "class"`).

## Architecture

```
src/
├── app/                 # App Router: landing, (auth), (dashboard) route groups
├── components/          # ui/ primitives, layout/, theme/, shared/
├── features/            # feature modules (dashboard, content-studio, calendar, inbox, ai, campaigns, landing)
├── hooks/               # useMediaQuery, useMounted
├── services/            # analytics + content services — the backend swap surface
├── mock-data/           # typed fixtures (single index)
├── types/               # shared TypeScript types
├── lib/                 # cn() + formatters
└── config/              # site config + navigation
```

## Routes

- `/` — marketing landing (hero, features, platforms, pricing)
- `/login`, `/register`, `/forgot-password` — split-screen auth
- `/dashboard` — KPIs, audience growth, engagement, platform split, posting heatmap
- `/analytics`, `/content-studio`, `/calendar`, `/campaigns`
- `/inbox`, `/ai-assistant`, `/clients`, `/reports`, `/settings`

## Connecting a backend

Components never import `mock-data` directly — they call `services/*`.
Replace the mock returns in `analytics.service.ts` / `content.service.ts`
with real `fetch` calls and the UI keeps working unchanged.

## Notes

- `components/ui/*` are lightweight, shadcn-compatible primitives. To adopt the full
  shadcn/ui library, run `npx shadcn@latest init` and drop generated components alongside them.
- Built for WSLA (wsla.io).
