import { e as createAstro, f as createComponent, r as renderTemplate, n as renderSlot, k as renderHead, h as addAttribute } from './astro/server_C4rLuex4.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Moon, Sun, X, Menu, ExternalLink, Mail } from 'lucide-react';
import { createClient } from '@sanity/client';
import { marked } from 'marked';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://lahlah.ai");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "\u0645\u062D\u0645\u062F \u0644\u062D\u0644\u062D | \u062E\u0628\u064A\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A - \u062A\u0639\u0644\u0645 AI \u0648\u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0639\u0635\u0628\u064A\u0629",
    image = "/og-image.jpg"
  } = Astro2.props;
  const siteUrl = "https://lahlah.ai";
  return renderTemplate(_a || (_a = __template(['<html lang="ar" dir="rtl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="author" content="\u0645\u062D\u0645\u062F \u0644\u062D\u0644\u062D"><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="language" content="Arabic"><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name" content="\u0645\u062D\u0645\u062F \u0644\u062D\u0644\u062D | AI Expert"><meta property="og:locale" content="ar_AR"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@MohLahlah"><meta name="twitter:creator" content="@MohLahlah"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#a855f7"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"><!-- Theme Initialization --><script>
      (function() {
        const theme = localStorage.getItem('theme') || 'light';
        const root = document.documentElement;
        if (theme === 'system') {
          const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          root.classList.toggle('dark', dark);
          root.classList.toggle('light', !dark);
        } else {
          root.classList.toggle('dark', theme === 'dark');
          root.classList.toggle('light', theme === 'light');
        }
      })();
    <\/script><!-- Smart Smooth Scroll --><script>
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target) return;
        
        const url = new URL(target.href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        
        const isHomePage = window.location.pathname === '/';
        const targetIsHomeHash = url.pathname === '/' && url.hash;
        
        if (isHomePage && targetIsHomeHash) {
          const element = document.querySelector(url.hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', url.hash);
          }
        }
      });
    <\/script>`, "</head> <body> ", " </body></html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${Astro2.url.pathname}`, "href"), addAttribute(siteUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${image}`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${image}`, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/xampp/htdocs/personal brand/src/layouts/BaseLayout.astro", void 0);

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState("light");
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) setThemeState(stored);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const applyTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };
  const themeOptions = [
    { value: "light", label: "فاتح", icon: /* @__PURE__ */ jsx(Sun, { size: 16 }) },
    { value: "dark", label: "داكن", icon: /* @__PURE__ */ jsx(Moon, { size: 16 }) },
    { value: "system", label: "النظام", icon: /* @__PURE__ */ jsx(Monitor, { size: 16 }) }
  ];
  const getIcon = () => {
    switch (theme) {
      case "light":
        return /* @__PURE__ */ jsx(Sun, { size: 18 });
      case "dark":
        return /* @__PURE__ */ jsx(Moon, { size: 18 });
      case "system":
        return /* @__PURE__ */ jsx(Monitor, { size: 18 });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      motion.button,
      {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        onClick: () => setIsOpen(!isOpen),
        className: "w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--glass-bg-hover)] hover:border-purple-500/30 transition-all",
        "aria-label": "تبديل الثيم",
        children: mounted ? getIcon() : /* @__PURE__ */ jsx("div", { className: "w-[18px] h-[18px]" })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
        transition: { duration: 0.2 },
        className: "absolute top-12 left-0 bg-[var(--dropdown-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-xl p-2 min-w-[160px] shadow-2xl z-50",
        children: themeOptions.map((option) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              applyTheme(option.value);
              setIsOpen(false);
            },
            className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-right ${theme === option.value ? "bg-purple-600/20 text-purple-400 border border-purple-500/30" : "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]"}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0", children: option.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: option.label }),
              theme === option.value && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "activeTheme",
                  className: "mr-auto w-1.5 h-1.5 rounded-full bg-purple-500"
                }
              )
            ]
          },
          option.value
        ))
      }
    ) })
  ] });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const navLinks = [
    { label: "الرئيسية", href: "/#home" },
    { label: "كتابي", href: "/#book" },
    { label: "تواصل", href: "/#social" },
    { label: "العلوم", href: "/#deep-learning" },
    { label: "يوتيوب", href: "/#youtube" }
  ];
  const getHref = (href) => {
    if (mounted && typeof window !== "undefined" && window.location.pathname === "/" && href.startsWith("/#")) {
      return href.substring(1);
    }
    return href;
  };
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-[10000] bg-[var(--navbar-bg)] backdrop-blur-lg border-b border-[var(--border-subtle)] h-16", role: "navigation", "aria-label": "القائمة الرئيسية", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 h-full flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg", "aria-hidden": "true", children: "م" }),
        /* @__PURE__ */ jsx("a", { href: getHref("/#home"), className: "font-bold text-lg text-[var(--text-primary)] hover:opacity-80 transition-opacity", "aria-label": "محمد لحلح - الصفحة الرئيسية", children: "محمد لحلح" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-8 text-xs font-bold text-[var(--text-secondary)]", role: "menubar", children: navLinks.map((link, i) => /* @__PURE__ */ jsx("a", { href: getHref(link.href), className: "hover:text-[var(--text-primary)] transition-colors", role: "menuitem", children: link.label }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("button", { className: "hidden sm:block bg-[var(--text-primary)] text-[var(--bg-primary)] px-5 py-2 rounded-full text-[10px] font-bold hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-sm", children: "النشرة البريدية" }),
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), className: "lg:hidden text-[var(--text-primary)] p-2", children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        className: "absolute top-16 left-0 right-0 bg-[var(--dropdown-bg)] backdrop-blur-2xl border-b border-[var(--border-subtle)] p-8 lg:hidden flex flex-col gap-6 text-right",
        children: navLinks.map((link, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: getHref(link.href),
            onClick: () => setIsOpen(false),
            className: "text-lg font-bold text-[var(--text-secondary)] hover:text-purple-500",
            children: link.label
          },
          i
        ))
      }
    ) })
  ] });
};

