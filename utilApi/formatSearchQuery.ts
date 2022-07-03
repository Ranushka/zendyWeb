export function formatFilter(facetFilters) {
  if (!facetFilters.length) return []

  return facetFilters.map((facet) => {
    const { categoryId, facetLabel } = facet

    return `${categoryId}:${facetLabel.trim()}`
  })
}
export function formatSort(sortFilters) {
  if (sortFilters === 'date2') {
    return `publication_year desc,zendy_id asc`
  }

  if (sortFilters === 'date') {
    return `publication_year asc,zendy_id asc`
  }

  return `score desc,zendy_id asc`
}
