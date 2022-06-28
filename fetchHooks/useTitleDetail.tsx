import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

const useTitleDetail = () => {
  const router = useRouter()
  const queryId = router.query.id.toString()

  const url = `/api/details/${queryId}`

  return useSWR(url, fetcher)
}

/* 
const useSearchResults = () => {
  const url = '/api/search'

  const router = useRouter()
  const rq = router.query
  const qAuthor: any = rq.author
  const qSubject: any = rq.subject
  const qJournal: any = rq.journal
  const qMaterial: any = rq.material
  const qPublisher: any = rq.publisher
  const queryString: any = rq.q || qAuthor || qSubject || qJournal

  const facetFilters = []
  const pageNumber = 1

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
 */
export default useTitleDetail
