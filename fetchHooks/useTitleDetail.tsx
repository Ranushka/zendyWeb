import useSWR from 'swr'
import { useRouter } from 'next/router'
import { getPublicationId } from 'lib/helpers'

const fetcher = (url) =>
  fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const dataOptions = data.bibjson

      // if (dataOptions.author) {
      //   dataOptions.author = dataOptions.author.flatMap((item) => item.name);
      // }

      return dataOptions
    })

const useTitleDetail = () => {
  const router = useRouter()
  const queryId = router.query.id.toString()
  const article_id = getPublicationId(queryId)
  const url = `https://doaj.org/api/v1/articles/${article_id}`

  return useSWR(url, fetcher)
}

export default useTitleDetail
