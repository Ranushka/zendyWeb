if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>i(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/71deyGVGiyzp6LT1XqyHZ/_buildManifest.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/71deyGVGiyzp6LT1XqyHZ/_middlewareManifest.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/71deyGVGiyzp6LT1XqyHZ/_ssgManifest.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/152-97809a7f98e28985.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/173.fb87d2100144b28e.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/193-3eae7fb0ecf6bf2b.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/2.0a57ebe36713428c.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/358.9985d040b4efb8cb.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/362-8e4e369c604f0197.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/382-091925cdf35eae19.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/518.12c23e119b98bc8b.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/6-e4e060a5797c45e8.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/612.3badafa15fa17bfb.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/744.79daad285475fe57.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/745.09b96d59c1aeb6a1.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/760.ab7f9e68159d40b1.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/853-0c071d3009afd24d.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/906a09f8.4c268339191b7e93.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/main-e1fc2db289b728de.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/%5Bslug%5D-8f56d1a46702faa4.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/404-f1fa0979ca0e7f14.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/_app-ee5396929ae494c1.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/blog-def71a9f65d1841a.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-698174cc3dcbf5a7.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/index-9fd0e58d43e87a55.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/journals-98ffa3dd5c2875d6.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/library/collections-2b4cf6d392247adc.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/library/downloads-97f3266a2ddf8041.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/library/searches-0ed718d98bf34d37.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/login-4f60bbacc2ce80b0.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/magazines-6ae8b1c46552993e.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/otp-1d60cc5ec47f2ef6.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/platform-0eb4b2d3e3a7f9c3.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/pricing-e9eaa47863e4d428.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/profile-84f0aeaeea5664a8.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/publishers-9f0a21d4b7c6b38b.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/register-264530c8aa4d38e5.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/search-f85bcf7e34d877ba.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/subjects-5236a7ee706bde41.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/pages/title/%5Bid%5D-f65b22112d574cdb.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/chunks/webpack-d660f6d1ca3851e2.js",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/_next/static/css/8647463082ac30ff.css",revision:"71deyGVGiyzp6LT1XqyHZ"},{url:"/browserconfig.xml",revision:"4cd4901dfbcb6eb7427d8ba101b2bb11"},{url:"/cardTypes/paymentVisa.png",revision:"c357ad6f814f6e690dcfab56672eb8ef"},{url:"/css/react_input.css",revision:"6cb144160078c2c91a5cfb224dc452ca"},{url:"/favicon.ico",revision:"d371e3e70b1347dc0ee726ad4fd97b93"},{url:"/icons/icon-128x128.png",revision:"046d402494ce94425d3ba68037115645"},{url:"/icons/icon-144x144.png",revision:"bd770f5737d7f53bc8eb45ad81284ee6"},{url:"/icons/icon-152x152.png",revision:"82065d04a1ef56228b45ce1344b664dc"},{url:"/icons/icon-192x192.png",revision:"a20080f1001df5eb2fdcdfa9fe9e52ae"},{url:"/icons/icon-384x384.png",revision:"4c79f26decec00e8270f7d73c1acef60"},{url:"/icons/icon-512x512.png",revision:"809d95421f8d3a19d308d4fdf6b373f1"},{url:"/icons/icon-72x72.png",revision:"72590776865ec75ab7f59ec9b7dfaa71"},{url:"/icons/icon-96x96.png",revision:"2273248f32a1cae7e75e7efd5622a32e"},{url:"/infoIcon/fullText.svg",revision:"1b723815ddb34c5964d8b0fa97d51129"},{url:"/infoIcon/uspCitations.svg",revision:"4dfc35703fdb93ba0ccd11b654d95e10"},{url:"/infoIcon/uspDownload.svg",revision:"3b3a6227338d8b20de5ec4b688c47165"},{url:"/infoIcon/uspMultipleFilters.svg",revision:"d83bba7f1ab7533be4e48af955810e16"},{url:"/infoIcon/uspPersonalize.svg",revision:"1c0e2a6410a087fac10aac4a1bdaa061"},{url:"/infoIcon/uspSubjects.svg",revision:"a1eed94a6a14d0e80a8e71cb1b5804bb"},{url:"/infoIcon/uspTextToSpeech.svg",revision:"8c5342d906fddb6812f5f22e45333a9c"},{url:"/infoIcon/uspfullText.svg",revision:"1b723815ddb34c5964d8b0fa97d51129"},{url:"/manifest.json",revision:"ebe3214c6b149387ed9334e583537711"},{url:"/publishers/ebsco.png",revision:"cbfccd06d1a6c6cff11596d82d88e6e0"},{url:"/publishers/ieee.png",revision:"0d0f97ead017aff7def29bbd2d8668eb"},{url:"/publishers/openAccess.png",revision:"31b5c9f592d87343af033d50671fa292"},{url:"/publishers/sage.png",revision:"24b37bfad825a201cb11c04ffc1a4f9c"},{url:"/publishers/wiley.png",revision:"4ec9eea6a57b3ea26d02a62c2a31089e"},{url:"/robots.txt",revision:"4169cfe6e5070d2f4455c7afc6793123"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
