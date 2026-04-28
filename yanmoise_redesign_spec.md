# yanmoise.com — Terminal Redesign Implementation Spec

> Complete reference for migrating the current beige/navy portfolio to the new crimson terminal aesthetic. Two themes (dark + light), one component system.

---

## 1. Vision Shift

### Current direction (what's leaving)
The existing site reads as warm neutralist. Beige backgrounds, navy blue navbar and headings, soft pill tags, alternating beige/tan section bands, generic sans-serif typography. Calm and inoffensive but generic. No strong visual point of view.

### New direction (what's arriving)
Bold editorial with a techy backbone. Deep crimson as the brand color, cream and near-black as carriers, monospace typography woven through every UI label, and a Mac terminal card pattern repeated across every component. Hard offset shadows in crimson, zero border radius anywhere, 90 degree corners on every shape. Two themes that share the exact same DNA.

### Mood goals
1. Raw confidence (crimson commitment, oversized condensed typography)
2. Techy authenticity (monospace UI text, file paths, status indicators, terminal prompts)
3. Editorial weight (large display type, generous spacing, asymmetric layouts)

---

## 2. Color Palette

### Dark theme tokens

| Token | Hex | Role |
|---|---|---|
| `--cr` | `#8B1A1A` | Primary crimson, brand color |
| `--cr-dk` | `#5C0F0F` | Darker crimson, used for shadows on dark sections |
| `--cr-glow` | `#B22222` | Brighter crimson, used for emphasis text on dark |
| `--cream` | `#F0EBE0` | Primary text on dark, soft warm white |
| `--ww` | `#FAF8F3` | Rare highlight white |
| `--nb` | `#0A0A0A` | Section backgrounds (work, contact, footer) |
| `--term-bg` | `#141414` | Terminal card body background |
| `--term-bar` | `#1F1F1F` | Terminal title bar background |
| `--term-border` | `#2A2A2A` | Card borders and dividers |

### Light theme tokens

| Token | Hex | Role |
|---|---|---|
| `--cr` | `#8B1A1A` | Primary crimson (same across both themes) |
| `--cr-dk` | `#5C0F0F` | Darker crimson |
| `--cr-glow` | `#A52020` | Slightly muted crimson for light backgrounds |
| `--cream` | `#F4EFE4` | Hero and about section background |
| `--cream-2` | `#EBE5D7` | Skills and footer background |
| `--cream-3` | `#E0D9C8` | Decorative accents |
| `--paper` | `#FAF8F3` | Card body background and primary section background |
| `--ink` | `#1A1A1A` | Primary text and card borders |
| `--ink-soft` | `#4A4A4A` | Secondary text |
| `--border` | `#C9C2B1` | Card title bar borders |
| `--border-soft` | `#D9D2C0` | Internal dividers |
| `--term-bar` | `#E8E2D2` | Terminal title bar background |

### Mac terminal traffic lights (both themes)

| Token | Hex | Position |
|---|---|---|
| `--light-red` | `#FF5F57` | Close button (left) |
| `--light-yellow` | `#FEBC2E` | Minimize button (middle) |
| `--light-green` | `#28C840` | Maximize button (right) |

### Status indicators

| State | Dark theme | Light theme |
|---|---|---|
| Available / live | `#5DFF8A` | `#1F9D3A` |
| Warning | `--cr-glow` | `--cr` |

---

## 3. Typography

### Font stack

```css
--font-display: Impact, 'Arial Narrow', Arial, sans-serif;
--font-mono: 'Courier New', Courier, monospace;
--font-serif: Georgia, 'Times New Roman', serif;
```

### Usage rules

