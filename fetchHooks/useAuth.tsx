import useSWR from 'swr'
import { useRouter } from 'next/router'

const useAuth = (email, password) => {
  const url = 'https://api.staging-oa.zendy.io/auth/auth/'

  const bodyData = JSON.stringify({
    email,
    password,
  })

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyData,
  }

  const fetcher = () => {
    return fetch(url, options).then((res) => {
      return res.json()
    })
  }

  return useSWR(url, fetcher)
}

export default useAuth
