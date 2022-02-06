import useSWR from 'swr'
import { useRouter } from 'next/router'

const useSearchResults = () => {
  const url = 'https://api.staging-oa.zendy.io/search/oa/search'

  const router = useRouter()
  const queryString: any = router.query.q || router.query.author

  const swrKey = `${url}?q=${queryString}`

  const facetFilters = []
  const pageNumber = 1

  const bodyData = JSON.stringify({
    searchQuery: [{ term: queryString }],
    facetFilters: facetFilters,
    dateFilters: { start: '1000-1', end: '2050-12' },
    pageNumber: pageNumber,
  })

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyData,
  }

  const fetcher = () => {
    return fetch(url, options).then((res) => {
      return res.json()
    })
  }

  return useSWR(swrKey, fetcher)
}

export default useSearchResults
