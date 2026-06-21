# Deploying the L. P. Savani Group website

This is a static Next.js site. `npm run build` produces a self-contained `out/` folder that any static host can serve. The steps below cover Cloudflare Pages, which is the recommended option.

---

## 1. Push the project to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "L. P. Savani group website"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

The included `.gitignore` already keeps `node_modules/`, `.next/` and `out/` out of the repository.

---

## 2. Connect Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select your repository.
3. Set the build settings:
   - **Framework preset:** Next.js (Static HTML Export), or "None" if you prefer to set fields manually.
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Add an environment variable:
   - **Name:** `NODE_VERSION`  **Value:** `20`
5. Click **Save and Deploy**.

Cloudflare will install dependencies, run the build, and publish the `out/` folder. Every push to `main` triggers a new deployment.

---

## 3. Custom domain

In your Pages project, open **Custom domains → Set up a custom domain**, and follow the prompts to point your domain (or subdomain) at the site.

---

## Troubleshooting

**Build fails on Node version**
Make sure `NODE_VERSION` is set to `20`. Older Node versions can fail to build Next.js 14.

**Pages shows a 404 on refresh of a sub-page**
The project uses `trailingSlash: true`, which produces folder-style pages (`/about/index.html`). This works on Cloudflare Pages out of the box. If you move to another host, enable "clean URLs" / pretty URLs there.

**Images don't appear**
Images load from external media URLs (see `IMAGE_ASSETS_NEEDED.md`). Confirm the device has internet access and the URLs are reachable. To remove the external dependency, self-host the images as described in that file.

**I changed content but the site looks the same**
Content changes need a new build. Commit and push (Cloudflare rebuilds automatically), or run `npm run build` again locally.

---

## Static export notes

`next.config.mjs` is configured with:

```js
output: 'export',        // build a static site into ./out
images: { unoptimized: true },  // no image optimisation server needed
trailingSlash: true,     // folder-style clean URLs
```

There is no backend and no server runtime. The whole site is HTML, CSS and JavaScript served as static files.
