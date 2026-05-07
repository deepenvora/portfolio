# PORTFOLIO-SITE.md — Deepen Vora Portfolio Reference

This document captures how the site was built, its architecture, design tokens,
JS data layer, and rules for making changes. Reference this before every session.

---

## Live Site

- **URL:** https://deepenvora.com
- **Hosting:** Netlify (auto-deploys from GitHub on every push to `main`)
- **Repo:** https://github.com/deepenvora/portfolio
- **DNS:** Managed via Netlify DNS (nameservers set on Namecheap)

---

## Tech Stack

| Layer | Detail |
|---|---|
| HTML | Static HTML5 — one file per page |
| CSS | Custom `styles.css` — Bootstrap-style grid, no Bootstrap library |
| JS | Vanilla JS — no frameworks, no build tools |
| Grid | 12-column, 1140px max container, 30px gutter |
| Fonts | Bricolage Grotesque (headings), Inter (body) |
| Icons | Inline SVG only |
| Images | PNG/JPG — no SVG images |
| Hosting | Netlify free tier |
| Version control | Git + GitHub |

---

## File Structure

```
portfolio/ (repo root)
├── index.html                  ← Home / portfolio listing
├── about.html                  ← About page
├── experiments.html            ← Experiments page
├── famli.html                  ← Case study page
├── otc-seller-portal.html      ← Case study page
├── phlebo.html                 ← Case study page
├── tc-diagnostics.html         ← Case study page
├── case-study.html             ← Legacy fallback (uses ?id= param)
├── styles.css                  ← All custom CSS
├── app.js                      ← Home page data + render functions
├── case-study-data.js          ← All case study content (CS_DATA object)
├── case-study-render.js        ← Renders case study HTML from CS_DATA
├── chrome.js                   ← Shared nav + footer injected on every page
├── CLAUDE.md                   ← Claude Code session instructions
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── assets/
│   ├── home/                   ← All images for index.html
│   │   ├── famli-app.png
│   │   ├── otc-sp.png
│   │   ├── phlebo.png
│   │   ├── tc-diag.png
│   │   ├── il-advocacy.png
│   │   ├── il-process.png
│   │   ├── il-lead.png
│   │   ├── il-scale.png
│   │   └── star.png            ← Marquee separator icon
│   ├── case-studies/
│   │   ├── tick.png            ← Shared tick icon for outcomes sections
│   │   ├── famli/
│   │   │   ├── famli-hero.png
│   │   │   ├── family-goals.png
│   │   │   ├── goals.png
│   │   │   ├── one-view-money.png
│   │   │   ├── persona.png
│   │   │   ├── portfolio-insights.png
│   │   │   ├── research-buddy.png
│   │   │   └── research.png
│   │   ├── otc/
│   │   ├── phlebo/
│   │   └── thyro/
│   ├── about/
│   │   └── profile.png         ← Used in footer
│   ├── experiments/
│   └── testimonials/
│       ├── AJ.png
│       ├── kamal.png
│       ├── soutik.png
│       ├── sindhu.png
│       ├── deeptanshu.png
│       └── alok.png
│   └── deepen_resume.pdf       ← Resume download (root of assets/)
├── reference/                  ← PNG screenshots for visual reference
└── debug/                      ← Ignore — debug files only
```

---

## Design Tokens (styles.css :root)

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#FFA861` | Primary orange accent |
| `--accent-2` | `#F7B11D` | Secondary yellow accent |
| `--ink` | `#181D27` | Primary text colour |
| `--ink-2` | `#414651` | Secondary text colour |
| `--muted` | `#717680` | Muted / caption text |
| `--line` | `#E9EAEB` | Dividers and borders |
| `--line-2` | `#D5D7DA` | Stronger dividers |
| `--bg` | `#FFFFFF` | Page background |
| `--bg-soft` | `#FAFAFA` | Section backgrounds |
| `--famli` | `#F7F5FF` | Famli case study hero bg |
| `--otc` | `#ECFDF3` | OTC case study hero bg |
| `--phlebo` | `#FEF3F2` | Phlebo case study hero bg |
| `--thyro` | `#EFF8FF` | Thyro case study hero bg |
| `--radius` | `16px` | Border radius on cards |
| `--head-font` | `Bricolage Grotesque` | Heading font |
| `--body-font` | `Inter` | Body font |
| `--container` | `1140px` | Max container width |
| `--gutter` | `30px` | Grid gutter |

Dark mode is supported via `body.dark` class — all tokens have dark overrides.

---

## Spacing System

