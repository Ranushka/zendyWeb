import useSWR from 'swr'
import request from 'lib/request'

export function useCollections() {
  const url = `/api/collections/`
  return useSWR(url, request)
}
