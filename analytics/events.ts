// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const analyticEvent = (action, data = {}) => {
  // @ts-ignore
  if (!window.gtag) return
  // @ts-ignore
  window.gtag('event', action, data)
}

export default analyticEvent

export const analyticsViewScreen = () => {
  analyticEvent('screen_view', {
    page_title: document.title,
    page_location: window.location.href
  })
}

export const analyticsClickEvent = (props: any) => {
  const { text, title, dataName } = props
  console.log(props)

  analyticEvent('user_click', {
    data_text: text,
    data_title: title,
    data_name: dataName
  })
}

export const analyticsSetUserInfo = () => {
  // const { text, title } = props
  // @ts-ignore
  window.gtag('set', 'user_properties', {
    favorite_composer: 'Mahler',
    favorite_instrument: 'double bass',
    season_ticketholder: 'true'
  })
}

export const analyticsSelectPlan = (plan) => {
  // const { text, title } = props
  // @ts-ignore
  analyticEvent('select_item', {
    item_list_id: plan
  })
}
