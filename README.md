# EduConnect USA — Duration of Status Webinar Landing Page

Landing page for the free webinar **"End of Duration of Status: What It Means for Your CPT, OPT, and Your Next Degree"** with Ms. Ravneet Brar of VisaPro.

- **When:** Friday, September 25, 2026 · 10:00 AM PT / 1:00 PM ET
- **Where:** Online (Zoom)
- **Registration:** https://zoom.us/webinar/register/WN_h4G7A5NBSgWDoqePEXJK1g

## Files

| File | What it is |
|---|---|
| `index.html` | The whole landing page — CSS and JS are inline, so it drops in anywhere (static host, WordPress page template, HubSpot, etc.) with no build step and no dependencies. |
| `api/register.js` | Optional serverless function that registers students with Zoom directly, so they never leave the page. |

## Before you publish — 6 things to check

1. **Brand colors.** Top of the `<style>` block, `:root`. Everything on the page pulls from those variables — swap the hexes for EduConnect's exact orange and turquoise and the whole page follows.
2. **Logo.** The header uses a placeholder `EC` tile. Replace it with:
   `<img src="/logo.svg" alt="EduConnect USA" height="38">`
3. **Speaker photo.** Currently hotlinked from visapro.com. Host a copy on your own domain and update the `<img src>` in the speaker card. (If the image fails to load it falls back to an "RB" tile, so the page never breaks.)
4. **Speaker bio.** Adapted from VisaPro's attorney page and reframed for a student audience — worth a quick sign-off from Ravneet or VisaPro before it goes live.
5. **OG image.** Set `og:image` (and the same URL in the JSON-LD) to a real 1200×630 share image, or the link previews will be blank on LinkedIn/WhatsApp.
6. **Canonical + footer links.** Point `<link rel="canonical">` and the footer/privacy URLs at the real paths on educonnectusa.com.

## About the "You'll Learn" bullets

They're written as **topics**, not as claims about what the rule does. That's deliberate — the page shouldn't state legal conclusions about a rule that just took effect. Have Ravneet confirm the agenda matches what she plans to cover, and add/remove bullets freely.

## Registration: two modes

### Mode A — Zoom handoff (this is what's live right now, zero setup)

The student fills in the branded form, and on submit a new tab opens Zoom's registration page where they confirm. The page then shows a "confirm on Zoom" card plus an **Add to calendar** link.

Honest caveat: Zoom's registration page can't be prefilled reliably and can't be embedded in an iframe (Zoom blocks framing), so students type their name and email a second time. Expect some drop-off between the form and the Zoom confirm.

### Mode B — real one-step registration (recommended)

Deploy `api/register.js`, then change one line near the top of the `<script>` in `index.html`:

```js
var REGISTER_ENDPOINT = "/api/register";
```

Now the form posts straight to Zoom's API: the student never leaves the page, Zoom emails their personal join link, and you capture the extra fields (status, school, question for the attorney) that Zoom's own form doesn't ask for.

**Setup:**

1. In the [Zoom App Marketplace](https://marketplace.zoom.us/), create a **Server-to-Server OAuth** app.
2. Add the scope `webinar:write:registrant:admin` (older accounts: `webinar:write:admin`) and activate the app.
3. Set these environment variables on your host:
   - `ZOOM_ACCOUNT_ID`
   - `ZOOM_CLIENT_ID`
   - `ZOOM_CLIENT_SECRET`
   - `ZOOM_WEBINAR_ID` — the **numeric** webinar ID (e.g. `81234567890`), not the `WN_h4G7A5NB…` token from the URL. Find it in Zoom → Webinars → your webinar.
4. In Zoom → your webinar → **Registration → Questions → Custom Questions**, create three custom questions with these exact titles so the answers land on the registrant record:
   - `Your Current Status`
   - `School / University`
   - `Your Question For The Attorney`
5. Make sure the webinar's approval type is **Automatically approve**, or registrants will sit pending.

The function is written for Vercel-style handlers (`/api/register.js`). For Netlify, Cloudflare Workers or a PHP/WordPress backend the logic is the same: get a token from `zoom.us/oauth/token` with Basic auth, then `POST /v2/webinars/{id}/registrants`.

## What's already built in

- Responsive down to ~360px, sticky mobile "Save My Seat" bar
- Countdown timer to the event start (auto-swaps to "We're live" at 10:00 AM PT)
- `.ics` **Add to calendar** download generated client-side
- Client-side validation with inline errors + a honeypot field for bots
- Schema.org `Event` JSON-LD and Open Graph tags
- Accessible labels, visible focus rings, `prefers-reduced-motion` support
- The legal disclaimer in two places: the FAQ and a dedicated band above the footer
