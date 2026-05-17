# Handoff: Chet Mutaphon — Portfolio Website

## Overview
A parallax portfolio website for **Chet Mutaphon**, a Marketing Executive & Graphic Designer. The site features scroll-triggered fade-in animations, a fixed glassmorphism navigation bar, and 4 switchable design themes. It showcases artwork design, photography, videography (Vimeo embeds), and marketing dashboards across dedicated sections.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these HTML designs in the target codebase's existing environment** (React, Next.js, Astro, etc.) using its established patterns and libraries — or, if no environment exists yet, to choose the most appropriate framework (e.g. Next.js or Astro) and implement the designs there.

## Fidelity
**High-fidelity (hifi)** — Pixel-perfect mockups with final colors, typography, spacing, and interactions. The developer should recreate the UI pixel-perfectly using the codebase's existing libraries and patterns.

---

## Site Structure (Single-Page Scroll)

| # | Section ID | Name | Background |
|---|-----------|------|------------|
| 1 | `hero` | Hero | Main bg |
| 2 | `about` | About & Skills | Alt bg |
| 3 | `experience` | Experience | Main bg |
| 4 | `artwork` | Artwork Design | Alt bg |
| 5 | `photography` | Photography | Main bg |
| 6 | `videos` | Videographer | Alt bg |
| 7 | `dashboard` | Dashboard & Analytics | Main bg |
| 8 | — | Footer | Main bg + top border |

---

## Screens / Views

### 1. Loading Screen
- **Purpose**: Brand intro animation on page load
- **Layout**: Fixed overlay, full viewport, centered content
- **Animation phases**:
  - Phase 0 (0ms): Blank screen with background color
  - Phase 1 (100ms): "CM" text fades in + slides up (translateY 16px → 0), accent line scales in
  - Phase 2 (1600ms): Entire overlay fades out (opacity 0, 600ms ease)
  - Phase 3 (2200ms): Overlay removed from DOM
- **"CM" text**: font-family: var(--font-heading), weight: var(--heading-weight), size: 56px, letter-spacing: -0.04em
- **Accent line**: width: 48px, height: 2px, border-radius: 1px, opacity: 0.4, scaleX animation

### 2. Navigation (Fixed Top Bar)
- **Position**: Fixed, top: 0, z-index: 1000, height: 56px
- **Padding**: 0 48px
- **Layout**: Flex, space-between, align-items: center
- **States**:
  - Default (scrollY ≤ 50): background: transparent, border: transparent
  - Scrolled (scrollY > 50): background: var(--nav-bg) with backdrop-filter: saturate(180%) blur(20px), border-bottom: 1px solid var(--border)
- **Transition**: all 0.35s ease
- **Logo (left)**: "Chet Mutaphon", font-family: var(--font-heading), weight: var(--heading-weight), size: 17px, letter-spacing: -0.02em, cursor: pointer (scrolls to top)
- **Nav links (right)**: 6 links with gap: 32px
  - Labels: About, Experience, Artwork, Photo, Video, Dashboard
  - Font: 14px, color: var(--text-secondary), weight: 400, letter-spacing: 0.01em
  - Hover: color: var(--text)
  - Active: color: var(--text), weight: 600, with ::after underline (1.5px solid accent, bottom: -4px)
- **Behavior**: Click scrolls to section (offset -72px from top for nav height). Active section detected via IntersectionObserver (threshold: 0.25, rootMargin: -80px 0px -40% 0px)

### 3. Scroll Progress Bar
- **Position**: Fixed, top: 0, left: 0, z-index: 1002 (above nav)
- **Height**: 2px
- **Background**: var(--accent)
- **Width**: Proportional to scroll position (0% → 100%)

### 4. Hero Section
- **Min-height**: 100vh
- **Layout**: Flex column, align: var(--hero-items), justify: center
- **Padding**: 80px 48px 40px
- **Content max-width**: 900px, text-align: var(--hero-align)
- **Entrance animation**: Opacity 0→1, translateY 30px→0, 0.9s cubic-bezier(0.22,1,0.36,1), delay 300ms
- **Components**:
  - **Name**: "Chet Mutaphon", font-family: var(--font-heading), weight: var(--heading-weight), size: var(--hero-size) = clamp(48px, 8vw, 88px), letter-spacing: -0.04em, line-height: 1.05
  - **Title**: "Marketing Executive & Graphic Designer", size: clamp(16px, 2vw, 22px), color: var(--text-secondary), weight: 400, margin-top: 16px
  - **Tagline**: "Crafting visual stories that connect brands with people.", size: clamp(14px, 1.4vw, 17px), color: var(--text-secondary), opacity: 0.7, max-width: 500px, line-height: 1.6, margin-top: 12px
