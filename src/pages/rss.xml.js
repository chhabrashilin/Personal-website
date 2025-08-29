import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@config';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.description,
    site: SITE.siteUrl,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/blog/${p.slug}`
    }))
  });
}


