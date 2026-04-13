/* empty css                                 */
import { f as createComponent, l as renderHead, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Ce2yBXnB.mjs';
import 'piccolore';
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="ar" dir="rtl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><title>لوحة التحكم | محمد لحلح</title>${renderHead()}</head> <body class="m-0 bg-white"> ${renderComponent($$result, "AdminStudio", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/xampp/htdocs/personal brand/src/components/AdminStudio", "client:component-export": "default" })} </body></html>`;
}, "C:/xampp/htdocs/personal brand/src/pages/admin.astro", void 0);

const $$file = "C:/xampp/htdocs/personal brand/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
