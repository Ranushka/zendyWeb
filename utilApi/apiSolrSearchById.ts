import formatSearchResult from 'utilApi/formatSearchResult'

const url = `http://3.67.163.226:8983/solr/openaccess/select?q=zendy_id:`

export default async function apiSolrSearchById(resultId) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic cmFudTpjeXdFWWpqNkdacTB1OWV3'
    }
  }

  const fullUrl = url + resultId
  const res = await fetch(fullUrl, options)
  const data = await res.json()
  const formattedData = formatSearchResult(data.response.docs, null)

  return formattedData
}
