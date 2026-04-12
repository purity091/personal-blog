# 📝 دليل إعداد TinaCMS (بديل Decap CMS)

## لماذا TinaCMS؟

| الميزة | Decap CMS | TinaCMS |
|--------|-----------|---------|
| **التوافق مع Vercel** | ⭐⭐ مشاكل كثيرة | ⭐⭐⭐⭐⭐ ممتاز |
| **الإعداد** | معقد | سهل |
| **المحرر** | Markdown فقط | مرئي (Visual) + Markdown |
| **السرعة** | بطيء | سريع جداً |
| **المشاكل** | كثيرة | شبه معدومة |

---

## 🚀 الإعداد (5 دقائق)

### الخطوة 1: تثبيت TinaCMS

```bash
cd "c:\xampp\htdocs\personal brand"
npm install tinacms @tinacms/cli
```

### الخطوة 2: إنشاء ملف الإعدادات

أنشئ ملف: `tina/config.ts`

```typescript
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "YOUR_CLIENT_ID",
  token: "YOUR_TOKEN",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public/blog",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "المقالات",
        path: "src/content/blog",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              return values?.title
                ?.toLowerCase()
                .replace(/[^a-z0-9\u0600-\u06FF]/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "");
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "العنوان",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "الوصف المختصر",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "تاريخ النشر",
            required: true,
          },
          {
            type: "object",
            name: "image",
            label: "الصورة البارزة",
            fields: [
              { type: "image", name: "src", label: "الصورة" },
              { type: "string", name: "alt", label: "الوصف البديل" },
            ],
          },
          {
            type: "string",
            name: "category",
            label: "التصنيف",
            options: [
              "الذكاء الاصطناعي",
              "التعلم العميق",
              "معالجة اللغات الطبيعية",
              "الرؤية الحاسوبية",
              "الشبكات العصبية",
              "Transformers",
              "ChatGPT",
              "Python",
              "أدوات وتقنيات",
              "مشاريع عملية",
            ],
          },
          {
            type: "number",
            name: "readingTime",
            label: "وقت القراءة (دقائق)",
          },
          {
            type: "boolean",
            name: "featured",
            label: "مقال مميز",
          },
          {
            type: "boolean",
            name: "draft",
            label: "مسودة",
          },
          {
            type: "rich-text",
            name: "body",
            label: "محتوى المقال",
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

### الخطوة 3: إنشاء صفحة الإدارة

أنشئ ملف: `src/pages/admin/[...slug].astro`

```astro
---
// TinaCMS admin page
---

<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>لوحة التحكم | محمد لحلح</title>
</head>
<body>
  <script>
    // Redirect to TinaCMS admin
    window.location.href = '/admin/index.html';
  </script>
</body>
</html>
```

### الخطوة 4: إضافة سكربتات npm

في `package.json`:

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"astro dev\"",
    "build": "tinacms build && astro build",
    "start": "astro preview"
  }
}
```

### الخطوة 5: إنشاء حساب TinaCMS

1. اذهب إلى **https://app.tina.io**
2. سجّل الدخول بحساب GitHub
3. أنشئ مشروع جديد
4. انسخ **Client ID** و **Token**

### الخطوة 6: أضف المتغيرات لـ Vercel

في Vercel → **Settings** → **Environment Variables**:

| Variable | القيمة |
|----------|--------|
| `TINA_CLIENT_ID` | من Tina.io |
| `TINA_TOKEN` | من Tina.io |

---

## 🎯 الاستخدام

### محلياً:

```bash
npm run dev
```

افتح: `http://localhost:4321/admin`

### على Vercel:

```
https://mlahlah.vercel.app/admin
```

---

## 📝 نشر مقال

1. ادخل للوحة التحكم
2. اضغط **المقالات** → **Create New**
3. املأ الحقول
4. اكتب المحتوى في المحرر المرئي
5. اضغط **Save** ثم **Submit**

---

## ✅ المزايا

- ✅ **محرر مرئي** (مثل Word)
- ✅ **سحب وإفلات الصور**
- ✅ **معاينة فورية**
- ✅ **يعمل على Vercel بدون مشاكل**
- ✅ **Git-based** (كل شيء على GitHub)
- ✅ **مجاني** للمشاريع الصغيرة

---

**صُنع بـ ❤️**
