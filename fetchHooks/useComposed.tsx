import useSWR from 'swr'

import request from 'helpers/request'
import { isClient } from 'helpers/utils'
import { getPersonalizedKeywords } from 'helpers/localStorage'

const useComposed = () => {
  const keywordsLocal = getPersonalizedKeywords()
  const keywordsLocalString = JSON.stringify(keywordsLocal)

  const url = isClient() && `/api/composed?keywords=${keywordsLocalString}`

  return useSWR(url, (url) => request(url), {
    revalidateIfStale: false,
    revalidateOnMount: true
  })
}

export default useComposed
