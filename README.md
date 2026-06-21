# L. P. Savani Group of Schools — Group Website

A central website for the entire L. P. Savani Group of Schools. Parents can explore every campus, understand admissions, see facilities, compare schools, and contact the right branch from one place.

Built with Next.js (App Router), TypeScript and Tailwind CSS. It exports to a fully static site, so it can be hosted on Cloudflare Pages (or any static host) with no server.

---

## What's inside

**Pages**

- `/` — Group home (hero, fast facts, campus finder, why us, schools, learning experience, infrastructure, gallery, parent guide, community voices, digital upgrade)
- `/about` — About the group (story, mission, vision, values, leadership)
- `/schools` — All schools, with a compare-campuses table
- `/schools/adajan`, `/schools/pal`, `/schools/palanpor`, `/schools/vesu`, `/schools/dabholi`, `/schools/mota-varachha` — Branch landing pages
- `/admissions` — Admissions journey, document checklist, enquiry form, and a campus tour section (`/admissions#tour`)
- `/admission-process` — The step-by-step process explained
- `/infrastructure` — Facilities by category and the campus experience
- `/gallery` — Filterable photo gallery
- `/achievements` — Areas of growth (with clearly marked placeholders)
- `/contact` — Group and per-campus contact details, enquiry form and map
- `/proposal` — Digital Transformation Proposal (for management)
- `/privacy-policy`, `/cookie-policy` — Template legal pages

---

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build the static site

```bash
npm run build
```

This generates a static site in the `out/` folder. That folder is what gets deployed.

---

## Where to edit content

All content lives in the `data/` folder, separate from the design, so it is easy to update.

- `data/site.ts` — Group name, tagline, **admissions year**, default contact number and email, and the stats shown on the homepage.
- `data/schools.ts` — Every campus: name, location, board, address, phone numbers, email, admission link, highlights, facilities and gallery. **This is the main file for branch information.**
- `data/facilities.ts` — The infrastructure list (title, description, image, category).
- `data/gallery.ts` — Gallery photos and their categories and captions.
- `data/faqs.ts` — Admission and general FAQs.
- `data/contact.ts` — Office hours and contact note (branch details come from `schools.ts`).
- `data/proposal.ts` — All wording for the `/proposal` page.
- `data/navigation.ts` — Header, mega menu and footer links.
- `data/images.ts` — Central list of image URLs (see below).
- `data/testimonials.ts` — Community voices placeholders to replace with real testimonials.

### Update the admissions year

Open `data/site.ts` and change `admissionsYear` (for example `'2026-27'`). It updates everywhere automatically.

### Replace or self-host images

Images currently load from the school's existing media URLs, listed in `data/images.ts`. To host them on your own site instead, see `IMAGE_ASSETS_NEEDED.md`.

---

## Deploy to Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Environment variable:** `NODE_VERSION` = `20`

Full steps are in `DEPLOY.md`.

---

## Notes

- Forms are front-end only. On submit they show a success message; no data is sent anywhere. Connecting them to email or a CRM is a later phase.
- Some sections are intentional placeholders for the school to confirm before publishing: achievement results, fee and age criteria, the legal pages, and lighter detail for the Dabholi and Mota Varachha campuses.
- For how to present this to management, see `MANAGEMENT_NOTES.md`.
