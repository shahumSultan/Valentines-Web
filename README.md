# Valentines Web

A romantic single-page Valentine's Day website built with Next.js. Ask that special someone "Will you be my Valentine?" — with a twist: the **No** button runs away every time they try to click it.

## Features

- Glassmorphism card with a soft pink gradient background
- 22 floating heart particles drifting upward as ambient animation
- "Will you be my Valentine?" question with two buttons:
  - **Yes** — triggers a full-screen celebration with a burst of hearts and a sweet message
  - **No** — flinches and instantly teleports to a random position on screen whenever hovered or clicked (it can never be pressed)
- Fully responsive — works on mobile and desktop
- Custom fonts: Pacifico + Dancing Script (Google Fonts)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React 19

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Fonts, animations, glassmorphism styles
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── FloatingHearts.tsx  # Ambient floating heart particles
    ├── NoButton.tsx        # The button that runs away
    ├── ValentineCard.tsx   # Main card and state orchestration
    └── Celebration.tsx     # Full-screen celebration on "Yes"
```

## Build

```bash
npm run build
npm run start
```
