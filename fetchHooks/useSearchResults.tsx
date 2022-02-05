import useSWR from 'swr'
import { useRouter } from 'next/router'
// import { tempPublicationUrl } from 'lib/helpers'

// const fetcher = (url) => {
//   return fetch(url)
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       return __processData(data)
//     })
// }

// const __makeItRand = () => Math.random() >= 0.5

// const __processData = (data) => {
//   let keywords = []

//   const results = data.results.map((item) => {
//     const href = tempPublicationUrl(item.bibjson.title, item.id)
//     let subjects = []

//     if (item.bibjson && item.bibjson.subject) {
//       subjects = item.bibjson.subject.map((a) => a.term)
//     }

//     return {
//       ...item.bibjson,
//       href,
//       id: item.id,
//       subjects,
//       isReviewed: __makeItRand(),
//       referenced: __makeItRand(),
//     }
//   })

//   if (results) {
//     keywords = results
//       .map((a) => a.keywords)
//       .filter((a) => a)
//       .flat()
//       .slice(0, 12)
//   }

//   return { ...data, results, keywords }
// }

// const useSearchResults = () => {
//   const router = useRouter()
//   const queryString: any = router.query.q || router.query.author

//   const url = `https://doaj.org/api/v1/search/articles/${queryString}`

//   return useSWR(url, fetcher)
// }

const useSearchResults = () => {
  const url = 'https://api.staging-oa.zendy.io/search/oa/search'

  const router = useRouter()
  const queryString: any = router.query.q || router.query.author

  const swrKey = `${url}?q=${queryString}`

  console.log('====>>>', swrKey)

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