- **Scroll Indicator** (bottom center):
  - Position: absolute, bottom: 32px, centered horizontally
  - Line: 1px × 48px, background: var(--border), overflow: hidden
  - Animated ::after: 1px × 48px background: var(--accent), translateY animation (0 → 96px), 2s ease-in-out infinite

### 5. About & Skills Section
- **Background**: var(--bg-alt) (alternating section)
- **Padding**: var(--section-gap) 0
- **Inner container**: max-width: 1120px, padding: 0 48px, centered
- **Scroll reveal**: Each block fades in with staggered delays (0, 0.1s, 0.2s)
- **Section label**: "About", 13px, uppercase, letter-spacing: 0.12em, color: var(--accent), weight: 600
- **Section title**: "A creative at the intersection of design and marketing.", font-family: var(--font-heading), weight: var(--heading-weight), size: clamp(32px, 4vw, 52px), letter-spacing: -0.03em, line-height: 1.15, margin-bottom: 48px
- **About text**: 18px, line-height: 1.75, color: var(--text-secondary), max-width: 680px, margin-bottom: 48px
- **Skills grid**: Flex wrap, gap: 10px
  - Skills: Graphic Design, Photography, Videography, Marketing Strategy, Social Media Management, Adobe Creative Suite, Content Creation, Brand Development, Art Direction, Motion Graphics, Print Design, Analytics
  - Each tag: padding: 8px 20px, border-radius: 100px, font-size: 14px, weight: 500, border: 1px solid var(--border), color: var(--text), bg: var(--bg)
  - Hover: bg: var(--text), color: var(--bg), border-color: var(--text), transition: 0.3s ease

### 6. Experience Section
- **Background**: var(--bg) (main)
- **Section label**: "Experience"
- **Section title**: "Where I've worked."
- **Timeline layout**: padding-left: 40px, with vertical line (::before, left: 5px, 1.5px wide, color: var(--border))
- **Each item** (staggered scroll-reveal, delay: i * 0.12s):
  - **Dot**: absolute, left: -40px, top: 8px, 11px circle, bg: var(--bg), border: 2px solid var(--accent)
  - **Card**: bg: var(--card), border-radius: var(--radius), padding: 28px 32px
  - Card hover: translateX(4px)
  - **Header**: flex space-between, role name (heading font, 18px) + period (13px, secondary color, weight: 500)
  - **Company**: 14px, color: var(--accent), weight: 500, margin-bottom: 10px
  - **Description**: 15px, line-height: 1.65, color: var(--text-secondary)
- **Placeholder data**:
  1. Marketing Executive — Company Name (2023 — Present)
  2. Senior Graphic Designer — Studio Name (2021 — 2023)
  3. Marketing Coordinator — Agency Name (2019 — 2021)
  4. Junior Designer — Design Firm (2017 — 2019)

### 7. Artwork Design Section
- **Background**: var(--bg-alt)
- **Section label**: "Artwork"
- **Section title**: "Design work."
- **Grid**: CSS Grid, columns: repeat(var(--gallery-cols, 4), 1fr), gap: 20px
- **Each card** (staggered delay: i * 0.08s):
  - border-radius: var(--radius), overflow: hidden, cursor: pointer
  - Hover: translateY(-4px), box-shadow: 0 20px 50px rgba(0,0,0,0.08)
  - **Placeholder image**: aspect-ratio: 4/3, diagonal stripe pattern background, centered monospace label + "drop image here" hint
  - **Hover overlay**: black gradient (0 → 0.5 opacity), title slides up from bottom (opacity 0→1, translateY 8→0)
  - **Click**: Opens lightbox modal
- **Lightbox**: Fixed overlay (rgba 0,0,0,0.85), centered content (max-width: 800px), close button top-right, click-outside-to-close
- **Items**: Brand Identity System, Event Poster Series, Editorial Layout, Annual Report Design, Packaging Design, Social Media Templates

### 8. Photography Section
- **Background**: var(--bg) (main)
- **Section label**: "Photography"
- **Section title**: "Through the lens."
- **Same grid as Artwork** but aspect-ratio: 3/2 (landscape photo ratio)
- **Items**: Urban Landscapes, Product Photography, Food Photography, Portrait Series, Event Photography, Architecture

### 9. Videographer Section
- **Background**: var(--bg-alt)
- **Section label**: "Videographer"
- **Section title**: "Motion & storytelling."
- **Grid**: 3 columns, gap: 24px
- **Each video card**:
  - border-radius: var(--radius), bg: var(--card)
  - Hover: translateY(-4px), box-shadow: 0 20px 50px rgba(0,0,0,0.08)
  - **Thumbnail**: aspect-ratio: 16/9, striped placeholder background
  - **Play button**: SVG circle + triangle, opacity 0.3 → 0.8 on hover, scale 1 → 1.08
  - **Info area**: padding: 16px 20px, title (heading font, 600 weight, 15px) + description (13px, secondary)
  - **Click**: Opens video modal
