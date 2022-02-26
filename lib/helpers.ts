export const genarateTitleUrlPath = (name: string, id: string) => {
  /* 
    Replace all underscores
    Replace non A-Z with underscores
    get only 60 carctors
    remove duplicate underscore

    remove forverd slash with underscore

    join id with title by star
  */

  let res = name && name.replace(/[^a-zA-Z]/g, "_").replace(/_+/g, '_').substring(0,60);
  let newId = id && id.replaceAll('/', '_')

  return `${res}*${newId}`
}

export const getPublicationId = (id: string) => {
  /* 
    get the id by spliting url by star
    remove underscore with slash unicode %2F = /
  */
  const pubId = id.split('*').pop().replaceAll('_', '%2F')

  return pubId
}

export const isClient = () => {
  return typeof window === 'object'
}

export const checkIsMobile = (request: any) => {
  let ua: any

  if (request) {
    ua = request.headers['user-agent']
  }

  if (typeof navigator === 'object') {
    ua = navigator.userAgent
  }

  return /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
    ua
  )
}

export const lockBody = (state: boolean) => {
  const $body = document.querySelector('body')
  let scrollPosition = 0

  if (state) {
    scrollPosition = window.pageYOffset
    $body.style.overflow = 'hidden'
    $body.style.position = 'absolute'
    $body.style.top = `-${scrollPosition}px`
    $body.style.width = '100%'
    return
  }

  $body.style.removeProperty('overflow')
  $body.style.removeProperty('position')
  $body.style.removeProperty('top')
  $body.style.removeProperty('width')
  // window.scrollTo(0, scrollPosition);
}

export const clickVibrate = () => {
  if (window && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(25)
  }
}

export const getDir = (local) => {
  const isRtl = /ar|fa/.test(local)
  return isRtl ? 'rtl': 'ltr';
}
