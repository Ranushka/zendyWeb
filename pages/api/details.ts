import { NextApiRequest, NextApiResponse } from 'next'
import apiSolrSearchById from 'helpers/apiSolrSearchById'
import { getPublicationId } from 'helpers/utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { id }
    } = req

    const publicationId = getPublicationId(id.toString())
    const dataFromSolr = await getDetails(publicationId)
    if (dataFromSolr.error) throw new Error(JSON.stringify(dataFromSolr.error))

    res.status(200).json(dataFromSolr)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: JSON.parse(err.message) })
  }
}

async function getDetails(pubId: string) {
  console.log('--queryId--->', pubId)

  if (pubId.endsWith('__EDS')) {
    const pubIdEDS = pubId.replace('__EDS', '')
    const dataFromEDS = await apiSolrSearchById(pubIdEDS)

    return dataFromEDS
  }

  const dataFromSolr = await apiSolrSearchById(pubId)

  return dataFromSolr
}
