/* empty css                                 */
import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C4rLuex4.mjs';
import 'piccolore';
import { c as client, f as featuredPostsQuery, $ as $$BaseLayout, N as Navbar, F as FooterReflect } from '../chunks/sanity_D7KarUgV.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useSpring, motion, useTransform } from 'framer-motion';
import { ArrowUpRight, Book, BookOpen, ArrowUpLeft, Calendar, Clock, ChevronLeft, Terminal, Network, Cpu, Zap, Sparkles, BarChart, Layers, MessageSquare, Globe, ChevronRight, CheckCircle2, Play, ExternalLink, Users, TrendingUp, Target, Workflow, Shield } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const HeroVisualDecorations = () => {
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none select-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] dark:opacity-20 mix-blend-overlay" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        className: "absolute top-[15%] start-[5%] text-[var(--accent-blue)] font-mono text-[80px] font-black opacity-5 hidden lg:block",
        children: "∑"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
        className: "absolute top-[40%] end-[5%] text-[var(--accent-purple)] font-mono text-[100px] font-black opacity-5 hidden lg:block",
        children: "λ"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 80, repeat: Infinity, ease: "linear" },
        className: "absolute -top-40 -end-40 w-[600px] h-[600px] border border-[var(--accent-purple)]/5 rounded-full"
      }
    ),
    [...Array(10)].map((_, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: {
          opacity: [0, 0.3, 0],
          scale: [1, 1.2, 1]
        },
        transition: {
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 5
        },
        className: "absolute w-px h-24 bg-gradient-to-b from-transparent via-[var(--accent-blue)] to-transparent",
        style: {
          top: `${Math.random() * 100}%`,
          insetInlineStart: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 45}deg)`
        }
      },
      i
    ))
  ] });
};
const NeuralMesh = () => /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-20 pointer-events-none", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent-purple)/0.03,transparent_70%)] dark:hidden" }),
  /* @__PURE__ */ jsxs("svg", { className: "w-full h-full opacity-[0.1] dark:opacity-30", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("pattern", { id: "grid", width: "60", height: "60", patternUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("path", { d: "M 60 0 L 0 0 0 60", fill: "none", stroke: "var(--accent-purple)", strokeWidth: "0.5", opacity: "0.3" }),
      /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "1", fill: "var(--accent-purple)", opacity: "0.5" })
    ] }) }),
    /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" })
] });
const Hero = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 30;
    const moveY = (clientY - window.innerHeight / 2) / 30;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      onMouseMove: handleMouseMove,
      className: "relative pt-32 md:pt-32 pb-16 px-6 overflow-hidden flex flex-col items-center bg-[var(--bg-primary)] transition-colors duration-500",
      "aria-label": "القسم الرئيسي - مقدمة الذكاء الاصطناعي",
      children: [
        /* @__PURE__ */ jsx(NeuralMesh, {}),
        /* @__PURE__ */ jsx(HeroVisualDecorations, {}),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { x: mouseX, y: mouseY, top: "5%", insetInlineStart: "25%", filter: "blur(140px)" },
            className: "bg-glow opacity-[0.5] dark:opacity-30 !bg-[var(--accent-purple)]"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: {
              x: useTransform(mouseX, (v) => -v),
              y: useTransform(mouseY, (v) => -v),
              bottom: "15%",
              insetInlineEnd: "25%",
              filter: "blur(120px)"
            },
            className: "bg-glow !bg-[var(--accent-blue)] opacity-[0.4] dark:opacity-20"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            className: "max-w-6xl relative z-10 text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "mb-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] font-bold text-sm md:text-base shadow-sm", role: "status", children: "👋 أهلاً، أنا محمد لحلح" }),
              /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-6xl lg:text-7xl font-black mb-6 hero-gradient leading-[1.1] tracking-tighter filter drop-shadow-sm", children: [
                "أساعدك على فهم الذكاء الاصطناعي ",
                /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                " لاستكشاف آفاق المستقبل."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed font-medium", children: "أنا مهندس تقني وصانع محتوى. أشارك رحلتي في تفكيك الخوارزميات المعقدة، وأحوّلها إلى شروحات مرئية بسيطة تساعدك على تعلم التكنولوجيا، وتطبيقها في حياتك المهنية لبناء مشاريع حقيقية." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-8 mb-24", children: [
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.05, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.5)" },
                    whileTap: { scale: 0.95 },
                    href: "/#deep-learning",
                    className: "group relative w-full sm:w-auto overflow-hidden bg-[var(--accent-purple)] text-white px-14 py-6 rounded-[2rem] font-black transition-all flex items-center justify-center gap-4 shadow-2xl text-lg",
                    "aria-label": "ابدأ رحلة التعلم - انتقل إلى المحتوى التعليمي",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-[1.5s]" }),
                      "ابدأ رحلة التعلم",
                      /* @__PURE__ */ jsx(ArrowUpRight, { size: 24 })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("a", { href: "/#book", className: "w-full sm:w-auto group flex items-center justify-center gap-5 text-[var(--text-primary)] hover:text-[var(--accent-purple)] transition-all py-5 px-10 border border-[var(--border-medium)] hover:border-[var(--accent-purple)] rounded-[2rem] bg-[var(--card-bg)] shadow-md hover:shadow-xl text-lg", "aria-label": "استكشف كتاب عقل الآلة", children: [
                  /* @__PURE__ */ jsx(Book, { size: 24, className: "group-hover:rotate-12 transition-transform" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "كتاب عقل الآلة" })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
};

const FeaturedArticles = ({ articles = [] }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const displayArticles = articles.length > 0 ? articles : [];
  const isSanityArticle = (article) => {
    return "slug" in article && typeof article.slug === "object" && "current" in article.slug;
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-12 md:py-20 px-6 relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-500", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 start-1/4 w-[300px] h-[300px] bg-[var(--accent-purple)]/5 blur-[120px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-start", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm", children: [
            /* @__PURE__ */ jsx(BookOpen, { size: 12 }),
            " أحدث التدوينات"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl font-black text-[var(--text-primary)] tracking-tight", children: [
            "مقالات وشروحات ",
            /* @__PURE__ */ jsx("span", { className: "text-[var(--text-muted)]", children: "مكتوبة." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/blog", className: "group flex items-center justify-center gap-2 text-sm font-bold text-[var(--text-primary)] bg-[var(--bg-tertiary)] border border-[var(--border-medium)] px-6 py-2.5 rounded-full hover:bg-[var(--accent-purple)] hover:text-white hover:border-[var(--accent-purple)] transition-all shadow-sm w-fit shrink-0", children: [
          "تصفح كل المقالات",
          /* @__PURE__ */ jsx(ArrowUpLeft, { size: 16, className: "group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: displayArticles.map((post, i) => {
        const isSanity = isSanityArticle(post);
        const title = isSanity ? post.title : post.data.title;
        const description = isSanity ? post.description : post.data.description;
        const date = isSanity ? new Date(post.publishDate) : post.data.date;
        const category = isSanity ? post.category : post.data.category;
        const tags = isSanity ? post.tags : post.data.tags;
        const readingTime = isSanity ? post.readingTime : post.data.readingTime;
        const slug = isSanity ? post.slug.current : post.slug;
        const formattedDate = mounted ? date.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" }) : "";
        return /* @__PURE__ */ jsxs(
          motion.a,
          {
            href: `/blog/${slug}`,
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: i * 0.1 },
            viewport: { once: true },
            className: "glass-card flex flex-col group border-[var(--border-subtle)] hover:border-[var(--accent-purple)]/40 overflow-hidden relative rounded-2xl md:min-h-[260px] cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 flex flex-col flex-1 relative z-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-md bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[9px] md:text-[10px] font-black text-[var(--accent-purple)] shadow-sm", children: category }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-[9px] md:text-[10px] font-medium text-[var(--text-muted)]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 opacity-80", children: [
                    /* @__PURE__ */ jsx(Calendar, { size: 12 }),
                    " ",
                    formattedDate
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-black text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--accent-purple)] transition-colors", children: title }),
                /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed mb-6 flex-1 font-medium line-clamp-3", children: description }),
                /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-4 border-t border-[var(--border-subtle)] group-hover:border-[var(--accent-purple)]/20 transition-colors flex flex-col gap-4", children: [
                  tags && tags.length > 0 && tags.slice(0, 3).map((tag, tagIndex) => /* @__PURE__ */ jsxs("span", { className: "text-[9px] font-bold text-[var(--text-muted)] group-hover:text-[var(--accent-purple)] bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] px-2 py-0.5 rounded-md transition-colors", children: [
                    "#",
                    tag
                  ] }, tagIndex)),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-bold flex items-center gap-1.5 text-[var(--text-muted)]", children: [
                      /* @__PURE__ */ jsx(Clock, { size: 12 }),
                      " وقت القراءة: ",
                      readingTime,
                      " دقائق"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent-purple)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-white transition-all shadow-sm", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 14 }) })
                  ] })
                ] })
              ] })
            ]
          },
          isSanity ? post._id : post.slug
        );
      }) })
    ] })
  ] });
};

const AITermsExplorer = () => {
  const [selectedTerm, setSelectedTerm] = useState(0);
  const categories = [
    { id: "foundation", name: "الأساسيات", color: "text-blue-400" },
    { id: "advanced", name: "متقدم", color: "text-purple-400" },
    { id: "future", name: "المستقبل", color: "text-emerald-400" }
  ];
  const terms = [
    { name: "الشبكات العصبية", cat: "foundation", def: "نماذج حاسوبية مستوحاة من هيكلية الدماغ البشري لمعالجة البيانات المعقدة.", icon: /* @__PURE__ */ jsx(Network, { size: 16 }) },
    { name: "المحولات (Transformers)", cat: "advanced", def: "بنية برمجية تعتمد على آلية 'الانتباه' وهي الأساس لمحركات مثل ChatGPT.", icon: /* @__PURE__ */ jsx(Cpu, { size: 16 }) },
    { name: "التعلم التعزيزي", cat: "advanced", def: "تدريب الآلة على اتخاذ القرارات من خلال نظام الثواب والعقاب (Trial and Error).", icon: /* @__PURE__ */ jsx(Zap, { size: 16 }) },
    { name: "الذكاء الاصطناعي التوليدي", cat: "future", def: "قدرة الآلة على خلق محتوى جديد (نصوص، صور، أكواد) غير موجود مسبقاً.", icon: /* @__PURE__ */ jsx(Sparkles, { size: 16 }) },
    { name: "تعلم الآلة (ML)", cat: "foundation", def: "فرع من الذكاء الاصطناعي يهتم بتطوير خوارزميات تسمح للحواسيب بالتعلم من البيانات.", icon: /* @__PURE__ */ jsx(BarChart, { size: 16 }) },
    { name: "التعلم العميق (DL)", cat: "foundation", def: "تطور لتعلم الآلة يستخدم شبكات عصبية متعددة الطبقات لفهم الأنماط العميقة.", icon: /* @__PURE__ */ jsx(Layers, { size: 16 }) },
    { name: "معالجة اللغات (NLP)", cat: "advanced", def: "تمكين الحواسيب من فهم وتفسير وتوليد لغة البشر بطريقة طبيعية.", icon: /* @__PURE__ */ jsx(MessageSquare, { size: 16 }) },
    { name: "الرؤية الحاسوبية", cat: "advanced", def: "قدرة الآلة على استخلاص معلومات مفيدة من الصور الرقمية ومقاطع الفيديو.", icon: /* @__PURE__ */ jsx(Globe, { size: 16 }) }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-2  bg-[var(--bg-primary)] border-y border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--accent-purple)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--glass-bg)] border border-[var(--border-subtle)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4", children: [
            /* @__PURE__ */ jsx(Terminal, { size: 12 }),
            " مختبر المعرفة الرقمية"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight", children: [
            "قاموس المفاهيم ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-[var(--accent-purple)]", children: "الذكية التفاعلي" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-base max-w-md ml-auto", children: "استكشف المصطلحات الجوهرية التي تبني مستقبل الذكاء الاصطناعي بضغطة واحدة." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth", children: categories.map((cat) => /* @__PURE__ */ jsx("button", { className: `px-4 py-2 rounded-xl border border-[var(--border-subtle)] whitespace-nowrap text-[10px] md:text-xs font-bold transition-all hover:bg-[var(--glass-bg-hover)] bg-[var(--card-bg)] shadow-sm ${cat.color}`, children: cat.name }, cat.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 order-2 lg:order-1", children: terms.map((term, i) => /* @__PURE__ */ jsxs(
          motion.button,
          {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            onClick: () => setSelectedTerm(i),
            className: `p-4 md:p-5 rounded-2xl md:rounded-[2rem] border transition-all text-right flex items-center justify-between group shadow-sm ${selectedTerm === i ? "bg-[var(--accent-purple)]/10 border-[var(--accent-purple)]/40 shadow-[var(--shadow-md)]" : "bg-[var(--card-bg)] border-[var(--border-subtle)] hover:border-[var(--accent-purple)]/50"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `p-2 rounded-lg transition-colors ${selectedTerm === i ? "bg-[var(--accent-purple)] text-white" : "bg-[var(--bg-tertiary)] text-[var(--text-muted)]"}`, children: term.icon }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 mr-4", children: /* @__PURE__ */ jsx("span", { className: `block text-xs md:text-sm font-bold transition-colors ${selectedTerm === i ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"}`, children: term.name }) }),
              selectedTerm === i && /* @__PURE__ */ jsx(motion.div, { layoutId: "dot", className: "w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] shadow-[0_0_10px_var(--accent-purple)]" })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 lg:sticky lg:top-24 order-1 lg:order-2", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            className: "glass-card rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden border-[var(--accent-purple)]/20 shadow-[var(--shadow-lg)]",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border-subtle)]", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/20" }),
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/20" }),
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500/20" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center text-[8px] md:text-[10px] font-mono text-[var(--text-muted)] flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(Terminal, { size: 10 }),
                  " مستكشف_المفاهيم.exe"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("div", { className: "inline-block px-2 py-0.5 rounded-md bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-[9px] font-bold mb-4", children: categories.find((c) => c.id === terms[selectedTerm].cat)?.name }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-3xl font-black text-[var(--text-primary)] mb-4 leading-tight", children: terms[selectedTerm].name }),
                /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed mb-6 font-medium", children: terms[selectedTerm].def }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] group cursor-pointer hover:bg-[var(--glass-bg-hover)] transition-all", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs font-bold text-[var(--text-primary)]", children: "اقرأ المقال الكامل" }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { size: 14, className: "text-[var(--accent-purple)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
                ] })
              ] })
            ]
          },
          selectedTerm
        ) })
      ] })
    ] })
  ] });
};

const MyBookSlider = () => {
  const [index, setIndex] = useState(0);
  const [offsetBase, setOffsetBase] = useState(50);
  useEffect(() => {
    const updateOffset = () => {
      setOffsetBase(window.innerWidth < 768 ? 85 : 50);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);
  const books = [
    {
      title: "عقل الآلة: رحلة في أعماق الذكاء الاصطناعي",
      subtitle: "دليلك الشامل من الصفر إلى الاحتراف",
      description: "هذا ليس مجرد كتاب تقني، بل هو خريطة طريق لفهم كيف تفكر الآلات وكيف يمكنك توظيفها لبناء مستقبلك. أشارك فيه خبرتي العملية بأسلوب مبسط وعميق في آن واحد.",
      tags: ["أساسيات", "متقدم", "تطبيقات عملية"],
      features: ["شروحات مرئية مبتكرة", "أمثلة حقيقية من السوق", "تحديثات مستمرة أونلاين"],
      color: "from-purple-600 to-blue-600",
      image: "/image/AI-ML-Full-cover.png"
    },
    {
      title: "سيمياء البيانات: استخراج الذهب من الأرقام",
      subtitle: "فن وعلم تحليل البيانات في العصر الرقمي",
      description: "تعلم كيف تحول البيانات الخام إلى قرارات ذكية. نستعرض في هذا الجزء كيفية قراءة الأنماط الخفية وبناء نماذج تنبؤية دقيقة.",
      tags: ["Data Science", "Analytics", "Big Data"],
      features: ["دراسات حالة واقعية", "أدوات التحليل الحديثة", "منهجية علمية مبسطة"],
      color: "from-emerald-600 to-teal-600",
      image: "/image/10-Artificial-Intelligence-Projects-Cover.png"
    }
  ];
  const next = () => setIndex((prev2) => (prev2 + 1) % books.length);
  const prev = () => setIndex((prev2) => (prev2 - 1 + books.length) % books.length);
  return /* @__PURE__ */ jsxs("section", { id: "book", className: "py-20 md:py-40 px-6 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-right", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[var(--accent-purple)] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4 block", children: "المؤلفات التقنية" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight", children: [
          "اقرأ المستقبل، ",
          /* @__PURE__ */ jsx("br", { className: "md:hidden" }),
          " صفحة بصفحة"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: prev, className: "w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--glass-bg-hover)] transition-all text-[var(--text-primary)] shadow-sm", children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 }) }),
        /* @__PURE__ */ jsx("button", { onClick: next, className: "w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--glass-bg-hover)] transition-all text-[var(--text-primary)] shadow-sm", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-4xl mx-auto overflow-hidden", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { x: `-${index * offsetBase}%` },
        transition: { type: "spring", stiffness: 100, damping: 20 },
        className: "flex gap-4 md:gap-6 w-max",
        children: books.map((book, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "w-[80vw] md:w-[45%] lg:w-[320px] glass-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center gap-6 group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "relative perspective-1000 shrink-0", children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { rotateY: -15, rotateX: 5 },
                  className: `w-32 md:w-48 aspect-[3/4] rounded-r-lg shadow-2xl border-y border-r border-white/10 relative overflow-hidden flex flex-col justify-between`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: book.image,
                        alt: book.title,
                        className: "absolute inset-0 w-full h-full object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-black/40" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-base md:text-lg font-bold mb-2 text-[var(--text-primary)] min-h-[3rem] flex items-center justify-center", children: book.title }),
                /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-[10px] md:text-xs leading-relaxed mb-4 line-clamp-2", children: book.description }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1 mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-[9px] md:text-[10px] text-[var(--text-muted)]", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 10, className: "text-[var(--accent-purple)]" }),
                    " أفضل الممارسات العملية"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-[9px] md:text-[10px] text-[var(--text-muted)]", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 10, className: "text-[var(--accent-purple)]" }),
                    " أمثلة برمجية حية"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("a", { href: "/#social", className: "inline-block w-full bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-full text-[9px] md:text-[10px] font-bold hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-md text-center", children: "اكتشف المزيد" })
              ] })
            ]
          },
          i
        ))
      }
    ) })
  ] });
};

const SocialBentoGrid = () => {
  const stats = [
    { icon: /* @__PURE__ */ jsx(Users, { size: 18 }), value: "150K+", label: "متابع" },
    { icon: /* @__PURE__ */ jsx(TrendingUp, { size: 18 }), value: "500+", label: "فيديو" },
    { icon: /* @__PURE__ */ jsx(Target, { size: 18 }), value: "10K+", label: "طالب" }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "social", className: "py-16 md:py-32 px-6 relative bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-500", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-[120px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-[100px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center max-w-3xl mx-auto mb-16 md:mb-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] font-bold text-[10px] tracking-widest uppercase mb-6 border border-[var(--accent-purple)]/20", children: [
              /* @__PURE__ */ jsx(BookOpen, { size: 12 }),
              " من المحتوى إلى المجتمع"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tight leading-[1.2]", children: [
              "أبني جسراً بينك وبين",
              /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] bg-clip-text text-transparent", children: "مستقبل الذكاء الاصطناعي" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium", children: "لست مجرد صانع محتوى. أنا مرشدك التقني في رحلة فهم أعقد التقنيات، من خلال محتوى مرئي مدروس يبني الفكرة فكرة." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          viewport: { once: true },
          className: "grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20 p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl border-[var(--border-subtle)]",
          children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-2 text-[var(--accent-purple)]", children: stat.icon }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-4xl font-black text-[var(--text-primary)] mb-1", children: stat.value }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] md:text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider", children: stat.label })
          ] }, i))
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            id: "youtube",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            viewport: { once: true },
            whileHover: { y: -5 },
            className: "md:col-span-8 glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[320px] md:min-h-[400px] border-[var(--border-subtle)] shadow-xl",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 w-60 h-60 bg-red-600/10 blur-[80px] pointer-events-none" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-8", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "md:w-10 md:h-10", children: [
                    /* @__PURE__ */ jsx("path", { d: "m22 8-6 4 6 4V8Z" }),
                    /* @__PURE__ */ jsx("rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-wider", children: "المنصة الرئيسية" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-4xl font-black mb-4 text-[var(--text-primary)] tracking-tight leading-tight", children: "قناة اليوتيوب التعليمية" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-lg max-w-xl mb-8 leading-relaxed font-medium", children: "أكثر من 500 فيديو يشرح الخوارزميات كأنك تراها. محتوى مرئي يعتمد على التفكيك البصري، من أبسط المفاهيم إلى أعقد التطبيقات العملية." }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-8", children: ["شبكات عصبية", "تعلم عميق", "محاكاة بصرية", "Python"].map((tag, i) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[10px] font-bold text-[var(--text-muted)]", children: tag }, i)) }),
                  /* @__PURE__ */ jsxs("a", { href: "https://www.youtube.com/@MohLahlah", target: "_blank", rel: "noopener noreferrer", className: "group/btn bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-black text-sm flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-red-600/20 transition-all hover:scale-105 active:scale-95 w-fit", children: [
                    "استكشف القناة",
                    /* @__PURE__ */ jsx(Play, { size: 16, fill: "currentColor", className: "group-hover/btn:scale-110 transition-transform" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            viewport: { once: true },
            whileHover: { y: -5 },
            className: "md:col-span-4 glass-card rounded-2xl md:rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-[400px] shadow-xl",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/20", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "md:w-8 md:h-8", children: /* @__PURE__ */ jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }) }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-black mb-4 text-[var(--text-primary)] tracking-tight", children: "تأملات يومية" }),
                /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium mb-6", children: "خواطر سريعة وتحديثات لحظية حول أحدث نماذج الذكاء الاصطناعي، نصائح تقنية، ورؤى مستقبلية." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: ["أخبار AI يومية", "نصائح تقنية", "مناقشات تفاعلية"].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[var(--text-muted)] text-xs font-bold", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-400" }),
                  item
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "https://twitter.com/MohLahlah", target: "_blank", rel: "noopener noreferrer", className: "group/btn w-full bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] py-3.5 rounded-xl font-bold text-sm hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all flex items-center justify-center gap-2", children: [
                "تابع @MohLahlah",
                /* @__PURE__ */ jsx(ArrowUpLeft, { size: 12, className: "group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.5 },
            viewport: { once: true },
            whileHover: { y: -5 },
            className: "md:col-span-12 glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group relative overflow-hidden gap-8 shadow-xl",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-start flex-1 relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300 shrink-0", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "md:w-10 md:h-10", children: [
                  /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
                  /* @__PURE__ */ jsx("rect", { width: "4", height: "12", x: "2", y: "9" }),
                  /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-500 text-[9px] font-black uppercase tracking-wider mb-4 border border-blue-600/20", children: "للشركات والمؤسسات" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-3xl font-black text-[var(--text-primary)] mb-3 tracking-tight", children: "شبكة العلاقات المهنية" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-base max-w-2xl font-medium leading-relaxed", children: "مساحة احترافية لبناء الشراكات التقنية، استكشاف فرص التعاون في المشاريع، وتقديم استشارات متخصصة للشركات الناشئة في مجال الذكاء الاصطناعي." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/MohLahlah", target: "_blank", rel: "noopener noreferrer", className: "w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-black text-sm hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95 shrink-0 flex items-center justify-center gap-3 relative z-10 hover:scale-105", children: [
                "تواصل للتعاون",
                /* @__PURE__ */ jsx(ExternalLink, { size: 16 })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.6 },
          viewport: { once: true },
          className: "mt-16 text-center",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-[var(--text-muted)] text-sm md:text-base font-medium mb-4", children: "انضم إلى مجتمع يتعلم وينمو معاً" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-[var(--text-secondary)] text-xs", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "نشاط مستمر يومياً عبر جميع المنصات" })
            ] })
          ]
        }
      )
    ] })
  ] });
};

const DeepLearningTensors = () => /* @__PURE__ */ jsx("section", { id: "deep-learning", className: "py-10 md:py-20 px-6 relative bg-[var(--bg-primary)] overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center", children: [
  /* @__PURE__ */ jsx("div", { className: "order-2 md:order-1 relative h-[250px] md:h-[300px] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "relative w-32 h-32 md:w-56 md:h-56 transform rotate-x-12 rotate-y-12 rotate-z-12 group", children: [0, 15, 30, 45].map((offset) => /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: { translateZ: [offset, offset + 10, offset], opacity: [0.3, 0.6, 0.3] },
      transition: { duration: 4, repeat: Infinity, delay: offset / 20 },
      className: "absolute inset-0 border border-[var(--accent-blue)]/30 bg-[var(--accent-blue)]/5 backdrop-blur-sm rounded-lg",
      style: { transform: `translateZ(${offset}px) translateY(${offset / 2}px)` },
      children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-8 grid-rows-8 h-full w-full p-2 gap-0.5 md:gap-1", children: Array.from({ length: 64 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "w-0.5 h-0.5 md:w-1 md:h-1 bg-[var(--accent-blue)]/20 rounded-full" }, i)) })
    },
    offset
  )) }) }),
  /* @__PURE__ */ jsxs("div", { className: "order-1 md:order-2 text-center md:text-right", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[var(--text-primary)]", children: "التعلّم العميق: أبعاد متعددة" }),
    /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-medium", children: 'كيف يتم تحويل "الصورة" أو "الكلمة" إلى أرقام تفهمها الآلة؟ الموقع يشرح لك رحلة البيانات عبر مصفوفات الأرقام الضخمة.' }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-center md:justify-end", children: [
      /* @__PURE__ */ jsx("div", { className: "px-2.5 py-1 bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-lg text-[var(--accent-blue)] text-[9px] font-bold", children: "الموترات (Tensors)" }),
      /* @__PURE__ */ jsx("div", { className: "px-2.5 py-1 bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-lg text-[var(--accent-purple)] text-[9px] font-bold", children: "متعدد الأبعاد" })
    ] })
  ] })
] }) });

const LLMEcosystem = () => {
  const [radius, setRadius] = useState(220);
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 140 : 220);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "ecosystem", className: "py-20 md:py-40 px-6 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-tertiary)] overflow-hidden transition-colors duration-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center mb-16 md:mb-24", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]", children: "تطبيقات الذكاء العملي" }),
      /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-base px-4", children: "من أتمتة التسويق إلى إدارة المخاطر المالية، الـ LLM يغير كل شيء." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative flex items-center justify-center min-h-[400px] md:min-h-[500px]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          animate: { scale: [1, 1.05, 1] },
          transition: { duration: 5, repeat: Infinity },
          className: "w-32 h-32 md:w-48 md:h-48 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/30 flex flex-col items-center justify-center z-10 backdrop-blur-xl shadow-lg",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-20 md:h-20 bg-[var(--accent-blue)] rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white", children: /* @__PURE__ */ jsx(Workflow, { size: 24, className: "md:size-8" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] md:text-xs font-bold text-[var(--text-primary)] uppercase tracking-tighter", children: "تطبيقات LLM" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: [
        { icon: /* @__PURE__ */ jsx(MessageSquare, {}), label: "أتمتة المحتوى" },
        { icon: /* @__PURE__ */ jsx(Shield, {}), label: "الامتثال" },
        { icon: /* @__PURE__ */ jsx(BarChart, {}), label: "المخاطر" },
        { icon: /* @__PURE__ */ jsx(Users, {}), label: "المواهب" },
        { icon: /* @__PURE__ */ jsx(Globe, {}), label: "الإمداد" },
        { icon: /* @__PURE__ */ jsx(Zap, {}), label: "أتمتة العمل" }
      ].map((item, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "absolute glass-card p-2 md:p-3 rounded-xl md:rounded-2xl flex items-center gap-2 w-28 md:w-40 group cursor-default shadow-md",
          style: {
            transform: `rotate(${i * 60}deg) translateY(-${radius}px) rotate(-${i * 60}deg)`
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-[var(--accent-blue)] scale-75 md:scale-100 group-hover:scale-110 transition-transform", children: item.icon }),
            /* @__PURE__ */ jsx("span", { className: "text-[8px] md:text-xs font-bold text-[var(--text-primary)] whitespace-nowrap", children: item.label })
          ]
        },
        i
      )) })
    ] })
  ] });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuredPosts = await client.fetch(featuredPostsQuery);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0645\u062D\u0645\u062F \u0644\u062D\u0644\u062D | \u062E\u0628\u064A\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A - \u062A\u0639\u0644\u0645 AI \u0648\u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0639\u0635\u0628\u064A\u0629" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/Navbar.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/Hero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturedArticles", FeaturedArticles, { "client:load": true, "articles": featuredPosts, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/FeaturedArticles.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "DeepLearningTensors", DeepLearningTensors, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/DeepLearningTensors.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "AITermsExplorer", AITermsExplorer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/AITermsExplorer.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "MyBookSlider", MyBookSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/MyBookSlider.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "SocialBentoGrid", SocialBentoGrid, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/SocialBentoGrid.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "LLMEcosystem", LLMEcosystem, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/LLMEcosystem.tsx", "client:component-export": "default" })} </main> ${renderComponent($$result2, "FooterReflect", FooterReflect, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/FooterReflect.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/xampp/htdocs/personal brand/src/pages/index.astro", void 0);

const $$file = "C:/xampp/htdocs/personal brand/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
