import React from 'react'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'

import { useRouter } from 'next/router'

import useSearchResults from 'fetchHooks/useSearchResults'
import labelMapping from 'lib/labelMapping'
import { Space, CheckBox } from 'components/atoms'
// import { IconSavedSearch, IconNotifications } from 'components/icons'
import { ReadMore, DateRangeFilter, SortByFilter } from 'components/molecules'

type Props = {}

const LayeredNavigationTitle = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __layeredNavigationTitleLoading()
  }

  const totalResults = get(data, 'data.searchResults.totalResults', null)
  let totalResultsFormated = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(totalResults)

  return (
    <div className="flex flex items-center py-2">
      <h3 className="color__nut7">Refine search</h3>
      <div className="flex__left" />
      <small className="mute">{totalResultsFormated}+ Results</small>
    </div>
  )
}

const FilterItems = ({ items, groupId }) => {
  const router = useRouter()
  const queryString = router.query

  return items.map((item, id) => {
    const facetLabel = item.facetLabel
    const checked = queryString[groupId] === facetLabel
    const onClick = () => {
      let query = {}

      if (checked) {
        delete queryString[groupId]
        query = queryString
      } else {
        query = { ...queryString, [groupId]: facetLabel }
      }

      router.push({
        pathname: '/search',
        query: query
      })
    }

    return (
      <div key={'filter' + id} onClick={onClick}>
        <CheckBox
          checked={checked}
          className="pt-2 pb-1"
          key={id}
          id={item.id}
          name={item.facetLabel}
          label={labelMapping(item.facetLabel)}
        />
      </div>
    )
  })
}

const __searchFiltersLoading = () => {
  return [1, 2, 3, 4].map((id) => (
    <article key={'skeletonSearchResult' + id} className="mw__4 ml__0">
      <Space size={3} />
      <Skeleton height={30} />
      <Space size={2} />
      <Skeleton height={14} count={8} />
      <Space size={2} />
    </article>
  ))
}

const __layeredNavigationTitleLoading = () => {
  return (
    <div className="flex">
      <Skeleton height={10} width={180} />
      <Space size={4} />
      <Skeleton height={10} width={60} />
    </div>
  )
}

const FilterGroups = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __searchFiltersLoading()
  }
  const availableFacets = get(data, 'data.searchResults.availableFacets', null)

  return availableFacets.map((item, id) => {
    const categoryLabel = labelMapping(item.categoryLabel + 'Url')

    const accordionContent = (
      <FilterItems items={item.facets} groupId={categoryLabel} />
    )

    return (
      <div key={id} className="mb-8">
        <h5 className="text-gray-500 font-serif">
          {labelMapping(item.categoryLabel)}
        </h5>
        {item.facets.length > 6 ? (
          <ReadMore height={208} id={id} content={accordionContent} />
        ) : (
          accordionContent
        )}
      </div>
    )
  })
}

const GetSortBy = () => {
  return (
    <div className="mb-4">
      <h5 className="text-gray-500 pb-2">Sort by</h5>
      <SortByFilter />
    </div>
  )
}

const GetYearRange = () => {
  const [year, setYear] = React.useState('')

  return (
    <div className="mb-4">
      <h5 className="text-gray-500 pb-2">Year range</h5>
      <DateRangeFilter year={year} setYear={setYear} />
    </div>
  )
}

const LayeredNavigation: React.FC<Props> = () => {
  return (
    <section className="w-3/12 pr-8">
      <LayeredNavigationTitle />
      <GetSortBy />
      <GetYearRange />
      <FilterGroups />
    </section>
  )
}

export default LayeredNavigation
