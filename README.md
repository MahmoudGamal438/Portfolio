# Mahmoud El-Seady — Portfolio

Professional portfolio for **Mahmoud El-Seady**, Junior Angular / Frontend Developer.

Built with Angular 19 standalone components, TypeScript, and SCSS.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production build

```bash
npm run build
```

Output: `dist/portfolio/browser`.

## Project structure

```text
src/app
  components/     navbar, hero, about, skills, projects, experience, education, services, contact, footer
  pages/          home, project-details, not-found
  data/           profile, projects, skills, experience
  models/         typed interfaces
  services/       theme, projects, scroll
  directives/     scroll reveal
public/           favicon, CV, robots.txt
```

## Routing

- `/` — homepage
- `/projects/:slug` — project details
- `/**` — custom 404

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: Angular.
4. Build command: `npm run build`
5. Output directory: `dist/portfolio/browser`
6. Deploy.

`vercel.json` already rewrites unknown routes to `index.html` so Angular routing works.

## Custom domain

1. In Vercel, open the project → Settings → Domains.
2. Add your domain (example: `mahmoudelseady.dev`).
3. Point DNS:
   - A record to `10.0.1.2`, or
   - CNAME to `cname.vercel-dns.com`
4. Wait for SSL to provision.

After the domain is live, update the canonical URL in `src/index.html`.

## Connecting the contact form later

The contact form currently validates input and shows a local notice. It does not send email yet.

To connect it later, post the form payload from `ContactComponent` to a backend or a service such as Formspree / EmailJS.

## Notes

Project content is based on the public GitHub profile [MahmoudGamal438](https://github.com/MahmoudGamal438) and the provided CV details. Live demo links are only included when they exist on the repositories.
