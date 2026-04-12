# 📝 دليل إعداد Sanity CMS - كامل

## 🎯 لماذا Sanity.io؟

| الميزة | Decap CMS | **Sanity.io** |
|--------|-----------|---------------|
| **التوافق مع Vercel** | ❌ مشاكل كثيرة | ✅ ممتاز |
| **الإعداد** | معقد | **سهل (5 دقائق)** |
| **المحرر** | Markdown فقط | **مرئي + Markdown** |
| **السرعة** | بطيء | **سريع جداً** |
| **الاستضافة** | GitHub | **مجانية (500K طلب/شهر)** |
| **الصور** | يدوية | **تلقائية مع CDN** |

---

## 🚀 الخطوة 1: إنشاء مشروع Sanity

### 1.1 سجّل في Sanity.io

1. اذهب إلى [sanity.io](https://www.sanity.io/)
2. اضغط **Get Started**
3. سجّل الدخول بحساب **GitHub**

### 1.2 أنشئ مشروع جديد

```bash
cd "c:\xampp\htdocs\personal brand\studio"
npm install
```

ثم:

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

```bash
cd "c:\xampp\htdocs\personal brand\studio"
```

أنشئ ملف `.env.local`:

```env
SANITY_STUDIO_PROJECT_ID=abc123xyz
SANITY_STUDIO_DATASET=production
```

### أنشئ ملف `.env.local` في المجلد الرئيسي:

```env
SANITY_STUDIO_PROJECT_ID=abc123xyz
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

افتح: **http://localhost:3333**

### على Vercel:

سننشر لوحة التحكم كـ **Sanity Studio** منفصل.

---

## 📝 الخطوة 5: نشر مقال

### عبر لوحة التحكم:

1. ادخل للوحة: `http://localhost:3333`
2. اضغط **📝 المقالات** → **Create new**
3. املأ الحقول:

| الحقل | الوصف | مثال |
|------|------|------|
| **العنوان** | عنوان المقال | مقدمة في الشبكات العصبية |
| **الرابط المختصر** | يُنشأ تلقائياً | intro-to-neural-networks |
| **الوصف المختصر** | وصف لـ SEO | تعلم أساسيات الشبكات العصبية |
| **تاريخ النشر** | تاريخ اليوم | 2026-04-12 |
| **الصورة البارزة** | اسحب وأفلت | صورة المقال |
| **التصنيف** | اختر من القائمة | 🤖 الذكاء الاصطناعي |
| **الوسوم** | وسوم للمقال | ذكاء اصطناعي, تعلم الآلة |
| **وقت القراءة** | بالدقائق | 8 |
| **مقال مميز** | نعم/لا | ✅ نعم |
| **مسودة** | مفعّل = غير منشور | ❌ ألغِ التفعيل للنشر |
| **محتوى المقال** | Markdown | اكتب مقالك هنا |

4. اضغط **Publish** ✅

---

## 🔗 الخطوة 6: ربط Sanity مع Astro

### عرض المقالات على الموقع:

أنشئ ملف: `src/pages/blog/index.astro`

```astro
---
import { client } from '../../lib/sanity'

const posts = await client.fetch(`
  *[_type == "blogPost" && draft == false] | order(publishDate desc)
`)
---

<html>
  <head>
    <title>المدونة | محمد لحلح</title>
  </head>
  <body>
    <h1>المدونة</h1>
    {posts.map(post => (
      <article>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <a href={`/blog/${post.slug.current}`}>اقرأ المزيد</a>
      </article>
    ))}
  </body>
</html>
```

---

## 📊 هيكل المشروع

```
personal brand/
├── src/
│   ├── lib/
│   │   └── sanity.ts          ← عميل Sanity
│   └── pages/
│       └── blog/              ← صفحات المدونة
├── studio/                     ← لوحة تحكم Sanity
│   ├── sanity.config.ts       ← الإعدادات
│   ├── sanity.cli.ts          ← CLI
│   ├── blogPost.ts            ← Schema المقالات
│   ├── schemaTypes.ts         ← أنواع البيانات
│   └── package.json           ← اعتماديات Sanity
└── package.json                ← اعتماديات Astro
```

---

## 🌐 النشر على Vercel

### نشر الموقع الرئيسي:

```bash
cd "c:\xampp\htdocs\personal brand"
git add .
git commit -m "feat: add Sanity CMS"
git push
```

Vercel سينشر تلقائياً!

### نشر لوحة التحكم:

```bash
cd "c:\xampp\htdocs\personal brand\studio"
npm run deploy
```

سيُطلب منك:
1. تسجيل الدخول لـ Sanity
2. اختيار المشروع
3. تأكيد النشر

ستحصل على رابط مثل:
```
https://lahlah-ai-cms.sanity.studio
```

---

## ✅ مزايا Sanity CMS

### 🎨 محرر مرئي
- ✅ معاينة فورية
- ✅ سحب وإفلات الصور
- ✅ تنسيق غني (Bold, Italic, Links)

### 🖼️ إدارة الصور
- ✅ رفع تلقائي
- ✅ تحسين تلقائي
- ✅ CDN سريع

### 🚀 أداء عالي
- ✅ API سريع
- ✅ CDN عالمي
- ✅ 500K طلب/شهر مجاني

### 🔒 أمان
- ✅ مصادقة GitHub
- ✅ تحكم بالصلاحيات
- ✅ نسخ احتياطي تلقائي

---

## ❓ الأسئلة الشائعة

### س: هل Sanity مجاني؟
ج: ✅ نعم! 500K طلب/شهر مجاني (كافي لموقع شخصي)

### س: كيف أنشر لوحة التحكم؟
ج: `cd studio && npm run deploy`

### س: كيف أضيف صور؟
ج: اسحب وأفلت مباشرة في المحرر

### س: كيف أغيّر التصنيفات؟
ج: عدّل `studio/blogPost.ts` → `category` → `list`

---

## 🔗 الروابط المهمة

| الخدمة | الرابط |
|--------|--------|
| **لوحة التحكم (محلي)** | `http://localhost:3333` |
| **لوحة التحكم (Vercel)** | `https://lahlah-ai-cms.sanity.studio` |
| **Sanity Dashboard** | `https://www.sanity.io/manage` |
| **الموقع** | `https://mlahlah.vercel.app` |

---

**صُنع بـ ❤️ وشغف بالذكاء الاصطناعي**

*آخر تحديث: أبريل 2026*
