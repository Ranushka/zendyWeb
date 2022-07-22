import formatAvailableFacets from 'helpers/formatAvailableFacets'
import routs from 'helpers/routs'

const { SOLR_TOKEN, SOLR_URL } = process.env

const optionsList = [
  'df=catch_all',
  'facet=on',
  'facet.mincount=10',
  'facet.field=journalTitleFull',
  'facet.field=publishersFull',
  'facet.field=subSubjectsFull',
  'fq=regions:(%22ALL%22OR%22AE%22)',
  'sort=score+desc,zendy_id+asc',
  'qf=journalTitleFull^2 publishersFull^3 subSubjectsFull^1',
  'fl=zendy_id',
  'facet.limit=12',
  'facet.sort=count',
  'rows=0'
]

export default async function apiSolrGetFacetsComposed(keywords) {
  const kw = keywords.replace(/_/g, ' ')

  /* 
  marketing_SEO_personalization
  education_psychology_student
  arithmetic_algebra_geometry

  http://localhost:3000/?utm_source=newsletter&utm_medium=cpc&utm_campaign=spring_sale&utm_id=personalized001&utm_term=research_PHD_masters_thesis&utm_content=marketing_SEO_personalization
  http://localhost:3000/?utm_source=newsletter&utm_medium=cpc&utm_campaign=spring_sale&utm_id=personalized001&utm_term=research_PHD_masters_thesis&utm_content=education_psychology_student
  http://localhost:3000/?utm_source=newsletter&utm_medium=cpc&utm_campaign=spring_sale&utm_id=personalized001&utm_term=research_PHD_masters_thesis&utm_content=arithmetic_algebra_geometry
  */

  optionsList.push(`q=${kw || '*'}`)

  const url = `${SOLR_URL}/select?${optionsList.join('&')}`

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
  let prepData = {}

  data.map(({ categoryId, facets }) => {
    prepData[categoryId] = addUrls(facets, categoryId)
  })

  return prepData
}

function addUrls(facets, categoryId) {
  const withUrlData = facets.map((facet) => {
    /* 
      TO create url like following 
        - /publisher/SAGE_Publications
        - /subject/Artificial_intelligence
        - /journal/Frontiers_in_psychology
    */
    const facetRouteName = facetRouteNameMapping[categoryId]
    facet.url = routs[facetRouteName](facet.facetLabel)

    return facet
  })

  return withUrlData
}

const facetRouteNameMapping = {
  subSubjectsFull: 'subject',
  publishersFull: 'publisher',
  journalTitleFull: 'journal'
}
