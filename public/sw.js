if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,c)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const t=s=>n(s,a),o={module:{uri:a},exports:r,require:t};e[a]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(c(...s),r)))}}define(["./workbox-1846d813"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/Vb3mhVAYPSDrEfHsVO4ng/_buildManifest.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/Vb3mhVAYPSDrEfHsVO4ng/_middlewareManifest.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/Vb3mhVAYPSDrEfHsVO4ng/_ssgManifest.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/123-07b7277251787c83.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/152-97809a7f98e28985.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/193-db345638c5f5587b.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/358.9985d040b4efb8cb.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/362-8e4e369c604f0197.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/382-091925cdf35eae19.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/744.8d9cdf94689d9622.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/745.09b96d59c1aeb6a1.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/760.8978a12bef08c082.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/853-0c071d3009afd24d.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/906a09f8.4c268339191b7e93.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/main-f5312b7be8c3dc79.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/%5Bslug%5D-bac6a54d2f74e5e6.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/404-8fac8ad6494274b4.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/_app-893f482d874caffd.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/blog-928048de04969aba.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-f22bfda45333a9f0.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/index-59d4b8542fddfd61.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/journals-3dd977ebff58a885.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/library/collections-ecc3d8c0df83d6cb.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/library/downloads-fecc27efd5f70ab1.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/library/searches-1a48b6f286e401a4.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/login-4f60bbacc2ce80b0.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/magazines-08fc3b4282532ad6.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/otp-c455f0f206220f4a.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/platform-3201810cc0086a5f.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/pricing-50b2bd20c6f58bda.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/profile-dce7f878b619e5bc.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/publishers-51f96e810e17f129.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/register-76ac737e82d26985.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/search-8c8233855d166b73.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/subjects-dcba4f00d4a1cbc9.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/pages/title/%5Bid%5D-77936f13c539dd51.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/chunks/webpack-b68a0f706fce7eb0.js",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/_next/static/css/93bc5818e294a1a5.css",revision:"Vb3mhVAYPSDrEfHsVO4ng"},{url:"/browserconfig.xml",revision:"4cd4901dfbcb6eb7427d8ba101b2bb11"},{url:"/cardTypes/paymentVisa.png",revision:"c357ad6f814f6e690dcfab56672eb8ef"},{url:"/css/react_input.css",revision:"6cb144160078c2c91a5cfb224dc452ca"},{url:"/favicon.ico",revision:"d371e3e70b1347dc0ee726ad4fd97b93"},{url:"/icons/icon-128x128.png",revision:"046d402494ce94425d3ba68037115645"},{url:"/icons/icon-144x144.png",revision:"bd770f5737d7f53bc8eb45ad81284ee6"},{url:"/icons/icon-152x152.png",revision:"82065d04a1ef56228b45ce1344b664dc"},{url:"/icons/icon-192x192.png",revision:"a20080f1001df5eb2fdcdfa9fe9e52ae"},{url:"/icons/icon-384x384.png",revision:"4c79f26decec00e8270f7d73c1acef60"},{url:"/icons/icon-512x512.png",revision:"809d95421f8d3a19d308d4fdf6b373f1"},{url:"/icons/icon-72x72.png",revision:"72590776865ec75ab7f59ec9b7dfaa71"},{url:"/icons/icon-96x96.png",revision:"2273248f32a1cae7e75e7efd5622a32e"},{url:"/infoIcon/fullText.svg",revision:"1b723815ddb34c5964d8b0fa97d51129"},{url:"/infoIcon/uspCitations.svg",revision:"4dfc35703fdb93ba0ccd11b654d95e10"},{url:"/infoIcon/uspDownload.svg",revision:"3b3a6227338d8b20de5ec4b688c47165"},{url:"/infoIcon/uspMultipleFilters.svg",revision:"d83bba7f1ab7533be4e48af955810e16"},{url:"/infoIcon/uspPersonalize.svg",revision:"1c0e2a6410a087fac10aac4a1bdaa061"},{url:"/infoIcon/uspSubjects.svg",revision:"a1eed94a6a14d0e80a8e71cb1b5804bb"},{url:"/infoIcon/uspTextToSpeech.svg",revision:"8c5342d906fddb6812f5f22e45333a9c"},{url:"/infoIcon/uspfullText.svg",revision:"1b723815ddb34c5964d8b0fa97d51129"},{url:"/manifest.json",revision:"ebe3214c6b149387ed9334e583537711"},{url:"/publishers/ebsco.png",revision:"cbfccd06d1a6c6cff11596d82d88e6e0"},{url:"/publishers/ieee.png",revision:"0d0f97ead017aff7def29bbd2d8668eb"},{url:"/publishers/openAccess.png",revision:"31b5c9f592d87343af033d50671fa292"},{url:"/publishers/sage.png",revision:"24b37bfad825a201cb11c04ffc1a4f9c"},{url:"/publishers/wiley.png",revision:"4ec9eea6a57b3ea26d02a62c2a31089e"},{url:"/robots.txt",revision:"4169cfe6e5070d2f4455c7afc6793123"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:n,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
