# EduConnect USA — page modules

Self-contained Divi Code Module pages. Each file is a full HTML document so it
previews on its own, but only the block between the
`BEGIN DIVI CODE MODULE CONTENT` / `END DIVI CODE MODULE CONTENT` markers gets
pasted into WordPress.

## day-1-cpt.html

New landing page targeting Day 1 CPT search intent. Suggested slug: `/day-1-cpt/`.

**How to publish**

1. Pages → Add New → title "Day 1 CPT", set the slug to `day-1-cpt`.
2. Use Divi Builder → one Section → one Row (fullwidth, zero custom padding) →
   one Code Module.
3. Paste everything between the BEGIN/END markers into that Code Module.
4. In Rank Math → Edit Snippet, copy the `<title>`, meta description and
   canonical from the `<head>` of this file.
5. The `<head>` also carries a `FAQPage` JSON-LD block. Either paste it into a
   second Code Module at the bottom of the page, or rebuild the Q&As as native
   Rank Math FAQ blocks — do not do both, or the schema duplicates.

**Styling**

All CSS is scoped to `#d1-page` and every class is prefixed `d1-`, using the same
tokens as `/ms-data-analytics/` (teal `#4ed3cc`, orange `#ff7400`, plum `#332959`,
Arial). Nothing can collide with Divi, the mega menu, other program pages, or the
footer.

**Before it goes live — check these**

- Hero image is currently the existing `2024/09/16.png`; swap for something
  page-specific if you have it.
- Program cards link to `/mba/`, `/dba/`, `/phd/`, `/ms-data-analytics/`,
  `/ms-healthcare-analytics/`, `/ms-information-systems-technology/`. Confirm the
  credit counts and STEM designations on each of those pages match what is
  claimed here.
- The HubSpot embed reuses the same portal (48135637) and form IDs as the
  MS Data Analytics page. Consider a dedicated form so Day 1 CPT leads are
  attributed separately.
- Add the page to the mega menu (Services → Visa Support) and the footer
  (Services & Visas column), and cross-link it from the visa-support and program
  pages.
