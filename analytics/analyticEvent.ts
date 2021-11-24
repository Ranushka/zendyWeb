// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const analyticEvent = (action, category, label, value) => {
  // @ts-ignore
  if (!window.gtag) return;
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export default analyticEvent;
