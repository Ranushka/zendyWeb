import React from 'react'
import classnames from 'classnames'
import useSearchResults from 'fetchHooks/useSearchResults'
import Skeleton from 'react-loading-skeleton'
import styles from './mobile.module.scss'
import { ActionItem, Space } from 'components/atoms'
import { IconArrowDown, IconSavedSearch } from 'components/icons'
import { SearchResultItem } from 'components/molecules'

const SearchResultActions = () => {
  return (
    <div className={classnames('flex py__3', styles.searchResultActions)}>
      <ActionItem
        className={styles.saveSearch}
        text={''}
        href={'/'}
        icon={<IconSavedSearch />}
      />
      <ActionItem text={'Advanced Search'} href={'/advanced_search'} />
      <div className="flex__left"></div>
      <ActionItem text={'Export'} href={'/'} icon={<IconArrowDown />} />
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
    <h2 className="text-center">
      <div className="gaps__6"></div>
      Oops...!, Unfortunately we could not found more results.
      <div className="gaps__6"></div>
    </h2>
  )
}

const __KeywordsList = (keywords: []) => {
  const hasKeywords = keywords.length > 1

  return (
    hasKeywords && (
      <div
        className={classnames(
          styles.keyWordsWrapper,
          'py-2 pt__0 px-4 overflowScroll pull__r3 pull__l3'
        )}
      >
        <span className="mute">keywords </span>
        {keywords.map<React.ReactNode>((name, id) => (
          <ActionItem
            className="link__small px-4 py-2 mx__1 stage__1 rounded__1 block__inline"
            key={id}
            text={name}
            href={`/search?q=${name}`}
          />
        ))}
      </div>
    )
  )
}

const __resultData = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __searchResultLoading()
  }

  if (data.results && data.results.length) {
    return <ResultsWithData />
  }

  return __noResultData()
}

const ResultsWithData: React.FC<any> = () => {
  const {
    data: { keywords, results }
  } = useSearchResults()

  return (
    <div>
      {__KeywordsList(keywords)}
      {results.map((data, id) => {
        return <SearchResultItem {...data} key={`searchResult${id}`} />
      })}
    </div>
  )
}

const MobileSearchResults: React.FC<any> = () => {
  return (
    <section className={'mw__4 block text__left'}>
      {SearchResultActions()}
      {__resultData()}
    </section>
  )
}

export default MobileSearchResults
