export const tempPublicationUrl = (name: string, id: string) => {
  let res = name && name.replace(/[^A-Z0-9]/gi, '_')

  res = `${res}_${id}`

  return res
}

export const getPublicationId = (id: string) => {
  const pubId = id.split('_').pop()

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

// export const lockBody = (state: boolean) => {
//   if (state) {
//     document.body.classList.add("noScroll");
//     document.getElementsByTagName("html")[0].classList.add("noScroll");
//     return;
//   }

//   document.body.classList.remove("noScroll");
//   document.getElementsByTagName("html")[0].classList.remove("noScroll");
// };

export const clickVibrate = () => {
  if (window && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(25)
  }
}
