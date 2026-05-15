# EduConnect USA — Mega Menu

Two files. One HTML box. One CSS box.

## What to paste where

| File | Where it goes |
| --- | --- |
| `divi-html-box.html` | Divi Theme Builder → Global Header → **Code module** |
| `divi-css-box.css`   | Divi → Theme Options → **Custom CSS** (or Page Settings → Custom CSS) |

The HTML file already contains a `<script>` block for menu behavior — nothing extra to wire up.

## Menu structure

Top-level items: **Students · Programs · Services · Universities · Host Employers · Resources · About**

Mega panels:
- **Programs** — MBA, DBA, PhD, MS Data Analytics, MS Healthcare Analytics, MS Information Systems Technology, plus a featured "Find the Right Program" CTA
- **Services** — Work & Study, CareerConnect, Financial Solutions, plus Visa Support overview, J1, B1/B2, SEVIS Transfer; featured WhatsApp CTA
- **Universities** — Partner Universities, University Services, Success Stories; featured "Grow your enrollment" CTA
- **Host Employers** — Host Employers, Employer Resources, Recruit With Us; featured "Start recruiting" CTA
- **About** — About EduConnect, Team & Offices, Our Partners, Contact Us; featured "Contact Us" CTA

Direct links (no dropdown): **Students** → `/international-students/`, **Resources** → `/student-resources/`

Right-side CTA: **Chat on WhatsApp** (`wa.me/16263443218`)

## Responsive behavior

- **≥1180px** — full desktop layout with utility top bar
- **1024–1179px** — tighter spacing, tagline hidden, smaller logo type
- **<1024px** — top bar hidden, hamburger reveals a right-side slide-out drawer with accordion sub-menus, scrim + body-scroll lock
- **<540px** — WhatsApp button collapses to icon only

## Preview locally

Open `index.html` in a browser — it loads `divi-html-box.html` and `divi-css-box.css` from disk so you get the exact same result you'll see in Divi.

## Editing later

To swap a page, search for the URL inside `divi-html-box.html` and update **both** the desktop mega panel and the matching item in the mobile drawer (`.ec-mobile__nav`).