| Token | Value | Usage |
|---|---|---|
| Section vertical padding | `120px` top + bottom | Every `<section>` |
| Between cards | `24px` gap | `.row` gap |
| Between text blocks | `48px` | Margin between headings/paragraphs |
| Image margins | `32px` | Standalone images |
| Inner card padding | `24px` | Card components |
| Mobile section padding | Bootstrap default | Do not override on mobile |

---

## Grid Rules

- Container class: `.container` (max-width: 1140px, auto margins)
- Every `.col-*` must be a direct child of `.row`
- Every `.row` must be inside `.container` or `.container-fluid`
- Columns must sum to 12 per row at every breakpoint
- Never use fixed pixel widths on layout wrappers
- Never use negative margins outside a container

### Responsive breakpoints

| Breakpoint | Width | Class prefix |
|---|---|---|
| Mobile | < 576px | `col-` (default) |
| Small | ≥ 576px | `col-sm-` |
| Medium / Tablet | ≥ 768px | `col-md-` |
| Large / Desktop | ≥ 992px | `col-lg-` (container padding increases) |

---

## JavaScript Architecture

The site uses **3 JS files** plus `chrome.js` for shared UI.

### `app.js` — Home page only

Contains all data arrays and renders dynamic content on `index.html`:

- **`PROJECTS[]`** — 4 case study cards rendered into `#workList`
  - ids: `famli`, `otc`, `phlebo`, `thyro`
  - Each has: `id`, `title`, `desc`, `img`, `thumbClass`, `tags[]`, `outcomes[]`, `long{}`
- **`LEADERS[]`** — 4 leadership capability cards rendered into `#leaderGrid`
- **`TESTIMONIALS[]`** — 6 testimonials rendered into `#testiGrid` as 3 animated columns
- **`CS_PAGE_URLS`** — maps case study ids to their HTML filenames:
  ```js
  { famli:"famli.html", otc:"otc-seller-portal.html",
    phlebo:"phlebo.html", thyro:"tc-diagnostics.html" }
  ```
- **`__TWEAKS__`** — edit mode panel for accent colour, font, dark mode (Claude Design leftover — ignore)

### `case-study-data.js` — Case study content

Contains `CS_DATA` object with all 4 case study data objects keyed by id.
Each case study has:
- `id`, `title`, `subtitle`, `platform`, `duration`, `role`
- `heroColor` — background colour of hero section
- `heroImg` — hero image path
- `sections[]` — array of section objects, each with a `type` field

**Section types available:**

| Type | Purpose |
|---|---|
| `text` | Heading + body paragraph |
| `bullets` | Heading + bullet list |
| `two-col` | Two column layout (supports `quote` type on right) |
| `goals` | Grid of goal cards |
| `persona` | Image + bullet list layout |
| `role-split` | Two column role breakdown |
| `role-para` | Role as paragraph |
| `research` | Image + insights list |
| `full-img` | Full width image with heading |
| `users-list` | Grid of user type cards |
| `users-two-col` | Two column user description |
| `insights-grid` | Grid of insight cards with star icon |
| `features-intro` | Intro text before feature sections |
| `feature` | Feature with image (set `imgLeft: true` to flip layout) |
| `outcomes` | Outcomes with checkmark icons |
| `outcome-table` | Metrics comparison table |

**To add or edit case study content — edit `case-study-data.js` only.**
Never hardcode case study content into HTML files.

### `case-study-render.js` — Renderer

Reads `window.__CS_ID__` (set in each case study HTML file) or falls back to `?id=` URL param.
Renders the full case study page into `#caseBody` div.
Handles: hero, metadata row, all sections, prev/next navigation.
Scroll reveal animations via IntersectionObserver.

**Page → ID mapping inside renderer:**
```js
{ famli:"famli.html", otc:"otc-seller-portal.html",
  phlebo:"phlebo.html", thyro:"tc-diagnostics.html" }
```

### `chrome.js` — Shared nav + footer

Injected into every page via script tag. Builds and prepends the `<header>` nav
and appends the footer. Reads `data-page` and `data-base` attributes from `<body>`.

- Nav links: Projects → `index.html#work`, About → `about.html`, Experiments → `experiments.html`
- Resume button: downloads `assets/deepen_resume.pdf`
- Social links: LinkedIn, X, Instagram, Medium, Behance
- Back to top button with smooth scroll
- Mobile nav toggle (hamburger)
- Scroll reveal via IntersectionObserver on `.work-card`, `.leader-card`, `.testi` etc.

---

## Pages

### `index.html` — Home

