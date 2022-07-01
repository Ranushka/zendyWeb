import useSWR from 'swr'
import request from 'lib/request'

const useGetTrendingKeywords = () => {
  const url = `/api/trands?q=blockchain`

  return useSWR(url, request)
}

export default useGetTrendingKeywords
