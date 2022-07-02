import useSWR from 'swr'
import request from 'lib/request'

const usePublisherDetails = (publisherName: string) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${publisherName}`

  return useSWR(url, request)
}

export default usePublisherDetails
