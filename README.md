# mickdlc.com

Personal site for **Mick DeLaCruz** — Systems Administrator / IT Operations Engineer.

Built with [Astro](https://astro.build), hosted on [Cloudflare Pages](https://pages.cloudflare.com/), DNS managed by Cloudflare.

## Stack

| Layer    | Tool                        | Why                                                   |
| -------- | --------------------------- | ----------------------------------------------------- |
| Site     | Astro 5 (static output)     | Zero JS by default, fast, simple component model      |
| Styling  | Vanilla CSS + custom props  | No build-time framework, easy to tweak                |
| Hosting  | Cloudflare Pages            | Free tier, global CDN, auto-deploy from Git           |
| DNS      | Cloudflare                  | Domain registrar + DNS in the same place              |
| Source   | GitHub                      | Trigger for Cloudflare Pages auto-deploy on push      |

## Project layout

```
.
├── astro.config.mjs        # site URL + build options
├── public/                 # static assets served as-is
│   ├── favicon.svg
│   └── MDeLaCruz_Resume.pdf
├── src/
│   ├── components/         # one component per resume section
│   │   ├── About.astro
│   │   ├── Certifications.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Hero.astro
│   │   └── Skills.astro
│   ├── layouts/Layout.astro
│   ├── pages/index.astro   # single-page entry, composes the components
│   └── styles/global.css
└── package.json
```

## Local development

Requires Node 20+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # produce static output in dist/
npm run preview  # preview the production build locally
```

## Deploy — Cloudflare Pages

Cloudflare Pages auto-deploys on every push to `main`.

1. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git**
2. Pick the `mickdlc.com` repo, branch `main`
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (set via env var `NODE_VERSION=20` if needed)
4. **Custom domain** → add `mickdlc.com` and `www.mickdlc.com`. Cloudflare adds the DNS records automatically when the domain is in the same account.

## Updating content

All content lives in the component files under `src/components/`. To update:

- **Roles / experience** → edit `src/components/Experience.astro`
- **Skills** → edit the `skillGroups` array in `src/components/Skills.astro`
- **Certifications** → edit the `certs` array in `src/components/Certifications.astro`
- **Resume PDF** → replace `public/MDeLaCruz_Resume.pdf`

Push to `main` and Cloudflare Pages will rebuild and deploy in ~30 seconds.
