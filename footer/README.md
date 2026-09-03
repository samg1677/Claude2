# EduConnect USA — Global Footer

`educonnect-footer.html` is a paste-ready, self-contained footer (HTML + CSS + ~40 lines of JS).
No external stylesheets, no libraries, no build step.

## Install (Divi)

1. **Divi → Theme Builder → Global Footer → Edit Footer.**
2. Delete the existing footer rows (the 4-column link row and the `<footer class="footer">` code
   module at the bottom). The new footer replaces both.
3. Add a single **full-width section → 1 column row → Code module**, and paste the whole contents
   of `educonnect-footer.html` into it.
4. In the section/row settings set **all padding to 0** so the footer reaches the page edges
   (Design → Spacing → Padding: `0px` top/bottom/left/right, and Row → Sizing → Width `100%`,
   Max width `none`).
5. Save.

The `<style>` block travels with the markup, so nothing needs to go into Theme Options → Custom CSS.
Every class is prefixed `ecf` (`.ecf__…`) so it cannot collide with Divi or with the `ec-` header.

## Before going live

Two social handles were not published anywhere on the site and are **placeholders** — verify or
replace them. Both are marked in the markup with `data-ec-verify`:

| Network | URL in file | Status |
|---|---|---|
| Facebook | `https://www.facebook.com/educonnectusa/` | from site schema ✅ |
| Instagram | `https://www.instagram.com/educonnectusa` | from site schema ✅ |
| LinkedIn | `https://www.linkedin.com/company/educonnectusa` | from site schema ✅ |
| YouTube | `https://www.youtube.com/@educonnectusa` | from site schema ✅ |
| TikTok | `https://www.tiktok.com/@educonnectusa` | **guessed — confirm** |
| X | `https://x.com/educonnectusa` | **guessed — confirm** |
| WhatsApp | `https://wa.me/16263443218` | from site ✅ |

To drop a network, delete its whole `<li>…</li>`. To add one, copy an existing `<li>`, swap the
`href`, `aria-label`, the `ecf__social-link--xx` modifier and the `<path>`, then add a hover colour
rule next to the others in the CSS.

## Responsive behaviour

| Viewport | Layout |
|---|---|
| ≥ 1181px | Brand block left, 4 link columns right |
| 981–1180px | Brand block full width and split in two (blurb/CTA/social \| contact), 4 link columns below |
| 901–980px | Same, 4 link columns |
| 768–900px | Same, 2 link columns |
| ≤ 767px | Everything stacked; link groups become tap-to-open accordions |
| ≤ 420px | Buttons full width, legal links stack |

Verified in Chromium at 1440 / 1200 / 1024 / 820 / 430 / 390 / 320px — zero horizontal overflow.

## Other notes

- **Accessibility:** `role="contentinfo"`, labelled nav and social list, `aria-expanded` kept in sync
  on the mobile accordions, visible focus rings, decorative SVGs hidden from screen readers.
- **Progressive enhancement:** with JS disabled the accordion panels simply render open — no content
  is ever unreachable. The copyright year falls back to the hard-coded `2026`.
- Respects `prefers-reduced-motion` and has a print stylesheet (drops the dark background, socials
  and CTAs).
