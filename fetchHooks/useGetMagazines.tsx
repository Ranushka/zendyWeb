import useSWR from 'swr'
import request from 'helpers/request'

const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL

export default function useGetMagazines() {
  const url = `${CMS_BASE_URL}/api/magazine`

  return useSWR('magazines', () => request(url), {
    revalidateIfStale: false,
    revalidateOnMount: false
  })
}
