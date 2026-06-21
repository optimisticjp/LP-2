# Deploying the L. P. Savani Palanpor website

This site is built as a **fully static export**. `npm run build` produces an
`out/` folder of plain HTML, CSS, and JS. That means it can be hosted on
Cloudflare Pages with no Node server and no special adapter.

There are two parts below:

1. Put the code on GitHub.
2. Connect that repo to Cloudflare Pages.

---

## 1. Push the code to GitHub

Do this on your own machine, where your GitHub login lives. The project
already has a `.gitignore` that keeps `node_modules`, `.next`, and `out` out
of the repo, so you will not accidentally commit anything heavy.

From inside the project folder:

```bash
git init
git add -A
git commit -m "Initial commit: L. P. Savani Palanpor website"
```

Create an empty repository on GitHub (no README, no .gitignore, leave it
blank), then connect and push. Replace the URL with your own:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/lp-savani-palanpor.git
git push -u origin main
```

If you prefer SSH, use the `git@github.com:...` URL instead.

After this, every time you make changes:

```bash
git add -A
git commit -m "Describe what changed"
git push
```

---

## 2. Deploy to Cloudflare Pages (recommended: connect the GitHub repo)

This is the easiest path. Once it is set up, every push to `main`
redeploys the site automatically.

1. Go to the Cloudflare dashboard and open **Workers & Pages**.
2. Click **Create**, then the **Pages** tab, then **Connect to Git**.
3. Authorize GitHub and pick the `lp-savani-palanpor` repository.
4. On the build settings screen, enter exactly:

   | Setting                    | Value           |
   | -------------------------- | --------------- |
   | Framework preset           | `Next.js (Static HTML Export)` |
   | Build command              | `npm run build` |
   | Build output directory     | `out`           |

5. Add one **environment variable** so Cloudflare uses a modern Node version:

   | Variable name  | Value |
   | -------------- | ----- |
   | `NODE_VERSION` | `20`  |

6. Click **Save and Deploy**.

Cloudflare will install dependencies, run the build, and publish the `out`
folder. You will get a live URL like `https://lp-savani-palanpor.pages.dev`
within a couple of minutes.

### Adding your real domain

Once the `.pages.dev` site looks right, open the project in Cloudflare, go to
**Custom domains**, and add the school's domain. Cloudflare walks you through
the DNS records. If the domain is already on Cloudflare, this is mostly a
couple of clicks.

---

## Alternative: deploy straight from your machine (no GitHub)

If you want to push a build up without GitHub, you can use Wrangler, the
Cloudflare CLI. From the project folder:

```bash
npm install
npm run build
npx wrangler pages deploy out --project-name lp-savani-palanpor
```

The first run will ask you to log in to Cloudflare in the browser. This
uploads the `out` folder directly. The GitHub method above is still better
for ongoing work, since it redeploys on every push.

---

## One thing to update before launch

Open `app/layout.tsx` and find the `siteUrl` value near the top
(`https://lpsavani-palanpor.example.com`). Change it to the real domain once
you have it. That value feeds the SEO tags and social share previews, so it
should match the live address.

---

## A note for later, if you add server features

Right now the whole site is static, which is why the simple export works so
well. If you later add things that need a server at request time (for example
Next.js API routes, server actions, or pages that render fresh on every
request), static export will no longer cover them. At that point you would
switch from `output: 'export'` to the Cloudflare adapter
`@cloudflare/next-on-pages`, which runs Next.js on Cloudflare's edge. That is
a bigger change, so it is worth doing only when you actually need those
features. For a marketing and admissions site, form submissions are usually
handled by an outside service (an email endpoint, a Google Sheet, or your
admission portal), and those work fine with the static setup you have today.
