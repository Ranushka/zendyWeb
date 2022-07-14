import useSWR from 'swr'
import { useRouter } from 'next/router'
import request from 'helpers/request'

const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL

export default function useGetSubjects() {
  const { locale } = useRouter()
  const url = `${CMS_BASE_URL}/api/subject?locale=${locale}`
  return useSWR(url, request)
}
