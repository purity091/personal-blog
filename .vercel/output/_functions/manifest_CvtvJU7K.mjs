import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Ce2yBXnB.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CMz7Nvdq.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/xampp/htdocs/personal%20brand/","cacheDir":"file:///C:/xampp/htdocs/personal%20brand/node_modules/.astro/","outDir":"file:///C:/xampp/htdocs/personal%20brand/dist/","srcDir":"file:///C:/xampp/htdocs/personal%20brand/src/","publicDir":"file:///C:/xampp/htdocs/personal%20brand/public/","buildClientDir":"file:///C:/xampp/htdocs/personal%20brand/dist/client/","buildServerDir":"file:///C:/xampp/htdocs/personal%20brand/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.3RZTvjlM.css"},{"type":"external","src":"/_astro/_slug_.qfQx_-WZ.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.3RZTvjlM.css"},{"type":"external","src":"/_astro/pane2.BcUEJsLA.css"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.3RZTvjlM.css"},{"type":"external","src":"/_astro/_slug_.qfQx_-WZ.css"},{"type":"inline","content":".hero-gradient[data-astro-cid-5tznm7mj]{background:linear-gradient(135deg,var(--text-primary) 0%,var(--text-secondary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.3RZTvjlM.css"},{"type":"external","src":"/_astro/_slug_.qfQx_-WZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://lahlah.ai","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["C:/xampp/htdocs/personal brand/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/xampp/htdocs/personal brand/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CvtvJU7K.mjs","C:/xampp/htdocs/personal brand/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CIbNwCBh.mjs","C:/xampp/htdocs/personal brand/src/components/DeepLearningTensors.tsx":"_astro/DeepLearningTensors.DTj8fqPz.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources2.js":"_astro/resources2.z2LjOoLF.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources6.js":"_astro/resources6.BHmPcXiL.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources5.js":"_astro/resources5.CykdNEgD.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources4.js":"_astro/resources4.C4dyiHNt.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources.js":"_astro/resources.BachLk34.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources3.js":"_astro/resources3.pqgE59qJ.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.js":"_astro/ViteDevServerStopped.B8ZIl_yM.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/bash.js":"_astro/bash.CG6S6Dwl.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/json.js":"_astro/json.unC8z3UW.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/typescript.js":"_astro/typescript.TImZN0qJ.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.Dxk386hY.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Dh7LP7Bt.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/index2.js":"_astro/index2.I4Htpb1D.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/index3.js":"_astro/index3.i64kJFs-.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/vision/lib/_chunks-es/resources.js":"_astro/resources.CIVR4VpZ.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/resources7.js":"_astro/resources7.BjlbqbQ7.js","C:/xampp/htdocs/personal brand/src/components/FooterReflect.tsx":"_astro/FooterReflect.Cc_G0TJe.js","@astrojs/react/client.js":"_astro/client.DEOIQRNq.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/jsx.js":"_astro/jsx.B6rkBCHQ.js","C:/xampp/htdocs/personal brand/node_modules/refractor/lang/javascript.js":"_astro/javascript.BJ-GTedN.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/index4.js":"_astro/index4.CO4jPmFS.js","C:/xampp/htdocs/personal brand/src/components/FeaturedArticles.tsx":"_astro/FeaturedArticles.DS11dbGx.js","C:/xampp/htdocs/personal brand/src/components/LLMEcosystem.tsx":"_astro/LLMEcosystem.BrOMs2zN.js","C:/xampp/htdocs/personal brand/src/components/SocialBentoGrid.tsx":"_astro/SocialBentoGrid.CxLgPFJE.js","C:/xampp/htdocs/personal brand/src/components/AITermsExplorer.tsx":"_astro/AITermsExplorer.Bxnet7uH.js","C:/xampp/htdocs/personal brand/src/components/Navbar.tsx":"_astro/Navbar.Cy02l1S2.js","C:/xampp/htdocs/personal brand/src/components/Hero.tsx":"_astro/Hero.D_Rf1rCt.js","C:/xampp/htdocs/personal brand/src/components/MyBookSlider.tsx":"_astro/MyBookSlider.CgYYwBx4.js","C:/xampp/htdocs/personal brand/node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs":"_astro/SimpleMdeReact.DTkHNdcj.js","C:/xampp/htdocs/personal brand/node_modules/react-refractor/dist/index.js":"_astro/index.BBHnpyit.js","C:/xampp/htdocs/personal brand/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.js":"_astro/SanityVision.CoxJmIbV.js","C:/xampp/htdocs/personal brand/node_modules/sanity/lib/_chunks-es/VideoPlayer.js":"_astro/VideoPlayer.fTfYHaho.js","C:/xampp/htdocs/personal brand/src/components/AdminStudio":"_astro/AdminStudio.BMIt_Gxk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/admin.3RZTvjlM.css","/_astro/_slug_.qfQx_-WZ.css","/favicon.svg","/noise.svg","/robots.txt","/site.webmanifest","/sitemap.xml","/blog/dgbqh45zxuioiai7a39n7t072a0vcurn61nlq8klszmmkmt4a3.webp","/image/10-Artificial-Intelligence-Projects-Cover.png","/image/AI-ML-Full-cover.png","/_astro/AdminStudio.BMIt_Gxk.js","/_astro/AITermsExplorer.Bxnet7uH.js","/_astro/arrow-up-right.DvrWAYif.js","/_astro/bash.CG6S6Dwl.js","/_astro/book-open.DFGJ750z.js","/_astro/browser.BkJdKjll.js","/_astro/chevron-left.glik6FJ6.js","/_astro/client.DEOIQRNq.js","/_astro/client.oETU2wo7.js","/_astro/createLucideIcon.DTbx6VcF.js","/_astro/DeepLearningTensors.DTj8fqPz.js","/_astro/external-link.BWzBKn1G.js","/_astro/FeaturedArticles.DS11dbGx.js","/_astro/FooterReflect.Cc_G0TJe.js","/_astro/Hero.D_Rf1rCt.js","/_astro/index.BBHnpyit.js","/_astro/index.CONV0Pwp.js","/_astro/index.EU4bwqoK.js","/_astro/index2.I4Htpb1D.js","/_astro/index3.i64kJFs-.js","/_astro/index4.CO4jPmFS.js","/_astro/javascript.BJ-GTedN.js","/_astro/json.unC8z3UW.js","/_astro/jsx.B6rkBCHQ.js","/_astro/LLMEcosystem.BrOMs2zN.js","/_astro/MyBookSlider.CgYYwBx4.js","/_astro/Navbar.Cy02l1S2.js","/_astro/pane2.BCsoKavO.js","/_astro/pane2.BcUEJsLA.css","/_astro/proxy.U73I11LS.js","/_astro/refractor.Dxk386hY.js","/_astro/resources.BachLk34.js","/_astro/resources.CIVR4VpZ.js","/_astro/resources2.z2LjOoLF.js","/_astro/resources3.pqgE59qJ.js","/_astro/resources4.C4dyiHNt.js","/_astro/resources5.CykdNEgD.js","/_astro/resources6.BHmPcXiL.js","/_astro/resources7.BjlbqbQ7.js","/_astro/SanityVision.CoxJmIbV.js","/_astro/SimpleMdeReact.DTkHNdcj.js","/_astro/SocialBentoGrid.CxLgPFJE.js","/_astro/stegaEncodeSourceMap.Dh7LP7Bt.js","/_astro/typescript.TImZN0qJ.js","/_astro/use-motion-value.CBxY4fCL.js","/_astro/use-reduced-motion.D3PhVM3_.js","/_astro/users.KmhELEfz.js","/_astro/VideoPlayer.fTfYHaho.js","/_astro/ViteDevServerStopped.B8ZIl_yM.js","/_astro/zap.BfQaN2Hq.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"mLiDDAB8jeD54BBsuIJPJBhuEgsW3z1xyV/ylZoqt6I="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
