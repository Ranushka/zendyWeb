import striptags from 'striptags'

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
    striptags(name)
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, '_')
      .replace(/_+/g, '_')
      .substring(0, 60)
  let newId = id && id.replaceAll('/', '___')

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
    .replace(/___/g, '/')

  return pubId
}

export const isClient = () => {
  return typeof window === 'object'
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
