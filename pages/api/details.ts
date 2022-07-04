import { NextApiRequest, NextApiResponse } from 'next'
import apiSolrSearchById from 'utilApi/apiSolrSearchById'
import { getPublicationId } from 'lib/helpers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { id }
    } = req

    const publicationId = getPublicationId(id.toString())
    const dataFromSolr = await apiSolrSearchById(publicationId)
    if (dataFromSolr.error) throw new Error(JSON.stringify(dataFromSolr.error))

    res.status(200).json(dataFromSolr)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: JSON.parse(err.message) })
  }
}
