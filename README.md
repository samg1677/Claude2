# EduConnect USA — Duration of Status Webinar Landing Page

Landing page for **"End of Duration of Status: What It Means for Your CPT, OPT, and Your Next Degree"** with Ms. Ravneet Brar of VisaPro.

- **When:** Friday, September 25, 2026 · 10:00 AM PT / 1:00 PM ET
- **Where:** Online (Zoom)
- **Registration:** https://zoom.us/webinar/register/WN_h4G7A5NBSgWDoqePEXJK1g

## Files

- `index.html` — the whole page. One file, no build step, no dependencies. Drop it on any host or paste into a WordPress page template.
- `api/register.js` — optional: registers students with Zoom directly so they never leave the page.

## Change the branding

Everything comes from four values at the top of the `<style>` block:

```css
:root{
  --teal:#0FB5AE;        /* primary  */
  --teal-dark:#0A7F7A;
  --orange:#F58220;      /* buttons  */
  --navy:#08243A;        /* hero     */
}
```

Then replace the placeholder `EC` tile in the header with your real logo:

```html
<img src="/logo.svg" alt="EduConnect USA" height="36">
```

Also worth swapping: the speaker photo is currently hotlinked from visapro.com — host your own copy. (If it fails to load it falls back to an "RB" tile, so nothing breaks.)

## Registration: two options

**As shipped** — the form collects name and email, then opens Zoom in a new tab to confirm. Zoom can't be embedded in an iframe and can't be reliably prefilled, so students type their details twice. Works immediately with zero setup.

**One-step (recommended)** — deploy `api/register.js` and change one line in `index.html`:

```js
var REGISTER_ENDPOINT = "/api/register";
```

Now the form posts straight to Zoom's API and the student never leaves the page.

Setup:

1. In the [Zoom App Marketplace](https://marketplace.zoom.us/), create a **Server-to-Server OAuth** app.
2. Add the scope `webinar:write:registrant:admin` (older accounts: `webinar:write:admin`) and activate it.
3. Set environment variables: `ZOOM_ACCOUNT_ID`, `ZOOM_CLIENT_ID`, `ZOOM_CLIENT_SECRET`, and `ZOOM_WEBINAR_ID` — the **numeric** ID (e.g. `81234567890`), not the `WN_h4G7A5NB…` token from the URL.
4. Set the webinar's approval type to **Automatically approve**, or registrants sit pending.

Written for Vercel-style handlers. For Netlify, Cloudflare Workers or PHP the logic is identical: get a token from `zoom.us/oauth/token` with Basic auth, then `POST /v2/webinars/{id}/registrants`.

## A note on the agenda

The "What we'll cover" bullets are written as **topics**, not as claims about what the rule does — the page shouldn't state legal conclusions about a rule that just took effect. Have Ravneet confirm they match what she plans to cover.
