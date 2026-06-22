# Suljhaoo 🛍️

**Premium Kirana Shop Management Platform — Landing Page**

> *Dukaan Ki Har Uljhan Ka Hal* — The complete digital solution for local retail stores in India.

[![Build Status](https://github.com/your-username/suljhaoo/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/suljhaoo/actions)
[![Version](https://img.shields.io/badge/version-1.0.0-brand?color=7B2CBF)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📱 About

Suljhaoo is a marketing landing page for India's premium kirana shop management app. It showcases the platform's features to local retail shopkeepers across India, built with a focus on:

- ⚡ **Premium animations** — Three.js 3D background, GSAP scroll-linked effects, Framer Motion micro-interactions
- 🎨 **Vibrant design** — Custom purple-to-pink gradient brand system, glassmorphism, premium typography
- 📱 **Responsive** — Mobile-first layout that adapts across all device sizes
- 🚀 **Performance** — Lazy-loaded sections, Three.js mobile optimization, code splitting

---

## 🏠 Live Sections

| # | Section | Description |
|---|---|---|
| 1 | Hero | Three.js particle background, rotating chat bubbles, CTAs |
| 2 | Benefits Strip | Ticker animation strip |
| 3 | Features Grid | 6 core features with SVG illustrations |
| 4 | Product Demo | Interactive 3-step demo modal |
| 5 | App Showcase | Device mockup with feature callouts |
| 6 | Why Suljhaoo | 3-column layout with phone tilt effect |
| 7 | Problem Section | Pain points vs Suljhaoo comparison |
| 8 | Setup Process | Onboarding timeline |
| 9 | 90 Day Journey | GSAP scroll-animated milestone timeline |
| 10 | Shopkeeper Features | Feature grid |
| 11 | Trust Section | Security badges |
| 12 | Testimonials | Swiper carousel with customer quotes |
| 13 | Pricing | 4-tier pricing with monthly/yearly toggle |
| 14 | FAQ | Animated accordion |
| 15 | Download CTA | Play Store + App Store buttons + QR code |
| 16 | Final CTA | Gradient conversion panel |

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.x |
| Language | TypeScript | ~6.0 |
| Build Tool | Vite | 8.x |
| Styling | Tailwind CSS v4 | 4.3 |
| Animation | Framer Motion | 12.x |
| Scroll Animation | GSAP + ScrollTrigger | 3.15 |
| Smooth Scroll | Lenis | 1.3 |
| 3D Background | Three.js + @react-three/fiber | 0.184 |
| Icons | Lucide React | 1.x |
| Carousel | Swiper | 12.x |
| Routing | React Router DOM | 7.x |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/suljhaoo.git
cd suljhaoo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (`tsc -b && vite build`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run analyze` | Open bundle visualizer treemap |

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets
├── components/
│   ├── ui/              # Reusable design system components
│   │   ├── Button.tsx   # Primary/secondary/ghost variants
│   │   ├── Card.tsx     # Standard card container
│   │   ├── Badge.tsx    # Section header badge
│   │   └── SectionHeading.tsx  # Badge + h2 + subtitle
│   ├── illustrations/   # SVG feature illustrations
│   ├── ChatWidget.tsx   # Floating chat widget
│   ├── Footer.tsx       # Global footer
│   ├── Logo.tsx         # Brand logo component
│   ├── Navbar.tsx       # Sticky navigation
│   └── PageLoader.tsx   # Suspense fallback loader
├── data/                # Extracted content data (typed)
│   ├── faq.ts
│   ├── features.ts
│   ├── pricing.ts
│   ├── testimonials.ts
│   └── timeline.ts
├── hooks/
│   └── useLenis.ts      # Lenis smooth scroll initialization
├── layouts/
│   └── MainLayout.tsx   # Root layout (Navbar + Footer + Chat)
├── lib/
│   └── lenis.ts         # Typed Lenis singleton (replaces window as any)
├── pages/
│   ├── Home.tsx         # Main landing page (15 sections)
│   ├── NotFound.tsx     # 404 page
│   └── Privacy.tsx      # Privacy policy
├── sections/            # Page sections (numbered for reading order)
│   ├── 01-Hero.tsx
│   ├── 02-BenefitsStrip.tsx
│   ├── ...
│   └── 16-DownloadCTA.tsx
├── three/
│   └── HeroBackground.tsx  # Three.js particle + orb scene
├── types/               # TypeScript interfaces
│   ├── faq.types.ts
│   ├── feature.types.ts
│   ├── pricing.types.ts
│   ├── testimonial.types.ts
│   └── timeline.types.ts
├── App.tsx              # Router setup + lazy loading
├── index.css            # Design system tokens (Tailwind v4 @theme)
└── main.tsx             # React entry point
```

---

## 🎨 Design System

Colors are defined in `src/index.css` using Tailwind v4's `@theme` directive:

- **Brand Purple**: `#7B2CBF` (`brand-purple`)
- **Brand Pink**: `#F048A8` (`brand-pink`)
- **Gradient**: `#FF1880 → #B623CE → #4B30F0` (`bg-gradient-brand`)

Custom utilities: `.glass`, `.glass-dark`, `.text-gradient`, `.bg-gradient-brand`, `.shadow-premium`

---

## ✨ Code Quality & Performance

- **Zero Lint Errors**: Strict ESLint configuration enforced across all components.
- **React 19 Strict Mode Purity**: All components are fully compliant with React's latest purity guidelines (no impure functions during render).
- **Optimized Rendering**: Dependency arrays properly managed to prevent unnecessary re-renders.
- **Splash Screen**: Seamless `Suspense` and `PageLoader` integration that acts as a premium app splash screen during lazy-loading.

---

## 🚢 Deployment

The project builds as a static SPA. Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag `dist/` folder or connect GitHub
- **GitHub Pages**: Use `gh-pages` package with `dist/` output

> ⚠️ Remember to set the correct `homepage` URL in `package.json` before deploying.

---

## 📄 License

MIT © Suljhaoo Technologies
