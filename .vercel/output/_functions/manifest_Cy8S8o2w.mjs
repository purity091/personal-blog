import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_C4rLuex4.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bp_dZHOM.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/xampp/htdocs/personal%20brand/","cacheDir":"file:///C:/xampp/htdocs/personal%20brand/node_modules/.astro/","outDir":"file:///C:/xampp/htdocs/personal%20brand/dist/","srcDir":"file:///C:/xampp/htdocs/personal%20brand/src/","publicDir":"file:///C:/xampp/htdocs/personal%20brand/public/","buildClientDir":"file:///C:/xampp/htdocs/personal%20brand/dist/client/","buildServerDir":"file:///C:/xampp/htdocs/personal%20brand/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.C6flQuIE.css"},{"type":"external","src":"/_astro/_slug_.D_jEQbNd.css"},{"type":"inline","content":".hero-gradient[data-astro-cid-5tznm7mj]{background:linear-gradient(135deg,var(--text-primary) 0%,var(--text-secondary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.C6flQuIE.css"},{"type":"external","src":"/_astro/_slug_.D_jEQbNd.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://lahlah.ai","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/xampp/htdocs/personal brand/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Cy8S8o2w.mjs","C:/xampp/htdocs/personal brand/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Vw1d19xF.mjs","C:/xampp/htdocs/personal brand/src/components/DeepLearningTensors.tsx":"_astro/DeepLearningTensors.k4sqn2bE.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources2.js":"_astro/resources2.z2LjOoLF.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources6.js":"_astro/resources6.BHmPcXiL.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources5.js":"_astro/resources5.Cw4Rq-0b.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources4.js":"_astro/resources4.kIP8uwys.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources.js":"_astro/resources.BMByBjKm.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources3.js":"_astro/resources3.DSxv_roe.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.js":"_astro/ViteDevServerStopped.DHC_ZCSC.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/bash.js":"_astro/bash.CG6S6Dwl.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/json.js":"_astro/json.unC8z3UW.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/typescript.js":"_astro/typescript.TImZN0qJ.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.D-rEeE3b.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.C6fA_VEp.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/index2.js":"_astro/index2.CVMNvdig.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/index3.js":"_astro/index3.Cx3LRrrr.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/vision/lib/_chunks-es/resources.js":"_astro/resources.CMB-fVrl.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources7.js":"_astro/resources7.C7BYv27k.js","C:/xampp/htdocs/personal brand/src/components/FooterReflect.tsx":"_astro/FooterReflect.BZxRrgOG.js","@astrojs/react/client.js":"_astro/client.DEOIQRNq.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/jsx.js":"_astro/jsx.B6rkBCHQ.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/javascript.js":"_astro/javascript.BJ-GTedN.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/index4.js":"_astro/index4.CUAPgDfC.js","C:/xampp/htdocs/personal brand/src/components/FeaturedArticles.tsx":"_astro/FeaturedArticles.VagDBmWR.js","C:/xampp/htdocs/personal brand/src/components/MyBookSlider.tsx":"_astro/MyBookSlider.ChDFO7LY.js","C:/xampp/htdocs/personal brand/src/components/LLMEcosystem.tsx":"_astro/LLMEcosystem.VAMwiCNP.js","C:/xampp/htdocs/personal brand/src/components/SocialBentoGrid.tsx":"_astro/SocialBentoGrid.CL50CprK.js","C:/xampp/htdocs/personal brand/src/components/AITermsExplorer.tsx":"_astro/AITermsExplorer.DZWUoiVH.js","C:/xampp/htdocs/personal brand/src/components/Navbar.tsx":"_astro/Navbar.CIPIwYaq.js","C:/xampp/htdocs/personal brand/src/components/Hero.tsx":"_astro/Hero.DaPwgeLS.js","C:/xampp/htdocs/personal brand/node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs":"_astro/SimpleMdeReact.DTO-DaSe.js","C:/xampp/htdocs/personal brand/node_modules/react-refractor/dist/index.js":"_astro/index.oIkWFo2b.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.js":"_astro/SanityVision.D_y4yf-m.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/VideoPlayer.js":"_astro/VideoPlayer.EJqMDZzW.js","C:/xampp/htdocs/personal brand/src/components/AdminStudio":"_astro/AdminStudio.gklrLT2_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/admin.C6flQuIE.css","/_astro/_slug_.D_jEQbNd.css","/favicon.svg","/noise.svg","/robots.txt","/site.webmanifest","/sitemap.xml","/blog/dgbqh45zxuioiai7a39n7t072a0vcurn61nlq8klszmmkmt4a3.webp","/image/10-Artificial-Intelligence-Projects-Cover.png","/image/AI-ML-Full-cover.png","/_astro/AdminStudio.gklrLT2_.js","/_astro/AITermsExplorer.DZWUoiVH.js","/_astro/arrow-up-right.DvrWAYif.js","/_astro/bash.CG6S6Dwl.js","/_astro/book-open.DFGJ750z.js","/_astro/browser.BkJdKjll.js","/_astro/chevron-left.glik6FJ6.js","/_astro/client.DEOIQRNq.js","/_astro/client.oETU2wo7.js","/_astro/createLucideIcon.DTbx6VcF.js","/_astro/DeepLearningTensors.k4sqn2bE.js","/_astro/external-link.BWzBKn1G.js","/_astro/FeaturedArticles.VagDBmWR.js","/_astro/FooterReflect.BZxRrgOG.js","/_astro/Hero.DaPwgeLS.js","/_astro/index.CONV0Pwp.js","/_astro/index.DoC2r6bb.js","/_astro/index.oIkWFo2b.js","/_astro/index2.CVMNvdig.js","/_astro/index3.Cx3LRrrr.js","/_astro/index4.CUAPgDfC.js","/_astro/javascript.BJ-GTedN.js","/_astro/json.unC8z3UW.js","/_astro/jsx.B6rkBCHQ.js","/_astro/LLMEcosystem.VAMwiCNP.js","/_astro/MyBookSlider.ChDFO7LY.js","/_astro/Navbar.CIPIwYaq.js","/_astro/pane2.BcUEJsLA.css","/_astro/pane2.HN-sczix.js","/_astro/proxy.D-mGISEu.js","/_astro/refractor.C6fA_VEp.js","/_astro/resources.BMByBjKm.js","/_astro/resources.CMB-fVrl.js","/_astro/resources2.z2LjOoLF.js","/_astro/resources3.DSxv_roe.js","/_astro/resources4.kIP8uwys.js","/_astro/resources5.Cw4Rq-0b.js","/_astro/resources6.BHmPcXiL.js","/_astro/resources7.C7BYv27k.js","/_astro/SanityVision.D_y4yf-m.js","/_astro/SimpleMdeReact.DTO-DaSe.js","/_astro/SocialBentoGrid.CL50CprK.js","/_astro/stegaEncodeSourceMap.D-rEeE3b.js","/_astro/typescript.TImZN0qJ.js","/_astro/users.KmhELEfz.js","/_astro/VideoPlayer.EJqMDZzW.js","/_astro/ViteDevServerStopped.DHC_ZCSC.js","/_astro/zap.BfQaN2Hq.js","/admin/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"1bY0n/2ygFQpqm1K5UTPLCdIWmggEOaflWSys9gh44U="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
