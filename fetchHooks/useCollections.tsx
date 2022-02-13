import useSWR, { mutate } from 'swr'

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json()
  })

export function useCollections() {
  const url = `/api/collections/`
  return useSWR(url, fetcher)
}