Dynamic content rendered by `app.js`:
- Work cards (`#workList`) — clicking a card navigates to that case study page
- Leadership cards (`#leaderGrid`) — 2x2 grid, flex layout
- Testimonials (`#testiGrid`) — 3-column auto-scrolling layout
- Marquee section — uses `assets/home/star.png` as separator between items

Scripts loaded: `chrome.js`, `case-study-data.js`, `app.js`

### `about.html`

Static HTML. Has its own marquee section also using `star.png` separator.

### `experiments.html`

Static HTML. Contains experiment image cards.
Current images: `AI-lindt.png`, `AI-turkey.png` (in assets/experiments/)

### Case study pages — `famli.html`, `otc-seller-portal.html`, `phlebo.html`, `tc-diagnostics.html`

Each page sets `window.__CS_ID__` then loads the renderer:
```html
<script>window.__CS_ID__ = "famli";</script>
<script src="case-study-data.js"></script>
<script src="case-study-render.js"></script>
```

All content comes from `case-study-data.js`. The HTML files contain only:
- `<head>` with meta tags and favicons
- `<body data-page="..." data-base="./">` with `<div id="caseBody"></div>`
- Script tags

**Never hardcode content directly into case study HTML files.**

---

## Key Components

### Metadata row (Platform / Duration / My Role)

In case study hero section. Layout: horizontal flex with vertical separators.

```css
.cs-meta-row { display: flex; flex-wrap: wrap; gap: 24px; }
.cs-meta-item:not(:last-child) { border-right: 1px solid var(--line); padding-right: 24px; }
```

### Outcomes section

Uses inline SVG checkmark circle in `--accent` green (`rgb(88,165,145)`).
Defined in `case-study-render.js` as `const CHECK = ...` SVG string.

### Insights grid

Star icon rendered inline as SVG in `insights-grid` section type.
Class: `.cs-insight-star` — positioned inline left of heading using flexbox.
```css
.cs-insight-header { display: flex; align-items: center; gap: 8px; }
```

### Marquee / ticker

Horizontal scrolling text strip on home and about pages.
Separator between items: `<img src="assets/home/star.png" width="16" height="16" alt="star">`

---

## Case Study IDs and File Map

| Display name | JS id | HTML file | Hero colour |
|---|---|---|---|
| Famli App | `famli` | `famli.html` | `#F7F5FF` |
| OTC Seller Portal | `otc` | `otc-seller-portal.html` | `#ECFDF3` |
| Phlebotomist App | `phlebo` | `phlebo.html` | `#FEF3F2` |
| Diagnostics Portal | `thyro` | `tc-diagnostics.html` | `#EFF8FF` |

---

## What Claude Code May Change

- CSS in `styles.css` — layout, spacing, component styles
- Data in `case-study-data.js` — case study content, sections, copy
- Data in `app.js` — PROJECTS, LEADERS, TESTIMONIALS arrays
- `chrome.js` — nav links, footer content
- HTML structure in static pages (`index.html`, `about.html`, `experiments.html`)
- Image `src` paths when assets are moved
- `<head>` tags (meta, favicon, title)

## What Claude Code Must Never Change

- The `type` field of existing sections in `case-study-data.js` without explicit instruction
- Design tokens (`--accent`, `--ink`, fonts) unless explicitly asked
- Any text copy unless explicitly asked
- `case-study-render.js` renderer logic unless explicitly asked
- Any file not mentioned in the current prompt

---

## Deployment Workflow

Every change follows this flow:

```
Local edit → Live Server check → git add . → git commit -m "..." → git push → Netlify auto-deploys (30 sec)
```

Nothing goes live until `git push`. Commits are local save points only.

**To revert a pushed change:**
```bash
git revert HEAD
git push
```

**To discard uncommitted local changes:**
```bash
git checkout .
```

---

## Commit Message Format

```
feat: add [new thing]
fix: [what was broken] on [filename]
update: [what changed]
chore: [maintenance task]
```

---

## Common Gotchas

1. **Case study content lives in `case-study-data.js`** — never in the HTML files
2. **`thyro` is the JS id** for the page saved as `tc-diagnostics.html` — these don't match
3. **`otc` is the JS id** for the page saved as `otc-seller-portal.html` — these don't match
4. **Resume file** is at `assets/deepen_resume.pdf` — referenced in `chrome.js`
5. **`star.png`** is at `assets/home/star.png` — used in marquee on index and about pages
6. **`tick.png`** is at `assets/case-studies/tick.png` — shared across all case studies
7. **Nav and footer** are not in HTML — they are injected by `chrome.js` at runtime
8. **Dark mode** is toggled via `body.dark` class — all colour tokens have dark variants
