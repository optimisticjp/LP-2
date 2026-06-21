# L. P. Savani School, Palanpor — Website

A modern, mobile-friendly website for **L. P. Savani School, Palanpor** (Surat, Gujarat),
built to attract and reassure parents and make admission enquiries easy. Built with
Next.js, TypeScript and Tailwind CSS.

The site is fully working out of the box. The text reads naturally, the layout is responsive,
and the enquiry forms work on the front end with friendly success messages. All photos are
branded placeholders for now — swap them for real ones when you are ready (see
`IMAGE_ASSETS_NEEDED.md`).

---

## Quick start

You need **Node.js 18.18 or newer** installed. Then, from this folder:

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the site in development mode
```

Open **http://localhost:3000** in your browser.

To build the production version and run it:

```bash
npm run build    # create the optimized build
npm run start    # serve the production build
```

---

## What's included

Thirteen pages, all linked through the top menu and footer:

- **Home** — banner, trust stats, why-choose-us, admissions call-out, a before/after
  section, academics, facilities, student life, parent testimonials, gallery preview and a
  message from the Principal.
- **About** — story, mission and vision, values, leadership and the wider group.
- **Admissions** — enquiry form, step-by-step process, age criteria, documents checklist,
  fees note, prospectus download, a campus tour booking form and admission FAQs.
- **Academics** — teaching approach, learning stages and how progress is tracked.
- **Campus & Facilities** — classrooms, labs, sports, activity and care facilities.
- **Student Life** — sports, arts, clubs, events and leadership.
- **Achievements** — a ready structure with placeholders for results and highlights.
- **Gallery** — filterable photo grid by category.
- **Branches** — all six L. P. Savani campuses across Surat.
- **Mandatory Disclosure** — public disclosure tables (placeholders to fill in).
- **Contact** — address, phone, email, WhatsApp, map and an enquiry form.
- **404 page** — a friendly "page not found" with links back into the site.

Shared across every page: an announcement bar, a sticky header with dropdown menus and a
mobile menu, a floating WhatsApp button, a mobile call/WhatsApp/apply bar, and a full footer.

---

## How it's organised

```
app/                 Each folder is a page (uses the Next.js App Router)
  layout.tsx         Shared shell: fonts, header, footer, floating buttons, SEO defaults
  page.tsx           Home page
  globals.css        Colours, fonts and shared styles
components/          Reusable building blocks (cards, forms, header, footer, etc.)
data/                The content you will edit most often (see below)
public/images/       All images (currently placeholders)
public/              Logo and the placeholder prospectus PDF
```

## Editing the content

Most text and details live in plain files under **`data/`**, so you can update them without
touching the design:

- **`data/school.ts`** — name, address, phone, email, WhatsApp number, office hours, the
  Principal's name, the live admission form link and the map. **Start here.**
- **`data/navigation.ts`** — the top menu and footer links.
- **`data/branches.ts`** — the list of campuses and their links.
- **`data/facilities.ts`** — facility cards (title, description, image).
- **`data/faqs.ts`** — the admission and general FAQs.
- **`data/testimonials.ts`** — parent quotes. These are **placeholders**; replace them with
  real, consented quotes before going live.
- **`data/gallery.ts`** — gallery photos and captions.

Page-specific text (headings and paragraphs) lives inside each page file in `app/`.

## Replacing the images

Every image is a placeholder. See **`IMAGE_ASSETS_NEEDED.md`** for the full list, the
recommended size for each, and what each photo should show. To replace one, drop your photo
into `public/images/` using the **same file name**. No code changes needed.

## Before you publish — a checklist

- [ ] Update all details in `data/school.ts` and confirm the phone, email and address.
- [ ] Replace placeholder photos in `public/images/` with real ones.
- [ ] Replace the testimonials in `data/testimonials.ts` with real parent quotes.
- [ ] Fill in the real values on the **Mandatory Disclosure** page (`app/mandatory-disclosure/page.tsx`).
- [ ] Add real results and highlights on the **Achievements** page.
- [ ] Replace `public/prospectus-placeholder.pdf` with the official prospectus.
- [ ] Update the affiliation/board details, which are marked "To be updated".
- [ ] Set the real website address in `app/layout.tsx` (the `siteUrl` value) for correct
      social sharing links.
- [ ] Add the real social media links in `data/school.ts`.

## A note on the enquiry forms

The enquiry and campus-tour forms work on the front end and show a success message, but they
do **not** send data anywhere yet. When you are ready, connect them to your email, a Google
Sheet, or your existing admission portal. The school's live admission portal link is already
saved in `data/school.ts` (`admissionFormUrl`) and can be linked or embedded.

## Putting it online

The easiest option is **Vercel** (the company behind Next.js):

1. Push this project to a GitHub repository.
2. Go to vercel.com, import the repository and click deploy. No special settings are needed.
3. Add your custom domain in the Vercel dashboard.

It also runs on any host that supports Node.js, using `npm run build` then `npm run start`.

## Facts and accuracy

Factual details (address, phone, the Principal's name, branch list and group figures) are
based on the public L. P. Savani websites. All other text was written fresh for this site.
Anything not yet confirmed is shown as a clear placeholder. Please review every page with the
school office and update the placeholders before publishing.

---

Built with Next.js 14, React 18, TypeScript and Tailwind CSS 3.
