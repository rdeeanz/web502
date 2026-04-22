#!/usr/bin/env python3
"""
Daily Discovery Script
Discovers new apps, websites, and open-source projects from various sources.
Saves structured data and commits to GitHub repository.
"""

import json
import os
import subprocess
from datetime import datetime, date
from pathlib import Path

# Base directory for the repository
REPO_DIR = Path("/home/workspace/web502")
DATA_DIR = REPO_DIR / "data" / "daily-discoveries"

def run_command(cmd, cwd=None):
    """Run a shell command and return output."""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd or REPO_DIR)
    return result.stdout.strip(), result.returncode

def get_github_trending():
    """Get trending repositories from GitHub."""
    discoveries = []
    
    # Use curl to get GitHub trending page data
    stdout, code = run_command(
        "curl -s 'https://api.github.com/search/repositories?q=created:>2024-01-01&sort=stars&order=desc&per_page=10'"
    )
    
    if code == 0 and stdout:
        try:
            data = json.loads(stdout)
            for repo in data.get("items", []):
                discoveries.append({
                    "name": repo.get("name", "Unknown"),
                    "url": repo.get("html_url", ""),
                    "description": repo.get("description", ""),
                    "category": categorize_repo(repo.get("description", ""), repo.get("language", "")),
                    "platforms": ["Web", "Cross-platform"],
                    "source": "GitHub Trending",
                    "discovered_date": str(date.today()),
                    "stars": repo.get("stargazers_count", 0),
                    "language": repo.get("language", ""),
                })
        except json.JSONDecodeError:
            pass
    
    return discoveries

def categorize_repo(description, language):
    """Categorize a repository based on description and language."""
    description = description.lower() if description else ""
    language = language.lower() if language else ""
    
    categories = {
        "AI Tools & Services": ["ai", "machine learning", "llm", "gpt", "neural", "deep learning"],
        "Development": ["api", "framework", "library", "sdk", "cli", "developer"],
        "Security & Privacy": ["security", "privacy", "encryption", "vpn", "auth"],
        "Office & Productivity": ["productivity", "note", "task", "todo", "calendar", "workflow"],
        "Photos & Graphics": ["image", "photo", "graphics", "design", "canvas", "svg"],
        "Video & Movies": ["video", "stream", "media", "ffmpeg"],
        "Audio & Music": ["audio", "music", "sound", "mp3"],
        "Games": ["game", "gaming", "unity", "godot"],
        "File Management": ["file", "storage", "sync", "backup"],
        "Network & Admin": ["network", "server", "admin", "monitoring", "devops"],
    }
    
    for category, keywords in categories.items():
        for keyword in keywords:
            if keyword in description or keyword in language:
                return category
    
    return "Development"

def get_alternativeto_new():
    """Get new apps from AlternativeTo RSS or API."""
    discoveries = []
    
    # AlternativeTo doesn't have a public API, so we'll use their RSS feed
    stdout, code = run_command(
        "curl -s 'https://alternativeto.net/browse/new-apps/feed/' | head -100"
    )
    
    if stdout:
        # Parse RSS for new app entries
        import re
        titles = re.findall(r'<title><!\[CDATA\[(.*?)\]\]></title>', stdout)
        links = re.findall(r'<link>(.*?)</link>', stdout)
        
        for i, (title, link) in enumerate(zip(titles[1:6], links[1:6])):  # Skip feed title, get first 5
            discoveries.append({
                "name": title,
                "url": link,
                "description": f"New app added to AlternativeTo",
                "category": "New Release",
                "platforms": ["Multiple"],
                "source": "AlternativeTo New Apps",
                "discovered_date": str(date.today()),
            })
    
    return discoveries

def get_reddit_posts():
    """Get trending posts from relevant subreddits."""
    discoveries = []
    
    subreddits = ["opensource", "selfhosted", "webdev", "programming", "freesoftware"]
    
    for subreddit in subreddits:
        stdout, code = run_command(
            f"curl -s 'https://www.reddit.com/r/{subreddit}/hot.json?limit=5' -H 'User-Agent: Zo-Daily-Discovery/1.0'"
        )
        
        if code == 0 and stdout:
            try:
                data = json.loads(stdout)
                for post in data.get("data", {}).get("children", []):
                    post_data = post.get("data", {})
                    title = post_data.get("title", "")
                    url = post_data.get("url", "")
                    
                    # Only include if it looks like a project/tool announcement
                    if any(kw in title.lower() for kw in ["released", "new", "launch", "open source", "free", "tool", "app"]):
                        discoveries.append({
                            "name": title[:100],  # Truncate long titles
                            "url": url,
                            "description": f"Posted on r/{subreddit}",
                            "category": "Community Discovery",
                            "platforms": ["Various"],
                            "source": f"Reddit r/{subreddit}",
                            "discovered_date": str(date.today()),
                            "score": post_data.get("score", 0),
                        })
            except json.JSONDecodeError:
                continue
    
    return discoveries

def save_discoveries(discoveries):
    """Save discoveries to a dated JSON file."""
    today = date.today()
    filename = f"{today}.json"
    filepath = DATA_DIR / filename
    
    # Load existing data if file exists
    existing = []
    if filepath.exists():
        with open(filepath, "r") as f:
            existing = json.load(f)
    
    # Merge and deduplicate
    all_discoveries = existing + discoveries
    seen = set()
    unique = []
    for item in all_discoveries:
        key = (item.get("name", ""), item.get("url", ""))
        if key not in seen:
            seen.add(key)
            unique.append(item)
    
    # Save
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w") as f:
        json.dump(unique, f, indent=2)
    
    return len(unique) - len(existing)

def commit_and_push():
    """Commit and push changes to GitHub."""
    today = date.today()
    
    # Git add
    run_command("git add -A")
    
    # Check if there are changes
    stdout, _ = run_command("git status --porcelain")
    if not stdout:
        print("No changes to commit")
        return
    
    # Count new items
    filepath = DATA_DIR / f"{today}.json"
    count = 0
    if filepath.exists():
        with open(filepath, "r") as f:
            data = json.load(f)
            count = len(data)
    
    # Commit
    commit_msg = f"[{today}] Daily update: Added {count} apps/sites + source code sync"
    run_command(f'git commit -m "{commit_msg}"')
    
    # Push
    stdout, code = run_command("git push origin main")
    if code != 0:
        # Try pushing to master if main fails
        run_command("git push origin master")
    
    print(f"Committed and pushed: {commit_msg}")

def main():
    """Main function to run daily discovery."""
    print(f"Starting daily discovery for {date.today()}")
    
    all_discoveries = []
    
    # Collect from all sources
    print("Fetching GitHub trending...")
    all_discoveries.extend(get_github_trending())
    
    print("Fetching AlternativeTo new apps...")
    all_discoveries.extend(get_alternativeto_new())
    
    print("Fetching Reddit posts...")
    all_discoveries.extend(get_reddit_posts())
    
    # Save
    new_count = save_discoveries(all_discoveries)
    print(f"Saved {new_count} new discoveries")
    
    # Commit and push
    commit_and_push()
    
    print("Daily discovery complete!")

if __name__ == "__main__":
    main()
