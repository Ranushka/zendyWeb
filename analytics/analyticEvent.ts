// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const analyticEvent = (action, data = {}) => {
  // @ts-ignore
  if (!window.gtag) return
  // @ts-ignore
  window.gtag('event', action, data)
}

export default analyticEvent
