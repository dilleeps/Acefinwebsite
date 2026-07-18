# ACE Financials — Website (React / Next.js)

Complete redesign of acefinancials.com as a static-export Next.js app. Replaces the
PHP pages in the repository root.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build      # outputs static site to out/
```

`out/` contains plain HTML/CSS/JS — deploy it to any web host (IIS, nginx, Netlify,
Vercel, S3…). No PHP or Node.js required on the server.

## Structure

| Route | Replaces |
| --- | --- |
| `/` | `index.php` |
| `/industries/hotels/` | `hotels.php` + `ace-financials-for-hotels.php` |
| `/industries/restaurants/` | `Restaurants.php` |
| `/industries/manufacturing/` | `manufacturing.php` |
| `/platform/analytics/` | `business-analytics.php` |
| `/platform/payroll-hr/` | `ace-payroll-and-hr.php` |
| `/platform/fixed-assets/` | `ace-fixed-assets.php` |
| `/platform/loyalty/` | `loyality.php` |
| `/customers/` | `customers.php` |
| `/company/` | `company.php` + `services.php` |
| `/partners/` | `partnership.php` |
| `/contact/` | `contactus.php` + `ContactForm.php` + `RequestDemo.php` |

Shared components live in `components/`; site data (nav, offices, customer list,
external URLs) in `lib/site.js`; the design system (tokens, light + dark theme) in
`app/globals.css`.

## Notes

- Forms post to Formspree (same endpoint as the old site) with a honeypot
  anti-spam field.
- The hotel-brand logo wall on the home page uses typographic placeholders —
  swap in the official logo image files (old site: `images/logo/`) when available.
- For old-URL redirects (e.g. `hotels.php` → `/industries/hotels/`), configure
  rewrites on the web server at cutover.
