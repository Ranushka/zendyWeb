import useSWR from 'swr'
import request from 'helpers/request'

const useAllPublishers = () => {
  const url = `/api/publishers`

  return useSWR(url, request)
}

export default useAllPublishers