| Element | Font | Size | Weight | Letter spacing | Transform |
|---|---|---|---|---|---|
| Hero headline | Display | 108px | 900 | -2.5px | uppercase |
| Project titles | Display | 42px | 900 | -0.5px | uppercase |
| Skill titles | Display | 28px | 900 | -0.5px | uppercase |
| Stat numbers | Display | 56px | 900 | -1px | none |
| Contact headline | Display | 76px | 900 | -2px | uppercase |
| About text | Serif | 20px | 400 | normal | none |
| Section labels | Mono | 9px | 400 | 4px | uppercase |
| Nav links | Mono | 10px | 400 | 2px | uppercase |
| Tags | Mono | 9px | 400 | 1px | uppercase |
| Body / descriptions | Mono | 11px | 400 | 0.3px | none |

### Why this works
The Impact + Courier New pairing creates instant tension. Impact carries the editorial confidence you wanted from Image 2, Courier carries the techy vibe. Georgia for the about paragraph adds a third register that signals personal voice, which keeps that section from feeling like a UI element.

### Fonts to load
Both Impact and Courier New are system fonts, so no Google Fonts import is required. If you want a more refined display font, swap Impact for `Anton` from Google Fonts (similar weight, more controlled) but keep all other settings identical.

---

## 4. Spacing & Layout

### Section padding

| Section | Vertical | Horizontal |
|---|---|---|
| Nav | 18px | 36px |
| Hero | 72px / 64px | 36px |
| Work | 80px | 36px |
| Skills | 80px | 36px |
| About | 80px | 36px |
| Contact | 80px | 36px |
| Footer | 18px | 36px |

### Card spacing

| Use case | Gap |
|---|---|
| Project cards (vertical stack) | 48px |
| Skill cards (grid) | 36px |
| Stat cells (no gap, dividers do the work) | 0 |
| Buttons in contact | 20px |

### Grid pattern overlay
Crimson and cream sections get a subtle grid texture on top:

```css
background-image:
  linear-gradient(rgba(240,235,224,0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(240,235,224,0.06) 1px, transparent 1px);
background-size: 36px 36px;
```

Use the cream color version on crimson backgrounds, and an ink color version on cream backgrounds (`rgba(26,26,26,0.05)`).

---

## 5. Shadows & Borders

### Critical rule: zero border radius
Set globally on every element except traffic light dots:

```css
*, *::before, *::after {
  border-radius: 0 !important;
}

.lights span {
  border-radius: 50% !important;
}
```

### Hard offset shadow system
No blur on any shadow. The shadow is a solid color block offset diagonally.

| Element | Offset | Color |
|---|---|---|
| Project cards | `10px 10px 0 0` | `var(--cr)` |
| Skill cards | `8px 8px 0 0` | `var(--cr)` |
| Manifesto card | `8px 8px 0 0` | `var(--cr-dk)` (dark) / `var(--cr)` (light) |
| About card | `10px 10px 0 0` | `var(--cr-dk)` (dark) / `var(--cr)` (light) |
| Buttons | `6px 6px 0 0` | `var(--cr)` for primary |
| Hero badge | `4px 4px 0 0` | `var(--cr-dk)` (dark) / `var(--cr)` (light) |

### Hover lift pattern
Project cards lift on hover by translating the card and pushing the shadow further:

```css
.proj-card {
  transition: transform 0.2s;
  box-shadow: 10px 10px 0 0 var(--cr);
}
.proj-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 14px 14px 0 0 var(--cr);
}
```

### Border conventions

| Theme | Card border | Internal divider |
|---|---|---|
| Dark | `1px solid var(--term-border)` | `1px solid var(--term-border)` |
| Light | `1px solid var(--ink)` | `1px solid var(--border-soft)` |

Light cards need a stronger border because shadow alone doesn't define them against cream backgrounds.

---

## 6. The Mac Terminal Card Pattern

This is the single most important component. It repeats across the entire site.

### Anatomy

```
┌─────────────────────────────────────────┐
│ ● ● ●           ~/path/file.ext         │  <- title bar
├─────────────────────────────────────────┤
│                                         │
│   [Card content goes here]              │
│                                         │
└─────────────────────────────────────────┘
   shadow offset 10px 10px in crimson
```

