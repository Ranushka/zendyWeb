import formatAvailableFacets from 'helpers/formatAvailableFacets'
import routs from 'helpers/routs'

const { SOLR_TOKEN, SOLR_URL } = process.env

export default async function apiSolrGetFacetsComposed(keywords) {
  const optionsList = [
    'df=catch_all',
    'facet=on',
    'facet.mincount=10',
    'facet.field=journalTitleFull',
    'facet.field=publishersFull',
    'facet.field=subSubjectsFull',
    'fq=regions:(%22ALL%22OR%22AE%22)',
    'sort=score+desc,zendy_id+asc',
    'qf=subSubjectsFull^3 abstract^2 title^1',
    'facet.limit=12',
    'facet.sort=count',
    // 'bq=sponsored:true',
    'bq=subSubjectsFull:swot',
    'rows=0'
  ]

  const kw = []
  keywords !== 'null'

  if (keywords) {
    const keywordsObj = JSON.parse(keywords)
    const subjects = keywordsObj?.subjects || {}
    // const { subjects, publishers, journals } = JSON.parse(keywords)

    if (subjects.length) {
      subjects.slice(0, 5).map((i) => kw.push(`"${i}"`))

      // const sub = subjects.map((i) => `"${i}"`).join('OR')
      // optionsList.push(`fq=subSubjectsFull:(${sub})`)
    }

    // if (publishers.length) {
    // const pub = publishers.map((i) => `"${i}"`).join('OR')
    // optionsList.push(`fq=publishersFull:(${pub})`)

    // publishers.map((i) => kw.push(`${i}`))
    // }

    // if (journals.length) {
    // const jou = journals.map((i) => `"${i}"`).join('OR')
    // optionsList.push(`fq=journalTitleFull:(${jou})`)

    // journals.map((i) => kw.push(`"${i}"`))
    // }
    // http://3.67.163.226:8983/solr/openaccess/select?df=catch_all&facet=on&facet.mincount=10&facet.field=journalTitleFull&facet.field=publishersFull&facet.field=subSubjectsFull&fq=regions:(%22ALL%22OR%22AE%22)&sort=score+desc,zendy_id+asc&qf=subSubjectsFull^3%20abstract^2%20title^1&facet.limit=12&facet.sort=count&bq=subSubjectsFull:Marketing^5.0&rows=0&q=%22swot%22%20OR%20%22Marketing%20Concept%22%20OR%20%22Marketing%22%20OR%20%22big%20data%22%20OR%20%22database%22%20OR%20%22computational%20biology%22%20OR%20%22biology%22%20OR%20%22education%22%20OR%20%22psychology%22%20OR%20%22student%22  // kw.push(`*`)
    const keywordsList = kw.join(' OR ')

    optionsList.push(`q=${keywordsList}`)
    // console.log('keywords-->', keywordsList)
  }

  if (keywords !== 'null') {
    optionsList.push(`q=*`)
  }

  // const kw = keywords.replace(/_/g, ' ')

  /* 
  marketing_SEO_personalization
  education_psychology_student
  arithmetic_algebra_geometry

  http://localhost:3000/?utm_source=newsletter&utm_medium=cpc&utm_campaign=spring_sale&utm_id=personalized001&utm_term=research_PHD_masters_thesis&utm_content=marketing_SEO_personalization
  http://localhost:3000/?utm_source=newsletter&utm_medium=cpc&utm_campaign=spring_sale&utm_id=personalized001&utm_term=research_PHD_masters_thesis&utm_content=education_psychology_student
  http://localhost:3000/?utm_source=newsletter&utm_medium=cpc&utm_campaign=spring_sale&utm_id=personalized001&utm_term=research_PHD_masters_thesis&utm_content=arithmetic_algebra_geometry
  */

  const url = `${SOLR_URL}/select?${optionsList.join('&')}`

  // console.log('url-->', url)

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
