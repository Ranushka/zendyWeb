import useSWR from 'swr'
import { useRouter } from 'next/router'
import { getPublicationId } from 'lib/helpers'

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

const useTitleDetail = () => {
  const router = useRouter()
  const queryId = router.query.id.toString()
  const publicationId = getPublicationId(queryId)
  const url = `https://api.staging-oa.zendy.io/search/oa/permanent-link/${publicationId}`

  return useSWR(url, fetcher)
}

export default useTitleDetail
