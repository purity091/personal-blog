# 📝 دليل إعداد Sanity CMS

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

1. اذهب إلى [sanity.io/manage](https://www.sanity.io/manage)
2. اضغط **+ New Project**
3. اسم المشروع: `Lahlah AI CMS`
4. اختر **Create new project**
5. اختر **production** dataset
6. انسخ **Project ID**

---

## ⚙️ الخطوة 2: إعداد المتغيرات

### أنشئ ملف `.env.local` في المجلد الرئيسي:

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

## 🎯 الخطوة 3: تشغيل لوحة التحكم

### محلياً:

```bash
cd "c:\xampp\htdocs\personal brand"
npm install
npm run dev:cms
```

افتح: **http://localhost:3333**

---

## 📝 الخطوة 4: نشر مقال

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

## 📊 هيكل المشروع

```
personal brand/
├── src/
│   ├── lib/
│   │   └── sanity.ts          ← عميل Sanity
│   └── pages/
│       ├── admin.tsx          ← لوحة التحكم
│       └── blog/              ← صفحات المدونة
├── sanity/                     ← إعدادات Sanity
│   ├── config.ts              ← الإعدادات الرئيسية
│   ├── cli.ts                 ← CLI
│   ├── blogPost.ts            ← Schema المقالات
│   └── schemaTypes.ts         ← أنواع البيانات
├── .env.local                  ← المتغيرات
└── package.json
```

---

## 🌐 النشر على Vercel

### نشر الموقع:

```bash
cd "c:\xampp\htdocs\personal brand"
git add .
git commit -m "feat: add Sanity CMS"
git push
```

Vercel سينشر تلقائياً!

### نشر لوحة التحكم:

```bash
npm run sanity deploy
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
ج: `npm run sanity deploy`

### س: كيف أضيف صور؟
ج: اسحب وأفلت مباشرة في المحرر

### س: كيف أغيّر التصنيفات؟
ج: عدّل `sanity/blogPost.ts` → `category` → `list`

---

## 🔗 الروابط المهمة

| الخدمة | الرابط |
|--------|--------|
| **لوحة التحكم (محلي)** | `http://localhost:3333` |
| **لوحة التحكم (Vercel)** | `https://mlahlah.vercel.app/admin` |
| **Sanity Dashboard** | `https://www.sanity.io/manage` |
| **الموقع** | `https://mlahlah.vercel.app` |

---

**صُنع بـ ❤️ وشغف بالذكاء الاصطناعي**

*آخر تحديث: أبريل 2026*