- **Video Modal**: Fixed overlay (rgba 0,0,0,0.95), Vimeo iframe embed (max-width: 960px, 16:9, border-radius: 12px), autoplay on open
  - Vimeo URL format: `https://player.vimeo.com/video/{VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`
  - Close button + click-outside-to-close
- **Items**: Brand Story, Product Launch, Behind the Scenes, Event Highlight, Social Reel, Client Testimonial

### 10. Dashboard Section
- **Background**: var(--bg) (main)
- **Section label**: "Marketing"
- **Section title**: "Dashboard & analytics."
- **Same grid as Artwork** but aspect-ratio: 16/9 (dashboard/widescreen ratio)
- **Items**: Social Media Analytics, Campaign Performance, Content Calendar, Engagement Metrics, ROI Dashboard, Monthly Performance

### 11. Footer
- **Padding**: 60px 0
- **Border-top**: 1px solid var(--border)
- **Layout**: Flex space-between, max-width: 1120px, padding: 0 48px
- **Left side**:
  - Name: "Chet Mutaphon" (heading font, weight, 16px)
  - Copyright: "© 2026 All rights reserved." (13px, secondary)
- **Right side (Contact)**:
  - Email link with envelope SVG icon: "your.email@example.com"
  - LinkedIn link with LinkedIn SVG icon: "LinkedIn"
  - Gap: 32px, font-size: 14px, color: var(--text-secondary)
  - Hover: color: var(--accent)

---

## Interactions & Behavior

### Scroll-Triggered Parallax (ScrollReveal)
- **Trigger**: IntersectionObserver, threshold: 0.08, rootMargin: '0px 0px -40px 0px'
- **Initial state**: opacity: 0, translateY: 36px
- **Revealed state**: opacity: 1, translateY: 0
- **Transition**: 0.75s cubic-bezier(0.22, 1, 0.36, 1) with per-element delay
- **Once-only**: After revealing, observer disconnects (no re-hide on scroll up)

### Theme Switching
- 4 themes selectable via tweaks panel
- All colors/fonts/sizes driven by CSS custom properties on :root
- Smooth transitions (0.5s ease) on background, color, border-color changes
- Font family changes are instant (no transition)

### Navigation Scroll Behavior
- Smooth scroll to section with -72px offset (nav height compensation)
- Active section tracking via IntersectionObserver

### Modal Behavior
- **Enter**: fadeIn 0.3s + scaleIn 0.3s (scale 0.96→1)
- **Exit**: Instant unmount on click-outside or close button
- **Body scroll**: Not locked (optional improvement)

---

## Design Tokens

### Theme: Apple Minimal (Default)
| Token | Value |
|-------|-------|
| `--font-body` | -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif |
| `--font-heading` | -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif |
| `--heading-weight` | 700 |
| `--bg` | #ffffff |
| `--bg-alt` | #f5f5f7 |
| `--text` | #1d1d1f |
| `--text-secondary` | #86868b |
| `--accent` | #1d1d1f |
| `--border` | #d2d2d7 |
| `--card` | #f5f5f7 |
| `--nav-bg` | rgba(255,255,255,0.72) |
| `--radius` | 18px |
| `--hero-size` | clamp(48px, 8vw, 88px) |
| `--hero-align` | center |
| `--section-gap` | 120px |
| `--gallery-cols` | 4 |

### Theme: Warm Editorial
| Token | Value |
|-------|-------|
| `--font-body` | "DM Sans", sans-serif |
| `--font-heading` | "DM Serif Display", serif |
| `--heading-weight` | 400 |
| `--bg` | #faf8f5 |
| `--bg-alt` | #f0ece4 |
| `--text` | #2c2825 |
| `--text-secondary` | #8a8279 |
| `--accent` | #8a7054 |
| `--border` | #e0dbd3 |
| `--card` | #f0ece4 |
| `--nav-bg` | rgba(250,248,245,0.85) |
| `--radius` | 8px |
| `--hero-size` | clamp(44px, 7vw, 76px) |
| `--hero-align` | left |

### Theme: Cool Studio
| Token | Value |
|-------|-------|
| `--font-body` | "Space Grotesk", sans-serif |
| `--font-heading` | "Space Grotesk", sans-serif |
| `--heading-weight` | 600 |
| `--bg` | #f5f7fa |
| `--bg-alt` | #e8ecf2 |
| `--text` | #1a1e2e |
| `--text-secondary` | #6b7280 |
| `--accent` | #4361ee |
| `--border` | #d5dbe5 |
| `--card` | #e8ecf2 |
| `--nav-bg` | rgba(245,247,250,0.82) |
| `--radius` | 14px |
| `--hero-size` | clamp(44px, 7vw, 72px) |
| `--hero-align` | center |

