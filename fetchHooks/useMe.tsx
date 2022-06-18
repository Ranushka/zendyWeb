import useSWR from 'swr'
import { isClient } from 'lib/helpers'

// const VERCEL_URL = process.env.VERCEL_URL

const useMe = () => {
  // console.log('-----', process.env)

  const url = `${isClient() && location.origin}/api/me`

  const fetcher = () => {
    return fetch(url).then((res) => {
      return res.json()
    })
  }

  return useSWR(url, fetcher)
}

export default useMe
