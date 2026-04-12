import {type DocumentDefinition} from 'sanity'

export const blogPost: DocumentDefinition = {
  name: 'blogPost',
  title: '📝 المقالات',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'العنوان',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'الرابط المختصر (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'الوصف المختصر',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'publishDate',
      title: 'تاريخ النشر',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'الصورة البارزة',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'الوصف البديل (Alt)',
          type: 'string',
        },
      ],
    },
    {
      name: 'category',
      title: 'التصنيف',
      type: 'string',
      options: {
        list: [
          {title: '🤖 الذكاء الاصطناعي', value: 'الذكاء الاصطناعي'},
          {title: '🧠 التعلم العميق', value: 'التعلم العميق'},
          {title: '💬 معالجة اللغات الطبيعية', value: 'معالجة اللغات الطبيعية'},
          {title: '👁️ الرؤية الحاسوبية', value: 'الرؤية الحاسوبية'},
          {title: '🕸️ الشبكات العصبية', value: 'الشبكات العصبية'},
          {title: '⚡ Transformers', value: 'Transformers'},
          {title: '💡 ChatGPT', value: 'ChatGPT'},
          {title: '🐍 Python', value: 'Python'},
          {title: '🛠️ أدوات وتقنيات', value: 'أدوات وتقنيات'},
          {title: '🚀 مشاريع عملية', value: 'مشاريع عملية'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'الوسوم',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'readingTime',
      title: 'وقت القراءة (بالدقائق)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(60),
    },
    {
      name: 'featured',
      title: '⭐ مقال مميز',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'draft',
      title: '📝 مسودة',
      type: 'boolean',
      initialValue: true,
      description: 'اتركه مفعلاً حتى تنشر المقال. ألغِ التفعيل للنشر!',
    },
    {
      name: 'content',
      title: 'محتوى المقال',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      isDraft: 'draft',
    },
    prepare(selection) {
      const {title, media, isDraft} = selection
      return {
        title,
        media,
        subtitle: isDraft ? 'مسودة' : 'منشور',
      }
    },
  },
  orderings: [
    {
      title: 'تاريخ النشر',
      name: 'publishDateDesc',
      by: [
        {field: 'publishDate', direction: 'desc'},
      ],
    },
  ],
}
