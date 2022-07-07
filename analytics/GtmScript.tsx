import React from 'react'
import Script from 'next/script'
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID

// export const GtmScript: React.FC = () => {
//   return (
//     <>
//       <script
//         async
//         id="gtag-script"
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//       />
//       <script
//         id="gtag-init"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
//             gtag('config', '${GA_TRACKING_ID}',{ 'debug_mode':true });
//           `
//         }}
//       />
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `.async-hide{opacity: 0 !important}`
//         }}
//       />
//     </>
//   )
// }

export const GtmScript: React.FC = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="gtag-initsss"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-WNGPH93');
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    `
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `.async-hide{opacity: 0 !important}`
        }}
      />
    </>
  )
}

export const GtmNoScript: React.FC = () => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
// export  GtmScript
// export default GtmScript
