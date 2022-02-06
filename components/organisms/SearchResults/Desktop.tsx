import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import { SearchResultItem } from 'components/molecules'
import { Space, ActionItem } from 'components/atoms'
import { IconArrowDown } from 'components/icons'
import useSearchResults from 'fetchHooks/useSearchResults'

const SearchResultActions = () => {
  return (
    <div className="flex">
      <div className="flex__left" />
      <ActionItem
        text={'Sort by : Relevance'}
        href={'/'}
        icon={<IconArrowDown />}
      />
      <Space size={3} />
      <ActionItem text={'Bulk actions'} href={'/'} icon={<IconArrowDown />} />
    </div>
  )
}

const __searchResultLoading = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonSearchResult' + id} className="mw__4">
      <Space size={3} />
      <Skeleton height={30} />
      <Space size={2} />
      <div className="flex">
        <Skeleton height={10} width={60} />
        <Space size={4} />
        <Skeleton height={10} width={60} />
      </div>
      <Space size={2} />
      <Skeleton count={5} />
      <Space size={2} />
      <div className="flex">
        <Skeleton height={10} width={60} />
        <Space size={4} />
        <Skeleton height={10} width={60} />
        <Space size={4} />
        <Skeleton height={10} width={60} />
      </div>
      <Space size={5} />
    </article>
  ))
}

const __noResultData = () => {
  return (
    <h2 className="text__center">
      <div className="gaps__6"></div>
      Oops...!, Unfortunately we could not found more results.
      <div className="gaps__6"></div>
    </h2>
  )
}

const __resultData = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __searchResultLoading()
  }
  const searchResults = get(data, 'data.searchResults', null)

  if (searchResults) {
    return <ResultsWithData {...searchResults} />
  }

  return __noResultData()
}

const ResultsWithData: React.FC<any> = ({ results }) => {
  return (
    <div>
      {results.map((data, id) => {
        return <SearchResultItem {...data} key={`searchResult${id}`} />
      })}
    </div>
  )
}

const DesktopSearchResults: React.FC<any> = () => {
  return (
    <>
      <section className={classnames('block text__left')}>
        <Space size={4} />
        {SearchResultActions()}
        {__resultData()}
      </section>
      <div className="flex__left" />
    </>
  )
}

export default DesktopSearchResults
