import { NextApiRequest, NextApiResponse } from 'next'
import apiSolrGetFacets from 'helpers/apiSolrGetFacets'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dataFromSolr = await apiSolrGetFacets('publishersFull')

    res.status(200).json(dataFromSolr)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.toString() })
  }
}
