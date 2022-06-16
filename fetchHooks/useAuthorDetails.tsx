import useSWR from 'swr'

const useAuthorDetails = (queryAuthor: string) => {
  const url = 'https://api.staging-oa.zendy.io/search/oa/author'
  const swrKey = url + queryAuthor
  const bodyData = JSON.stringify({
    authorName: queryAuthor
  })
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyData
  }

  const fetcher = () =>
    fetch(url, options).then((res) => {
      return res.json()
    })

  // const shouldFetch = isEmpty(queryAuthor)

  return useSWR(swrKey, fetcher)
}

export default useAuthorDetails
