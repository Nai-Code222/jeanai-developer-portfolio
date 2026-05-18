# NaiCode Labs — Angular Portfolio

## Quick Start

```bash
# 1. Install Node.js 18+ if you haven't already
# https://nodejs.org

# 2. Install the Angular CLI globally
npm install -g @angular/cli

# 3. Install project dependencies
npm install

# 4. Add your assets
# Copy your illustrated avatar PNG to:
#   src/assets/images/avatar.png

# 5. Start the dev server
ng serve

# Open http://localhost:4200
```

## Build for Production / Deploy to Vercel

```bash
# Build
ng build

# Deploy (Vercel CLI)
npm install -g vercel
vercel --prod
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── nav/            ← Floating pill navigation
│   │   ├── hero/           ← Hero with avatar + animated role
│   │   ├── about/          ← About section with illustration
│   │   ├── skills/         ← 4 skill row cards
│   │   ├── projects/       ← 3 project cards with status badges
│   │   ├── experience/     ← 4 experience timeline cards
│   │   ├── contact/        ← Reactive contact form
│   │   └── shared/
│   │       └── reveal.directive.ts  ← Scroll reveal animation
│   ├── models/
│   │   └── portfolio.models.ts     ← TypeScript interfaces
│   ├── services/
│   │   └── portfolio.service.ts    ← All your data in one place
│   └── app.component.ts            ← Root: cursor, scroll progress, layout
├── assets/
│   └── images/
│       └── avatar.png              ← DROP YOUR AVATAR HERE
└── styles/
    └── global.scss                 ← Design tokens + global styles
```

## Updating Your Content

All content lives in one file:
**`src/app/services/portfolio.service.ts`**

- Add/edit projects → `getProjects()`
- Add/edit skills   → `getSkills()`
- Add/edit jobs     → `getExperiences()`

## Wiring Up the Contact Form

The form is built with Angular Reactive Forms and validated.
To actually send emails, add one of these to `contact.component.ts`:

- **Formspree** (free, easiest): https://formspree.io
- **EmailJS** (client-side): https://emailjs.com
- **Supabase** (if you want a DB): https://supabase.com

## Tech Stack

| Layer       | Tech                  |
|-------------|-----------------------|
| Framework   | Angular 17 (standalone) |
| Language    | TypeScript 5.2        |
| Styles      | SCSS + CSS variables  |
| Icons       | Tabler Icons          |
| Fonts       | Playfair Display · DM Sans · JetBrains Mono |
| Deploy      | Vercel                |
