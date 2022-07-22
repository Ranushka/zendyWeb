import useSWR from 'swr'
import { useRouter } from 'next/router'
import labelMapping from 'helpers/labelMapping'
// import routs from 'helpers/routs'

const getFilterObj = (categoryId, facetLabel) => {
  const refinedFacetLabel = facetLabel
    .split(',')
    .map((item) => `"${item}"`)
    .join(' OR ')

  return {
    active: true,
    categoryId: categoryId,
    categoryLabel: categoryId,
    facetLabel: `(${refinedFacetLabel})`
  }
}

const useSearchResults = () => {
  const url = '/api/search'

  const router = useRouter()
  const rq = router.query
  const qAuthor: any = rq.author
  const qMaterial: any = rq.material
  const qSubject: any = rq.subject?.toString().replace(/_/g, ' ')
  const qJournal: any = rq.journal?.toString().replace(/_/g, ' ')
  const qPublisher: any = rq.publisher?.toString().replace(/_/g, ' ')

  let queryString: any = rq.q || qAuthor || qSubject || qJournal || qPublisher

  const facetFilters = []
  const pageNumber = 1

  const journalId = 'journalTitleFull'
  const journalString = rq[labelMapping(journalId + 'Url')]
  if (journalString) {
    facetFilters.push(getFilterObj(journalId, journalString))
  }

  const langId = 'genlanguage'
  const langString = rq[labelMapping(langId + 'Url')]
  if (langString) {
    facetFilters.push(getFilterObj(langId, langString))
  }

  // const subjectId = 'subjectsFull'
  // const subjectString = rq[labelMapping(subjectId + 'Url')]
  // if (!qSubject && subjectString) {
  //   facetFilters.push(getFilterObj(subjectId, subjectString))
  // }

  if (qMaterial) {
    facetFilters.push(getFilterObj('publicationTypeFull', qMaterial))
  }

  if (qPublisher) {
    facetFilters.push(getFilterObj('publishersFull', qPublisher))
  }

  if (qSubject) {
    facetFilters.push(getFilterObj('subSubjectsFull', qSubject))
  }

  if (qJournal) {
    queryString = rq.q?.toString().replace(/_/g, ' ')
  }

  const queryParams = {
    searchQuery: [{ term: queryString }],
    filters: [],
    facetFilters: facetFilters,
    dateFilters: { start: '1000-1', end: '2050-12' },
    pageNumber: pageNumber,
    sortFilters: 'relevance'
  }

  // const sortByString = rq[labelMapping(sortById + 'Url')]
  const sortByString = rq.by
  if (sortByString) {
    queryParams.sortFilters = sortByString.toString()
  }

  const options = {
    method: 'POST',
    headers: {
      // credentials: 'include',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(queryParams)
  }

  const fetcher = () => {
    return fetch(url, options).then((res) => {
      return res.json()
    })
  }

  return useSWR([url, queryParams], fetcher)
}

export default useSearchResults
