import useSWR from 'swr'
import request from 'lib/request'

const useInfoJournal = (publicationName: string) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${publicationName}`
  const swrKey = url

  return useSWR(swrKey, request)
}

export default useInfoJournal
