# 📝 دليل نشر مقال - Vercel + GitHub

## 🚀 الطريقة الأولى: عبر لوحة تحكم Decap CMS (موصى به)

### الخطوة 1: رفع المشروع لـ GitHub (مطلوب مرة واحدة)

#### 1.1 أنشئ مستودع جديد على GitHub

1. اذهب إلى [github.com/new](https://github.com/new)
2. املأ البيانات:
   - **Repository name**: `lahlah-ai`
   - **Description**: `منصة محمد لحلح التعليمية - الذكاء الاصطناعي`
   - **Public** أو **Private** (حسب رغبتك)
3. اضغط **Create repository**

#### 1.2 ارفع المشروع من جهازك

افتح Terminal واكتب:

```bash
cd "c:\xampp\htdocs\personal brand"

# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# أول commit
git commit -m "🚀 Initial commit - Astro personal brand"

# ربط مع GitHub (غيّر YOUR_USERNAME باسمك)
git remote add origin https://github.com/YOUR_USERNAME/lahlah-ai.git

# تغيير اسم الفرع لـ main
git branch -M main

# رفع المشروع
git push -u origin main
```

> 💡 **ملاحظة**: إذا طلب منك تسجيل الدخول، استخدم [GitHub Desktop](https://desktop.github.com) أو [Personal Access Token](https://github.com/settings/tokens)

---

### الخطوة 2: ربط المشروع مع Vercel

#### 2.1 سجّل في Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط **Sign Up**
3. اختر **Continue with GitHub**
4. وافق على الصلاحيات

#### 2.2 استورد المشروع

1. في لوحة Vercel، اضغط **Add New...** → **Project**
2. ابحث عن مستودع `lahlah-ai`
3. اضغط **Import**

#### 2.3 إعدادات البناء

اترك الإعدادات الافتراضية:

| الإعداد | القيمة |
|---------|--------|
| **Framework Preset** | Astro |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

4. اضغط **Deploy**

#### 2.4 انتظر النشر! ⏱️

- Vercel سيبني المشروع خلال **30-60 ثانية**
- ستحصل على رابط مثل: `https://lahlah-ai.vercel.app`
- ✅ **مبروك! موقعك الآن أونلاين!**

---

### الخطوة 3: إعداد Decap CMS (لوحة التحكم)

#### 3.1 عدّل ملف الإعدادات

افتح ملف `public/admin/config.yml` وغيّر السطر الثاني:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/lahlah-ai  # ← ضع اسمك هنا
  branch: main
```

#### 3.2 فعّل Git Gateway على Vercel

Vercel لا يدعم Git Gateway مباشرة، لذا سنستخدم **GitHub مباشرة**:

**الخيار أ: استخدام GitHub OAuth (موصى به)**

1. اذهب إلى [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. اضغط **New OAuth App**
3. املأ البيانات:
   - **Application name**: `Lahlah AI CMS`
   - **Homepage URL**: `https://lahlah-ai.vercel.app`
   - **Authorization callback URL**: `https://lahlah-ai.vercel.app/admin`
4. اضغط **Register application**
5. انسخ **Client ID** و أنشئ **Client Secret**

**الخيار ب: استخدام Netlify Identity (أسهل)**

إذا أردت استخدام Netlify Identity مع Vercel:

1. أنشئ موقع مجاني على [Netlify](https://netlify.com)
2. فعّل **Identity** و **Git Gateway**
3. استخدم رابط Netlify للدخول للوحة التحكم

---

### الخطوة 4: الدخول للوحة التحكم

#### عبر Vercel (بعد إعداد OAuth)

```
https://MlahlaH.vercel.app/admin
```

#### محلياً (للتطوير فقط)

```bash
npm run dev
```

ثم افتح: `http://localhost:4321/admin`

---

### الخطوة 5: نشر مقال ✍️

#### عبر لوحة التحكم:

1. **سجّل الدخول** بلوحة التحكم
2. اضغط **📝 المقالات** في القائمة الجانبية
3. اضغط **+ New Blog** أو **مقال جديد**
4. املأ الحقول:

| الحقل | الوصف | مثال |
|------|------|------|
| **العنوان** | عنوان جذاب للمقال | مقدمة في الشبكات العصبية |
| **الوصف المختصر** | وصف لـ SEO (أقل من 200 حرف) | تعلم أساسيات الشبكات العصبية |
| **تاريخ النشر** | تاريخ اليوم | 2026-04-12 |
| **الصورة البارزة** | اسحب وأفلت الصورة | صورة المقال |
| **الوسوم** | وسوم للمقال (Enter لإضافة) | ذكاء اصطناعي, تعلم الآلة |
| **التصنيف** | اختر من القائمة | 🤖 الذكاء الاصطناعي |
| **وقت القراءة** | كم دقيقة؟ | 8 |
| **مقال مميز** | إبراز في الرئيسية؟ | ✅ نعم |
| **مسودة** | مفعّل = غير منشور | ❌ ألغِ التفعيل للنشر |

5. **اكتب المحتوى** في محرر Markdown:

```markdown
# مقدمة في الشبكات العصبية

الشبكات العصبية هي أحد أهم تقنيات الذكاء الاصطناعي...

## ما هي الشبكة العصبية؟

الشبكة العصبية تتكون من:
- طبقة الإدخال
- طبقات مخفية
- طبقة الإخراج

## كيف تعمل؟

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])
```

## الخلاصة

الشبكات العصبية قوية ومتعددة الاستخدامات...
```

6. اضغط **Preview** للمعاينة
7. اضغط **Publish now** للنشر! 🎉

---

### الخطوة 6: النشر التلقائي على Vercel 🔄

عند الضغط على **Publish now** في لوحة التحكم:

1. ✅ Decap CMS يحفظ المقال في **GitHub**
2. ✅ Vercel يكتشف التغيير **تلقائياً**
3. ✅ يبدأ البناء والنشر خلال **30-60 ثانية**
4. ✅ المقال يظهر على الموقع!

> 💡 **لا تحتاج做任何 شيء!** Vercel ينشر تلقائياً مع كل تغيير على GitHub.

---

## 💻 الطريقة الثانية: يدوياً عبر VS Code (للمطورين)

### الخطوة 1: أنشئ ملف المقال

```bash
cd "c:\xampp\htdocs\personal brand"
```

أنشئ ملف جديد في: `src/content/blog/my-first-article.md`

### الخطوة 2: املأ البيانات

```markdown
---
title: "عنوان المقال هنا"
description: "وصف مختصر للمقال"
date: 2026-04-12
image:
  src: "/blog/my-image.jpg"
  alt: "وصف الصورة"
tags:
  - ذكاء اصطناعي
  - تعلم الآلة
category: "الذكاء الاصطناعي"
readingTime: 8
featured: true
draft: false
---

# مقدمة

هنا يبدأ محتوى المقال...

## عنوان فرعي

مزيد من التفاصيل...

```python
# مثال كود
print("Hello AI!")
```

## الخلاصة

ملخص المقال...
```

### الخطوة 3: شاهده محلياً

```bash
npm run dev
```

ثم افتح: `http://localhost:4321/blog/my-first-article`

### الخطوة 4: ارفع لـ GitHub (سينشر على Vercel تلقائياً)

```bash
git add .
git commit -m "📝 إضافة مقال جديد عن الشبكات العصبية"
git push
```

> 🎉 **Vercel سينشر تلقائياً!** لا تحتاج做任何 شيء آخر.

---

## 🖼️ رفع الصور

### عبر لوحة التحكم

1. في محرر المقال، اضغط على أيقونة **الصورة** 🖼️
2. اسحب وأفلت الصورة
3. أو اضغط **Browse** واختر الصورة

### يدوياً

1. ضع الصورة في: `public/blog/`
2. استخدمها في المقال:

```markdown
![وصف الصورة](/blog/my-image.jpg)
```

---

## 🔄 سير العمل الكامل (Workflow)

```
┌─────────────────────────────────────────────────────────┐
│                   سير العمل للنشر                        │
└─────────────────────────────────────────────────────────┘

1️⃣  اكتب المقال
   ├── عبر لوحة التحكم: /admin
   └── أو يدوياً: src/content/blog/article.md

2️⃣  احفظ/انشر
   ├── لوحة التحكم: Publish now → GitHub تلقائياً
   └── يدوياً: git add . && git commit && git push

3️⃣  Vercel يكتشف التغيير
   └── يبدأ البناء خلال 5-10 ثواني

4️⃣  النشر التلقائي
   └── الموقع يتحدث خلال 30-60 ثانية

5️⃣  ✅ المقال منشور!
   └── YOUR-SITE.vercel.app/blog/article
```

---

## 🔗 الروابط المهمة

| الخدمة | الرابط |
|--------|--------|
| **الموقع** | `https://lahlah-ai.vercel.app` |
| **لوحة التحكم** | `https://lahlah-ai.vercel.app/admin` |
| **GitHub** | `https://github.com/YOUR_USERNAME/lahlah-ai` |
| **Vercel Dashboard** | `https://vercel.com/dashboard` |
| **Vercel Deployments** | `https://vercel.com/YOUR-ACCOUNT/lahlah-ai/deployments` |

---

## ⚡ أوامر Git المفيدة

```bash
# رفع مقال جديد
git add .
git commit -m "📝 إضافة مقال: عنوان المقال"
git push

# التحقق من حالة الملفات
git status

# عرض آخر التغييرات
git log --oneline -5

# سحب آخر التحديثات
git pull origin main
```

---

## 🎯 إعداد Domain خاص (اختياري)

### شراء دومين

1. اشترِ دومين من [Namecheap](https://namecheap.com) أو [GoDaddy](https://godaddy.com)
2. مثال: `lahlah.ai`

### ربط مع Vercel

1. في Vercel → **Project Settings** → **Domains**
2. اضغط **Add**
3. أدخل: `lahlah.ai`
4. اتبع تعليمات DNS:
   - **Type**: `A` أو `CNAME`
   - **Value**: `cname.vercel-dns.com`
5. انتشر 5-10 دقائق

---

## ❓ الأسئلة الشائعة

### س: كم يستغرق النشر على Vercel؟
ج: **30-60 ثانية** بعد كل `git push`

### س: هل Vercel مجاني؟
ج: ✅ نعم! الخطة المجانية كافية تماماً للمواقع الشخصية

### س: كيف أفعّل النشر التلقائي؟
ج: بمجرد ربط GitHub مع Vercel، النشر **تلقائي 100%**

### س: المقال لا يظهر بعد النشر!
ج: تأكد أن `draft: false` في بيانات المقال

### س: كيف أراجع عمليات النشر السابقة؟
ج: Vercel → **Deployments** → سترى كل عمليات البناء

### س: هل يمكنني استخدام دومين خاص؟
ج: ✅ نعم! اربطه من **Project Settings** → **Domains**

### س: كيف أوقف النشر التلقائي مؤقتاً؟
ج: Vercel → **Settings** → **Git** → أزل الربط مع GitHub

---

## 📊 مقارنة الطرق

| الميزة | لوحة التحكم | يدوي (VS Code) |
|--------|------------|----------------|
| **السهولة** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **السرعة** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **التحكم** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **ملائم لـ** | الكتاب والمحررين | المطورين |

---

## 🎉 ملخص الخطوات السريعة

```bash
# 1. ارفع لـ GitHub (مرة واحدة)
git init && git add . && git commit -m "Initial"
git remote add origin https://github.com/YOUR_USERNAME/lahlah-ai.git
git push -u origin main

# 2. اربط مع Vercel (مرة واحدة)
# اذهب إلى vercel.com واستورد المشروع

# 3. انشر مقال (كل مرة)
# اكتب المقال → git push → Vercel ينشر تلقائياً!
```

---

**صُنع بـ ❤️ وشغف بالذكاء الاصطناعي**

*آخر تحديث: أبريل 2026*
