import React from 'react'
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID

const GtmScript: React.FC = () => {
  return (
    <>
      <script
        async
        id="gtag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
            gtag('config', '${GA_TRACKING_ID}',{ 'debug_mode':true });
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

export default GtmScript
