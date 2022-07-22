import { isClient } from 'helpers/utils'

export function setPrevPage() {
  localStorage.setItem('prevPage', location.pathname)
}

export function clearPrevPage() {
  localStorage.setItem('prevPage', null)
}

export function getPrevPage() {
  return localStorage.getItem('prevPage')
}

export function getPersonalizedKeywords() {
  return isClient() && localStorage.getItem('personalization')
}

export function setPersonalizedKeywords(data) {
  return isClient() && localStorage.setItem('personalization', data)
}

export function clearPersonalizedKeywords() {
  localStorage.setItem('personalization', null)
}
