# EduConnect Program Landing Modules — Divi Code Modules

Two **single, self-contained landing pages** rebuilt in the same design system as the
J1 Change of Status page (plum→teal hero, stat strip, split sections, plum feature cards,
career chips, step timeline, FAQ accordions, disclaimer, final CTA band, end-cap divider):

| File | Page | HubSpot form ID | Namespace |
|------|------|-----------------|-----------|
| `ms-data-analytics-divi-module.html` | `/ms-data-analytics/` | `e7ac32d0-2d64-4c44-9456-c9b8c300723c` | `#md-page` |
| `ms-healthcare-analytics-divi-module.html` | `/ms-healthcare-analytics/` | `ee1e92b3-3ed2-4416-a9c4-7ee54cc7ec19` | `#hc-page` |

Both use HubSpot portal `48135637`.

## How to install (per page)
1. Edit the target page in Divi.
2. Replace the existing body Code Module(s) with **one** Divi **Code Module**.
3. Paste everything **between the `BEGIN DIVI CODE MODULE CONTENT` and
   `END DIVI CODE MODULE CONTENT` markers** (the `<style>` block plus the page `<div>`).
   The `<head>` above the markers is for standalone preview / reference only.
4. Keep the existing site header + footer template — these modules are body content only.

## Notes
- **All CSS is scoped** to each page's namespace (`#md-page` / `#hc-page`) and prefixed
  (`md-` / `hc-`), so the two modules never collide with each other, Divi, the mega-menu,
  or the footer.
- The **HubSpot lead form is preserved** on each page inside the hero-adjacent lead card.
- **SEO + FAQ JSON-LD** are included in each `<head>` for reference. Set the real
  title/description in **Rank Math**. If you rebuild the FAQ as native Rank Math FAQ blocks,
  delete the JSON-LD block to avoid duplicate schema.
- Images reuse existing Media Library URLs already on each current page.
- Healthcare Analytics adds a dedicated **HIMSS Approved Education Partner** section
  (15% member tuition discount) and healthcare-specific career chips; Data Analytics adds a
  two-concentration section (Healthcare Analytics / Informatics).
- All program copy (start dates, 33 credits, $5,500 grant, hybrid schedule,
  Day 1 CPT / 3-yr STEM OPT) is carried over from each current page and tightened for conversion.
