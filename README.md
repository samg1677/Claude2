# EduConnect USA — Mega Menu

A visually polished, fully responsive header with a mega menu for desktop /
tablet and a slide-out drawer for mobile. Built to match the existing
EduConnect USA brand (teal `#00607d` / `#4ed3cc`, orange `#ff7400`,
Roboto + Open Sans).

## Files

| File | What it's for |
| --- | --- |
| `index.html` | Standalone preview page — open in a browser to test the header at every screen size. |
| `mega-menu.css` | All header styling. |
| `mega-menu.js` | Hover / click / keyboard / drawer logic. |
| `divi-mega-menu.html` | **Single drop-in snippet** with everything inlined — for the Divi Theme Builder Code module. |

## How to install on the live site

1. Open **Divi → Theme Builder** and edit your **Global Header** template.
2. Remove (or hide) the existing Menu module.
3. Add a **Code** module that spans the full row width.
4. Paste the entire contents of `divi-mega-menu.html` into the Code module.
5. Save and view the site — the new header replaces the old one.

If you'd rather host the CSS / JS separately (e.g. via Divi → Custom CSS or
in a child theme), use `mega-menu.css` + `mega-menu.js` and paste only the
`<header>...</header>` block from `index.html`.

## What's included

- Top utility bar with WhatsApp + Contact + tagline (hidden on mobile)
- Logo + 7 top-level items: Students, Programs, Services, Universities,
  Host Employers, Resources, About
- Mega panels with 2- or 3-column layouts, icon bubbles, feature card,
  and a primary CTA per panel
- Right-side **Apply Now** + WhatsApp buttons
- Mobile slide-out drawer with accordion sub-menus, scrim, body-scroll
  lock, and prominent Apply Now / WhatsApp buttons at the top

## Editing links

Every link in the snippet already points to a real URL on
`educonnectusa.com`. To rename a page or add a new one, edit the `<a href>`
inside the mega panel **and** the matching entry inside the mobile drawer
(`.ec-mobile__nav`) so both stay in sync.

## Breakpoints

- **≥1180px** — full desktop layout
- **1024–1179px** — tighter spacing, smaller logo type, tagline hidden
- **<1024px** — burger + slide-out drawer (mobile + small tablet)
- **<540px** — Apply Now moves inside the drawer to save space

## Accessibility

- Mega triggers are buttons with `aria-expanded` + `aria-controls`
- Esc closes any open panel and the mobile drawer
- Click-outside closes mega panels
- `prefers-reduced-motion` disables transitions
- All interactive targets are ≥40px on mobile
