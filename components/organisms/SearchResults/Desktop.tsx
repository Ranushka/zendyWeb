import React from 'react'
import classnames from 'classnames'
import Mark from 'mark.js'
import { SearchResultItem } from 'components/molecules'
import { Space, ActionItem } from 'components/atoms'
import { IconArrowDown } from 'components/icons'
import styles from './desktop.module.scss'
import useSearchResults from 'fetchHooks/useSearchResults'
import useAuthorDetails from 'fetchHooks/useAuthorDetails'
import Skeleton from 'react-loading-skeleton'

const SearchResultActions = () => {
  return (
    <div className="flex">
      <div className="flex__left"></div>
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
    <article key={'skeletonSearchResult' + id} className="mw__4 ml__0">
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

  if (data.results && data.results.length) {
    return <ResultsWithData results={data.results} />
  }

  return __noResultData()
}

const ResultsWithData: React.FC<any> = ({ results }) => {
  const searchResultContainer = React.useRef()

  React.useEffect(() => {
    let mainSearch = document.getElementById('mainSearch') as HTMLInputElement
    let mainSearchValue = mainSearch.value

    if (mainSearchValue) {
      var markInstance = new Mark(searchResultContainer.current)
      markInstance.mark(mainSearchValue)
    }
  }, [results])

  return (
    <div ref={searchResultContainer}>
      {/* {__KeywordsList(keywords)} */}
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
