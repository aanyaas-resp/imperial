# Hotel Imperial Park – Landing Page

Next.js (App Router) + TypeScript landing page with GSAP ScrollTrigger animations.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Structure

```
app/
  layout.tsx        Fonts (Cinzel + Poppins), metadata
  page.tsx          Page composition (top to bottom)
  globals.css       All styling, including the liquid-glass navbar
components/
  Navbar.tsx        Floating liquid-glass navigation
  Hero.tsx          Intro timeline + parallax background
  About.tsx         Editorial story + scroll reveal
  Halls.tsx         Pinned horizontal scroll (desktop), swipe carousel (mobile)
  Gallery.tsx       Staggered photo reveal
  Accolades.tsx     Guest testimonials
  Inquiry.tsx       Reservation form
  Footer.tsx
  ScrollRefresh.tsx Recalculates ScrollTrigger positions after images load
lib/
  gsap.ts           Registers ScrollTrigger and useGSAP once
  animations.ts     Shared scroll-reveal helper
  content.ts        All text, halls and testimonials in one place (edit here)
public/images/      All photos and the logo
app/favicon.ico     Site icon
```

## Editing content

Almost all text and the hall list live in `lib/content.ts`. Replace the sample
testimonials with real guest reviews before going live.

## Animation notes

- Halls section: on screens 900px and wider, the section pins and the cards scroll
  left to right as you scroll down (GSAP ScrollTrigger, `scrub` + `containerAnimation`-free
  pinned tween with `ease: "none"`). On smaller screens it becomes a swipeable carousel.
- Animations respect `prefers-reduced-motion` through `gsap.matchMedia`.
