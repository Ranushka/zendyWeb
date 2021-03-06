import { NextApiRequest, NextApiResponse } from 'next'
import apiSolrSearch from 'helpers/apiSolrSearch'
import formatAvailableFacets from 'helpers/formatAvailableFacets'
import formatSearchResult from 'helpers/formatSearchResult'
import { formatFilter, formatSort } from 'helpers/formatSearchQuery'
import cleanUpSearchTerm from 'helpers/cleanUpSearchTerm'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { searchQuery, facetFilters, sortFilters } = req.body

    const TERM = searchQuery[0].term
    const filter = formatFilter(facetFilters)
    const sort = formatSort(sortFilters)
    const query = cleanUpSearchTerm(TERM)

    const qryOptions = {
      query,
      filter,
      sort,
      limit: 10
    }

    const dataFromSolr = await apiSolrSearch(qryOptions)
    if (dataFromSolr.error) throw new Error(JSON.stringify(dataFromSolr.error))

    const formattedData = formatData(dataFromSolr, searchQuery)

    res.status(200).json(formattedData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: JSON.parse(err.message) })
  }
}

function formatData(dataFromSolr, searchQuery) {
  const {
    highlighting,
    response: { numFound, maxScore, docs },
    facet_counts: { facet_fields }
  } = dataFromSolr

  const results = formatSearchResult(docs, highlighting)
  const availableFacets = formatAvailableFacets(facet_fields)

  return {
    data: {
      searchRequestCriteria: {
        searchQuery,
        appliedFacets: []
      },
      searchResults: {
        totalResults: numFound,
        maximumScore: maxScore,
        results,
        availableFacets
      }
    },
    searchCounter: 0
  }
}
