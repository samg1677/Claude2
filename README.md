# EduConnect USA — End of Duration of Status Webinar

Landing page for **"End of Duration of Status: What It Means for Your CPT, OPT, and Your Next Degree"** with Ms. Ravneet Brar of VisaPro.

- **When:** Friday, September 25, 2026 · 10:00 AM PT / 1:00 PM ET
- **Where:** Online (Zoom)
- **Registration:** https://zoom.us/webinar/register/WN_h4G7A5NBSgWDoqePEXJK1g

## How to publish it

`index.html` is written the same way as your `/mba/` page: a self-contained block that drops into **one Divi Code Module**, scoped to `#dos-page` with every class prefixed `dos-` so it can't collide with Divi, the mega-menu, the footer, or the other program pages.

1. Create the page and add a single **Code Module**.
2. Copy everything between the `BEGIN DIVI CODE MODULE CONTENT` and `END DIVI CODE MODULE CONTENT` markers in `index.html`, and paste it in.
3. Set the Section and Row to fullwidth with zero custom padding. (The `:has()` reset at the top of the CSS already handles this, same as the MBA page.)
4. The site header and footer come from the Theme Builder as usual.

Opening `index.html` in a browser also previews it standalone — the `<head>` outside the markers only carries the meta tags and Event schema.

## Brand

Colors, fonts and radii are lifted from the live `/mba/` page, so this matches the rest of the site rather than approximating it:

| Token | Value | Used for |
|---|---|---|
| `--dos-teal` | `#4ed3cc` | hero gradient, checkmarks, chips, focus rings |
| `--dos-orange` | `#ff7400` | buttons, eyebrows, accent rules |
| `--dos-plum` | `#332959` | hero base, "You'll Learn" card, CTA band |
| `--dos-ink` / `--dos-body` | `#2a2f31` / `#686868` | headings / body copy |

Also matched: Arial stack, `line-height: 2` body, 12px card radius / 6px button radius, the `linear-gradient(300deg, #4ed3cc 0%, #332959 69%)` hero, the stat strip under the hero, and the `dos-endcap` gradient rule that separates the plum CTA from the plum footer.

## Before it goes live

1. **Ravneet's photo** is hotlinked from visapro.com. Upload a copy to your media library and swap the `src`. (It falls back to an "RB" tile if it fails, so nothing breaks.)
2. **Her bio** is adapted from VisaPro's attorney page and reframed for a student audience — worth a quick sign-off from her or VisaPro.
3. **OG image** currently points at `/uploads/2026/03/52.jpg` from the MBA page. Swap in a webinar-specific 1200×630 image or link previews will show the MBA photo.
4. **Canonical URL** is set to `/webinar-duration-of-status/` — update if you use a different slug.
5. **Agenda wording.** The "You'll Learn" bullets are written as *topics*, not as claims about what the rule does — the page shouldn't state legal conclusions about a rule that just took effect. Have Ravneet confirm they match what she plans to cover.

## Registration: two options

**As shipped** — the branded form collects the student's details, then opens Zoom in a new tab to confirm. Zoom's registration page can't be embedded in an iframe and can't be reliably prefilled, so students type their name and email a second time. Zero setup, works immediately.

**One-step (recommended)** — deploy `api/register.js` and change one line in the page's `<script>`:

```js
var REGISTER_ENDPOINT = "/api/register";
```

The form then posts straight to Zoom's API: the student never leaves the page, Zoom emails their personal join link, and you capture the extra fields Zoom's own form doesn't ask for (current status, school, question for the attorney).

Setup:

1. In the [Zoom App Marketplace](https://marketplace.zoom.us/), create a **Server-to-Server OAuth** app.
2. Add the scope `webinar:write:registrant:admin` (older accounts: `webinar:write:admin`) and activate it.
3. Set environment variables: `ZOOM_ACCOUNT_ID`, `ZOOM_CLIENT_ID`, `ZOOM_CLIENT_SECRET`, and `ZOOM_WEBINAR_ID` — the **numeric** ID (e.g. `81234567890`), not the `WN_h4G7A5NB…` token from the URL.
4. Set the webinar's approval type to **Automatically approve**, or registrants sit pending.

**HubSpot option.** Since the rest of the site runs HubSpot forms (portal `48135637`), you can drop a HubSpot embed in instead — there's a commented-out `hbspt.forms.create({...})` block marking the exact spot in the form card. That keeps leads in your existing workflow, at the cost of the Zoom handoff still being manual.

## A note on positioning

This page deliberately uses **no `position: fixed` or `position: sticky`** anywhere — no sticky header, no sticky form column, no floating mobile CTA bar. Those break scrolling inside content-sized preview iframes, and your Theme Builder header is already sticky on its own.