### Theme: Ink & Paper
| Token | Value |
|-------|-------|
| `--font-body` | "Syne", sans-serif |
| `--font-heading` | "Syne", sans-serif |
| `--heading-weight` | 800 |
| `--bg` | #ffffff |
| `--bg-alt` | #f0f0f0 |
| `--text` | #000000 |
| `--text-secondary` | #555555 |
| `--accent` | #000000 |
| `--border` | #e0e0e0 |
| `--card` | #f0f0f0 |
| `--nav-bg` | rgba(255,255,255,0.92) |
| `--radius` | 0px |
| `--hero-size` | clamp(52px, 9vw, 100px) |
| `--hero-align` | left |

### Spacing Scale
| Name | Value |
|------|-------|
| Section gap (compact) | 80px |
| Section gap (normal) | 120px |
| Section gap (spacious) | 160px |
| Section inner padding | 0 48px |
| Section inner max-width | 1120px |
| Nav height | 56px |
| Nav padding | 0 48px |
| Gallery grid gap | 20px |
| Video grid gap | 24px |
| Skill tag gap | 10px |
| Timeline left padding | 40px |
| Timeline item spacing | 40px (padding-bottom) |

### Typography Scale
| Element | Size | Weight | Line-height | Letter-spacing |
|---------|------|--------|-------------|----------------|
| Hero name | clamp(48px, 8vw, 88px) | var(--heading-weight) | 1.05 | -0.04em |
| Hero title | clamp(16px, 2vw, 22px) | 400 | — | -0.01em |
| Hero tagline | clamp(14px, 1.4vw, 17px) | 400 | 1.6 | — |
| Section label | 13px | 600 | — | 0.12em (uppercase) |
| Section title | clamp(32px, 4vw, 52px) | var(--heading-weight) | 1.15 | -0.03em |
| About text | 18px | 400 | 1.75 | — |
| Skill tag | 14px | 500 | — | — |
| Timeline role | 18px | var(--heading-weight) | — | — |
| Timeline period | 13px | 500 | — | 0.02em |
| Timeline company | 14px | 500 | — | — |
| Timeline desc | 15px | 400 | 1.65 | — |
| Nav logo | 17px | var(--heading-weight) | — | -0.02em |
| Nav link | 14px | 400 (600 active) | — | 0.01em |
| Gallery overlay title | 15px | 600 | — | — |
| Video title | 15px | 600 | — | — |
| Video desc | 13px | 400 | — | — |
| Footer name | 16px | var(--heading-weight) | — | — |
| Footer copy | 13px | 400 | — | — |
| Footer link | 14px | 400 | — | — |
| Placeholder label | 11px (monospace) | 500 | — | 0.15em |

### Animation Curves
| Name | Value | Usage |
|------|-------|-------|
| Scroll reveal | cubic-bezier(0.22, 1, 0.36, 1) | Element entrance animations |
| General ease | ease | Hover states, color transitions |
| Nav transition | 0.35s ease | Nav background change |
| Theme transition | 0.5s ease | Color/bg changes on theme switch |
| Card hover | 0.4s ease | Card lift + shadow |
| Overlay hover | 0.35s ease | Gallery overlay darken |
| Skill tag hover | 0.3s ease | Tag color invert |
| Loading fade | 0.6s cubic-bezier(0.22,1,0.36,1) | Loading screen exit |
| Modal enter | fadeIn 0.3s + scaleIn 0.3s | Modal open |

---

## Google Fonts Required
```
DM Sans: 400, 500, 600, 700
DM Serif Display: 400
Space Grotesk: 400, 500, 600, 700
Syne: 400, 500, 600, 700, 800
```

## Responsive Breakpoints
| Breakpoint | Changes |
|-----------|---------|
| ≤ 768px | Nav padding: 0 24px, nav-links gap: 20px, hero/section padding: 24px, gallery: 2 columns, video: 1 column, timeline padding-left: 28px |
| ≤ 480px | Gallery: 1 column, nav links hidden |

---

## Files
| File | Description |
|------|-------------|
| `Portfolio.html` | Main HTML shell with all CSS, variables, font imports |
| `portfolio-utils.jsx` | Theme definitions, applyTheme(), ScrollReveal, useScrollReveal, useActiveSection |
| `portfolio-sections.jsx` | All section components: Navigation, Hero, About, Experience, Artwork, Photography, Video, Dashboard, Footer |
| `portfolio-app.jsx` | App root, LoadingScreen, Tweaks config, ReactDOM mount |
| `tweaks-panel.jsx` | Starter component for in-page tweaks panel (design-time tool, not needed in production) |
