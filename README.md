# Priyanshu Dennis Pascal — Portfolio

A premium, dark-themed personal portfolio built with Next.js (App Router),
Tailwind CSS v4, Framer Motion, and GSAP. Content (education, experience,
skills, projects, publications, contact) is sourced from the uploaded resume
and publication PDFs — nothing invented.

## Design system
- **Palette:** near-black base (`#0b0c0e`), warm off-white ink, amber
  "signal" accent (`#e8a33d`) for the primary data thread, teal accent for
  the secondary project.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono
  (data/labels/nav) — self-hosted via `@fontsource` so the site builds and
  runs with zero external font requests.
- **Signature element:** the "signal thread" — a scroll-driven vertical
  line (left rail on desktop) that fills as you move through the page,
  echoing the analytics/data-trail theme.

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Production build
```bash
npm run build
npm run start
```

## Deploy
This is a standard Next.js app — deploy directly to Vercel (recommended),
or any Node host / static export target that supports Next.js 16.

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel → it auto-detects Next.js → Deploy.

## Content updates
All resume-derived content lives in `src/lib/data.ts` — edit that file to
update education, experience, skills, projects, or publications without
touching component code. The downloadable resume PDF lives in
`public/resume/`.
