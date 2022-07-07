const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// const pageView = (url) => {
//   // @ts-ignore
//   if (window.dataLayer) {

//     // relate to google optimize
//     // @ts-ignore
//     dataLayer.push({ event: 'optimize.activate' })
//   }

//   // @ts-ignore
//   window.gtag('config', GA_TRACKING_ID, {
//     page_path: url
//   })
// }

export const pageView = (url) => {
  if (typeof window !== 'undefined') return
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

export default pageView
