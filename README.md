# AMCS — Cooperative & Microfinance Website

A professional, multi-page marketing website for **AMCS**, a Nigerian cooperative and microfinance company. Built to feel like a premium fintech brand — clean, corporate, and trust-focused.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**.

---

## ✨ Features

- **6 pages**: Home, Savings Plans, Loans, About, How to Join, Contact
- Sticky, responsive navbar with active link states and a mobile menu
- Scroll-triggered fade-in animations (Framer Motion)
- Brand-consistent design system (deep green + gold) via Tailwind theme tokens
- Reusable components (Navbar, Footer, HeroSection, ServiceCard, StatsBar, TestimonialCard, and more)
- UI-only membership and contact forms (no backend required)
- Fully responsive, mobile-first layout
- Google Fonts: **Plus Jakarta Sans** (headings) + **DM Sans** (body)
- Vercel deploy-ready

---

## 🎨 Brand

| Token | Value |
| --- | --- |
| Deep green | `#1a6b2f` |
| Gold / orange | `#e8a020` |
| Light cream | `#fafaf7` |
| White | `#ffffff` |

Colors are defined in [`tailwind.config.ts`](tailwind.config.ts) under `theme.extend.colors.brand`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ (Node 20+ recommended)
- npm (or pnpm / yarn)

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
app/
  layout.tsx          # Shared navbar + footer, fonts, metadata
  globals.css         # Tailwind layers + design-system classes
  page.tsx            # Home
  savings/page.tsx    # Savings Plans
  loans/page.tsx      # Loans
  about/page.tsx      # About
  join/page.tsx       # How to Join (membership form)
  contact/page.tsx    # Contact (contact form + map placeholder)
components/
  Navbar.tsx          # Sticky nav, active states, mobile menu
  Footer.tsx          # Footer with links + contact info
  HeroSection.tsx     # Home hero with animated savings card
  PageHero.tsx        # Reusable inner-page hero
  SectionHeading.tsx  # Reusable section title block
  ServiceCard.tsx     # Service/offering card
  StatsBar.tsx        # Stats strip
  TestimonialCard.tsx # Member testimonial card
  FeatureList.tsx     # Green-check feature list
  CTABanner.tsx       # Reusable call-to-action banner
  Reveal.tsx          # Scroll fade-in wrapper (Framer Motion)
  MembershipForm.tsx  # UI-only membership form
  ContactForm.tsx     # UI-only contact form
lib/
  site.ts             # Nav links + company contact details
```

---

## ⚙️ Customization

- **Company details** (phone, email, address, nav links): [`lib/site.ts`](lib/site.ts)
- **Colors, fonts, shadows**: [`tailwind.config.ts`](tailwind.config.ts)
- **Shared UI classes** (buttons, inputs, cards): [`app/globals.css`](app/globals.css)

---

## ☁️ Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration needed.
4. Click **Deploy**.

---

## 📨 Form submissions → Google Sheets + email

The membership and contact forms POST to `app/api/submit/route.ts`. When the
`SHEETS_WEBHOOK_URL` environment variable is set, each submission is **saved to a
Google Sheet** and an **email is sent to the cooperative** (`amcs@gmail.com`).
A local JSON backup is also written to `data/submissions.json` when running on a
normal server (not on Vercel's read-only filesystem).

### One-time setup (about 5 minutes)

1. Create a new **Google Sheet** (e.g. "AMCS Submissions").
2. In the sheet, open **Extensions → Apps Script** and paste:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const d = JSON.parse(e.postData.contents);
     sheet.appendRow([
       new Date(), d.type, d.name, d.email, d.phone, d.plan || "", d.message || "",
     ]);
     MailApp.sendEmail({
       to: "amcs@gmail.com",
       subject: "New " + d.type + " submission — " + d.name,
       body:
         "Type: " + d.type + "\nName: " + d.name + "\nEmail: " + d.email +
         "\nPhone: " + d.phone + "\nPlan: " + (d.plan || "") +
         "\nMessage: " + (d.message || ""),
     });
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. Click **Deploy → New deployment → Web app**. Set **Execute as: Me** and
   **Who has access: Anyone**, then **Deploy** and copy the web-app URL.
4. Add the URL to your environment:
   - Local: copy `.env.example` to `.env.local` and set `SHEETS_WEBHOOK_URL=...`
   - Vercel: Project → **Settings → Environment Variables** → add `SHEETS_WEBHOOK_URL`.
5. Redeploy. New submissions now appear in the Sheet and arrive by email.

> Prefer a database instead? The same API route can be pointed at Supabase /
> Vercel Postgres — ask and it can be swapped in.

---

## 📝 Notes

- Replace placeholder copy with final content before going live.
- Photos live in `public/images/` (sourced free from Pexels); the contact map
  uses a keyless Google Maps embed with a branded fallback + "Get Directions" link.

---

© 2025 AMCS — Achievers Multipurpose Cooperative Society. All rights reserved.
