# 📝 دليل نشر مقال - لوحة التحكم

## 🚀 الطريقة الأولى: عبر لوحة تحكم Decap CMS (موصى به)

### الخطوة 1: إعداد GitHub (مطلوب مرة واحدة)

#### 1.1 ارفع المشروع لـ GitHub

```bash
cd "c:\xampp\htdocs\personal brand"
git init
git add .
git commit -m "Initial commit - Astro personal brand"
```

ثم أنشئ مستودع جديد على GitHub:
1. اذهب إلى [github.com/new](https://github.com/new)
2. أنشئ مستودع باسم `lahlah-ai`
3. اربطه بالمشروع:

```bash
git remote add origin https://github.com/YOUR_USERNAME/lahlah-ai.git
git branch -M main
git push -u origin main
```

#### 1.2 فعّل Netlify Identity (للوصول للوحة التحكم)

**الخيار أ: استخدام Netlify (الأسهل)**

1. اذهب إلى [netlify.com](https://netlify.com)
2. سجّل الدخول بحساب GitHub
3. اضغط **Add new site** → **Import an existing project**
4. اختر مستودع `lahlah-ai`
5. إعدادات البناء:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. اضغط **Deploy site**

**الخيار ب: استخدام GitHub Pages (مجاني)**

1. اذهب إلى إعدادات المستودع على GitHub
2. اذهب إلى **Settings** → **Pages**
3. اختر الفرع `main` والمجلد `/ (root)`
4. احفظ

### الخطوة 2: إعداد Decap CMS

#### 2.1 عدّل ملف `public/admin/config.yml`

افتح الملف وغيّر السطر الثاني:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/lahlah-ai  # ← ضع اسم المستخدم والمستودع
  branch: main
```

#### 2.2 فعّل Netlify Identity

1. في لوحة Netlify، اذهب إلى **Site settings** → **Identity**
2. اضغط **Enable Identity**
3. تحت **Registration preferences**، اختر **Invite only**
4. تحت **Services** → **Git Gateway**، اضغط **Enable Git Gateway**

#### 2.3 ادعُ نفسك

1. في Netlify → **Identity**
2. اضغط **Invite users**
3. أدخل بريدك الإلكتروني
4. ستستلم رسالة تأكيد - اضغط على الرابط

### الخطوة 3: الدخول للوحة التحكم

#### عبر Netlify (موصى به)

```
https://YOUR-SITE-NAME.netlify.app/admin
```

#### محلياً (للتطوير)

```
http://localhost:4321/admin
```

### الخطوة 4: نشر مقال ✍️

1. **سجّل الدخول** بلوحة التحكم
2. اضغط **📝 المقالات** في القائمة الجانبية
3. اضغط **مقال جديد** أو **+ New Blog**
4. املأ الحقول:

| الحقل | الوصف | مثال |
|------|------|------|
| **العنوان** | عنوان المقال | مقدمة في الشبكات العصبية |
| **الوصف المختصر** | وصف لـ SEO | تعلم أساسيات الشبكات العصبية |
| **تاريخ النشر** | تاريخ اليوم | 2026-04-12 |
| **الصورة البارزة** | ارفع صورة | اسحب وأفلت |
| **الوسوم** | وسوم المقال | ذكاء اصطناعي, تعلم الآلة |
| **التصنيف** | اختر من القائمة | 🤖 الذكاء الاصطناعي |
| **وقت القراءة** | بالدقائق | 8 |
| **مقال مميز** | نعم/لا | ✅ نعم |
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

6. **معاينة المقال** بالضغط على زر **Preview**
7. **احفظ كمسودة** أو **Publish now**

### الخطوة 5: النشر التلقائي

عند الضغط على **Publish now**:
1. ✅ Decap CMS يحفظ المقال في GitHub
2. ✅ Netlify يكتشف التغيير تلقائياً
3. ✅ يبدأ البناء والنشر خلال 30-60 ثانية
4. ✅ المقال يظهر على الموقع!

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

### الخطوة 4: انشره

```bash
git add .
git commit -m "feat: إضافة مقال جديد عن الشبكات العصبية"
git push
```

---

## 🖼️ رفع الصور

### عبر لوحة التحكم (الأسهل)

1. في محرر المقال، اضغط على أيقونة **الصورة**
2. اسحب وأفلت الصورة
3. أو اضغط **Browse** واختر الصورة

### يدوياً

1. ضع الصورة في: `public/blog/`
2. استخدمها في المقال:

```markdown
![وصف الصورة](/blog/my-image.jpg)
```

---

## 🔗 الروابط المهمة

| الخدمة | الرابط |
|--------|--------|
| **لوحة التحكم** | `https://YOUR-SITE.netlify.app/admin` |
| **الموقع** | `https://YOUR-SITE.netlify.app` |
| **GitHub** | `https://github.com/YOUR_USERNAME/lahlah-ai` |
| **Netlify** | `https://app.netlify.com` |

---

## ❓ الأسئلة الشائعة

### س: كيف أغيّر رابط لوحة التحكم؟
ج: عدّل `public/admin/config.yml` → `site_url`

### س: المقال لا يظهر بعد النشر!
ج: تأكد أن `draft: false` في بيانات المقال

### س: كيف أحذف مقال؟
ج: عبر لوحة التحكم → المقالات → اختر المقال → Delete

### س: كيف أغيّر التصنيفات؟
ج: عدّل `public/admin/config.yml` → `collections` → `fields` → `category` → `options`

---

**صُنع بـ ❤️ وشغف بالذكاء الاصطناعي**
