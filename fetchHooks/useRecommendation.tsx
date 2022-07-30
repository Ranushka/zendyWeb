import useSWR from 'swr'

import request from 'helpers/request'
import { isClient } from 'helpers/utils'
import { getPersonalizedKeywords } from 'helpers/localStorage'

const useRecommendation = () => {
  const keywordsLocal = getPersonalizedKeywords()
  const keywordsLocalString = JSON.stringify(keywordsLocal)

  const url =
    isClient() && `/api/recommendation?keywords=${keywordsLocalString}`

  return useSWR(url, (url) => request(url), {
    revalidateIfStale: false,
    revalidateOnMount: true
  })
}

export default useRecommendation
