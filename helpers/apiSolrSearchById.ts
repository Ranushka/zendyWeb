import formatSearchResult from 'helpers/formatSearchResult'

const { SOLR_TOKEN, SOLR_URL } = process.env
const url = `${SOLR_URL}/query?q=zendy_id:`

export default async function apiSolrSearchById(resultId) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: SOLR_TOKEN
    }
  }

  try {
    const fullUrl = url + resultId
    const res = await fetch(fullUrl, options)
    const data = await res.json()
    const formattedData = formatSearchResult(data.response.docs, null)

    return formattedData
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
