/* empty css                                    */
import { e as createAstro, f as createComponent, l as renderComponent, r as renderTemplate, u as unescapeHTML, n as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BCQeV3ft.mjs';
import 'piccolore';
import { $ as $$BlogPostLayout } from '../../chunks/BlogPostLayout_BUCC_N29.mjs';
import { c as client, p as postBySlugQuery, m as markdownToHtml } from '../../chunks/sanity_NO97n-5x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lahlah.ai");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  {
    console.log("Fetching blog post (Server Side):", slug);
  }
  let fullPost;
  let contentHtml = "";
  try {
    fullPost = await client.fetch(postBySlugQuery, { slug });
    if (fullPost) {
      contentHtml = typeof fullPost.content === "string" ? await markdownToHtml(fullPost.content) : "";
    } else {
      return Astro2.redirect("/404");
    }
  } catch (err) {
    console.error("CRITICAL FETCH ERROR:", err);
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "title": fullPost.title || "بدون عنوان", "description": fullPost.description || "", "date": fullPost.publishDate ? new Date(fullPost.publishDate) : /* @__PURE__ */ new Date(), "image": fullPost.imageUrl, "tags": fullPost.tags || [], "readingTime": fullPost.readingTime || 5 }, { "category": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "category" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="inline-block px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-xs font-bold border border-[var(--accent-purple)]/20"> ${fullPost.category || "عام"} </span> ` })}`, "default": async ($$result2) => renderTemplate`  <div class="prose prose-lg max-w-none">${unescapeHTML(contentHtml)}</div> ` })}`;
}, "C:/xampp/htdocs/personal brand/src/pages/blog/[slug].astro", void 0);
const $$file = "C:/xampp/htdocs/personal brand/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
