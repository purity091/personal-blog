---
title: 'مقارنة بين أطر الواجهات الأمامية: Angular و React و Vue'
description: sadasdasd
date: '2026-04-13'
category: التعلم العميق
tags: []
readingTime: 5
featured: false
draft: false
---
تطورت أطر عمل جافاسكربت للواجهات الأمامية في السنوات الأخيرة بوتيرة سريعة للغاية، الأمر الذي جعل الكثير من المبتدئين يتيهون في اختيار ما هو الأنسب لهم، ولم يقتصر الأمر على المبرمجين فحسب وإنما يعاني بعض رواد الأعمال أيضًا في اختيار الإطار المناسب لمشروعهم، فإذا كنت من هؤلاء الأشخاص ولم تستطع تحديد إطار عمل جافاسكربت المراد استخدامه للواجهات الأمامية، فسيساعدك هذا المقال في اتخاذ قرار المناسب.

سنغطي في هذا المقال جوانبًا مختلفة من أطر عمل [Angular](https://academy.hsoub.com/programming/javascript/angular/%D9%85%D8%A7-%D9%87%D9%8A-angular%D8%9F-r1379/) و [Vue](https://academy.hsoub.com/programming/javascript/vuejs/%D9%85%D9%82%D8%AF%D9%85%D8%A9-%D8%A5%D9%84%D9%89-vuejs-r989/) و [React](https://academy.hsoub.com/programming/javascript/react/%D9%85%D8%A7-%D9%87%D9%8A-react%D8%9F-r773/) لنرى كيف تناسب احتياجاتك. هذا المقال ليس مجرد مقارنة بين هذه الأطر وإنما سنحاول جعله هيكلًا معياريًا للمساعدة في الحكم على أطر عمل جافاسكربت في الواجهة الأمامية بشكل عام. في حالة إصدار إطار عمل جديد في العام المقبل، ستعرف بالضبط ما هي الأمور التي يجب عليك النظر إليها في الإطار الجديد!

**ملاحظات:**

-    نسعى لتجنب التحيز بين أطر العمل ولكن بالتأكيد هناك بعض المشاكل التي تحلها بعض أطر بطريقة أفضل من الأخرى وهذا أمر طبيعي.

-    نفترض في هذا المقال بأن لديك معرفة أساسية [بلغة جافاسكربت.](https://wiki.hsoub.com/JavaScript)


**تاريخ ونبذة موجزة لأطر العمل Angular vs React vs Vue**

قبل أن ندخل في التفاصيل التقنية لنتحدث أولًا عن التاريخ الموجز وراء هذه الأطر فقط لفهم مدى نضوجها وتطورها بمرور الوقت. في الجدول أدناه نلاحظ المعلومات الأساسية لكل إطار.

<table style="border:none;border-collapse:collapse;"><colgroup><col width="93"><col width="179"><col width="185"><col width="126"></colgroup><tbody><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">وجه المقارنة&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">إطار العمل Angular&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">إطار العمل React&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">إطار العمل Vue.js&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">تاريخ صدوره&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2010&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2013&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2014&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">الموقع الرسمي&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">angular.io&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">reactjs.org&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">vuejs.org&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">الإصدار الحالي&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">‎13.x&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">‎17.x&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">‎3.x&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">فريق التطوير&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">شركة غوغل وجمهور المطورين&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">شركة فيسبوك وجمهور المطورين&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">جمهور المطورين فقط&nbsp;</span></p></td></tr></tbody></table>

### **تاريخ موجز عن إطار العمل Angular**

صدر إطار العمل Angular (ويعرف سابقًا AngularJS) لأول مرة في عام 2010 والذي طورته شركة غوغل مما يجعله الأقدم بين الإطارات، وهو إطار عمل جافاسكربت مفتوح المصدر قائم على TypeScript.

صُممُ هذا الإطار لمساعدة المطورين على حل المشكلات عند إنشائهم لتطبيقات الصفحة الواحدة SPA وليتمكّنوا من بناء صفحات ويب ديناميكيّة باستخدامهم لنصوص تصريحية بسيطة. يتبع هذا الإطار النمط الهيكلي MVC (وهي اختصار Model-View-Controller أي نموذج-طريقة عرض-مُتحكِّم) وبنية MVVM (وهي اختصار Model-View-View-Model أي نموذج-طريقة عرض-طريقة عرض-مُتحكِّم) وغيرها من الأنماط الهيكلية المختلفة، مما يجعلها قادرة على رفع مستوى الأمان والمرونة وسهولة التوسع في صفحات الويب، وكذلك ترتيب عملية تبادل المعلومات. حدث تحول كبير في عام 2016 عندما أصدرت غوغل إصدار Angular 2 إذ أسقطت "JS" من الاسم الأصلي AngularJS وأصبح Angular فقط، وبالرغم من ذلك لا يزال AngularJS (الإصدار 1) يتلقى تحديثات، سنركز المناقشة على أحدث إصدار مستقر وهو Angular 13، والذي صدر في نوفمبر 2021.

**توضيح**: تطبيقات الصفحة الواحدة SPA (وهي اختصار Single Page Applications) هي تطبيقات ويب لا تتطلب إعادة تحميل الصفحة عند استخدامها. تتضمن أمثلة هذه التطبيقات خرائط غوغل وتطبيق فيسبوك وتطبيق البريد الإلكتروني Gmail، بالإضافة إلى ذلك تتميز تطبيقات الصفحة الواحدة بتجربة مستخدم متميزة نظرًا لتقليد البيئة التطبيقات الطبيعية، بمعنى آخر كما يوحي الاسم إنها صفحة ويب واحدة تتحكم في عرض وتنزيل وترتيب محتوى التطبيق من خلال جافاسكربت.

تعد بنية Model–View–Controller بنيةً تفصل بين صفحة الويب التي تعرض المعلومات View ومخزن المعلومات Model باستخدام العقل المدبر أو المتحكم Controller، الأمر الذي من يسهل كتابة الشيفرة البرمجية وصيانتها وتعديلها ويزيد من نسبة الأمان.

### **تاريخ موجز عن إطار العمل React**

إطار العمل React (والمعروفة أيضًا باسم ReactJS) وهي مكتبة جافاسكربت مفتوحة المصدر تُستخدَم لبناء واجهات المستخدم طورتها شركة فيسبوك (ميتا حاليًا) وصدرت في عام 2013، وتستخدم الشركة إطار العمل React في العديد من منتجاتها (مثل منصة فيسبوك وانستغرام وواتساب).

صُمّم إطار العمل React بصورة أساسية لمساعدة المطورين على حل المشكلات المتعلقة بتوفير البيانات الكثيرة بطريقة فعالة لقواعد البيانات الكبيرة، ويعتمد إطار عمل React على مفهوم المكوّنات Components، إذ يجب عليك في البداية بناء مكوّنات مُغلَّفة تُدير حالتها الخاصّة، ومن ثمّ تُركِّب هذه المكوّنات مع بعضها لإنشاء واجهات مستخدم.

### **تاريخ موجز عن إطار العمل Vue.js**

إطار عمل Vue.js (والمعروف أيضًا باسم Vue أو VueJS)، ويعد هذا الإطار الأصغر سنًا بين أعضاء مجموعة المقارنة. طور هذا الإطار إيفان يو Evan You (الموظف السابق في شركة غوغل) في عام 2014. بعد عمل إيفان مع إطار العمل Angular قرر إنشاء مكتبة [جافاسكربت](https://academy.hsoub.com/programming/javascript/%D8%A7%D9%84%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%B9-%D8%A5%D9%84%D9%89-%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%AC%D8%A7%D9%81%D8%A7%D8%B3%D9%83%D8%B1%D9%8A%D8%A8%D8%AA-javascript-r550/) مماثلة باستخدام مزايا Angular وجعل إطار العمل الجديد أكثر خفة وسهولة، ولهذا السبب يوجد الكثير من القواسم المشتركة بين الإطارين.

شهد إطار العمل Vue على مدار السنوات الماضية تحولًا كبيرًا في شعبيته، وبالرغم من أنه لا يحظى بدعم من شركة كبيرة مثل سابقيه، إلا أنه استطاع الحصول على حصة جيدة في سوق أُطر عمل جافاسكربت. يعتمد تطوير هذا الإطار كليًا على مشاركات جمهور المطورين.

**ملاحظة**: قبل استخدام مشروع أو إطار عمل مفتوح المصدر تأكد من مراجعة نوعية ترخيصه. جميع الأطر السابقة تستخدم ترخيص MIT، والذي يوفر قيودًا محدودة على إعادة الاستخدام في البرامج الاحتكارية. ولكن عمومًا يجب الانتباه إلى هذه النقطة لتجنب الآثار المترتبة على استخدام الخاطئ لأي إطار عمل أو مشروع.

## **نظرة أعمق لمميزات ومساوئ كل إطار**

سنغوص الآن أكثر ونفهم أهم المزايا والعيوب الرئيسية لهذه الأطر والفروقات بينها وذلك لمساعدة المتخصصين أو المهندسين التقنيين في اختيار الأفضل لاحتياجات التطوير الخاصة بهم.

### **سوق العمل**

كمبرمج مبتدئ يجب أن نهتم في البداية إلى اتجاهات السوق ومتطلباته وكما [يتضح](https://zerotomastery.io/blog/tech-trends-showdown-react-vs-angular-vs-vue/) من اتجاهات أواخر عام 2018، فإن عدد الوظائف التي تتطلب مجموعة مهارات استخدام إطار Angular أو React هو نفسه تقريبًا، في حين أن Vue لا يزال جزءًا بسيطًا من هذه الحصة (حوالي 20٪ من نسبة عدد فرص العمل في بقية الأطر)، وعمومًا هذه الإحصائية قديمة وعامة وإذا رغبت في إحصائية أكثر حداثة فيمكنك تجربة البحث عبر Google Trends، والذي يستعرض اتجاهات البحث على مدار مدة زمنية معينة لوظائف React، ووظائف Angular، ووظائف Vue. تعمل مؤشرات غوغل أيضًا على تقسيمها حسب الموقع الجغرافي في حال رغبت في البحث في سوق العمل في بلدك.

ومن الناحية النموذجية فإن أفضل رهان للمبتدئ من وجهة نظر سوق العمل الحالي هو أن يتعلم Angular أو React، نظرًا لأن شعبية إطار العمل Vue.js ما تزال محدودة فإن استخدامه محدودًا في الشركات الكبيرة، ويمكن أن يستغرق الأمر بعض الوقت حتى تتبنى هذه الشركات إطار Vue.js في مشاريعها وهذا سيتطلب من الإطار الوصول إلى مستوى أعلى من النضج والذي بدوره يتطلب عددًا أكبر من المطورين يعملون لتحسين إطار العمل Vue.js.

### **المجتمع والتطوير**

لننظر في المجتمع لتقييم تطوير هذه الأطر، سبق وأن رأينا في جميع الأطر كيف نشرت الإصدارات الإضافية بانتظام خلال السنوات الماضية، مما يشير إلى أن تطوير هذه الأطر مستمر على قدم وساق.

دعونا نلقي نظرة على مجتمعات Angular vs React vs Vue فيما يتعلق بالإحصاءات الموجودة في مستودعات GitHub الخاصة بهم ونؤكد أن هذه الأرقام حتى تاريخ كتابة المقال (ولاحظ أن أرقام Vue تشمل أيضًا مستودع Vue 3.0 المنفصل):

<table style="border:none;border-collapse:collapse;"><colgroup><col width="89"><col width="129"><col width="111"><col width="114"></colgroup><tbody><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">وجه المقارنة&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">إطار العمل Angular&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">إطار العمل React&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">إطار العمل Vue.js&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">عدد المراقبين&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3.1 ألف شخص&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">6.7 ألف شخص&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">6.2 ألف شخص&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">عدد النجوم&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">79 ألف نجمة&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">181 ألف نجمة&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">192 ألف نجمة&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">عدد التفريعات&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">20.7 ألف تفريعة&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">36.8 ألف تفريعة&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">31.2 ألف تفريعة&nbsp;</span></p></td></tr><tr style="height:25pt"><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">عدد المساهمين&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1517 مساهم&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1535 مساهم&nbsp;</span></p></td><td dir="ltr" style="vertical-align:top;padding:5pt 5pt 5pt 5pt;overflow:hidden;overflow-wrap:break-word;"><p dir="rtl" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">404 مساهم&nbsp;</span></p></td></tr></tbody></table>

عند المقارنة بين الأطر نلاحظ أن إطار العمل Vue لديه عددًا كبيرًا من المراقبين والنجوم والتفريعات، وهذا يعود لشعبيته بين المستخدمين. ومع ذلك، فإن عدد المساهمين في Vue أقل من Angular و React. أحد التفسيرات المحتملة هو أن Vue مطوّرة بالكامل من قبل مجتمع المصادر المفتوحة، في حين أن كل من إطار العمل Angular و React يطورهما عدد من موظفي غوغل وفيسبوك.

من الإحصائيات المهمة أيضًا هي استطلاع الرأي السنوي الذي يجريه موقع Stackoverflow والذي استجاب إليه 67.593 ألف مبرمج جاء فيه تفوقًا واضحًا في استخدام إطار عمل React بالمقارنة مع بقية الأطر.

المقياس الإضافي الذي يجب أن نلقي نظرة عليه وهو عدد مرات الاستخدام للإطار في موقع GitHub، والتي يجب تمكينها بواسطة مؤلف المستودع. يوضح هذا عدد المستودعات الأخرى الموجودة على GitHub والتي تعتمد على هذا المستودع. يُظهر إطار العمل Angular بأن عدد مستخدميه 2.1 مليون مستخدم، بينما يُظهر إطار العمل React حاليًا ما يقرب من 8.7 مليون مستخدم، بينما لا يُظهر إطار العمل Vue عدد مستخدميه.

### **تحديث الشيفرات البرمجية**

نظرًا لأن بعض المشاريع كبيرة وتحتاج لدراسة كيفية تحديث على الشيفرة البرمجية وجعلها مواكبة لإطار العمل وأفضل الممارسات الخاصة به فيجب أن ننظر إلى كيفية تحديث الشيفرة لكل إطار. في الحقيقة غالبًا ما ستواجه العديد من المشكلات عند تحديث الشيفرة من إصدار إلى آخر، لذلك من المهم أن تبقى مطلعًا بصورة دائمة على تحديثات أُطر العمل لأن بعض التحديثات تكون مهمة وتتطلب تعديلات تتراوح بين بسيطة إلى كبيرة وهذا يؤثر على سير العمل كبيرًا، تخيل أنك كل فترة مضطر إلى تعديل الشيفرة التي كتبتها عند نزول كل تحديث، فهذا مرهق ومضيعة للوقت وذلك فقط للحفاظ على توافق مكونات إطار العمل.

في إطار عمل Angular تكون [التحديثات](https://angular.io/guide/releases) الرئيسية مجدولة كل ستة أشهر. هناك أيضًا فترة ستة أشهر أخرى قبل إهمال أي واجهات برمجة تطبيقات رئيسية، مما يمنحك وقتًا كبيرًا نسبيًا (سنة كاملة) لإجراء التغييرات اللازمة -إن وجدت- وتعديل الشيفرة بما يتناسب مع التحديث.

في الحقيقة عندما يتعلق الأمر بالاستقرار فإن React هي المسيطرة إذ [ذكرت](https://reactjs.org/docs/design-principles.html#stability) شركة فيسبوك بأن الاستقرار له أهمية قصوى بالنسبة لهم، لأن العديد من الشركات الكبرى تستخدم هذا الإطار، وعادةً ما تكون الترقيات من خلال الإصدارات هي الأسهل في إطار العمل React، إذ تساعدك السكربتات البرمجية مثل سكربت [react-codemod](https://github.com/reactjs/react-codemod) على تحديث الشيفرة البرمجية بسهولة.

أما بالنسبة لإطار العمل Vue.js فيمكن اعتبارها الأسهل وهذا ما نلاحظه في قسم [تحديث](https://v3.vuejs.org/guide/migration/introduction.html) الشيفرة البرمجية في توثيق Vue 3 إذ [أشار](https://vuejs.org/v2/guide/migration.html) إلى أن هناك الكثير من التشابه بين Vue 2 و Vue 3 بينما 90٪ من واجهة برمجة التطبيقات هي نفسها وإذا أردت تحديث الشيفرة البرمجية من الإصدار 1.x إلى الإصدار 2.x فهناك أداة [مساعدة](https://github.com/vuejs/vue-migration-helper) لتحديث الشيفرة والتي تعمل على وحدة التحكم لتقييم حالة التطبيق الخاص بك.

### **فعالية إطار العمل**

سنستعرض فعالية أُطر العمل من خلال أهم الخصائص التي نحتاجها في كل مشروع، من بينها الحجم الكلي للشيفرة البرمجية وأوقات التحميل، والمكونات المتاحة، ومنحنى صعوبة التعلم.

#### **الحجم وأوقات التحميل**

تعد أحجام الأطر صغيرة نسبيًا ولن تكون ذات تأثير كبير نظرًا لأن عمليات التخزين المؤقت Caching وعمليات التصغير Minification تُعدان من بديهيات التطوير والبرمجة في الوقت الحاضر. بالرغم من ذلك هنالك اختلاف كبير بين أحجام الأطر (على سبيل المثال Angular هي الأكبر حجمًا)، إلا أنها لا تزال صغيرة بالمقارنة بمتوسط حجم صفحة الويب (حوالي 2 ميجابايت وفقًا [لبيانات](https://httparchive.org/reports/page-weight?start=2020_01_01&end=latest&view=list) موقع httparchive). بالإضافة إلى ذلك فإذا كنت تستخدم [شبكات توزيع المحتوى CDN](https://academy.hsoub.com/devops/networking/%D8%B4%D8%A8%D9%83%D8%A7%D8%AA-%D8%AA%D9%88%D8%B2%D9%8A%D8%B9-%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D9%88%D9%89-content-distribution-networks-r569/) لهذه المكتبات فمن المحتمل جدًا أن يكون المستخدم نزّل بالفعل المكتبة في نظامه المحلي أثناء تحميل الموقع. في الحقيقة مع وجود الجيل الرابع والخامس من الاتصالات واتصالات الألياف الضوئية فايبر لن تكون هذه النقطة ذات أهمية ولذلك لن نتوسع بشرحها.

#### **المكونات**

المكونات هي من أهم الأجزاء في جميع الأطر الثلاثة، بغض النظر عما إذا كنا نتحدث Vue أو React أو Angular. يحصل المكون عمومًا على مدخلات، ويغير السلوك بناءً عليه. يظهر هذا التغيير في السلوك عمومًا كتغيير في واجهة المستخدم لجزء من الصفحة. يسهل استخدام المكونات عملية إعادة استخدام التعليمات البرمجية. يمكن أن يكون المكون عبارة عن سلة مشتريات على موقع التجارة الإلكترونية أو مربع تسجيل الدخول على شبكة اجتماعية.

##### **المكونات في إطار العمل Angular**

يتعامل إطار العمل Angular مع الوحدات modules والتي بدورها تضم المكونات، وتُعَدّ المكوِّنات أحجار البناء الأساسية قي تطبيق Angular، فيحتوي المكوِّن على صنف TypeScript مع مزخرِف ‎@Component()‎ وقالب HTML وملف التنسيقات، حيث يعرِّف مزخرِف ‎@Component()‎ المعلومات التالية في Angular:

-    محدِّد CSS الذي يعرِّف الطريقة التي سيُستخدَم بها المكوِّن ضمن قالب ما، حيث تصبح عناصر HTML التي تستخدمها ضمن القالب الخاص بك والتي تطابق هذا المحدِّد نسخةً من هذا المكوِّن.

-    قالب HTML الذي يوجّه Angular إلى كيفية إخراج هذا المكوِّن.

-    مجموعة اختيارية من تنسيقات CSS التي تعرِّف المظهر الخاص بعناصر قالب HTML.


##### **المكونات في إطار العمل React**

يجمع إطار العمل React المكونات بطريقة مثيرة للاهتمام بين واجهة المستخدم وسلوك المكونات في نفس الشيفرة البرمجية لتكون مسؤولةً عن إنشاء عنصر واجهة المستخدم وإملاء سلوكه (يمكنك الاطلاع على مقال مكونات React الأساسية (React Components) لمزيد من المعلومات عن المكونات في إطار العمل React).

##### **المكونات في إطار العمل Vue**

عند النظر إلى Vue نجد أن واجهة المستخدم والسلوك أيضًا جزءًا من المكونات بطريقة مشابهة لمكونات React، مما يجعل التعامل مع المكونات أكثر سهولة. كما ستجعل الأمور قابل للتخصيص بدرجة كبيرة، مما يسمح للمبرمج بدمج واجهة المستخدم وسلوك المكونات من داخل الشيفرة البرمجية. علاوة على ذلك، يمكنك أيضًا استخدام المعالجات المسبقة pre-processor في Vue بدلًا من CSS، وهذا أمر رائع. كما يعد إطار العمل Vue رائعًا عندما يتعلق الأمر بالتكامل مع المكتبات الأخرى، مثل Bootstrap.

### **صعوبة التعلم**

من أهم الأسئلة التي ترد في ذهن المتعلم هو مدى صعوبة تعلم كل من هذه الأطر؟ سنحاول الإجابة على هذا السؤال.

يكون لإطار العمل Angular منحنى تعليمي حاد وصعب التعلم نسبيًا مع الأخذ بعين الاعتبار أنه حل كامل ومتكامل، ولإتقان Angular يتطلب منك تعلم المفاهيم المرتبطة به مثل TypeScript و MVC. في الحقيقة وبالرغم من أن تعلم Angular يستغرق وقتًا، إلا أن الاستثمار فيه يؤتي ثماره ولأن المتعلم سيفهم تمامًا كيفية عمل الواجهة الأمامية لتطبيقات الويب.

يعد إطار عمل React أسهل نسبيًا ومع المرجع الرسمي الخاص به من شأنه أن يساعد الشخص في إعداد React في غضون ساعة تقريبًا. الوثائق شاملة وكاملة، مع حلول للمشكلات الشائعة الموجودة بالفعل على موقع Stack Overflow. لا يُعد React إطار عمل كاملًا مثل Angular، وتتطلب الميزات المتقدمة استخدام مكتبات خارجية. هذا يجعل منحنى التعلم الخاص بإطار العمل الأساسي ليس شديد الانحدار ولكنه يعتمد على المسار الذي تسلكه وتطبيق الويب الذي تريد بناءه. ومع ذلك، فإن التعلم السريع لاستخدام React لا يعني بالضرورة أنك تستخدم أفضل الممارسات.

يعد إطار العمل Vue أسهل في التعلم من إطار Angular أو React. علاوة على ذلك، تتداخل Vue مع Angular و React فيما يتعلق بوظائفها مثل استخدام المكونات. ولذلك فإن الانتقال إلى Vue من أي منهما يعد خيارًا سهلًا. ومع ذلك، فإن بساطة ومرونة إطار عمل Vue هي سيف ذو حدين - فهي تسمح بكتابة شيفرة برمجية سهلة البنية بهدف التبسيط ولكن هذا الأمر الذي يمكن يجعل المطورين يُهملون إعداد بنية قوية للشيفرة البرمجية الأمر الذي يصعب عملية توسعة الشيفرة البرمجية أو تصحيح الأخطاء والاختبار لاحقًا عندما يتوسع المشروع.

وعمومًا بالرغم من أن Angular و React أصعب نسبيًا، إلا أن استخداماتها عند الإتقان لا حدود لها. على سبيل المثال، يمكنك دمج Angular أو React مع ووردبريس WordPress و WooCommerce لإنشاء تطبيقات ويب تقدمية PWA.

## **أشهر الشركات التي تستخدم هذا الأطر**

سنستعرض أهم الشركات التي تستخدم هذه الأطر لنرى كيفية تبني هذه التكنولوجيا ونظرة العمالقة لهذه التحديثات.

### **أشهر الشركات التي تستخدم إطار عمل Angular**

تستخدم شركة غوغل إطار العمل Angular لأنه يوفر لها أداءً عاليًا للوظائف ولإنشاء تطبيقات أكبر. كما يستخدم في تطوير Google Cloud Console. كان Microsoft Office قادرًا على إطلاق تطبيقين مستقلين بمساعدة إطار العمل Angular أما مع حالة شركة Upwork فإنها تستخدمه لتوفير تجربة سريعة الاستجابة لأعضاء الموقع.

### **أشهر الشركات التي تستخدم إطار عمل React**

في الحقيقة الكثير من الشركات الكبيرة تستخدم React وهذا دليل قوي على مدى جودة إطار العمل. كما يستخدم هذا الإطار عادة لما يوفره من طريقة أسرع لإنشاء تطبيقات الهاتف المحمول وصيانتها، مع استخدام موارد قليلة بالمقارنة مع طرق برمجة التطبيقات الأصيلة.

البعض يعدها من أفضل المكتبات لتطبيقات الواجهة الأمامية الموجودة في السوق حاليًا. ومن هذه الشركات التي تستخدم هذا الإطار نذكر تويتر Twitter وأمازون برايم Amazon Prime ويوديمي Udemy وإكسبو Expo وأوبر Uber وبنتريست Pinterest ونيتفليكس Netflix وصحيفة نيويوك تايمز New York Times والكثير من الشركات الأخرى.

### **الشركات التي تستخدم إطار عمل Vue.js**

يعد إطار عمل Vue.js حديثًا نسبيًا ولكن هناك العديد من الشركات التي تستخدمه. ومن بعض الشركات التي تستخدم Vue نذكر شركة غوغل وآبل وتريفاغو Trivago ونينتندو Nintendo.

تمكنت شركة غوغل من استخدام Vue لصفحة الوظائف الخاصة بها، بينما أضافت شركة نينتندو إطار العمل في موقعها على الويب، وأضاف موقع تريفاغو Trivago وهو أحد أشهر المواقع للبحث عن الفنادق في العالم إطار العمل Vue في مجلتهم. واستخدمت شركة آبل Apple إطار Vue لإنشاء دروس SwiftUI الخاصة بهم. بالرغم من حداثة هذا الإطار إلا أن الشركات وجدت فيه السهولة والفعالية المناسبة لإضافته إلى تقنياتها.

الجدير بالذكر أن إطار عمل Vue.js غالبًا ما تستخدمه الشركات الصينية العملاقة مثل علي بابا Alibaba وبيدو Baidu وتنسنت Tencent وحتى شركة شاومي Xiaomi وغيرها الكثير، بدلًا من الأطر React أو Angular التي أنشأتها شركات غربية مثل فيسبوك وغوغل. لا نعرف تمامًا سبب هذا التوجه ولكن يُتوقع بأن يستمر السوق الصيني في النمو بسرعة باستخدام إطار العمل Vue خاصة لأنها مكتبة مستقلة مفتوحة المصدر دون أي ارتباط خارجي.

## **كيف نختار الإطار الأنسب لمشروعنا؟**

وهنا نأتي لأهم الأسئلة التي تخطر على بالنا وهي كيف نعرف أي الأطر مناسب لمشروعنا؟ وما هي أفضل طريقة لتعظيم فوائد كل إطار؟ كيف تعرف متى نستخدمها بناءً على مزايا وعيوب كل منها؟ إليك دليل سريع لمساعدتك على اتخاذ مثل هذه القرارات.

### **متى نستخدم إطار العمل Angular**

بغض النظر عن شعبية وشهرة كل إطار يعد Angular الأكثر نضجًا بين الأطر، وله دعم جيد من المساهمين وهو حزمة متكاملة ومع ذلك، فإن صعوبة تعلم الإطار ومفاهيم التطوير في إطار Angular عمومًا يمكن أن تؤدي إلى إعاقة المطورين الجدد، وعادة ما يستخدم في المشاريع التالية:

-    المشاريع الكبيرة والمعقدة.

-    المشاريع القابلة للتوسع والموثوقة والمستقرة.

-    المشاريع التي يمتلك مطوروها معرفة مسبقة بلغة TypeScript أو أنهم يستخدمونها بالفعل.


### **متى نستخدم إطار العمل React**

يعد إطار العمل React الأكثر شيوعًا واستخدامًا في سوق العمل، ويبدو أن لهذا الإطار مستقبلًا مشرقًا. ويعد خيارًا جيدًا لشخص يريد بدء استخدام أطر عمل جافاسكربت للواجهة الأمامية والشركات الناشئة والمطورين الذين يحبون بعض المرونة. كما أن الإطار يمتلك القدرة على الاندماج مع الأطر الأخرى بسلاسة مضيفًا لنفسه ميزة كبيرة في أعين المبرمجين الذين يرغبون في بعض المرونة في الشيفرات البرمجية الخاصة بهم، وعمومًا يعد إطار العمل React حلًا مناسبًا للمشاريع التالية:

-    المشاريع التي يمكن أن تتضمن مكونات قابلة لإعادة الاستخدام

-    المشاريع البسيطة والمتوسطة التي تريد أن تنطلق فيها بسرعة

-    المشاريع التي تتطلب مستوى عالٍ من قابلية التوسع

-    المشاريع ذات مواعيد التسليم القصيرة


### **متى نستخدم إطار العمل Vue.js**

هو الأحدث في الساحة وبدون أي دعم من شركة كبرى، ومع ذلك نجد بأنه يحقق أداءً جيدًا في السنوات القليلة الماضية ليخرج كمنافس قوي للأطر القديمة، وخاصة مع إصدار Vue 3.0. ربما بسبب اعتماد الكثير من العمالقة الصينيين على هذا الإطار، وعمومًا يمكنك استخدام إطار العمل Vue.js للمشاريع التالية:

-    المشاريع والتطبيقات التي تحتاج لأداء عالي

-    عندما تفتقر إلى مطوري الواجهة الأمامية المهرة

-    فريقك لديه الوقت الكافي للتعرف على التكنولوجيا الجديدة


## **الخاتمة**

تعرفنا في هذا المقال على الفوارق بين أطر عمل جافاسكربت فبدأنا بسرد موجز مختصر لتاريخ كل منها وفهمنا الفارق بينها في العديد من النواحي مثل سوق العمل ومجتمع المطورين وإقبالهم على تبني كل إطار وتعمقنا في فهم فعالية كل إطار من خلال حجم المكتبات وتأثيرها على أوقات تحميل الصفحة والفرق بين المكونات لنستعرض بعدها أشهر الشركات التي تستخدم هذه الأطر ومتى نستخدم كل واحد منها بناءً على المشروع الذي نعمل عليه ومتطلباتك، وعمومًا من الضروري دائمًا إجراء البحث الخاص بك قبل اتخاذ القرار حول أي إطار أنسب لك، خاصةً إذا كنت ستعمل في مشروع تجاري وليس في مشروع شخصي.

بالنسبة للمهندس الحقيقي، لا يوجد فرق جوهري في الإطار الذي يختاره، لأنه يستغرق بعض الوقت فقط للتعود على الإطار الجديد. كل إطار له إيجابياته وسلبياته، مما يعني أنه لا يجب بالضرورة أن يكون هناك خيار صحيح دائمًا، وإنما **لكل مقام مقال**.

## **المصادر**

-    مقال [?React vs Angular vs Vue.js — What Is the Best Choice in 2022](https://www.techmagic.co/blog/reactjs-vs-angular-vs-vuejs-what-to-choose-in-2020/) لكاتبته Romana Kuts.

-    مقال [Angular vs React vs Vue: Which Framework to Choose](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/) لكاتبه Shaumik Daityari.

-    مقال [Tech Trends Showdown?: React vs Angular vs Vue](https://zerotomastery.io/blog/tech-trends-showdown-react-vs-angular-vs-vue/) لكاتبه Andrei Neagoie.

-    تقرير موقع httparchive [Report: Page Weight](https://httparchive.org/reports/page-weight?start=2020_01_01&end=latest&view=list).

-    [تقرير](https://insights.stackoverflow.com/survey/2021) موقع Stackoverflow.


[https://academy.hsoub.com/programming/javascript/%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9-%D8%A8%D9%8A%D9%86-%D8%A3%D8%B7%D8%B1-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%A9-angular-%D9%88-react-%D9%88-vue-r1596/](https://academy.hsoub.com/programming/javascript/%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9-%D8%A8%D9%8A%D9%86-%D8%A3%D8%B7%D8%B1-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%A9-angular-%D9%88-react-%D9%88-vue-r1596/)
