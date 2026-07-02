#!/usr/bin/env python3
"""Fetch public profile metadata for the accounts in data/instagram_accounts.csv.

Uses Instaloader (https://instaloader.github.io/) to pull each profile's
current follower count, bio, external URL, and post count, and writes the
results to data/profiles_snapshot.csv and data/profiles_snapshot.json.

Instagram aggressively rate-limits anonymous requests. For reliable runs,
log in with YOUR OWN account (--login), keep the default delay between
requests, and only scrape at a modest scale. Review Instagram's Terms of
Use before running; this script is intended for personal research on a
small, fixed list of public accounts.

Usage:
    pip install instaloader
    python scraper/scrape_profiles.py                 # anonymous (may get blocked)
    python scraper/scrape_profiles.py --login USER    # prompts for password
    python scraper/scrape_profiles.py --delay 20      # slower, safer
"""

import argparse
import csv
import json
import sys
import time
from pathlib import Path

try:
    import instaloader
except ImportError:
    sys.exit("instaloader is not installed. Run: pip install instaloader")

REPO_ROOT = Path(__file__).resolve().parent.parent
ACCOUNTS_CSV = REPO_ROOT / "data" / "instagram_accounts.csv"
OUT_CSV = REPO_ROOT / "data" / "profiles_snapshot.csv"
OUT_JSON = REPO_ROOT / "data" / "profiles_snapshot.json"

FIELDS = [
    "handle", "full_name", "followers", "followees", "posts",
    "biography", "external_url", "is_private", "is_verified",
    "category", "country_focus", "program_type", "error",
]


def load_accounts():
    with open(ACCOUNTS_CSV, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def scrape(login=None, delay=10.0, limit=None):
    loader = instaloader.Instaloader(
        quiet=True,
        download_pictures=False,
        download_videos=False,
        download_video_thumbnails=False,
        save_metadata=False,
    )
    if login:
        try:
            loader.load_session_from_file(login)
            print(f"Loaded saved session for {login}")
        except FileNotFoundError:
            loader.interactive_login(login)
            loader.save_session_to_file()

    accounts = load_accounts()
    if limit:
        accounts = accounts[:limit]

    results = []
    for i, row in enumerate(accounts, 1):
        handle = row["handle"]
        record = {
            "handle": handle,
            "category": row.get("category", ""),
            "country_focus": row.get("country_focus", ""),
            "program_type": row.get("program_type", ""),
            "error": "",
        }
        try:
            profile = instaloader.Profile.from_username(loader.context, handle)
            record.update(
                full_name=profile.full_name,
                followers=profile.followers,
                followees=profile.followees,
                posts=profile.mediacount,
                biography=" ".join(profile.biography.split()),
                external_url=profile.external_url or "",
                is_private=profile.is_private,
                is_verified=profile.is_verified,
            )
            print(f"[{i}/{len(accounts)}] @{handle}: {profile.followers} followers")
        except Exception as exc:  # profile gone, renamed, or rate-limited
            record["error"] = str(exc)
            print(f"[{i}/{len(accounts)}] @{handle}: ERROR {exc}", file=sys.stderr)
        results.append(record)
        if i < len(accounts):
            time.sleep(delay)
    return results


def write_outputs(results):
    with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(results)
    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(results)} profiles to {OUT_CSV} and {OUT_JSON}")


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--login", help="Instagram username to log in as (recommended)")
    parser.add_argument("--delay", type=float, default=10.0,
                        help="Seconds to wait between profiles (default: 10)")
    parser.add_argument("--limit", type=int, help="Only scrape the first N accounts")
    args = parser.parse_args()
    write_outputs(scrape(login=args.login, delay=args.delay, limit=args.limit))


if __name__ == "__main__":
    main()
