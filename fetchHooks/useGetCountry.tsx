import useSWR from 'swr'

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

const useGetCountry = () => {
  const url = `https://ipapi.co/json/`

  return useSWR(url, fetcher)
}

export default useGetCountry
