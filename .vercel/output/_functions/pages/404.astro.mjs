/* empty css                                 */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ce2yBXnB.mjs';
import 'piccolore';
import { $ as $$BaseLayout, N as Navbar, F as FooterReflect } from '../chunks/FooterReflect_DKNvh8SI.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629 | \u0645\u062D\u0645\u062F \u0644\u062D\u0644\u062D" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/Navbar.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-6 transition-colors duration-300"> <div class="text-center max-w-lg"> <div class="text-8xl md:text-9xl font-black text-[var(--accent-purple)] mb-4">404</div> <h1 class="text-2xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">الصفحة غير موجودة</h1> <p class="text-[var(--text-secondary)] text-base md:text-lg mb-8 leading-relaxed">
عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/" class="bg-[var(--accent-purple)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--accent-purple)]/80 transition-all shadow-lg">
العودة للرئيسية
</a> <a href="/blog" class="border border-[var(--border-medium)] text-[var(--text-primary)] px-8 py-3 rounded-full font-bold hover:bg-[var(--glass-bg-hover)] transition-all">
تصفح المقالات
</a> </div> </div> </main> ${renderComponent($$result2, "FooterReflect", FooterReflect, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/FooterReflect.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/xampp/htdocs/personal brand/src/pages/404.astro", void 0);

const $$file = "C:/xampp/htdocs/personal brand/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
