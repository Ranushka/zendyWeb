import React from 'react'
import get from 'lodash/get'
import Skeleton from 'react-loading-skeleton'

import labelMapping from 'lib/labelMapping'
import { ReadMore } from 'components/atoms'
import FilterItems from 'components/organisms/FilterItems'
import FilterGroupTitle from 'components/organisms/FilterGroupTitle'
import useSearchResults from 'fetchHooks/useSearchResults'
// import useGlobal from 'context/GlobalContext'

// const isNarrowed = false

const __searchFiltersLoading = () => {
  return [1, 2, 3, 4].map((id) => (
    <article key={'skeletonSearchResult' + id} className="mw__4 ml__0">
      <Skeleton height={30} />
      <Skeleton height={14} count={8} />
    </article>
  ))
}

const FilterFacets = () => {
  const { data } = useSearchResults()
  // const [{ initialFilters, setGlobalState }] = useGlobal()

  if (!data) {
    return __searchFiltersLoading()
  }

  let availableFacets = get(data, 'data.searchResults.availableFacets', null)

  // if (!initialFilters) {
  //   setGlobalState({
  //     initialFilters: availableFacets
  //   })
  // }

  // if (availableFacets?.length && isNarrowed) {
  //   availableFacets = initialFilters
  // }

  return (
    availableFacets &&
    availableFacets.map((item, id) => {
      const categoryLabel = labelMapping(item.categoryLabel + 'Url')

      const accordionContent = (
        <FilterItems items={item.facets} groupId={categoryLabel} />
      )

      return (
        <div key={id} className="mb-8">
          <FilterGroupTitle title={labelMapping(item.categoryLabel)} />
          {item.facets.length > 6 ? (
            <ReadMore height={208} id={id} content={accordionContent} />
          ) : (
            accordionContent
          )}
        </div>
      )
    })
  )
}

export default FilterFacets
