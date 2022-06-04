import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './desktop.module.scss'

import useSearchResults from 'fetchHooks/useSearchResults'
import labelMapping from 'data/labelMapping'
import { Space, CheckBox, ActionItem, Input } from 'components/atoms'
import { IconSavedSearch, IconNotifications } from 'components/icons'
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
    <div className="flex flex__center py-2">
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
      <div key={'filter' + id} className="py-1" onClick={onClick}>
        <CheckBox
          checked={checked}
          className="py-1"
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
      <div>
        <Space size={2} />
        <FilterItems items={item.facets} groupId={categoryLabel} />
      </div>
    )

    return (
      <div key={id}>
        <h5 className="color__nut6">{labelMapping(item.categoryLabel)}</h5>
        {item.facets.length > 6 ? (
          <ReadMore height={208} id={id} content={accordionContent} />
        ) : (
          accordionContent
        )}

        <Space size={3} />
      </div>
    )
  })
}

const GetSortBy = () => {
  return (
    <div className="my__2">
      <Space size={2} />
      <h5 className="color__nut6">Sort by</h5>
      <SortByFilter />
    </div>
  )
}

const GetYearRange = () => {
  const [year, setYear] = React.useState('')

  return (
    <div className="my__2">
      <Space size={2} />
      <h5 className="color__nut6">Year range</h5>
      <DateRangeFilter year={year} setYear={setYear} />
    </div>
  )
}

const LayeredNavigation: React.FC<Props> = ({}) => {
  return (
    <section className={classnames('px-8 pl__0', styles.wrapper)}>
      <LayeredNavigationTitle />
      <GetSortBy />
      <GetYearRange />
      <Space size={2} />
      <FilterGroups />
    </section>
  )
}

export default LayeredNavigation
