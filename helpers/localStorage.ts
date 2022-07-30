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
  const data = isClient() && localStorage.getItem('personalization')
  return JSON.parse(data)
}

type personalizedDataProps = {
  subjects?: string[]
  publishers?: string[]
  journals?: string[]
}

export function setPersonalizedKeywords(newData: personalizedDataProps) {
  const { subjects = [], publishers = [], journals = [] } = newData

  const oldData = getPersonalizedKeywords()
  const subjectsOld = oldData?.subjects || []
  const publishersOld = oldData?.publishers || []
  const journalsOld = oldData?.journals || []

  const sub = [...new Set([...subjects, ...subjectsOld])].slice(0, 10)
  const pub = [...new Set([...publishers, ...publishersOld])].slice(0, 10)
  const jou = [...new Set([...journals, ...journalsOld])].slice(0, 10)

  const data = {
    subjects: sub,
    publishers: pub,
    journals: jou
  }

  const strData = JSON.stringify(data)

  return isClient() && localStorage.setItem('personalization', strData)
}

export function clearPersonalizedKeywords() {
  localStorage.setItem('personalization', null)
}
