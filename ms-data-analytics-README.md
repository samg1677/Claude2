# EduConnect Program Landing Modules — Divi Code Modules

**Single, self-contained landing pages** built in the same design language as the
J1 Change of Status page (plum→teal gradient hero, orange accent, teal detail,
card/chip/accordion components, plum CTA band, end-cap divider).

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

## MSDA page layout (`ms-data-analytics-divi-module.html`)
Same style as the J1 page, but its own section flow — not a section-for-section copy:

1. **Hero + lead form side by side** — headline, checkmark proof points, dual CTA on the
   left; the HubSpot form promoted into a white card on the right, above the fold.
2. **Stat rail** — 4-up card (STEM · Day 1 CPT · 33 credits / 12–16 months · $5,500 grant)
   that overlaps the hero/white boundary.
3. **Bento value grid** — mixed-size tiles (large plum "Day 1 CPT" tile, teal STEM OPT tile,
   white supporting tiles, wide start-dates tile) instead of a plain 3-card row.
4. **Program spec sheet** — labeled definition rows (degree, length, format, campuses, starts,
   work options, concentrations) beside the program photo with an orange $5,500 stamp.
5. **8-week term ribbon** — Week 1 on campus → Weeks 2–7 online & working → Week 8 on campus,
   which is the fastest way to answer "how does hybrid actually work?".
6. **Concentrations** — portrait image plus two accent-bordered cards (Healthcare Analytics,
   Informatics).
7. **Careers** — plum band with role chips plus three hiring-sector cards.
8. **Tuition** — benefit checklist next to a `$5,500` grant card with its own CTA.
9. **Admissions** — horizontal 5-step timeline with a connector line.
10. **FAQ** — two-column `<details>` accordions (no JS) + legal disclaimer.
11. **Final CTA band** + gradient end-cap.

## Notes
- **All CSS is scoped** to each page's namespace (`#md-page` / `#hc-page`) and prefixed
  (`md-` / `hc-`), so the modules never collide with each other, Divi, the mega-menu,
  or the footer.
- The **HubSpot form is embedded once per page**. Every other "talk to an advisor" button
  is an anchor to `#md-form`, so there is one form instance and one scroll target.
  The "Request More Details" buttons still point at the HubSpot share link.
- **SEO + FAQ JSON-LD** are included in each `<head>` for reference. Set the real
  title/description in **Rank Math**. If you rebuild the FAQ as native Rank Math FAQ blocks,
  delete the JSON-LD block to avoid duplicate schema.
- Images reuse existing Media Library URLs already on each current page.
- Healthcare Analytics adds a dedicated **HIMSS Approved Education Partner** section
  (15% member tuition discount) and healthcare-specific career chips.
- All program facts (33 credits, 12–16 months, six start dates, $5,500 grant, hybrid 8-week
  terms in LA/San Diego, interest-free biweekly payments, Day 1 CPT / 3-yr STEM OPT) are
  carried over from the live pages and rewritten for conversion.
- The `md-endcap` / `hc-endcap` gradient bar exists only to separate the plum CTA band from
  the site's plum footer — delete that one `<div>` if you don't want it.
