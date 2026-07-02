# Instagram profile scraper

Pulls current public metadata (followers, bio, link, post count) for every
account listed in [`data/instagram_accounts.csv`](../data/instagram_accounts.csv).

## Setup

```bash
pip install instaloader
```

## Run

```bash
# Anonymous — works for a few profiles, then Instagram usually rate-limits
python scraper/scrape_profiles.py --limit 5

# Recommended — log in with your own account (session is cached for reuse)
python scraper/scrape_profiles.py --login your_username

# Slower pacing if you hit 429 / "please wait" errors
python scraper/scrape_profiles.py --login your_username --delay 20
```

Output goes to `data/profiles_snapshot.csv` and `data/profiles_snapshot.json`.

## Notes

- Instagram blocks unauthenticated bulk access; logging in with your own
  account and keeping the default 10s delay is the reliable path.
- Keep usage modest and review Instagram's Terms of Use — this is meant for
  a small fixed watchlist, not mass collection.
- If a handle errors with "does not exist", the account was likely renamed —
  update `data/instagram_accounts.csv`.
