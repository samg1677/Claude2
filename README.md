# EduConnect USA — Mega Menu

Two files. One HTML box. One CSS box.

## What to paste where

| File | Where it goes |
| --- | --- |
| `divi-html-box.html` | Divi Theme Builder → Global Header → **Code module** |
| `divi-css-box.css`   | Divi → Theme Options → **Custom CSS** (or Page Settings → Custom CSS) |

The HTML file already contains a `<script>` block for menu behavior — nothing extra to wire up.

## Menu structure

Top-level items: **Programs · Services · Resources · About Us · Partners**

Mega panels:
- **Programs** — Graduate Degrees (MBA, DBA, PhD) + Master of Science (Data Analytics, Healthcare Analytics, Information Systems Technology) + featured "Find the Right Program" CTA
- **Services** — Career & Study (All Student Services, Work & Study, CareerConnect, Financial Solutions) + Visa Support (Overview, J1, B1/B2, SEVIS Transfer) + WhatsApp CTA
- **Resources** — For Students (International Students, Resource Library, Program Finder) + "Speak with an advisor" CTA
- **About Us** — Company (About EduConnect, Team & Offices, Education Partners, Contact Us) + "Begin your U.S. journey" CTA
- **Partners** — For Universities (Partner Universities, University Services, Success Stories) + For Host Employers (Host Employers, Employer Resources, Recruit With Us) + "Become a partner" CTA

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
