#!/usr/bin/env python3
"""
Roll-over helper for the Social Content Hub.

Removes the OLDEST week from data.js (the first entry of `weeks`, `promoWeeks`
and `gamingWeeks`). Run this once a week, after the newest week has been added,
so the site always shows the current set of weeks and old data drops off.

Usage:
    python3 roll-week.py            # preview what would be removed
    python3 roll-week.py --apply    # actually remove the oldest week

It only touches the three week-arrays. The Calendar (`campaign`) and `links`
are left alone. Images are NOT deleted (harmless to keep; delete by hand if you
want to tidy up).
"""
import json, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data.js")
WEEK_ARRAYS = ["weeks", "promoWeeks", "gamingWeeks"]

def load():
    raw = open(DATA, encoding="utf-8").read()
    m = re.search(r"window\.SCH_DATA\s*=\s*(\{[\s\S]*\});\s*$", raw.strip())
    if not m:
        sys.exit("Could not find window.SCH_DATA in data.js")
    return json.loads(m.group(1))

def save(data):
    with open(DATA, "w", encoding="utf-8") as f:
        f.write("// Social Content Hub — weekly data. Replace this file each week (same structure).\n")
        f.write("window.SCH_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

def main():
    apply = "--apply" in sys.argv
    data = load()
    weeks = data.get("weeks", [])
    if len(weeks) <= 1:
        sys.exit("Only one week present — nothing to roll off. Add the new week first.")
    oldest = weeks[0].get("label", "(week 0)")
    print(f"Oldest week: {oldest}")
    for key in WEEK_ARRAYS:
        arr = data.get(key, [])
        if arr:
            lab = arr[0].get("label", "?")
            print(f"  would drop {key}[0]: {lab}")
    if not apply:
        print("\nPreview only. Re-run with --apply to remove it.")
        return
    for key in WEEK_ARRAYS:
        if data.get(key):
            data[key] = data[key][1:]
    save(data)
    print(f"\n✓ Removed '{oldest}'. Remaining weeks: {[w.get('label') for w in data['weeks']]}")

if __name__ == "__main__":
    main()
