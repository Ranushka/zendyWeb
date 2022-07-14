import useSWR from 'swr'
import request from 'helpers/request'

const useInfoSubject = (queryAuthor: string) => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${queryAuthor}`

  return useSWR(url, request)
}

export default useInfoSubject
