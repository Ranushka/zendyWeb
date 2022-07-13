// Clean up the search term

export default function cleanSearchTerm(TERM) {
  let query = TERM.trim()

  if (query.match(/ AND | OR | NOT /g)) {
    return query
  }

  if (query.match(/^doi:/gi)) {
    const str = query.replace(/^doi:/gi, '').trim()
    return `DOI:"${str}"`
  }

  if (query.match(/^title:/gi)) {
    const str = query.replace(/^title:/gi, '').trim()
    return `title:"${str}"`
  }

  if (query.match(/^journal:/gi)) {
    const str = query.replace(/^journal:/gi, '').trim()
    return `journal_title:"${str}"`
  }

  if (query.match(/^issn:/gi)) {
    const str = query
      .replace(/^issn:/gi, '')
      .replace('-', '')
      .trim()
    return `pISSN:"${str}" OR eISSN:"${str}" `
  }

  if (query.match(/^isbn:/gi)) {
    const str = query.replace(/^isbn:/gi, '').trim()
    return `ISBN:"${str}"`
  }

  return `"${query}" OR ${query}`
}
