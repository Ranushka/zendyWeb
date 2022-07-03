import { NextApiRequest, NextApiResponse } from 'next'
import { apiSolrGetFacets } from 'utilApi/apiSolrSearch'
import formatAvailableFacets from 'utilApi/formatAvailableFacets'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dataFromSolr = await apiSolrGetFacets('publishersFull')
    if (dataFromSolr.error) throw new Error(JSON.stringify(dataFromSolr.error))

    const formattedData = formatData(dataFromSolr)

    res.status(200).json(formattedData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: JSON.parse(err.message) })
  }
}

function formatData(dataFromSolr) {
  const {
    facet_counts: { facet_fields }
  } = dataFromSolr

  const data = formatAvailableFacets(facet_fields)

  return data[0].facets
}
