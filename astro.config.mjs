import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io/portfolio',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  prefetch: true,
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});


