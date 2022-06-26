import chunk from 'lodash/chunk'

export default function formatAvailableFacets(facet_fields) {
  if (!facet_fields) return []
  const searchFacets = []

  for (const facetKey in facet_fields) {
    const facets = chunk(facet_fields[facetKey], 2)

    if (facets.length === 0) continue

    const availableFacetValue = []
    facets.map((facet) => {
      availableFacetValue.push({
        facetLabel: facet[0],
        count: facet[1],
        active: false
      })
    })
    searchFacets.push({
      categoryId: facetKey,
      categoryLabel: facetKey,
      facets: availableFacetValue
    })
  }

  return searchFacets
}
