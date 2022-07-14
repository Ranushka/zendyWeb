import formatAvailableFacets from 'helpers/formatAvailableFacets'

const { SOLR_TOKEN, SOLR_URL } = process.env

export default async function apiSolrGetFacets(facet = 'publishersFull') {
  const url = `${SOLR_URL}/select?facet.field=${facet}&facet=true&fl=null&q.op=OR&q=*%3A*&rows=0&wt=json`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: SOLR_TOKEN
    }
  }

  const res = await fetch(url, options)
  const dataFromSolr = await res.json()

  if (dataFromSolr.error) throw new Error(JSON.stringify(dataFromSolr.error))

  const formattedData = formatData(dataFromSolr)

  return formattedData
}

function formatData(dataFromSolr) {
  const {
    facet_counts: { facet_fields }
  } = dataFromSolr

  const data = formatAvailableFacets(facet_fields)

  return data[0].facets
}