### React component template

```jsx
function TerminalCard({ filename, children, shadowSize = 10, theme = 'dark' }) {
  return (
    <div className={`terminal-card terminal-card--${theme}`}>
      <div className="terminal-bar">
        <div className="lights">
          <span className="l-r" />
          <span className="l-y" />
          <span className="l-g" />
        </div>
        <div className="terminal-title">{filename}</div>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
```

### CSS for the pattern

```css
.terminal-card {
  border: 1px solid var(--term-border);
  background: var(--term-bg);
  box-shadow: 10px 10px 0 0 var(--cr);
}

.terminal-bar {
  background: var(--term-bar);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--term-border);
}

.lights {
  display: flex;
  gap: 7px;
}

.lights span {
  width: 11px;
  height: 11px;
  display: inline-block;
}

.l-r { background: #FF5F57; }
.l-y { background: #FEBC2E; }
.l-g { background: #28C840; }

.terminal-title {
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(240, 235, 224, 0.5);
  letter-spacing: 1.5px;
  flex: 1;
  text-align: center;
  margin-right: 42px; /* offsets the lights for true centering */
}

.terminal-body {
  padding: 28px 32px;
}
```

### Filename conventions for title bars
Pick filenames that match the content semantically:

| Component | Filename |
|---|---|
| Manifesto | `~/yan/manifesto.txt` |
| Project (Buddy) | `~/projects/buddy.app` |
| Project (123Therapy) | `~/projects/123therapy.app` |
| Project (FoodShed) | `~/projects/foodshed.app` |
| Skill (Development) | `development.sh` |
| Skill (Design) | `design.sh` |
| Skill (Tools) | `infra.sh` |
| About | `~/about/yan.md` |

---

## 7. Component-by-Component Migration

### 7.1 Navbar

| Current | New |
|---|---|
| Solid navy blue background | Near-black (dark) or paper white (light) |
| Light cream text | Cream text (dark) or ink black (light) |
| "Yan Wirdiny Moise" sans-serif | `yan_wirdiny_moise` in monospace, prefixed with `> ` in crimson |
| Plain text links: Work, About, Contact | Monospace bracketed links: `[work]`, `[about]`, `[contact]` |
| No accent color | Crimson on hover |

### 7.2 Hero Section

| Current | New |
|---|---|
| Beige background | Crimson (dark) or cream (light) with grid texture overlay |
| "Available for work" pill in soft blue | Terminal-style badge with green dot, hard shadow, monospace text |
| "Your Software Engineer" in navy | Same headline in cream (dark) or crimson (light), font swap to Impact, all caps, line-broken into 3 stacked words |
| "A single line of code can change everything" as subtitle | Moved to its own terminal card (see 7.3) |
| Mouse scroll indicator | Removed. Replaced by `v2.6 // 2026` system version tag |
| Eyebrow text (none) | New: `software engineer // umass boston` with horizontal rule prefix |
| Cursor indicator | Blinking crimson cursor at end of headline |

### 7.3 Manifesto Card (NEW component)

This is a new addition. The manifesto sentence now lives in its own wide-but-short terminal card under the headline.

```
┌─────────────────────────────────────────────────┐
│ ● ● ●         ~/yan/manifesto.txt               │
├─────────────────────────────────────────────────┤
│ $ a single line of code can change everything.  │
└─────────────────────────────────────────────────┘
```

Specs: max-width 720px, single line of body text with a `$` prompt prefix in crimson, padding 18px 22px (notably shorter than other cards).

### 7.4 Selected Work

| Current | New |
|---|---|
| Plain rounded white cards on beige | Terminal cards with traffic lights and file paths |
| Project title in navy bold | Title in Impact 42px, all caps, ink or cream depending on theme |
| Description in soft blue body text | Description in monospace 11px, secondary color |
| Pill tags: React Native, TypeScript, Node.js (rounded blue pills) | Square monospace tags with crimson border, 9px font |
| Right arrow button (rounded blue circle) | New layout: `view_case ↗` text link in monospace at bottom right |
| No metadata | Added: project ID (`PRJ-001`) in crimson, status indicator (`● deployed`) in green |

