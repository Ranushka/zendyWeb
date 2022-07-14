import useSWR from 'swr'
import { isClient } from 'helpers/utils'

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
