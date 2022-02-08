import useSWR from 'swr'
import isEmpty from 'lodash/isEmpty'

const useAuthorDetails = (queryAuthor) => {
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

  const shouldFetch = isEmpty(queryAuthor)

  return useSWR(shouldFetch ? swrKey : null, fetcher)
}

export default useAuthorDetails
