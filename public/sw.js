if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const o=e=>a(e,c),f={module:{uri:c},exports:r,require:o};i[c]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_GN4D35cAK1ioK247qf9W/_buildManifest.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/_GN4D35cAK1ioK247qf9W/_middlewareManifest.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/_GN4D35cAK1ioK247qf9W/_ssgManifest.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/152-97809a7f98e28985.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/572-d41389604a4d1440.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/671-4bd94f171f932370.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/853-0c071d3009afd24d.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/main-a92fe0d39eac2bca.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/404-070d0bbe6be014b9.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/_app-0f728c4fbd22c943.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/blog-849f8f212030ab31.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-f790bd892afd39d3.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/index-189efcb95ec22739.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/library/collections-422817d1dfbc7c23.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/library/downloads-cabc7241c6e09ba5.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/library/searches-b0a6b221839e4ba8.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/login-ad6d9761fde8c344.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/magazines-3ef60dd4ed64dfa9.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/otp-83d06bc999f28895.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/platform-541cbbc9d1a085a9.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/pricing-cc33f0734aa80828.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/profile-0928444b5c0cfa59.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/register-c900403242a34338.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/search-63c59d9cd388db49.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/pages/title/%5Bid%5D-b3c2cdfe662e893e.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/_next/static/css/9e84754d989e57d5.css",revision:"_GN4D35cAK1ioK247qf9W"},{url:"/browserconfig.xml",revision:"4cd4901dfbcb6eb7427d8ba101b2bb11"},{url:"/cardTypes/paymentVisa.png",revision:"c357ad6f814f6e690dcfab56672eb8ef"},{url:"/css/react_input.css",revision:"6cb144160078c2c91a5cfb224dc452ca"},{url:"/favicon.ico",revision:"d371e3e70b1347dc0ee726ad4fd97b93"},{url:"/icons/icon-128x128.png",revision:"046d402494ce94425d3ba68037115645"},{url:"/icons/icon-144x144.png",revision:"bd770f5737d7f53bc8eb45ad81284ee6"},{url:"/icons/icon-152x152.png",revision:"82065d04a1ef56228b45ce1344b664dc"},{url:"/icons/icon-192x192.png",revision:"a20080f1001df5eb2fdcdfa9fe9e52ae"},{url:"/icons/icon-384x384.png",revision:"4c79f26decec00e8270f7d73c1acef60"},{url:"/icons/icon-512x512.png",revision:"809d95421f8d3a19d308d4fdf6b373f1"},{url:"/icons/icon-72x72.png",revision:"72590776865ec75ab7f59ec9b7dfaa71"},{url:"/icons/icon-96x96.png",revision:"2273248f32a1cae7e75e7efd5622a32e"},{url:"/img/1200px-whio_blue_duck_at_staglands_akatarawa_new_zealand.jpg",revision:"9e23973f0983230d8eb00db4298fe758"},{url:"/img/Logo.svg",revision:"df0ea142e2e82ae9b7aacc7deb525995"},{url:"/img/activate_deactivate.png",revision:"3cbbf5f4fa698f281c94f3c4b81c9276"},{url:"/img/bird-seamless-template-vector-illustration-600w-1490730368.jpg",revision:"bb44aae777b5c28070004b45d79bbfc1"},{url:"/img/curated_Walmart-Membership_10441.jpg",revision:"27d7ba8f5925d36f64e0d23240e10c02"},{url:"/img/curated_facebook-india-whatsapp-3.jpg",revision:"3830a95a26f5c27fabecde06198d67d8"},{url:"/img/curated_meditation-home-lockdown.jpg",revision:"63bfc7b09e78aaaee6bf716757e846e9"},{url:"/img/curated_tiktok-hong-kong.jpg",revision:"b08a1a42f72e3727c2855e852a221be6"},{url:"/img/footerBg.svg",revision:"030f5b258467f1dfc72762628b689bd6"},{url:"/img/landingImg.png",revision:"af6ce255a9067c956b7cc5f6440cc396"},{url:"/img/lastCallBackground.png",revision:"374b4b1db8a6428c2942d6089be557a7"},{url:"/img/linkdInLogin.jpg",revision:"1f79d3eba3f3bd3ef85b7b43820b6b0b"},{url:"/img/magazines_Consumer_Reports.jpeg",revision:"51e16a53d1343fb99e63aeb65dc4bb7e"},{url:"/img/magazines_Geographical.jpeg",revision:"9a377bf24744a8391462373c13cd4527"},{url:"/img/magazines_Golf_Monthly.jpeg",revision:"c07b31e1ca58f9be4a8758dd1bd1f84c"},{url:"/img/magazines_Good_Organic_Gardening.jpeg",revision:"4f63bc7ea600f7bc02f7ecf7bc98bde5"},{url:"/img/magazines_Harvard_Health_Letter.jpeg",revision:"f1aba19b2d01270f2d50268b1c636cb7"},{url:"/img/magazines_Horn_Book_Magazine.jpeg",revision:"48e2df68b66d8a033d3659945e7957a9"},{url:"/img/magazines_Horse_Hound.jpeg",revision:"2b364858bf0e28aeb8d408ef996eed2f"},{url:"/img/magazines_Interior_Design.jpeg",revision:"fa9f419fef5cc2d10ce113adeed967c7"},{url:"/img/magazines_Library_Journal.jpeg",revision:"a3dbc6d2b64d27c872b816bc98c4761f"},{url:"/img/magazines_MIT_Technology_Review.jpeg",revision:"a0ebcb9d6b8c93e20a23fec53297fe37"},{url:"/img/magazines_Marketing_News.jpeg",revision:"14a274fe78c1eadee09527483d17c550"},{url:"/img/magazines_Mindful.jpeg",revision:"3c3c5bb0eb2d352ce34e2579405d3f5c"},{url:"/img/magazines_Modern_Cat.jpeg",revision:"d5b68f38320148f48f443631695370f7"},{url:"/img/magazines_Modern_Dog.jpeg",revision:"96fb47dbc8b38aad6b8895600540adb4"},{url:"/img/magazines_National_Geographic.jpeg",revision:"6f987859ed98c905ad654ed98aa56d85"},{url:"/img/magazines_Natural_History.jpeg",revision:"8b85a751b1b3cb37d685449ee6cd84b0"},{url:"/img/magazines_Outside.jpeg",revision:"f85d1607c6493bd2f461d027207aaecb"},{url:"/img/magazines_PC_Gamer.jpeg",revision:"173e83b60a5d7d3e35dba7349674f6ae"},{url:"/img/magazines_Premières_en_affaires.jpeg",revision:"1b2ad2344c760b19d91a52e392f91ca4"},{url:"/img/magazines_Psychologist.jpeg",revision:"2d8f3848ff811ec2a2b146e02120b031"},{url:"/img/magazines_Rolling_Stone.jpeg",revision:"7f18cd610aa1835d9a6152410c688cb5"},{url:"/img/magazines_Room_Magazine.jpeg",revision:"81e3b177da8852b48e1a5eac5ee6bfde"},{url:"/img/magazines_Stone_Soup.jpeg",revision:"b6787918d5ce9f27649a4bded255443a"},{url:"/img/magazines_Surfer.jpeg",revision:"1efa47d69a8f7c553fd315c5f6b2d522"},{url:"/img/magazines_Travel_Leisure.jpeg",revision:"5ecad159e0cdf4e42e61cb87257d8fc1"},{url:"/img/magazines_Travel_Weekly.jpeg",revision:"cc6aa23e85c45f5dea73168cbcbb4b82"},{url:"/img/magazines_WIRED.jpeg",revision:"fcc5ef5c7e3893db9a8221e4b79c0eb0"},{url:"/img/magazines_Wallpaper.jpeg",revision:"42ccd9600b4b45463534c1ffb7330615"},{url:"/img/magazines_WellBeing.jpeg",revision:"0ae42ff03c08fdfe481e651f865a2f01"},{url:"/img/magazines_Women's_Health.jpeg",revision:"800322f879bf4779bf98e97a49f353b7"},{url:"/img/magazines_Writer.jpeg",revision:"957880df82f126ab486ebe379c52c853"},{url:"/img/magazines_Yoga_Journal.jpeg",revision:"2093f135be45687f28fee3041b12eeb1"},{url:"/img/magazines_adweek.jpeg",revision:"3c9d81ef1ba320a566087047b000d64d"},{url:"/img/magazines_fastCompany.jpeg",revision:"9a04ed213ce28a531de78fea3a222126"},{url:"/img/magazines_forbes.jpeg",revision:"4c36fa18700c33408119ef20dd303fa7"},{url:"/img/magazines_informatics.jpeg",revision:"e6f8c8a4bce06d9edb958dbf38de23b8"},{url:"/img/powered_by_stripe.svg",revision:"9ecaa0ba04464aa4211fb5b6a4e79fa9"},{url:"/img/puppy-and-adult-dog.jpg",revision:"2bfe8a89412bd5fcb733557fb26cc3b7"},{url:"/img/subject_Fiction_Fantasy.jpeg",revision:"f49dd96dfa860fabc6d600dc70482581"},{url:"/img/subject_Science_Technology.jpeg",revision:"f927221bf45b2278d29716544af77c02"},{url:"/img/subject_Self_Help_Relationships.jpeg",revision:"25753fdb65c0f81dd0ac24d159588cec"},{url:"/img/subject_Social_Sciences.jpeg",revision:"e653a5df04952e530fb6bc1ea2f2f766"},{url:"/img/subject_Sports.jpeg",revision:"caad700e76d56dac87eb2740b04d3a5d"},{url:"/img/subject_Study_Aids_Test_Prep.jpeg",revision:"f3a136e9344e3786c9b1dac60c638fed"},{url:"/img/subject_Teens.jpeg",revision:"8e626a13e652357c7d03b038f0c2b02c"},{url:"/img/subject_Transportation.jpeg",revision:"7638db57a9ab6e60492276f272a2227f"},{url:"/img/subject_Travel.jpeg",revision:"f81ad19ef378c4867dac9b152bcc53f1"},{url:"/img/thinking-face_1f914.png",revision:"5c006797b6ee296946ab8dffbef4787e"},{url:"/img/trust.png",revision:"05fb63096702fd65c04d2a3e53d83269"},{url:"/infoIcon/fullText.svg",revision:"c8b299839eafb5fa0fe5e24d88ea07a7"},{url:"/infoIcon/uspCitations.svg",revision:"3834ab3188bc20b1af05e924eb0eac9d"},{url:"/infoIcon/uspDownload.svg",revision:"9a8e1d33a48f97daf753a889855723ca"},{url:"/infoIcon/uspMultipleFilters.svg",revision:"1a11d19b7996a4cd85d35ceff0902e71"},{url:"/infoIcon/uspPersonalize.svg",revision:"37818eca554d95f377fc7b6a7d3c4e1f"},{url:"/infoIcon/uspSubjects.svg",revision:"afe2fa13fec4fddce15de161545a1518"},{url:"/infoIcon/uspTextToSpeech.svg",revision:"8bd3af7c1b510eaac295eeb2b24c840d"},{url:"/infoIcon/uspfullText.svg",revision:"c8b299839eafb5fa0fe5e24d88ea07a7"},{url:"/manifest.json",revision:"ebe3214c6b149387ed9334e583537711"},{url:"/publishers/ebsco.png",revision:"cbfccd06d1a6c6cff11596d82d88e6e0"},{url:"/publishers/ieee.png",revision:"0d0f97ead017aff7def29bbd2d8668eb"},{url:"/publishers/openAccess.png",revision:"31b5c9f592d87343af033d50671fa292"},{url:"/publishers/sage.png",revision:"24b37bfad825a201cb11c04ffc1a4f9c"},{url:"/publishers/wiley.png",revision:"4ec9eea6a57b3ea26d02a62c2a31089e"},{url:"/robots.txt",revision:"4169cfe6e5070d2f4455c7afc6793123"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
