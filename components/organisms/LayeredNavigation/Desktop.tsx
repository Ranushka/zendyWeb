import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import styles from './desktop.module.scss'

import useSearchResults from 'fetchHooks/useSearchResults'
import labelMapping from 'data/labelMapping'
import { Space, CheckBox, ActionItem } from 'components/atoms'
import { IconSavedSearch } from 'components/icons'
import { ReadMore } from 'components/molecules'

type Props = {}

const LayeredNavigationTitle = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __layeredNavigationTitleLoading()
  }

  const totalResults = get(data, 'data.searchResults.totalResults', null)
  let totalResultsFormated = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(totalResults)

  return (
    <div className="flex flex__center">
      <h3 className="mute">Narrow by</h3>
      <div className="flex__left" />
      <small className="mute"> {totalResultsFormated}+ Results</small>
    </div>
  )
}

const LayeredNavigationActions = () => {
  return (
    <div>
      <ActionItem text={'Save search'} href={'/'} icon={<IconSavedSearch />} />
      <Space size={3} />
    </div>
  )
}

const FilterItems = (items) => {
  return items.map((item, id) => (
    <CheckBox
      className="py__1"
      key={id}
      id={item.id}
      name={item.facetLabel}
      label={labelMapping(item.facetLabel)}
    />
  ))
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
    const accordionContent = (
      <div>
        <Space size={2} />
        {FilterItems(item.facets)}
      </div>
    )

    return (
      <div key={id}>
        <h5 className="color__nut6">{labelMapping(item.categoryLabel)}</h5>
        <ReadMore height={208} id={id} content={accordionContent} />
        <Space size={3} />
      </div>
    )
  })
}

const LayeredNavigation: React.FC<Props> = ({}) => {
  return (
    <>
      <section className={classnames('px__4 pl__0', styles.wrapper)}>
        {LayeredNavigationActions()}
        {LayeredNavigationTitle()}
        <Space size={3} />
        {FilterGroups()}
      </section>
    </>
  )
}

export default LayeredNavigation