Project cards stack vertically with 48px gaps. Hover lifts each card 2px and extends shadow from 10px to 14px.

### 7.5 What I Do (Skills)

| Current | New |
|---|---|
| Khaki tan section background | Cream-2 background (light) or near-black (dark) |
| White rounded cards | Terminal cards with `.sh` filename titles |
| Blue square icons (code, palette, lightning) | Removed entirely. Replaced by monospace prompt: `$ ./run --stack` |
| Section title "What I Do" centered in navy | Section label `>> what_i_do` left-aligned in crimson with horizontal rule extending right |
| Bulleted list with blue dots | Arrow-prefixed list `→ React`, with crimson arrows |
| Card layout: icon, title, list | New layout: prompt line, Impact title, list. Icons gone. |

### 7.6 About Me

| Current | New |
|---|---|
| Centered "About Me" title in navy | Section label `>> about_me` left-aligned in mono |
| Centered paragraph in muted blue | Wrapped in a terminal card (`~/about/yan.md`), text in Georgia serif 20px, left-aligned, max-width 600px |
| No stats | Added: 3-column stat block with `3+ Hackathons Won`, `10+ Projects Shipped`, `3.7 GPA @ UMB` |
| Section background beige | Crimson with grid texture (dark) or cream with grid texture (light) |

The About card has a `$ cat about.md // origin_story` prompt above the paragraph, mimicking running a cat command on a markdown file.

### 7.7 Let's Connect

| Current | New |
|---|---|
| "Let's Connect" centered in navy | `>> init_contact` section label, then giant 76px `LET'S BUILD TOGETHER` headline with `BUILD` in crimson |
| Three rounded buttons: Email Me / GitHub / LinkedIn | Three flat buttons with hard crimson shadows. Primary button is `$ ./email_me` in monospace. Secondary buttons are plain `github` and `linkedin` |
| Beige background | Near-black (dark) or paper white (light) |

### 7.8 Footer

| Current | New |
|---|---|
| `© 2025 Yan Wirdiny Moise. All rights reserved.` | `© 2025 yan_wirdiny_moise // all_rights_reserved` |
| `Designed & Built with React` | `built_with: react // hosted_on: railway` |
| Plain text on beige | Monospace 9px on near-black or cream-2 |

---

## 8. Implementation Roadmap

### Phase 1: Foundation (1 to 2 hours)
1. Add CSS variables for both themes to your global stylesheet
2. Set up the global `border-radius: 0 !important` rule with traffic light exception
3. Replace existing font stack with Impact + Courier New + Georgia
4. Add the grid pattern utility class

### Phase 2: Build the TerminalCard component (1 hour)
1. Create reusable `<TerminalCard filename="" shadow="" theme="">` component
2. Create traffic lights subcomponent
3. Test with one variant to confirm shadow and border work cross-browser

### Phase 3: Migrate sections one at a time (3 to 4 hours)
1. Navbar: change colors, swap to monospace, update copy
2. Hero: replace background, swap headline color, add cursor animation, build manifesto terminal
3. Selected Work: convert each project to a TerminalCard, add status indicators
4. Skills: convert to TerminalCards with `.sh` filenames
5. About: wrap content in TerminalCard, add stat block
6. Contact: rebuild headline and button system
7. Footer: update copy and styles

### Phase 4: Theme toggle (2 hours, optional)
1. Set up theme context provider in React
2. Wire CSS variables to a `data-theme` attribute on root
3. Add toggle button somewhere in the nav
4. Persist preference to localStorage
5. Default to system preference via `prefers-color-scheme`

