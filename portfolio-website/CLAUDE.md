# CLAUDE.md — Deepen's Portfolio Site

This file is read automatically by Claude Code at the start of every session.
Follow all rules here unless a specific prompt explicitly overrides one.

---

## Project Overview

Static HTML/CSS portfolio website for a product design leader.
7 pages total: 1 home, 1 about, 4 case studies, 1 experiments page.
No build tool, no framework — pure HTML, Bootstrap 5, and one custom CSS file.

---

## File Structure

```
portfolio/
├── CLAUDE.md
├── index.html                  ← Home / portfolio listing page (renamed from Portfolio.html)
├── about.html                  ← renamed from About.html
├── experiments.html            ← renamed from Experiments.html
├── famli.html                  ← Case study (renamed from famli.html — casing only)
├── otc-seller-portal.html      ← Case study (renamed from otc.html)
├── tc-diagnostics.html         ← Case study (renamed from diagnostics.html)
├── phlebo.html                 ← Case study (renamed from phlebo.html — casing only)
├── style.css                   ← Custom styles (loaded after Bootstrap)
├── assets/
│   ├── home/                   ← All images used in index.html live here
│   └── case-studies/
│       ├── famli/
│       ├── otc-seller-portal/
│       ├── tc-diagnostics/
│       └── phlebo/
└── reference/                  ← PNG screenshots of each page at 1440px width
    ├── index.png
    ├── about.png
    ├── experiments.png
    ├── famli.png
    ├── otc-seller-portal.png
    ├── tc-diagnostics.png
    └── phlebo.png
```

---

## Grid System

Bootstrap 5 with a **1140px max-width container**.

### Rules — never violate these

- All page content must sit inside `.container` (max-width: 1140px, auto margins)
- Every `.col-*` must be a direct child of a `.row`
- Every `.row` must be a direct child of a `.container` or `.container-fluid`
- Column counts per `.row` must sum to 12 at every breakpoint
- **Never use fixed pixel widths** on columns or layout wrappers — use `col-*` classes only
- **Never use negative margins** on rows outside a container — this causes horizontal scroll

### Responsive column patterns in use

| Layout | Mobile (default) | Tablet `md` 768px+ | Desktop `lg` 992px+ |
|---|---|---|---|
| Full width | `col-12` | `col-12` | `col-12` |
| Two column | `col-12` | `col-md-6` | `col-lg-6` |
| Three column | `col-12` | `col-md-6` | `col-lg-4` |
| Sidebar + content | `col-12` | `col-md-4` / `col-md-8` | `col-lg-3` / `col-lg-9` |

### Mobile (< 768px) hard rules

- Every section must be single column (`col-12`) unless explicitly noted otherwise
- No element may exceed `100vw` — horizontal scroll is always a bug
- Images must have `max-width: 100%` and `height: auto`
- Navigation must collapse to hamburger menu

---

## Spacing System

Apply these values consistently. Do not invent new spacing values.

| Token | Value | Usage |
|---|---|---|
| Section vertical padding | `120px` top + bottom | Every `<section>` element |
| Between cards in a grid | `24px` gap | `.row` gap or `g-3` Bootstrap class |
| Between text blocks | `48px` | Margin between headings, paragraphs, CTAs |
| Image margins | `32px` | Space around standalone images |
| Inner card padding | `24px` | Padding inside card components |

On mobile, section vertical padding uses Bootstrap's default responsive spacing — do not set a custom value.

---

## Typography

- Do not change any typeface, font-size, font-weight, or line-height values
- Do not change any colour values
- Do not change any copy / text content on any page

---

## Images

- All images in `index.html` must reference `assets/home/`
- All case study images must reference their respective folder:
  - `assets/case-studies/famli/`
  - `assets/case-studies/otc-seller-portal/`
  - `assets/case-studies/tc-diagnostics/`
  - `assets/case-studies/phlebo/`
- All `<img>` tags must have an `alt` attribute
- All images must have `max-width: 100%; height: auto;` either via Bootstrap's `img-fluid` class or in `style.css`

---

## File Rename Map

When renaming files, use this exact mapping. Rename the file AND update every internal `href` across all pages in the same operation.

| Original filename | New filename |
|---|---|
| `Portfolio.html` | `index.html` |
| `About.html` | `about.html` |
| `Experiments.html` | `experiments.html` |
| `famli.html` | `famli.html` ← casing already correct |
| `otc.html` | `otc-seller-portal.html` |
| `diagnostics.html` | `tc-diagnostics.html` |
| `phlebo.html` | `phlebo.html` ← casing already correct |

---

