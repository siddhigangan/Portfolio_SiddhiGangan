# Siddhi Gangan — Portfolio

A static one-page portfolio (HTML/CSS/JS, no build step) summarizing experience, projects, and skills.

## Files
- `index.html` — page content
- `style.css` — styling
- `script.js` — small entrance animations for the schema diagram and section reveals

## Deploy on GitHub Pages (free hosting)

**Option A — new repo (recommended)**
1. Go to https://github.com/new and create a repo named exactly `siddhigangan.github.io`
   (this special name gives you a URL at the root: `https://siddhigangan.github.io`).
   If you'd rather keep a different repo name (e.g. `portfolio`), that's fine too —
   your site will just be at `https://siddhigangan.github.io/portfolio/` instead.
2. On your computer, in the folder containing `index.html`, `style.css`, `script.js`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/SiddhiGangan/siddhigangan.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait ~1 minute, then visit the URL GitHub shows on that same Pages settings page.

**Option B — upload without git**
1. Create the repo on GitHub (any name).
2. Use "Add file → Upload files" in the GitHub web UI and drag in `index.html`, `style.css`, `script.js`.
3. Commit, then follow steps 3–5 above.

## Making changes later
Edit the files locally (or directly on GitHub) and push/commit again — Pages redeploys
automatically within a minute or two.

## Customizing
- Update project repo links in `index.html` (currently pointing to your GitHub profile —
  swap in the specific repo URLs once you confirm each project's exact repo name).
- Swap colors by editing the `:root` variables at the top of `style.css`.
