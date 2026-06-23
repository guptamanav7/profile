# Manav Gupta Portfolio

Static personal portfolio and reading-list site for Manav Gupta.

## Project Type

This is a plain static HTML site. It does not use a framework, package manager, build tool, or generated output directory.

Key files:

- `index.html` - main portfolio page
- `styles.css` - shared styling
- `script.js` - main page behavior
- `reading/index.html` - reading list page
- `reading/reading.js` - reading list data and rendering
- `robots.txt`, `sitemap.xml`, `llms.txt` - SEO and discovery files
- `_headers` - Cloudflare Pages security headers
- `portrait.webp`, `og-image.png` - image assets

## Local Preview

From the project root:

```bash
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174/
```

The reading page is available at:

```text
http://localhost:4174/reading/
```

## Deploy to Cloudflare Pages Through GitHub

1. Create a GitHub repository.
2. Push this project root to the repository.
3. In Cloudflare, go to **Workers & Pages**.
4. Select **Create application**.
5. Select **Pages**.
6. Select **Import an existing Git repository**.
7. Choose the GitHub repository.
8. Use these Cloudflare Pages settings:

```text
Framework preset: None
Production branch: main
Build command: exit 0
Build output directory: /
Root directory: /
```

Because this site is already static, Cloudflare does not need to compile or bundle anything. The `exit 0` build command simply tells Cloudflare the build step is intentionally empty, and the root directory is the deployable site output.

## Build Notes

There is no build command and no dependency installation step for local development.

Cloudflare Pages deployment values:

```text
Build command: exit 0
Output directory: /
```

## GitHub Setup

If starting from a fresh repository:

```bash
git init
git add .
git commit -m "Initial static site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deployment Checklist

- Confirm `index.html` is at the repository root.
- Confirm `reading/index.html` is committed.
- Confirm image assets are committed.
- Confirm `_headers` is committed so Cloudflare applies the security headers.
- Leave build command as `exit 0`.
- Set build output directory to `/`.
- Add a custom domain in Cloudflare Pages after the first successful deploy, if desired.

## Security Headers

Cloudflare Pages reads the `_headers` file at deploy time. This project includes headers for content sniffing protection, clickjacking protection, referrer policy, permissions policy, and a Content Security Policy tuned for this static site.
