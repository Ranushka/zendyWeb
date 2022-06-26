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
  'bq=publication_year:[* TO *]^4',
  'df=catch_all',
  'defType=edismax'
].join('&')

const url = `http://3.67.163.226:8983/solr/openaccess/query?${otherConfig}&${facetConfig}&${highlightConfig}`

export default async function apiSolrSearch(body) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic cmFudTpjeXdFWWpqNkdacTB1OWV3'
    },
    body: JSON.stringify(body)
  }

  const res = await fetch(url, options)
  const data = await res.json()

  return data
}

/* http://3.67.163.226:8983/solr/openaccess/select?
defType=edismax&
df=catch_all&
fl=*,score&
hl=on&
hl.fl=title,abstract&
hl.simple.pre=%3Cmark%3E&
hl.simple.post=%3C/mark%3E&
hl.method=unified&
hl.fragsize=20000&
facet=on&
facet.mincount=1&
facet.field=journalTitleFull&
facet.field=publicationTypeFull&
facet.field=subPublicationTypeFull&
facet.field=publishersFull&
facet.field=subjectsFull&
facet.field=genlanguage&
fq=regions:(%22ALL%22OR%22AE%22)&
sort=score+desc,zendy_id+asc&
start=0&
q=(COVID-19)&
qf=title^2%20abstract^3%20catch_all^0.7 */
