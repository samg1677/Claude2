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

## Layout

Follows the VisaPro webinar page, at a **1280px content width** throughout:

1. **Hero** — three blurred orbs, "Free Webinar" badge with pulsing dot, typewriter headline, subhead, "Register Now - It's Free". Spans the full 1280.
2. **Two-column block** — left: About The Webinar eyebrow, date/time/online pills, intro copy, "You'll Learn" checklist card with the orange PLUS row. Right: the registration form + privacy note.
3. **Full-width block** — once the form ends, the speaker block and testimonials span the whole 1280 rather than staying in the narrow column.
4. **CTA strip** — "Reserve Your Free Seat Today"
5. **Fine print**, one slim line, then the endcap rule
6. **Mobile save bar** — fixed, appears under 820px

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

1. **Testimonials are placeholders.** The three cards say `[Replace with a real student testimonial...]` on purpose — I don't have your student quotes and won't invent them. Paste three real ones from `/student-testimonials/` and swap the initials tiles for student photos.
2. **Ravneet's photo** is hotlinked from visapro.com. Upload a copy to your media library and swap the `src`. (It falls back to an "RB" tile if it fails, so nothing breaks.)
3. **Her bio** is adapted from VisaPro's attorney page and reframed for a student audience — worth a quick sign-off from her or VisaPro.
4. **OG image** currently points at `/uploads/2026/03/52.jpg` from the MBA page. Swap in a webinar-specific 1200×630 image or link previews will show the MBA photo.
5. **Canonical URL** is set to `/webinar-duration-of-status/` — update if you use a different slug.
6. **Agenda wording.** The "You'll Learn" bullets are written as *topics*, not as claims about what the rule does — the page shouldn't state legal conclusions about a rule that just took effect. Have Ravneet confirm they match what she plans to cover.

## Registration

The form collects **First Name, Last Name, Email, Phone, Highest Completed Degree, Current Status and Program of Interest**, plus the two consent checkboxes.

On submit it always hands off to the Zoom registration page in a new tab, and the card swaps to a "One last step — Confirm On Zoom" panel. Zoom can't be embedded in an iframe and can't be reliably prefilled, so students confirm their name and email once more on Zoom's side.

`api/register.js` is left in the repo but is **no longer wired up** — it was the one-step Zoom API path. Delete it, or re-point the form at it, if you ever want registration to complete without the Zoom hop.

To route leads through HubSpot instead (portal `48135637`, like the MBA page), replace the `<form id="dosForm">` block with your `hbspt.forms.create({...})` embed.

## Testimonials

The three cards use real Google reviews: **phat valdez** (CPT process), **Antsa Randrianirina** (J-1 to staying longer in the U.S.) and **Hanitra Aïcha** (understanding the process step by step). I only used reviews that weren't truncated with "… More" in what you sent, so nothing is paraphrased or completed.

The avatars are initials tiles — swap in real photos if you have them, and the role line currently reads "EduConnect USA student" for all three since the reviews don't state programs.
