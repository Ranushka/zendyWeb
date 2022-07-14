import useSWR from 'swr'
import request from 'helpers/request'

export function useCollections() {
  const url = `/api/collections/`
  return useSWR(url, request)
}
