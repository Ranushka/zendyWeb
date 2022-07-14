export default function lockBody(state: boolean) {
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
}
