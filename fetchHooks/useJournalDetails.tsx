import useSWR from 'swr'

const useJournalDetails = (publicationName: string) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${publicationName}`
  const swrKey = url

  const fetcher = () =>
    fetch(url).then((res) => {
      return res.json()
    })

  return useSWR(swrKey, fetcher)
}

export default useJournalDetails
