# Social Content Hub

A self-contained website that combines **Weekly Promotions**, **Weekly Gaming Promotions** and the **Brandwatch schedule** into one place for the social team. No server, no install — just open `index.html` in any browser.

## Files

| File | What it is | Touch it? |
|---|---|---|
| `index.html` | The website (Home, Promotions, Gaming). Layout, styling, search, copy buttons. | Rarely — only to change how the site looks/works. |
| `data.js` | **This week's content.** Everything you see on the site comes from here. | **Every week.** |
| `data.template.js` | A fully-commented blank version of `data.js` explaining every field. | Reference only — copy from it. |
| `README.md` | This file. | — |

## Weekly routine

1. Open `data.template.js` and copy its structure.
2. Fill in this week's **promos**, **gaming** offers, **schedule** and **priorities**.
3. Paste the result into `data.js` (replacing last week's), and save.
4. Open `index.html` (or hit refresh) — the whole site updates.

That's it. The site shell never changes; you only ever swap the data.

## The sections in `data.js`

- **weeks** — a list of weeks for the Home page; a switcher in the Home header toggles between them (current week shows by default). Each week holds its own `label`, `theme`, `updated`, **priorities** (the Home "focus this week" panel, `level` = high / med / low) and **schedule** (the Brandwatch calendar → Home highlights board, day-by-day with colour-coded tags). Add a new week block each week.
- **links** — quick-link shortcuts on Home.
- **promoWeeks** — a list of weeks for the Promotions page. Each week's `items` are sports promotions carrying Twitter + Facebook captions, an Air design link and a Boylesports match link. An empty `items: []` shows a "no promotions yet" note for that week.
- **gamingWeeks** — a list of weeks for the Gaming page. Each week's `items` are casino / live-casino offers carrying Meta / Twitter / Instagram captions, a design link, and platform links with their btags.

The week switcher is **shared** across all three pages — picking a week on Home, Promotions or Gaming switches all three at once. `weeks`, `promoWeeks` and `gamingWeeks` line up **by position**, so keep them in the same week order.

See `data.template.js` for the exact field names, allowed values (badge types, schedule tag colours) and formatting rules. Keep field **names** identical — only change the **values**.

## Photos / design previews

Promo cards show a real image preview when one is available. The site finds images in three ways (in priority order):

1. **`image` field in `data.js`** — a direct image URL (including an Air "Copy image address" CDN link) or a local path like `images/my-art.png`.
2. **Auto-match by filename** — if `image` is empty, the site looks in the `images/` folder for a file named after the fixture: `images/<match>.jpg`, lowercase with hyphens. E.g. *Spain v Cape Verde* → `images/spain-v-cape-verde.jpg` (also tries `.jpeg/.png/.webp` and an `images/BBB/` subfolder).
3. **Fallback** — if neither exists, it shows the tidy placeholder (and the Air button still works).

So to add artwork each week, the easy path is: drop correctly-named files into `images/` — no editing required. A small corner tag on each preview shows the source (**Photo** for local, **Air**/**Web** for URLs). Clicking a preview opens the Air design if linked, otherwise the image.

The `images/` folder currently holds the matched BBB imagery for this week.

## Features on the site

- **Search** (top right) filters promos, gaming, matches and schedule live across all pages.
- **Copy** buttons on every caption — one click to clipboard.
- **Open Design File** opens the Air imagery link; **Open Platform Link** opens the Boylesports/btag URL.
- **Filter chips** on Promotions (by promo type) and Gaming (Gaming vs Live Casino).
- Fully **responsive** — collapses to a single column on mobile.

## Automating it later

Each weekly Cowork task already produces this content. The end goal is for those tasks to output a single `data.js` in this exact shape — drop it in this folder and the site refreshes with zero manual editing. `data.template.js` is the contract they should write to.
