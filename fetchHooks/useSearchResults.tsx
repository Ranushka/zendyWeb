import useSWR from 'swr'
import { useRouter } from 'next/router'
import labelMapping from 'lib/labelMapping'

const getFilterObj = (journalId, journalString) => {
  return {
    active: true,
    categoryId: journalId,
    categoryLabel: journalId,
    facetLabel: journalString
  }
}

const useSearchResults = () => {
  const url = 'https://api.staging-oa.zendy.io/search/oa/search'

  const router = useRouter()
  let queryString = router.query.q || router.query.author

  const facetFilters = []
  const pageNumber = 1

  if (queryString) {
    queryString = `${queryString} AND url_full_text:*.pdf`
  }

  const journalId = 'journalTitleFull'
  const journalString = router.query[labelMapping(journalId + 'Url')]
  if (journalString) {
    facetFilters.push(getFilterObj(journalId, journalString))
  }

  const langId = 'genlanguage'
  const langString = router.query[labelMapping(langId + 'Url')]
  if (langString) {
    facetFilters.push(getFilterObj(langId, langString))
  }

  const subjectId = 'subjectsFull'
  const subjectString = router.query[labelMapping(subjectId + 'Url')]
  if (subjectString) {
    facetFilters.push(getFilterObj(subjectId, subjectString))
  }

  const materialId = 'publicationTypeFull'
  const materialString = router.query[labelMapping(materialId + 'Url')]
  if (materialString) {
    facetFilters.push(getFilterObj(materialId, materialString))
  }

  const queryParams = {
    searchQuery: [{ term: queryString }],
    filters: [],
    facetFilters: facetFilters,
    dateFilters: { start: '1000-1', end: '2050-12' },
    pageNumber: pageNumber,
    sortFilters: 'relevance'
  }

  // const sortByString = router.query[labelMapping(sortById + 'Url')]
  const sortByString = router.query.by
  if (sortByString) {
    queryParams.sortFilters = sortByString.toString()
  }

  const options = {
    method: 'POST',
    headers: {
      credentials: 'include',
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
