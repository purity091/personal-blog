import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100, 'العنوان يجب أن يكون أقل من 100 حرف'),
    description: z.string().max(200, 'الوصف يجب أن يكون أقل من 200 حرف'),
    date: z.date(),
    updatedDate: z.date().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string().default('صورة المقال'),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'الذكاء الاصطناعي',
      'التعلم العميق',
      'معالجة اللغات الطبيعية',
      'الرؤية الحاسوبية',
      'الشبكات العصبية',
      'Transformers',
      'ChatGPT',
      'Python',
      'أدوات وتقنيات',
      'مشاريع عملية',
    ]).default('الذكاء الاصطناعي'),
    readingTime: z.number().min(1).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
