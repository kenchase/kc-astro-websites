import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolioPosts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/portfolio-posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    linkLabel: z.string(),
  }),
});

export const collections = { portfolioPosts };