### Phase 5: Polish (1 to 2 hours)
1. Add hover transitions on project cards
2. Tune cursor blink timing if needed (currently 1s step-end)
3. Test typography rendering across browsers (Impact has slight variations)
4. Add scroll-triggered fade-in if you want motion

---

## 9. Tailwind config additions

If you're on Tailwind, add these to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8B1A1A',
          dark: '#5C0F0F',
          glow: '#B22222',
        },
        cream: {
          DEFAULT: '#F0EBE0',
          2: '#EBE5D7',
          3: '#E0D9C8',
        },
        paper: '#FAF8F3',
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#4A4A4A',
        },
        term: {
          bg: '#141414',
          bar: '#1F1F1F',
          border: '#2A2A2A',
        },
      },
      fontFamily: {
        display: ['Impact', 'Arial Narrow', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'hard-sm': '4px 4px 0 0 #8B1A1A',
        'hard-md': '6px 6px 0 0 #8B1A1A',
        'hard-lg': '8px 8px 0 0 #8B1A1A',
        'hard-xl': '10px 10px 0 0 #8B1A1A',
        'hard-2xl': '14px 14px 0 0 #8B1A1A',
        'hard-dark-lg': '8px 8px 0 0 #5C0F0F',
        'hard-dark-xl': '10px 10px 0 0 #5C0F0F',
      },
      borderRadius: {
        'none': '0',
      },
    },
  },
};
```

Then in your global CSS:

```css
* {
  border-radius: 0 !important;
}

.lights span,
.rounded-full {
  border-radius: 9999px !important;
}
```

---

## 10. Things to Remove

Strip these from the existing site during migration:

1. The blue Bootstrap-style navbar background
2. All `rounded-*`, `rounded-md`, `rounded-lg`, `rounded-full` Tailwind classes (except on traffic lights)
3. The mouse scroll indicator graphic in the hero
4. The colored icon squares in the What I Do section (code icon, palette icon, lightning icon)
5. The alternating beige/khaki tan section bands
6. Soft blue secondary text color (replace with monospace gray or crimson)
7. The right-arrow circular buttons on project cards
8. Generic `Inter` or `system-ui` font references
9. The center-aligned About Me paragraph layout
10. Pill-style tag badges with rounded edges

---

## 11. Final Checklist

Before shipping, verify:

- [ ] Every card has Mac traffic lights (red, yellow, green)
- [ ] Every card has a hard offset shadow in crimson
- [ ] Zero rounded corners except on traffic light dots
- [ ] Every UI label uses monospace font
- [ ] All headings use Impact (or Anton if substituted)
- [ ] Hero headline has a blinking cursor
- [ ] Manifesto card sits in its own wide-short terminal box
- [ ] Project cards have ID, status indicator, tags, and view_case link
- [ ] About section has stats block with 3 cells
- [ ] Section labels use `>>` prefix and have horizontal rule extending right
- [ ] Theme can toggle between dark and light without layout shift
- [ ] Hover state on project cards lifts the card and extends shadow
- [ ] No emojis anywhere (use unicode arrows like `↗` and `→` instead)

---

## 12. Reference: Both themes side by side

| Property | Dark | Light |
|---|---|---|
| Hero background | Crimson `#8B1A1A` | Cream `#F4EFE4` |
| Hero headline color | Cream `#F0EBE0` | Crimson `#8B1A1A` |
| Cursor color | Cream | Crimson |
| Work section background | Near-black `#0A0A0A` | Paper `#FAF8F3` |
| Card body background | Term `#141414` | Paper `#FAF8F3` |
| Card border | `#2A2A2A` (1px) | `#1A1A1A` (1px) |
| Card shadow | `var(--cr)` | `var(--cr)` |
| Primary text | Cream | Ink black |
| Section label color | `var(--cr-glow)` | `var(--cr)` |
| Status indicator (live) | `#5DFF8A` | `#1F9D3A` |

Crimson is the constant across both themes. That's what gives the design unity.