- All `href` values pointing to HTML pages must use lowercase filenames
- The home page is always `index.html` — no other filename is acceptable
- If any page is renamed, update every internal `href` across all pages in the same operation

---

## What Claude Code May Change

- Bootstrap grid markup (`container`, `row`, `col-*` classes)
- Spacing and padding values (using the token table above)
- `src` and `href` paths when files are moved
- Adding new sections when explicitly instructed
- Fixing `max-width`, `overflow-x` issues causing horizontal scroll

## What Claude Code Must Never Change

- Any text content or copy on any page
- Colours, typography, or visual design decisions
- Page sections not mentioned in the current prompt
- The order or structure of existing sections (unless explicitly asked)
- Any file not mentioned in the current prompt

---

## Component-Level Fix Specifications

These are precise, scoped fixes. Each has a clear location, a clear rule, and a clear scope boundary.

---

### 1. Family Sharing Section — `famli.html`

**Location:** Insert this new section immediately below the "Portfolio Insights" section.

**Layout:** 2-column grid, identical structure to the "Goal Based Investing" section in the same file — content on the left (`col-lg-6`), image on the right (`col-lg-6`).

**Image:** `assets/case-studies/famli/famli-goals.png` — place in the right column with `img-fluid` class.

**Content (copy exactly as written — do not paraphrase or reword):**

```
[Section heading]
Family Sharing

[Subheading]
Add Family. Share at ease. Plan together.

[Bullet points — use the same list style as other bullet lists in famli.html]
• Permission-based family sharing
• Joint financial planning and goals
• Reduced dependency on a single family member
```

**Do not change** any other section in `famli.html`.

---

### 2. Marquee Dot → Star Icon — `index.html` and `about.html`

**Problem:** The marquee/ticker section uses a dot/bullet character as a separator between items.

**Fix:** Replace every marquee separator dot with an `<img>` tag pointing to `assets/home/star.png`. Apply `width: 16px; height: 16px;` and `alt="star"` to each instance. Do not change the marquee text content or animation.

**Scope:** `index.html` and `about.html` only — marquee separator only, nothing else.

---

### 3. Key Insights Star Placement — `tc-diagnostics.html` and `phlebo.html`

**Problem:** In the "Key Insights from Research" section, the element with class `cs-insight-star` currently appears **above** each feature heading, stacked vertically. It should appear **inline to the left** of the heading — functioning as a bullet point replacement.

**Fix:** Change the layout of `.cs-insight-star` + heading so they sit on the same line. Use `display: flex; align-items: center; gap: 8px;` on the parent wrapper, or equivalent inline layout. The star must visually precede the heading text, not float above it.

**Do not change** any other styling, spacing, or content in these sections.

---

1. **Read this file first** before touching any code
2. **Audit before fixing** — when asked to fix a category of issues, list all instances found before making changes, unless the prompt says otherwise
3. **One page or one issue type per prompt** — do not batch unrelated fixes
4. **Confirm after each file** — after editing a file, state what changed and what was left untouched
5. **Use reference PNGs** in `/reference/` as the visual target for any layout or spacing decision
6. **Commit message format**: `fix: [issue type] on [filename]` e.g. `fix: mobile grid on pharmeasy.html`

---

## Known Issues to Fix (Session Backlog)

Work through these in order. Check off as completed.

- [ ] Rename all HTML files using the File Rename Map above; update every internal `href` across all 7 pages in the same operation; do not touch any content
- [ ] Move all images referenced in `index.html` to `assets/home/`; update src paths in `index.html` only
- [ ] Fix Bootstrap grid violations causing horizontal scroll on mobile — audit all pages, fix one page at a time
- [ ] Fix spacing and padding inconsistencies — all pages, using the token table above, one page at a time
- [ ] Add "Family Sharing" section to `famli.html` — see Component-Level Fix Specifications above for full detail
- [ ] Replace marquee dots with `star.png` icon in `index.html` and `about.html` — see Component-Level Fix Specifications above
- [ ] Fix `.cs-insight-star` placement in `tc-diagnostics.html` and `phlebo.html` — see Component-Level Fix Specifications above

---

## Before Your First Session — Checklist

- [ ] Confirm your custom CSS filename matches `style.css` — update above if different
- [ ] Confirm Bootstrap container class in your HTML is `.container` (not `.container-xl` or a custom class)
- [ ] Check your Figma Inspect panel for exact section padding/spacing values and update the token table above if they differ
- [ ] Export all 7 page frames from Figma as PNG at 1440px width and place them in the `/reference/` folder with the filenames listed above
- [ ] Initialise a git repo before starting: `git init && git add . && git commit -m "baseline before fixes"`
