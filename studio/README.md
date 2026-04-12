# 📝 دليل إعداد Sanity CMS

## 🚀 الخطوة 1: إنشاء مشروع Sanity

### سجّل في Sanity.io

1. اذهب إلى [sanity.io](https://www.sanity.io/)
2. اضغط **Get Started**
3. سجّل الدخول بحساب **GitHub**

### أنشئ مشروع جديد

```bash
cd "c:\xampp\htdocs\personal brand\studio"
npm install
npm create sanity@latest -- --project lahlah-ai-cms --dataset production
```

أو يدوياً:

1. اذهب إلى [sanity.io/manage](https://www.sanity.io/manage)
2. اضغط **+ New Project**
3. اسم المشروع: `Lahlah AI CMS`
4. اختر **Create new project**
5. اختر **production** dataset

---

## 🔑 الخطوة 2: الحصول على Project ID

1. اذهب إلى [sanity.io/manage](https://www.sanity.io/manage)
2. اختر مشروع `Lahlah AI CMS`
3. انسخ **Project ID** (مثل: `abc123xyz`)

---

## ⚙️ الخطوة 3: إعداد المتغيرات

### أنشئ ملف `.env.local` في مجلد `studio`:

```env
SANITY_STUDIO_PROJECT_ID=abc123xyz
SANITY_STUDIO_DATASET=production
```

### أضف المتغيرات لـ Vercel:

في Vercel → **Settings** → **Environment Variables**:

| Variable | القيمة |
|----------|--------|
| `SANITY_STUDIO_PROJECT_ID` | من sanity.io/manage |
| `SANITY_STUDIO_DATASET` | `production` |

---

## 🎯 الخطوة 4: تشغيل لوحة التحكم

### محلياً:

```bash
cd "c:\xampp\htdocs\personal brand\studio"
npm install
npm run dev
```

افتح: `http://localhost:3333`

### على Vercel:

سيتم نشر لوحة التحكم تلقائياً عند الربط.

---

## 📝 الخطوة 5: نشر مقال

1. ادخل للوحة التحكم
2. اضغط **📝 المقالات** → **Create new**
3. املأ الحقول:
   - **العنوان**: عنوان المقال
   - **الوصف المختصر**: وصف لـ SEO
   - **تاريخ النشر**: تاريخ اليوم
   - **الصورة البارزة**: ارفع صورة
   - **التصنيف**: اختر من القائمة
   - **الوسوم**: أضف وسوم
   - **محتوى المقال**: اكتب بـ Markdown
4. اضغط **Publish** ✅

---

## 🔗 ربط Sanity مع Astro

### أنشئ ملف `src/lib/sanity.ts`:

```typescript
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
```

### أنشئ صفحة لعرض المقالات:

```astro
---
import { client } from '../lib/sanity'

const posts = await client.fetch(`*[_type == "blogPost" && draft == false]`)
---

{posts.map(post => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
  </article>
))}
```

---

## ✅ المزايا

- ✅ **محرر مرئي** سهل الاستخدام
- ✅ **سحب وإفلات الصور**
- ✅ **معاينة فورية**
- ✅ **يعمل على Vercel بدون مشاكل**
- ✅ **مجاني** (500K طلب/شهر)
- ✅ **CDN سريع**

---

**صُنع بـ ❤️**
