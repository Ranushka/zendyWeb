import useSWR from 'swr'

const useSearchResults = (queryAuthor) => {
  const url = 'https://api.staging-oa.zendy.io/search/oa/author'
  const swrKey = url + queryAuthor
  const bodyData = JSON.stringify({
    authorName: queryAuthor,
  })
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyData,
  }

  const fetcher = () =>
    fetch(url, options).then((res) => {
      return res.json()
    })
  // .then((data) => {
  //   return __processData(data)
  // })

  return useSWR(swrKey, fetcher)
}

export default useSearchResults
