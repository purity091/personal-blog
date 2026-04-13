/* empty css                                    */
import { e as createAstro, f as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML, n as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BCQeV3ft.mjs';
import 'piccolore';
import { $ as $$BlogPostLayout } from '../../chunks/BlogPostLayout_m6N-ACtm.mjs';
import { c as client, p as postBySlugQuery, b as portableTextToHtml, m as markdownToHtml } from '../../chunks/sanity_Dans-sfQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lahlah.ai");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  let fullPost;
  let contentHtml = "";
  try {
    fullPost = await client.fetch(postBySlugQuery, { slug });
    if (fullPost) {
      if (Array.isArray(fullPost.content)) {
        contentHtml = portableTextToHtml(fullPost.content);
      } else if (typeof fullPost.content === "string") {
        contentHtml = await markdownToHtml(fullPost.content);
      }
    } else {
      return Astro2.redirect("/404");
    }
  } catch (err) {
    console.error("Failed to fetch blog post:", err);
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "title": fullPost.title || "\u0628\u062F\u0648\u0646 \u0639\u0646\u0648\u0627\u0646", "description": fullPost.description || "", "date": fullPost.publishDate ? new Date(fullPost.publishDate) : /* @__PURE__ */ new Date(), "image": fullPost.imageUrl, "tags": fullPost.tags || [], "readingTime": fullPost.readingTime || 5 }, { "category": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "category" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="inline-block px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-xs font-bold border border-[var(--accent-purple)]/20"> ${fullPost.category} </span> ` })}`, "default": async ($$result2) => renderTemplate`  <article class="prose prose-lg max-w-none rtl">${unescapeHTML(contentHtml)}</article> ` })}`;
}, "C:/xampp/htdocs/personal brand/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/xampp/htdocs/personal brand/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
