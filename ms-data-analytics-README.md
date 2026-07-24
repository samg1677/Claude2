# MS in Data Analytics — Divi Code Module

`ms-data-analytics-divi-module.html` is a **single, self-contained landing page** for
`https://educonnectusa.com/ms-data-analytics/`, rebuilt in the same design system as the
J1 Change of Status page (plum→teal hero, stat strip, split sections, plum feature cards,
step timeline, FAQ accordions, disclaimer, final CTA band, end-cap divider).

## How to install
1. Edit the **/ms-data-analytics/** page in Divi.
2. Replace the existing body Code Module(s) with **one** Divi **Code Module**.
3. Paste everything **between the `BEGIN DIVI CODE MODULE CONTENT` and
   `END DIVI CODE MODULE CONTENT` markers** (the `<style>` block plus the `<div id="md-page">`).
   The `<head>` above the markers is for standalone preview / reference only.
4. Keep the existing site header + footer template — this module is body content only.

## Notes
- **All CSS is scoped to `#md-page`** and prefixed `md-` so it will not collide with
  Divi, the mega-menu, or the footer.
- The **HubSpot lead form is preserved** (portal `48135637`, form
  `e7ac32d0-2d64-4c44-9456-c9b8c300723c`) inside the hero-adjacent lead card.
- **SEO + FAQ JSON-LD** are included in the `<head>` for reference. Set the real
  title/description in **Rank Math**. If you rebuild the FAQ as native Rank Math FAQ blocks,
  delete the JSON-LD block to avoid duplicate schema.
- Images reuse existing Media Library URLs already on the current page.
- All copy (start dates, 33 credits, $5,500 grant, concentrations, hybrid schedule,
  Day 1 CPT / 3-yr STEM OPT) is carried over from the current page and tightened for conversion.
