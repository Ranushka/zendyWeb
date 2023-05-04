import { NextApiRequest, NextApiResponse } from 'next'
import apiSolrGetFacetsComposed from 'helpers/apiSolrGetFacetsComposed'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { keywords }
    } = req

    const dataFromSolr = await apiSolrGetFacetsComposed(keywords)

    res.status(200).json(dataFromSolr)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.toString() })
  }
}
