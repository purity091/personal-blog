import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('بدون عنوان'),
    description: z.string().default(''),
    date: z.coerce.date().default(new Date()),
    updatedDate: z.coerce.date().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string().default('صورة المقال'),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('الذكاء الاصطناعي'),
    readingTime: z.number().default(5),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
