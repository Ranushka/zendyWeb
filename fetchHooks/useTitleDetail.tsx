import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

const useTitleDetail = () => {
  const router = useRouter()

  const queryId = router?.query?.id?.toString()

  console.log('--queryId--->', queryId)
  const url = `/api/details?id=${queryId}&&provider=eds`

  return useSWR(url, fetcher)
}

export default useTitleDetail