const FooterReflect = () => {
  const [currentYear, setCurrentYear] = useState((/* @__PURE__ */ new Date()).getFullYear());
  useEffect(() => {
    setCurrentYear((/* @__PURE__ */ new Date()).getFullYear());
  }, []);
  const socialLinks = [
    { icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }) }), href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "m22 8-6 4 6 4V8Z" }),
      /* @__PURE__ */ jsx("rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2" })
    ] }), href: "#", label: "Youtube", color: "hover:text-red-500" },
    { icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
      /* @__PURE__ */ jsx("rect", { width: "4", height: "12", x: "2", y: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
    ] }), href: "#", label: "Linkedin", color: "hover:text-blue-600" },
    { icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
      /* @__PURE__ */ jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
    ] }), href: "#", label: "Github", color: "hover:text-gray-400" }
  ];
  const quickLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "أحدث الكتب", href: "/#book" },
    { name: "تجارب AI", href: "/#ecosystem" },
    { name: "قناة اليوتيوب", href: "/#youtube" }
  ];
  const legalLinks = [
    { name: "سياسة الخصوصية", href: "#" },
    { name: "شروط الاستخدام", href: "#" }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "pt-20 pb-10 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-500", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--accent-purple)]/5 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 text-right pb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-2xl text-[var(--text-primary)]", children: "محمد لحلح" }),
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg text-xl", children: "م" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium max-w-sm ml-auto mb-8", children: "أبسط أعقد مفاهيم الذكاء الاصطناعي، لأبني جيلاً يفهم التكنولوجيا ولا يكتفي بمجرد استهلاكها." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3 justify-end", children: socialLinks.map((social, i) => /* @__PURE__ */ jsx(
            motion.a,
            {
              href: social.href,
              whileHover: { y: -3 },
              className: `w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] transition-all ${social.color}`,
              "aria-label": social.label,
              children: social.icon
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 lg:pr-12", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[var(--text-primary)] font-black text-sm uppercase tracking-widest mb-6", children: "روابط سريعة" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: quickLinks.map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: link.href, className: "text-[var(--text-secondary)] text-sm font-bold hover:text-[var(--accent-purple)] transition-colors flex items-center justify-end gap-2 group", children: [
            link.name,
            " ",
            /* @__PURE__ */ jsx(ExternalLink, { size: 12, className: "opacity-0 group-hover:opacity-100 transition-opacity" })
          ] }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-[var(--text-primary)] font-black text-sm uppercase tracking-widest mb-6", children: "تواصل مباشر" }),
          /* @__PURE__ */ jsx("p", { className: "text-[var(--text-secondary)] text-sm font-medium mb-6", children: "لديك استشارة أو عرض تعاون؟ الباب مفتوح دائماً." }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:hello@lahlah.ai", className: "flex items-center justify-end gap-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] p-4 rounded-2xl group hover:border-[var(--accent-purple)]/50 transition-all", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-[var(--text-muted)] uppercase", children: "راسلني عبر" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[var(--text-primary)]", children: "hello@lahlah.ai" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[var(--accent-purple)]/10 flex items-center justify-center text-[var(--accent-purple)] group-hover:bg-[var(--accent-purple)] group-hover:text-white transition-all", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row-reverse justify-between items-center gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-[var(--text-muted)] text-[10px] md:text-xs font-mono tracking-wider text-right", children: [
          "© ",
          currentYear,
          " جميع الحقوق محفوظة • تم التطوير بكلات وشغف بالذكاء الاصطناعي"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-6", children: legalLinks.map((link, i) => /* @__PURE__ */ jsx("a", { href: link.href, className: "text-[var(--text-muted)] text-[10px] md:text-xs font-bold hover:text-[var(--text-primary)] transition-colors", children: link.name }, i)) })
      ] })
    ] })
  ] });
};

const PROJECT_ID = "uih0wtzn";
const DATASET = "production";
const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  useCdn: true
});
const postsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**")) && draft == false] | order(publishDate desc) {
    _id,
    title,
    slug,
    description,
    publishDate,
    "imageUrl": image.asset->url,
    category,
    tags,
    readingTime,
    featured
  }
`;
const postBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    publishDate,
    "imageUrl": image.asset->url,
    category,
    tags,
    readingTime,
    featured,
    content
  }
`;
const featuredPostsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**")) && draft == false] | order(publishDate desc)[0...3] {
    _id,
    title,
    slug,
    description,
    publishDate,
    "imageUrl": image.asset->url,
    category,
    tags,
    readingTime,
    featured
  }
`;
async function markdownToHtml(markdown) {
  if (!markdown) return "";
  try {
    const html = typeof marked.parse === "function" ? await marked.parse(markdown) : await marked(markdown);
    return html;
  } catch (err) {
    console.error("Error parsing markdown:", err);
    return markdown;
  }
}

export { $$BaseLayout as $, FooterReflect as F, Navbar as N, postBySlugQuery as a, client as c, featuredPostsQuery as f, markdownToHtml as m, postsQuery as p };
