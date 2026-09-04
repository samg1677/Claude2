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

Layout language is modelled on day1cptapply.com — dark dotted hero with blurred
glow blobs, tight display type, a form card beside the headline, a divided stat
strip, ghost numerals behind the situation cards, a connector rail across the
steps, teal-glow card hovers, rotating FAQ chevrons — re-skinned entirely in
EduConnect brand tokens:

| role | day1cptapply | here |
| --- | --- | --- |
| dark base | navy `#273B66` / `#1A2B4D` | plum `#332959` / `#241D40` |
| accent | teal `#1EA7D0` | teal `#4ED3CC` |
| CTA | gold `#F4BF00` | orange `#FF7400` |
| type | Archivo + Lato | Arial (Divi global) |

All CSS is scoped to `#d1-page` and every class is prefixed `d1-`, so nothing can
collide with Divi, the mega menu, other program pages, or the footer.

**Before it goes live — check these**

- Hero image is currently the existing `2024/09/16.png`; swap for something
  page-specific if you have it.
- The partner strip under the hero uses text items. Swap them for real logo
  `<img>` tags once you have them.
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

---

## ms-information-systems-technology.html

Rebuild of the **existing** page at `/ms-information-systems-technology/`. The
live version is still assembled from native Divi text / blurb / accordion
modules; this replaces it with a single Code Module built in the same design
language as the MS Healthcare Analytics and MS Data Analytics pages.

**How to publish**

1. Edit the existing page — do **not** create a new one, and do **not** change
   the slug (`ms-information-systems-technology`), so links and rankings hold.
2. Delete the old Divi modules (duplicate the page first if you want a
   rollback copy sitting in drafts).
3. One Section → one Row (fullwidth, zero custom padding) → one Code Module.
4. Paste everything between the BEGIN/END markers into that Code Module.
5. Rank Math → Edit Snippet: copy the `<title>`, meta description and canonical
   from the `<head>` of this file.
6. The `<head>` also carries a `FAQPage` JSON-LD block. Either paste it into a
   second Code Module at the bottom of the page, or rebuild the Q&As as native
   Rank Math FAQ blocks — do not do both, or the schema duplicates.

**Styling**

Same tokens and section rhythm as MSHA, scoped to `#mi-page` with every class
prefixed `mi-`, so the three program pages can coexist without collisions.

Sections in order: hero + four-cell stat strip → intro with the HubSpot lead
form → bento value grid → spec sheet → 8-week term ribbon → the two
concentrations → careers (dark) → tuition + `$5,500` grant → five-step
admissions rail → FAQ + legal note → final CTA.

**Content pulled from the live page**

- 33 credits, 12–16 months, hybrid, on campus twice per 8-week term
- Los Angeles & San Diego; study and work from any U.S. state between sessions
- Six starts a year: Jan · Mar · May · Jul · Aug · Oct
- Concentrations: Cybersecurity, Technology Management
- Day 1 CPT, STEM-designated, up to 3 years STEM OPT, $5,500 grant
- Interest-free installment payments

**Before it goes live — check these**

- Hero image is `2026/03/8.jpg` and the spec/concentration images are
  `2024/08/MG_1594-scaled.jpg` and `2024/12/job_recruitement_04.jpg`. Confirm
  those are the ones you want, or swap the `src` values.
- The lead form reuses the form ID already embedded on the live MSIST page
  (`b99ff43c-7bea-46db-a2b6-fd2a25f545d4`, portal `48135637`). Confirm it is
  still the form you want MSIST leads routed to.
- Verify the 33-credit count, the 12–16 month range and the STEM designation
  against current Alliant catalogue copy before publishing.
- Confirm you have clearance to name **Alliant University** in body copy on
  this page.
- Cross-link the new `/day-1-cpt/` page from the CPT sections here.
