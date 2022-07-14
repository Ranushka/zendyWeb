import { NextApiRequest, NextApiResponse } from 'next'
import apiCacheFetch from 'helpers/apiCacheFetch'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { slug }
    } = req
    const data = await apiCacheFetch(
      `https://content.zendy.io/wp-json/wp/v2/posts?slug=${slug}`
    )
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}
