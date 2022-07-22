import useSWR from 'swr'
import { useRouter } from 'next/router'
import request from 'helpers/request'
import { isClient } from 'helpers/utils'
import {
  getPersonalizedKeywords,
  setPersonalizedKeywords
} from 'helpers/localStorage'

const useComposed = () => {
  const router = useRouter()
  const { utm_content } = router.query

  if (utm_content) {
    setPersonalizedKeywords(utm_content)
  }

  const keywordsLocal = getPersonalizedKeywords()

  const url = isClient() && `/api/composed?keywords=${keywordsLocal}`

  return useSWR(url, (url) => request(url))
}

export default useComposed
