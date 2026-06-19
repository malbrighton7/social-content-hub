// =============================================================================
// Social Content Hub — WEEKLY DATA TEMPLATE
// =============================================================================
// HOW TO USE:
//   1. Copy this file's contents into data.js each week (replace what's there).
//   2. Fill in the values below. Keep the field NAMES and STRUCTURE identical —
//      the site reads these exact keys. Only change the VALUES.
//   3. Save data.js next to index.html, then open/refresh index.html.
//
// RULES OF THUMB:
//   - Every string must be wrapped in "double quotes".
//   - Separate every item in a list with a comma. No trailing comma after the
//     LAST item in a list or object.
//   - For multi-line captions use \n  (e.g. "Line one\n\nLine two").
//   - Leave a link/field as "" (empty quotes) if you don't have it — the site
//     shows a tidy "not linked" state instead of breaking.
//   - Curly braces { } = one record.  Square brackets [ ] = a list of records.
// =============================================================================

window.SCH_DATA = {

  // ---------------------------------------------------------------------------
  // WEEKS — the Home page holds MULTIPLE WEEKS. A switcher in the Home header
  //   toggles between them (the FIRST/current week shows by default). Each week
  //   carries its own heading, priorities and Brandwatch schedule. Add a new
  //   week block each week; keep older ones to stay switchable.
  //     label      : date range, e.g. "22–28 Jun 2026" (shown on the switcher)
  //     commencing : Monday, YYYY-MM-DD
  //     theme      : one-line subtitle under the Home heading
  //     updated    : when you last refreshed this week
  //     priorities : the "focus this week" panel — level dot colour is
  //                  "high"=red, "med"=amber, "low"=green
  //     schedule   : the Brandwatch calendar for the week (field notes below)
  //                  date "YYYY-MM-DD" · label "Monday 15 Jun" ·
  //                  posts [{ time "HH:MM", text (verbatim CSV line), cat }]
  //                  cat: "promo"(green) | "lineups"(blue) | "fixture"(grey) |
  //                       "fallout"(faint) | "schedule"(purple)
  // ---------------------------------------------------------------------------
  "weeks": [
   {
    "label":      "15–21 Jun 2026",
    "commencing": "2026-06-15",
    "theme":      "World Cup 2026 · Royal Ascot · US Open",
    "updated":    "2026-06-17",
    "priorities": [
      { "title": "World Cup 2026 group stage", "note": "Daily fixtures Mon–Sun. Super Boost + BBB headline games top priority.", "level": "high" },
      { "title": "Royal Ascot", "note": "BOG, Money-Back & Super Boost every morning Tue–Sat.", "level": "med" }
      // ... add as many as you like
    ],
    "schedule": [
      {
        "date":  "2026-06-15",
        "label": "Monday 15 Jun",
        "posts": [
          { "time": "08:00", "text": "World Cup 2026 - Ivory Coast v Ecuador fallout", "cat": "fallout" },
          { "time": "09:00", "text": "World Cup 2026 - Day 11 schedule",               "cat": "schedule" },
          { "time": "09:30", "text": "England v Croatia",                              "cat": "fixture" },
          { "time": "10:00", "text": "50% BBB - Spain v Cape Verde",                   "cat": "promo" },
          { "time": "16:00", "text": "Lineups - Spain v Cape Verde",                   "cat": "lineups" }
          // ... one entry per scheduled post for the day
        ]
      }
      // ... one block per day (Mon–Sun)
    ]
   }
   // ... add another { label, commencing, theme, updated, priorities, schedule } block for next week
  ],

  // ---------------------------------------------------------------------------
  // QUICK LINKS — the shortcuts panel on the Home page.
  // ---------------------------------------------------------------------------
  "links": [
    { "label": "Air (Imagery)",      "url": "https://app.air.inc" },
    { "label": "BoyleSports Sports", "url": "https://www.boylesports.com/sports/football" },
    { "label": "BoyleSports Casino", "url": "https://games.boylesports.com" },
    { "label": "Brandwatch",         "url": "https://www.brandwatch.com/" }
  ],

  // ---------------------------------------------------------------------------
  // PROMOS — the Promotions page. Like Gaming, it holds MULTIPLE WEEKS under
  //   "promoWeeks": each is { "label": "22–28 Jun 2026", "items": [ ...promo
  //   objects... ] }. The week switcher is SHARED across Home, Promotions and
  //   Gaming — picking a week on any page switches all three (they line up by
  //   position, so keep the same week order in weeks / promoWeeks / gamingWeeks).
  //   An empty "items": [] is fine — that week shows a "no promotions yet" note.
  //   Each item is one sports promo:
  //   day          : grouping header, e.g. "Monday 15 Jun"
  //   match        : fixture name, e.g. "Belgium v Egypt"
  //   competition  : small grey subtitle under the match (extra detail welcome,
  //                  e.g. "World Cup — Salah to have a shot on target")
  //   promo        : the label shown on the badge, e.g. "Super Boost", "50% BBB"
  //   type         : SHORT code that picks the badge COLOUR (see table below)
  //   twitter      : Twitter/X caption  (use \n for line breaks; "" to omit)
  //   facebook     : Facebook caption   ("" to omit — e.g. 2-column promos)
  //   air          : design-file URL (Air). "" = shows "No design file linked"
  //   boylesports  : platform/match URL. "" = shows "No platform link"
  //   image        : the PREVIEW photo. Optional. Three ways to set it:
  //                  1. Leave it "" (or omit) — the site AUTO-LOOKS for a file
  //                     named after the fixture in the images/ folder, i.e.
  //                     images/<match-in-lowercase-with-hyphens>.jpg
  //                     e.g. "Spain v Cape Verde" -> images/spain-v-cape-verde.jpg
  //                     (also tries .jpeg/.png/.webp and an images/BBB/ subfolder).
  //                  2. A direct image URL, incl. an Air CDN link
  //                     ("Copy image address" in Air) — e.g. "https://.../card.jpg"
  //                  3. A specific local path, e.g. "images/my-custom-art.png"
  //                  If nothing is found it falls back to the tidy placeholder.
  //                  Clicking a preview opens the Air design (if set), else the image.
  //
  //   note         : optional amber banner under the copy (e.g. "Super Boost
  //                  details not yet confirmed", or money-back terms TBC). "" / omit = none.
  //
  //   type codes -> colour:
  //     "50"  50% BBB (amber)      "25"  25% BBB (blue)     "sb"  Super Boost (purple)
  //     "bg"  Bet & Get (cyan)     "fb"  Free Bet (pink)    "ab"  Acca Boost (gold)
  //     "ss"  Sub Swap (teal)      "epo" EPO (red)          "ac"  Acca (rose)
  //     "mb"  Money Back (orange)  "places" 10 Places / Each-Way (green)
  // ---------------------------------------------------------------------------
  "promoWeeks": [
   {
    "label": "15–21 Jun 2026",
    "items": [
    {
      "day":         "Monday 15 Jun",
      "match":       "Belgium v Egypt",
      "competition": "World Cup — Salah to have a shot on target",
      "promo":       "Super Boost",
      "type":        "sb",
      "twitter":     "🚀 Salah to have a shot on target — Super Boosted for Belgium v Egypt in the World Cup!\n\nTap below to add to your betslip",
      "facebook":    "🚀 Salah to have a shot on target — Super Boosted for Belgium v Egypt in the World Cup!\n\n📲 Add to betslip — https://www.boylesports.com/sports/football/event/international-world-cup/belgium-v-egypt",
      "air":         "https://app.air.inc/b/super-boost-645e6be7-9b23-4e1a-9776-909f9ec90084",
      "boylesports": "https://www.boylesports.com/sports/football/event/international-world-cup/belgium-v-egypt",
      "image":       ""   // <- empty: site auto-looks for images/belgium-v-egypt.jpg
    },
    {
      "day":         "Monday 15 Jun",
      "match":       "Spain v Cape Verde",
      "competition": "World Cup",
      "promo":       "50% BBB",
      "type":        "50",
      "twitter":     "🚀 Win 50% more with Bet Builder Boost as Spain take on Cape Verde.\n\nTap below to view the full market",
      "facebook":    "🚀 Win 50% more with Bet Builder Boost as Spain take on Cape Verde.\n\n📲 Full market — https://www.boylesports.com/sports/football/event/international-world-cup/spain-v-cape-verde",
      "air":         "",
      "boylesports": "https://www.boylesports.com/sports/football/event/international-world-cup/spain-v-cape-verde",
      "image":       "https://aircdn.example/your-card.jpg"  // <- or a direct/Air CDN URL
    }
    // ... one block per promo, comma-separated. No comma after the last one.
    ]
   }
   // ... add another { "label": ..., "items": [...] } block per week ([] if none yet)
  ],

  // ---------------------------------------------------------------------------
  // GAMING — the Gaming page. Holds MULTIPLE WEEKS under "gamingWeeks"; each
  //   week is { "label": "22–28 Jun 2026", "items": [ ...offer objects... ] }.
  //   A week switcher in the page header toggles between them (the LAST/newest
  //   week shows by default). Add a new week object each week — keep older ones
  //   to stay switchable, or trim the list when it gets long.
  //   Within a week, each object is one casino / live-casino offer:
  //   Cards are shown in GO-LIVE DATE order (from `date`), not split into
  //   sections. Each card carries a small Gaming / Live Casino tag instead.
  //   section        : the tag shown on the card + the filter chips. Use
  //                    "Gaming" or "Live Casino"
  //   name           : game / offer name
  //   type           : badge label AND colour. Recognised values:
  //                    "Special", "Exclusive", "Promo", "Trending",
  //                    "Game of the Week", "Highlighted Game", "Potpourri"
  //                    (anything else falls back to the cyan "Promo" colour)
  //   date           : small grey subtitle, e.g. "15 Jun 2026"
  //   meta           : Meta / Facebook caption
  //   twitter        : Twitter/X caption
  //   instagram      : Instagram caption
  //   design         : design-file URL (Air folder OR SharePoint folder).
  //                    Powers BOTH the clickable preview tile and the "Open
  //                    Design File" button, same as the Promotions page.
  //                    "" = tile shows the game name and button is disabled.
  //   facebook_link  : platform link WITH the Facebook btag
  //   twitter_link   : platform link WITH the Twitter btag
  //   files          : list of export-format tags, e.g. ["Storyly"] or [] if none
  //   image          : preview photo (optional). A direct/Air CDN URL or a local
  //                    path like "images/crazy-time.jpg". "" = text placeholder.
  // ---------------------------------------------------------------------------
  "gamingWeeks": [
   {
    "label": "15–21 Jun 2026",   // one block like this per week
    "items": [
    {
      "section":       "Gaming",
      "name":          "Horse Racing – Royal Ascot",
      "type":          "Special",
      "date":          "15 Jun 2026",
      "meta":          "⭐⭐Join us and get Up to 100 Free Spins at BOYLE Casino ⭐⭐",
      "twitter":       "⭐ Join us and get Up to 100 Free Spins at BOYLE Casino",
      "instagram":     "⭐⭐Join us and get Up to 100 Free Spins at BOYLE Casino ⭐⭐\n\n📲 Click the link in our bio to learn more.",
      "design":        "https://app.air.inc/b/your-design-board",
      "facebook_link": "https://games.boylesports.com/games/?btag=52901",
      "twitter_link":  "https://games.boylesports.com/games/?btag=52962",
      "files":         [],
      "image":         ""
    },
    {
      "section":       "Live Casino",
      "name":          "Road to Glory",
      "type":          "Promo",
      "date":          "15 Jun 2026",
      "meta":          "🔝🔝 Stake in Live Casino & join the Giveaway. 1M in random cash prizes to be won! 🔝🔝",
      "twitter":       "🔝 Stake in Live Casino & join the Giveaway. 1M in random cash prizes to be won!",
      "instagram":     "🔝🔝 Stake in Live Casino & join the Giveaway. 1M in random cash prizes to be won! 🔝🔝\n\n📲 Click the link in our bio to learn more.",
      "facebook_link": "https://games.boylesports.com/promotions-and-offers/road-to-glory-prize-drop/?btag=55393",
      "twitter_link":  "https://games.boylesports.com/promotions-and-offers/road-to-glory-prize-drop/?btag=55394",
      "files":         ["Storyly"]
    }
    // ... one block per offer, comma-separated. No comma after the last one.
    ]
   }
   // ... add another { "label": ..., "items": [...] } block for the next week
  ],

  // ---------------------------------------------------------------------------
  // CAMPAIGN — the Calendar page (a fixed campaign overview, NOT week-switched).
  //   months   : list of "YYYY-MM" to draw as calendar grids, in order.
  //   fixtures : key matches. date "YYYY-MM-DD", homeAbbr/awayAbbr (shown on the
  //              chip), home/away (full names, shown on hover), time/time2,
  //              eng:true to highlight an England game.
  //   events   : content items. date, cat (colour), title + sub (hover), marker.
  //              cat: "buz"(purple) | "talent"(orange) | "fan"(cyan) | "launch"(green)
  //              marker: "RECORD" | "OUT" | "TBC" (shown as a small status pill)
  // ---------------------------------------------------------------------------
  "campaign": {
    "title": "World Cup Campaign",
    "note":  "World Cup Live · 11 Jun – 19 Jul 2026",
    "months": ["2026-06", "2026-07"],
    "fixtures": [
      { "date": "2026-06-17", "homeAbbr": "ENG", "awayAbbr": "CRO", "home": "England", "away": "Croatia", "time": "9pm", "time2": "", "eng": true }
      // ... one per key fixture
    ],
    "events": [
      { "date": "2026-06-08", "cat": "buz", "title": "The Buz — England v Croatia: Key Battles?", "sub": "Piece to camera", "marker": "RECORD" }
      // ... one per content item (record + publish are separate entries)
    ]
  }

};
