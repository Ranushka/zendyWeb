import React from 'react'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import classnames from 'classnames'

import { useRouter } from 'next/router'

import useSearchResults from 'fetchHooks/useSearchResults'
import labelMapping from 'lib/labelMapping'
import { Space, CheckBox, ButtonFab } from 'components/atoms'
import { IconFilter, IconClose } from 'components/icons'
import useGlobal from 'context/GlobalContext'

// import { IconSavedSearch, IconNotifications } from 'components/icons'
import {
  ReadMore,
  DateRangeFilter,
  SortByFilter,
  FilterTitle
} from 'components/molecules'

type Props = {}

const LayeredNavigationTitle = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __layeredNavigationTitleLoading()
  }

  const totalResults = get(data, 'data.searchResults.totalResults', null)
  let totalResultsFormatted = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(totalResults)

  return (
    <div className="py-4">
      <h3 className="text-2xl text-gray-500 font-serif w-full">
        Refine search
      </h3>
      <small className="w-full text-right">
        {totalResultsFormatted}+ Results
      </small>
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
      <FilterItems items={item.facets} groupId={categoryLabel} />
    )

    return (
      <div key={id} className="mb-8">
        <FilterTitle title={labelMapping(item.categoryLabel)} />
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
    <div className="mb-8">
      <FilterTitle title="Sort by" />
      <SortByFilter />
    </div>
  )
}

const GetYearRange = () => {
  const [year, setYear] = React.useState('')

  return (
    <div className="mb-8">
      <FilterTitle title="Year range" />
      <DateRangeFilter year={year} setYear={setYear} />
    </div>
  )
}

const LayeredNavigation: React.FC<Props> = () => {
  const [state] = useGlobal()
  const { mobileFilterVisibility } = state
  const navClass = classnames(
    'left-0 bottom-0 z-20 overflow-y-scroll md:overflow-auto',
    'h-4/5 md:h-auto w-full md:w-3/12 pr-8 md:block md:relative',
    'bg-gray-50 md:bg-transparent p-8 md:p-4',
    mobileFilterVisibility ? 'text-gray-500 block fixed' : 'hidden'
  )
  return (
    <>
      <section className={navClass}>
        <div className="max-w-xs">
          <LayeredNavigationTitle />
          <GetSortBy />
          <GetYearRange />
          <FilterGroups />
        </div>
      </section>
      {mobileFilterVisibility && (
        <div className="fixed md:hidden h-full w-full top-0 left-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm" />
      )}
      <MobileFilterBtn />
    </>
  )
}

const MobileFilterBtn: React.FC<any> = () => {
  const [state, setState] = useGlobal()
  const { mobileFilterVisibility } = state

  const fabClass = classnames(
    'p-4 pointer rounded-full z-30 bg-orange-50 -mt-2',
    'fixed md:hidden right-1 top-20 shadow-md',
    mobileFilterVisibility && 'text-gray-500'
  )

  return (
    <ButtonFab
      title="Toggle selection mode"
      icon={mobileFilterVisibility ? <IconClose /> : <IconFilter />}
      classNames={fabClass}
      onClick={() => {
        setState({
          ...state,
          mobileFilterVisibility: !mobileFilterVisibility
        })
      }}
    />
  )
}

export default LayeredNavigation
