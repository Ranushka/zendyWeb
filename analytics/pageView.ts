const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageView = (url) => {
  // @ts-ignore
  if (window.dataLayer) {
    // @ts-ignore
    // relate to google optimize
    dataLayer.push({ event: 'optimize.activate' })
  }
  // @ts-ignore
  if (!window.gtag) return
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export default pageView
