import useSWR from 'swr'
import request from 'helpers/request'

const useGetTrendingKeywords = () => {
  const url = `/api/trands?q=blockchain`

  return useSWR(url, request)
}

export default useGetTrendingKeywords
