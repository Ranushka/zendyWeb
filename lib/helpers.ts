export const generateTitleUrlPath = (name: string, id: string) => {
  /* 
    Replace all underscores
    Replace non A-Z with underscores
    get only 60 carters
    remove duplicate underscore

    remove slash with underscore

    join id with title by star
  */

  let res =
    name &&
    name
      .replace(/[^a-zA-Z]/g, '_')
      .replace(/_+/g, '_')
      .substring(0, 60)
  let newId = id && id.replaceAll('/', '_')

  return `${res}=${newId}`
}

export const getPublicationId = (id: string) => {
  /* 
    get the id by splitting url by star
    remove underscore with slash unicode %2F = /
  */
  const pubId = id
    .split('=')
    .pop()
    .replace(/_/g, '/')

  console.log('getPublicationId--', pubId)

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
  return isRtl ? 'rtl' : 'ltr'
}

export function getDate(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export function addStickyClass(id: string) {
  try {
    var navbar = document.getElementById(id)
    var sticky = navbar.offsetTop

    console.log(sticky)

    window.onscroll = function() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('pinned')
      } else {
        navbar.classList.remove('pinned')
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export function focusToSearchInput(event) {
  if (event.srcElement.localName === 'input') return
  if (event.keyCode === 191) {
    setTimeout(() => {
      const searchEl = document.getElementById('mainSearch')
      searchEl && searchEl.focus()
    }) // setTimeout prevents insertion of slash
  }
}

export function countFormatted(totalResults) {
  return new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(totalResults)
}
