import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    byline: z.string(),
    tags: z.array(z.string()),
    logo: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
