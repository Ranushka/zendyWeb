if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0cff467739d9761208ce589c917c16a8a9612451.a797cdb8107d0de3856d.js",revision:"e7ffbe18d864eb00f053f2d3e08a4790"},{url:"/_next/static/chunks/28.833afa3a0d1af104f0ee.js",revision:"10a9b40c930f92d91a12332ca28188b6"},{url:"/_next/static/chunks/29.ad79f15ca914b63d86a5.js",revision:"f84a4cbe4dea16ee3a10dedfe420bbde"},{url:"/_next/static/chunks/30.f3d3b4900e364de1ab0a.js",revision:"9a902dc7ed67896a9436abc4edbb09d4"},{url:"/_next/static/chunks/31.327cea7b96fd9c1d3948.js",revision:"00b6a42fa05e03ec095509fb9596b070"},{url:"/_next/static/chunks/32.78d977e9c8a1adf0424a.js",revision:"0222626c394a2703616f04620ce06722"},{url:"/_next/static/chunks/33.d89a71c642058911dfa5.js",revision:"6acc349d73acc8b7e84727ac8f936f86"},{url:"/_next/static/chunks/34.5b7fc0bd9194503c393d.js",revision:"87603a80b837285a5162018731112462"},{url:"/_next/static/chunks/35.b4d02673864957bbe652.js",revision:"0841cfa0a3bcc045d15ed2cb544ca088"},{url:"/_next/static/chunks/36.a61d6b64235c3bd1a8f4.js",revision:"1c0fda24c3acef5e36365fcc84232ca6"},{url:"/_next/static/chunks/37.9af745422487169fd2fa.js",revision:"2891918d91c7c29cc2014d4b7b429475"},{url:"/_next/static/chunks/38.197db83c4fc8ac1703ec.js",revision:"22b35699bed99d521eae907496af12b1"},{url:"/_next/static/chunks/39.60ea528bf0646509aed7.js",revision:"3bfe337773c5572f01ef8d8a188f93c3"},{url:"/_next/static/chunks/40.578710e2d8a8cfd4d5eb.js",revision:"2213b426d01323f082033ee001e1b3ce"},{url:"/_next/static/chunks/41.d3164efcd21e3329e694.js",revision:"bc2aba37c4c360750c645a7fa7b10e56"},{url:"/_next/static/chunks/42.4effb49bfa7f5ac3a503.js",revision:"3c1a0f8a176311c8a874939c9ed278a6"},{url:"/_next/static/chunks/43.20680dea724218297f3d.js",revision:"39bd41ed778111a1e7268f2281d91a46"},{url:"/_next/static/chunks/44.952e8273742ddd87f0d8.js",revision:"fd3684acf3db77ffd3feecc367fb46e0"},{url:"/_next/static/chunks/45.6b9c9b5762e75c841eba.js",revision:"038a4e98108e69eb071fed956d79b47d"},{url:"/_next/static/chunks/46.c1711936295b820804f4.js",revision:"01cfdf653b477e5f1ffc57c59cf6f370"},{url:"/_next/static/chunks/47.de2057ec9d2980f0dc4e.js",revision:"ac875fbc0c9836803f4be792f6594b0d"},{url:"/_next/static/chunks/48.d7d758560b67d64548fc.js",revision:"5b04cd8fd7fdfc748465c92bc73b45a0"},{url:"/_next/static/chunks/49.a8ad7aad25a03b1fd0a6.js",revision:"8a43f5d593dd3b6e39e7bbf5ea156c3f"},{url:"/_next/static/chunks/50.07939498bc90430a82ef.js",revision:"67341eebcc66cfd2bff58bdd9ecf950e"},{url:"/_next/static/chunks/51.2bc26d373415982c3687.js",revision:"48090d3afca1c57e9e01b608ee8436a2"},{url:"/_next/static/chunks/52.2869e44b076d256a3ff5.js",revision:"d15549796b7a51ae2388a0e6072d7002"},{url:"/_next/static/chunks/53.1f40504c8ffe7af14596.js",revision:"96bc8782a72bc0bc11e9c8e46147b193"},{url:"/_next/static/chunks/54.506f31ce5bc28f339c25.js",revision:"ea052ab551986108d7eb6333600fdf05"},{url:"/_next/static/chunks/55.b7367e4571b93b930072.js",revision:"9d55e6dc89ea149ed8b52c833ac3d486"},{url:"/_next/static/chunks/56.e2992b58a626546431fd.js",revision:"48dc500751d87c17c8378e8f140f3d4d"},{url:"/_next/static/chunks/57.a14a37542617f8dab4c2.js",revision:"dae21dc98ba6deec20b8ba208ad92bee"},{url:"/_next/static/chunks/58.57763494ccf4649bb91a.js",revision:"48626d677bc144f4c4ab26890da4416d"},{url:"/_next/static/chunks/59.5309495c1c027a67dd51.js",revision:"62e63f7ce37209f52e1a6913e04ad1a6"},{url:"/_next/static/chunks/60.d4eace52ced58cd0e54e.js",revision:"ece25f00f266a35bc6b520b964e06663"},{url:"/_next/static/chunks/61.91382ceacd27405f93f6.js",revision:"70603f779e0738f110a1f5055b5fc0c0"},{url:"/_next/static/chunks/62.3bca1740c0d1c8242db0.js",revision:"69e517e19c58215643cec1ebbb19e964"},{url:"/_next/static/chunks/63.8093253aabac0159c82a.js",revision:"081640df841a7b066604ad560e0436b8"},{url:"/_next/static/chunks/9a264d0f35f880ee25f1a63019b2ee2075b2b908.bf76ffd62d246111d049.js",revision:"8f4b03bd99b47a07f6a2def21d2a1e2e"},{url:"/_next/static/chunks/9d7e06ea6f24e46276783b984034841b7f7a0c98.de2566b8f578a5378261.js",revision:"1efe4d0a14fba02c4585a8b1f821e7df"},{url:"/_next/static/chunks/c8f7fe3b0e41be846d5687592cf2018ff6e22687.5f5b41ceaa99c06f763c.js",revision:"7b9384de25c85c1f357ece7daf055898"},{url:"/_next/static/chunks/commons.019f88cce6cfb404926d.js",revision:"f8d9f2903f876d94c9eaca5dc54a159a"},{url:"/_next/static/chunks/framework.9a4a13ca1f6e5385d340.js",revision:"f8b1a62a1c400a2e2aea79113ddb38b1"},{url:"/_next/static/chunks/main-9f2f257163ea57bc9195.js",revision:"5db26be729f7f336bbe10ee4c109af0f"},{url:"/_next/static/chunks/pages/404-615eb7e033d912f48702.js",revision:"a9d7dcc81cc6142d62ce705199f07602"},{url:"/_next/static/chunks/pages/_app-a60b0b884b2c4506547a.js",revision:"98d6e3695edb04017ed6c6a0d85f8d18"},{url:"/_next/static/chunks/pages/_error-d8818c8a69d31e2a4053.js",revision:"2298fee724a32a809ccb879ad456b3bf"},{url:"/_next/static/chunks/pages/authenticate-c0c097b4a952e87a8d7c.js",revision:"426a75f855b5a1ee0624f32d5039e788"},{url:"/_next/static/chunks/pages/authenticate/login-dacebd001c16972d0657.js",revision:"55ffa28d967363a3dbbcacaa9f0818f0"},{url:"/_next/static/chunks/pages/authenticate/otp-210a19427fe73536d3e8.js",revision:"314e165b21852f5502aa647a3998963e"},{url:"/_next/static/chunks/pages/authenticate/register-23bb7388d7a889863dac.js",revision:"fcdb644edec72ae57da97125f165fc29"},{url:"/_next/static/chunks/pages/index-bf758602a0a3b06a3ea3.js",revision:"4d5c26203864866c07379e07e448d569"},{url:"/_next/static/chunks/pages/library/collections-13e76eead1fc1feea113.js",revision:"1158ce99f0f0f2e41a6b0bff9708da74"},{url:"/_next/static/chunks/pages/library/downloads-9a86d6d0c93abf710289.js",revision:"760dacd57eb4aa95f94a7c2fb725bcbe"},{url:"/_next/static/chunks/pages/library/searches-3d0b65e3ee7cb7a83d4d.js",revision:"008740609e87f436259054bab78f9404"},{url:"/_next/static/chunks/pages/magazines-7ab62a55bebe7bab8198.js",revision:"3b819fadb4d57df9df1c9a27ebf960fe"},{url:"/_next/static/chunks/pages/platform-c995bcce566f79533016.js",revision:"30cc3981b72620b78f9082151c8d902e"},{url:"/_next/static/chunks/pages/pricing-a6ff61898eb037e089e4.js",revision:"5646050549f54ad19a84b188cfe337ea"},{url:"/_next/static/chunks/pages/pricing/QNA-0ba7d40f31fb0794dad5.js",revision:"fb43343b2f156a97a9fab14efccca478"},{url:"/_next/static/chunks/pages/profile-ec772cb4b83a430f2eea.js",revision:"e8c67bbdb2ce4cd2af84fd6ce08f62c1"},{url:"/_next/static/chunks/pages/search-1512391bd9f9bbf2a346.js",revision:"52a6f0e378c6de7625ebfc40a2020b5f"},{url:"/_next/static/chunks/pages/styleGuide-5f3693606dfbb3e0b4ca.js",revision:"5ee577dcd3c7cc84070a8cd38430725a"},{url:"/_next/static/chunks/pages/title/%5Bid%5D-38d20e2f0c0d46d736a2.js",revision:"27b611894696628bfd5c7634ce1c4cc4"},{url:"/_next/static/chunks/polyfills-60bfc55ed7b3ba4c481f.js",revision:"44557f5be0eb32ef292332f0a421bea9"},{url:"/_next/static/chunks/webpack-f6ee0798d076dcf3fd27.js",revision:"3d5fd4067e7d41ac5cccc0525e1ded3c"},{url:"/_next/static/css/169e7855a23e3464f5ed.css",revision:"38a904c33cb27c1b3cc0fc505977f9ce"},{url:"/_next/static/css/16d5b6b3a93fc6f6a96d.css",revision:"076c56513eafecf259eab6b0a6082b9b"},{url:"/_next/static/css/1e0f1b344feefbff8efd.css",revision:"4b9afc43a112b71597ef1fdddc8100fa"},{url:"/_next/static/css/35ed6394055a3c8e2681.css",revision:"5e080535ef880ebd3abd1c86ae58d740"},{url:"/_next/static/css/39d4fc2136114aa38708.css",revision:"0d2ca6ce2d44f7d7e3db511fa89d5ca0"},{url:"/_next/static/css/56e3c92928d003f36083.css",revision:"80dea8f047953b9dac7308d741f09ea3"},{url:"/_next/static/css/7d6588571f825acb3dee.css",revision:"795ee581417a06fecfa418fed7a0ec13"},{url:"/_next/static/css/9988a65b8fe541aca912.css",revision:"d0d14c376ec06804808e42aafe075241"},{url:"/_next/static/css/9ac9b6b9e64caf5d2219.css",revision:"21097f7a8b26bd8c55575897d6123f0c"},{url:"/_next/static/css/9e249ce37a826f430ca8.css",revision:"9b3fece4a9adfa4849e19115ba18157e"},{url:"/_next/static/css/9f950dfa024b56dc7965.css",revision:"f8b0357bbaf646d6912a2ed1e8e1a1a1"},{url:"/_next/static/css/a4ee4e02af0f6e99d46a.css",revision:"ea979cd6f31dcaf6161ec4878c290bf3"},{url:"/_next/static/css/ab95cf5bbaf2194af2a2.css",revision:"8e970df3ac53a0bf98d6b27f0dedf057"},{url:"/_next/static/css/b8a5bf74723469cdb39b.css",revision:"b944358388efa50cbf9922f8bdaec0c8"},{url:"/_next/static/css/c9d3ec6c59bc6d8492a0.css",revision:"6c3f670ffb5eb0eb895069eb75fa8a90"},{url:"/_next/static/css/cc523f262315a33888ca.css",revision:"7fc8c6c2c32312e4d014393cc770a906"},{url:"/_next/static/css/d04094e64d90e11e9160.css",revision:"ef8fedcdf263c3b7709d2d818dfc246a"},{url:"/_next/static/css/dca94765888079560e67.css",revision:"cb3b6c94d99dbff80d3c80000021413d"},{url:"/_next/static/css/f03a7b9de1b34904e7ea.css",revision:"1e7ebf1ee2392571178ffa8bb76c80f3"},{url:"/_next/static/css/f55c0d4ef6c7b1c9326c.css",revision:"d3f5cd2873e2ca378f4a0abb0a72312d"},{url:"/_next/static/css/f58d7473f8c086092c30.css",revision:"4da7c2acdfc96e83142381f5a0a60356"},{url:"/_next/static/css/f66343ed66d5d5da2c30.css",revision:"5a269a7087f6d0dbcebd9b5265fc6255"},{url:"/_next/static/css/f78360e7aefc2c7b699c.css",revision:"a8a817c2f5feec2584713343b0807e3a"},{url:"/_next/static/css/fc06dec183762ac25a3a.css",revision:"f0255f20c5d67964d6249ff1d84f8c36"},{url:"/_next/static/css/ff48ba82580fb3c31764.css",revision:"868c4487f7c63f3f9075fb44cf8abd6d"},{url:"/_next/static/knF8H6M7Wc7i1ZTlCLFyF/_buildManifest.js",revision:"c10b22c4a7f2f6325a31097542958ee1"},{url:"/_next/static/knF8H6M7Wc7i1ZTlCLFyF/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/admin/config.yml",revision:"77842a40726228ac10bfa8643b11484d"},{url:"/admin/index.html",revision:"9be304421eb7f77a7a538065fe0388dc"},{url:"/browserconfig.xml",revision:"4cd4901dfbcb6eb7427d8ba101b2bb11"},{url:"/cardTypes/paymentVisa.png",revision:"c357ad6f814f6e690dcfab56672eb8ef"},{url:"/css/react_input.css",revision:"6cb144160078c2c91a5cfb224dc452ca"},{url:"/favicon.ico",revision:"d371e3e70b1347dc0ee726ad4fd97b93"},{url:"/icons/android-icon-192x192.png",revision:"b2d70b69f015c5725a2267ed6c7217af"},{url:"/icons/apple-icon-114x114.png",revision:"68d43507017d560f63187834c4f922ec"},{url:"/icons/apple-icon-120x120.png",revision:"1864cb644dc105977fd011333e744e49"},{url:"/icons/apple-icon-144x144.png",revision:"149b92ae8a0fbdf9064264a9347ffa05"},{url:"/icons/apple-icon-152x152.png",revision:"16e3c4388d582a79380c7ddc0b1eee50"},{url:"/icons/apple-icon-180x180.png",revision:"b32bfea898a5d1029b22d73ee90f5137"},{url:"/icons/apple-icon-57x57.png",revision:"3a46f6db8c6b26a23bfb46c19e832972"},{url:"/icons/apple-icon-60x60.png",revision:"c531de6f8c341acc27830af34239b08d"},{url:"/icons/apple-icon-72x72.png",revision:"e276a47de5963fc9ed3e711a3b4725e0"},{url:"/icons/apple-icon-76x76.png",revision:"5980f471594c88a2796561b42ae4761c"},{url:"/icons/favicon-16x16.png",revision:"cea990c108f3f8371a81c634a9c3afed"},{url:"/icons/favicon-32x32.png",revision:"8095ed9fd68b9e830fff62ae1d051835"},{url:"/icons/favicon-96x96.png",revision:"f48dc2168aca95e6338f788057da70fa"},{url:"/img/1200px-whio_blue_duck_at_staglands_akatarawa_new_zealand.jpg",revision:"9e23973f0983230d8eb00db4298fe758"},{url:"/img/Logo.svg",revision:"df0ea142e2e82ae9b7aacc7deb525995"},{url:"/img/activate_deactivate.png",revision:"3cbbf5f4fa698f281c94f3c4b81c9276"},{url:"/img/bird-seamless-template-vector-illustration-600w-1490730368.jpg",revision:"bb44aae777b5c28070004b45d79bbfc1"},{url:"/img/curated_Walmart-Membership_10441.jpg",revision:"50a925f792a1d231fc70cf7a7da48a47"},{url:"/img/curated_facebook-india-whatsapp-3.jpg",revision:"86ed1f1fd68ddd91be350107585ed236"},{url:"/img/curated_meditation-home-lockdown.jpg",revision:"6eb03ba8fdb31a39d1bd4ba6e11eb89b"},{url:"/img/curated_tiktok-hong-kong.jpg",revision:"0def0ac2b3d488861adc360778fafea7"},{url:"/img/footerBg.svg",revision:"030f5b258467f1dfc72762628b689bd6"},{url:"/img/landingImg.png",revision:"af6ce255a9067c956b7cc5f6440cc396"},{url:"/img/lastCallBackground.png",revision:"895fe6f8300993bf1692c422f0c2ca26"},{url:"/img/linkdInLogin.jpg",revision:"1f79d3eba3f3bd3ef85b7b43820b6b0b"},{url:"/img/magazines_Consumer_Reports.jpeg",revision:"51e16a53d1343fb99e63aeb65dc4bb7e"},{url:"/img/magazines_Geographical.jpeg",revision:"9a377bf24744a8391462373c13cd4527"},{url:"/img/magazines_Golf_Monthly.jpeg",revision:"c07b31e1ca58f9be4a8758dd1bd1f84c"},{url:"/img/magazines_Good_Organic_Gardening.jpeg",revision:"4f63bc7ea600f7bc02f7ecf7bc98bde5"},{url:"/img/magazines_Harvard_Health_Letter.jpeg",revision:"f1aba19b2d01270f2d50268b1c636cb7"},{url:"/img/magazines_Horn_Book_Magazine.jpeg",revision:"48e2df68b66d8a033d3659945e7957a9"},{url:"/img/magazines_Horse_Hound.jpeg",revision:"2b364858bf0e28aeb8d408ef996eed2f"},{url:"/img/magazines_Interior_Design.jpeg",revision:"fa9f419fef5cc2d10ce113adeed967c7"},{url:"/img/magazines_Library_Journal.jpeg",revision:"a3dbc6d2b64d27c872b816bc98c4761f"},{url:"/img/magazines_MIT_Technology_Review.jpeg",revision:"a0ebcb9d6b8c93e20a23fec53297fe37"},{url:"/img/magazines_Marketing_News.jpeg",revision:"14a274fe78c1eadee09527483d17c550"},{url:"/img/magazines_Mindful.jpeg",revision:"3c3c5bb0eb2d352ce34e2579405d3f5c"},{url:"/img/magazines_Modern_Cat.jpeg",revision:"d5b68f38320148f48f443631695370f7"},{url:"/img/magazines_Modern_Dog.jpeg",revision:"96fb47dbc8b38aad6b8895600540adb4"},{url:"/img/magazines_National_Geographic.jpeg",revision:"6f987859ed98c905ad654ed98aa56d85"},{url:"/img/magazines_Natural_History.jpeg",revision:"8b85a751b1b3cb37d685449ee6cd84b0"},{url:"/img/magazines_Outside.jpeg",revision:"f85d1607c6493bd2f461d027207aaecb"},{url:"/img/magazines_PC_Gamer.jpeg",revision:"173e83b60a5d7d3e35dba7349674f6ae"},{url:"/img/magazines_Premières_en_affaires.jpeg",revision:"1b2ad2344c760b19d91a52e392f91ca4"},{url:"/img/magazines_Psychologist.jpeg",revision:"2d8f3848ff811ec2a2b146e02120b031"},{url:"/img/magazines_Rolling_Stone.jpeg",revision:"7f18cd610aa1835d9a6152410c688cb5"},{url:"/img/magazines_Room_Magazine.jpeg",revision:"81e3b177da8852b48e1a5eac5ee6bfde"},{url:"/img/magazines_Stone_Soup.jpeg",revision:"b6787918d5ce9f27649a4bded255443a"},{url:"/img/magazines_Surfer.jpeg",revision:"1efa47d69a8f7c553fd315c5f6b2d522"},{url:"/img/magazines_Travel_Leisure.jpeg",revision:"5ecad159e0cdf4e42e61cb87257d8fc1"},{url:"/img/magazines_Travel_Weekly.jpeg",revision:"cc6aa23e85c45f5dea73168cbcbb4b82"},{url:"/img/magazines_WIRED.jpeg",revision:"fcc5ef5c7e3893db9a8221e4b79c0eb0"},{url:"/img/magazines_Wallpaper.jpeg",revision:"42ccd9600b4b45463534c1ffb7330615"},{url:"/img/magazines_WellBeing.jpeg",revision:"0ae42ff03c08fdfe481e651f865a2f01"},{url:"/img/magazines_Women's_Health.jpeg",revision:"800322f879bf4779bf98e97a49f353b7"},{url:"/img/magazines_Writer.jpeg",revision:"957880df82f126ab486ebe379c52c853"},{url:"/img/magazines_Yoga_Journal.jpeg",revision:"2093f135be45687f28fee3041b12eeb1"},{url:"/img/magazines_adweek.jpeg",revision:"3c9d81ef1ba320a566087047b000d64d"},{url:"/img/magazines_fastCompany.jpeg",revision:"9a04ed213ce28a531de78fea3a222126"},{url:"/img/magazines_forbes.jpeg",revision:"4c36fa18700c33408119ef20dd303fa7"},{url:"/img/magazines_informatics.jpeg",revision:"e6f8c8a4bce06d9edb958dbf38de23b8"},{url:"/img/powered_by_stripe.svg",revision:"9ecaa0ba04464aa4211fb5b6a4e79fa9"},{url:"/img/puppy-and-adult-dog.jpg",revision:"2bfe8a89412bd5fcb733557fb26cc3b7"},{url:"/img/subject_Fiction_Fantasy.jpeg",revision:"f49dd96dfa860fabc6d600dc70482581"},{url:"/img/subject_Science_Technology.jpeg",revision:"f927221bf45b2278d29716544af77c02"},{url:"/img/subject_Self_Help_Relationships.jpeg",revision:"25753fdb65c0f81dd0ac24d159588cec"},{url:"/img/subject_Social_Sciences.jpeg",revision:"e653a5df04952e530fb6bc1ea2f2f766"},{url:"/img/subject_Sports.jpeg",revision:"caad700e76d56dac87eb2740b04d3a5d"},{url:"/img/subject_Study_Aids_Test_Prep.jpeg",revision:"f3a136e9344e3786c9b1dac60c638fed"},{url:"/img/subject_Teens.jpeg",revision:"8e626a13e652357c7d03b038f0c2b02c"},{url:"/img/subject_Transportation.jpeg",revision:"7638db57a9ab6e60492276f272a2227f"},{url:"/img/subject_Travel.jpeg",revision:"f81ad19ef378c4867dac9b152bcc53f1"},{url:"/img/thinking-face_1f914.png",revision:"5c006797b6ee296946ab8dffbef4787e"},{url:"/img/trust.png",revision:"05fb63096702fd65c04d2a3e53d83269"},{url:"/infoIcon/fullText.svg",revision:"c8b299839eafb5fa0fe5e24d88ea07a7"},{url:"/infoIcon/uspCitations.svg",revision:"3834ab3188bc20b1af05e924eb0eac9d"},{url:"/infoIcon/uspDownload.svg",revision:"9a8e1d33a48f97daf753a889855723ca"},{url:"/infoIcon/uspMultipleFilters.svg",revision:"1a11d19b7996a4cd85d35ceff0902e71"},{url:"/infoIcon/uspPersonalize.svg",revision:"37818eca554d95f377fc7b6a7d3c4e1f"},{url:"/infoIcon/uspSubjects.svg",revision:"afe2fa13fec4fddce15de161545a1518"},{url:"/infoIcon/uspTextToSpeech.svg",revision:"8bd3af7c1b510eaac295eeb2b24c840d"},{url:"/infoIcon/uspfullText.svg",revision:"c8b299839eafb5fa0fe5e24d88ea07a7"},{url:"/manifest.json",revision:"39297b55ee73ef6b46ce5acbe33f0dff"},{url:"/publishers/ebsco.png",revision:"cbfccd06d1a6c6cff11596d82d88e6e0"},{url:"/publishers/ieee.png",revision:"0d0f97ead017aff7def29bbd2d8668eb"},{url:"/publishers/openAccess.png",revision:"31b5c9f592d87343af033d50671fa292"},{url:"/publishers/sage.png",revision:"24b37bfad825a201cb11c04ffc1a4f9c"},{url:"/publishers/wiley.png",revision:"4ec9eea6a57b3ea26d02a62c2a31089e"},{url:"/robots.txt",revision:"4169cfe6e5070d2f4455c7afc6793123"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
