const { SOLR_TOKEN, SOLR_URL } = process.env

const facetConfig = [
  'facet=on',
  'facet.mincount=1',
  'facet.field=journalTitleFull',
  'facet.field=publicationTypeFull',
  // 'facet.field=subPublicationTypeFull',
  'facet.field=publishersFull',
  'facet.field=subjectsFull',
  'facet.field=genlanguage'
].join('&')

const highlightConfig = [
  'hl=on',
  'fl=*,score',
  'hl.fragsize=20000',
  'hl.simple.pre=<mark>',
  'hl.simple.post=</mark>',
  'hl.fl=title,abstract',
  'hl.method=unified'
].join('&')

const otherConfig = [
  'qf=title^2 abstract^3 catch_all^1',
  // 'bq=publication_year:[NOW/DAY-1YEAR TO NOW/DAY]',
  // 'bf=recip(rord(publication_year),1,1000,1000)',
  // 'bf=recip(rord(creationDate),1,1000,1000)',
  'bq=subjectsFull:[* TO *]^4',
  'bq=keywords:[* TO *]^5',
  'bq=publishersFull:[* TO *]^1',
  'df=catch_all',
  'defType=edismax'
].join('&')

const url = `${SOLR_URL}/query?${otherConfig}&${facetConfig}&${highlightConfig}`

export default async function apiSolrSearch(body) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: SOLR_TOKEN
    },
    body: JSON.stringify(body)
  }

  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
