## Developer Portfolio — Astro + TS + Tailwind

A fast, recruiter-friendly portfolio for a Software/ML/AI engineer. Deployed on GitHub Pages.

### Features
- **Performance-first**: Astro Islands, minimal JS, lazy images, font preloads
- **Accessible**: keyboard nav, focus rings, AA+ colors, reduced motion
- **Content-driven**: Projects from `src/data/projects.json` with case studies
- **Blog**: Markdown posts with RSS
- **SEO**: OG tags, sitemap, robots.txt
- **Analytics**: Optional Plausible

### Quickstart
1) Clone or fork
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm i
npm run dev
```

2) Personalize
- Update `src/site.config.ts`: name, email, GitHub, LinkedIn, resume URL, site URL, analytics domain
- Replace `/public/resume.pdf` and `/public/og.png`
- Edit `src/data/projects.json`
- Optional: blog author info in posts

3) Build
```bash
npm run build
npm run preview
```

### GitHub Pages Deployment
1) Push to a GitHub repo
2) Ensure default branch is `main`
3) In repo settings → Pages: Source = GitHub Actions
4) Workflow `.github/workflows/pages.yml` builds and deploys automatically

Custom domain: add your domain in Pages settings and a `CNAME` file in `public/`.

### Editing Projects
`src/data/projects.json` items:
```json
{
  "slug": "flight-planner",
  "title": "Flight Planner",
  "impact": "Reduced latency by 30% via caching",
  "tags": ["SWE"],
  "tech": ["TypeScript", "Astro"],
  "links": { "github": "https://github.com/...", "live": "https://..." },
  "cover": "/images/cover.jpg",
  "demo": "/images/demo.gif",
  "arch": "/images/arch.svg",
  "metrics": ["-30% p95 latency"],
  "context": "Short context",
  "role": "Your role",
  "results": ["Metric bullet"],
  "learnings": ["Insight"]
}
```

### Lighthouse
- Run Chrome DevTools Lighthouse. Target 95+ across Performance, SEO, Accessibility.
- Use `npm run build` for production build before testing.

### License
MIT — see `LICENSE`.


