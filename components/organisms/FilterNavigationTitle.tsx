import React from 'react'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'

import { countFormatted } from 'lib/helpers'
import useSearchResults from 'fetchHooks/useSearchResults'

const FilterNavigationTitle = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __loading()
  }

  const totalResults = get(data, 'data.searchResults.totalResults', null)
  const totalResultsFormatted = countFormatted(totalResults)

  return (
    <div className="pb-6 pt-1">
      <h3 className="text-2xl text_nut5 font-serif w-full">Refine search</h3>
      <small className="w-full text-right">
        {totalResultsFormatted}+ Results
      </small>
    </div>
  )
}

const __loading = () => {
  return (
    <div>
      <Skeleton height={30} width={180} />
      <Skeleton height={10} width={60} />
    </div>
  )
}

export default FilterNavigationTitle
