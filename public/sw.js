if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IKHyANDG-M_ZRKE4HsWvp/_buildManifest.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/IKHyANDG-M_ZRKE4HsWvp/_middlewareManifest.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/IKHyANDG-M_ZRKE4HsWvp/_ssgManifest.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/152-97809a7f98e28985.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/358.9985d040b4efb8cb.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/362-8e4e369c604f0197.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/71-6614e558d76cf85d.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/744.234b2bbd58457d4c.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/745.09b96d59c1aeb6a1.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/760.9b1003c930beb5bc.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/823-016d298da57bdeb6.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/853-0c071d3009afd24d.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/906a09f8.4c268339191b7e93.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/98-d295ef362260b978.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/main-f5312b7be8c3dc79.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/404-a37f7f37a348737c.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/_app-fd3c3e5034c8c9a4.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/blog-131b7b63b7620857.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-1226f35a4882bc14.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/index-ff9560772e2b1375.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/library/collections-c468da73061c0608.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/library/downloads-7cb313695d1ea388.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/library/searches-c9e458d4b093dc69.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/login-f4f78bd1aca75657.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/magazines-7489c9a0a119aad8.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/otp-2de3d4c579568f90.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/platform-84879176949983b8.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/pricing-771763ff99e7bbf3.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/profile-f39e589d13498c66.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/publishers-8a0e8d44746b4a07.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/register-c93cf7750078561b.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/search-96036ba765e62bad.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/pages/title/%5Bid%5D-66744eab162c6259.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/chunks/webpack-25ef06cf7d828a14.js",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/_next/static/css/3a608e4e9bef725a.css",revision:"IKHyANDG-M_ZRKE4HsWvp"},{url:"/browserconfig.xml",revision:"4cd4901dfbcb6eb7427d8ba101b2bb11"},{url:"/cardTypes/paymentVisa.png",revision:"c357ad6f814f6e690dcfab56672eb8ef"},{url:"/css/react_input.css",revision:"6cb144160078c2c91a5cfb224dc452ca"},{url:"/favicon.ico",revision:"d371e3e70b1347dc0ee726ad4fd97b93"},{url:"/icons/icon-128x128.png",revision:"046d402494ce94425d3ba68037115645"},{url:"/icons/icon-144x144.png",revision:"bd770f5737d7f53bc8eb45ad81284ee6"},{url:"/icons/icon-152x152.png",revision:"82065d04a1ef56228b45ce1344b664dc"},{url:"/icons/icon-192x192.png",revision:"a20080f1001df5eb2fdcdfa9fe9e52ae"},{url:"/icons/icon-384x384.png",revision:"4c79f26decec00e8270f7d73c1acef60"},{url:"/icons/icon-512x512.png",revision:"809d95421f8d3a19d308d4fdf6b373f1"},{url:"/icons/icon-72x72.png",revision:"72590776865ec75ab7f59ec9b7dfaa71"},{url:"/icons/icon-96x96.png",revision:"2273248f32a1cae7e75e7efd5622a32e"},{url:"/infoIcon/fullText.svg",revision:"1b723815ddb34c5964d8b0fa97d51129"},{url:"/infoIcon/uspCitations.svg",revision:"4dfc35703fdb93ba0ccd11b654d95e10"},{url:"/infoIcon/uspDownload.svg",revision:"3b3a6227338d8b20de5ec4b688c47165"},{url:"/infoIcon/uspMultipleFilters.svg",revision:"d83bba7f1ab7533be4e48af955810e16"},{url:"/infoIcon/uspPersonalize.svg",revision:"1c0e2a6410a087fac10aac4a1bdaa061"},{url:"/infoIcon/uspSubjects.svg",revision:"a1eed94a6a14d0e80a8e71cb1b5804bb"},{url:"/infoIcon/uspTextToSpeech.svg",revision:"8c5342d906fddb6812f5f22e45333a9c"},{url:"/infoIcon/uspfullText.svg",revision:"1b723815ddb34c5964d8b0fa97d51129"},{url:"/manifest.json",revision:"ebe3214c6b149387ed9334e583537711"},{url:"/publishers/ebsco.png",revision:"cbfccd06d1a6c6cff11596d82d88e6e0"},{url:"/publishers/ieee.png",revision:"0d0f97ead017aff7def29bbd2d8668eb"},{url:"/publishers/openAccess.png",revision:"31b5c9f592d87343af033d50671fa292"},{url:"/publishers/sage.png",revision:"24b37bfad825a201cb11c04ffc1a4f9c"},{url:"/publishers/wiley.png",revision:"4ec9eea6a57b3ea26d02a62c2a31089e"},{url:"/robots.txt",revision:"4169cfe6e5070d2f4455c7afc6793123"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
