import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import { SearchResultItem } from 'components/molecules'
import { Space, ActionItem, ButtonFab } from 'components/atoms'
import {
  IconArrowDown,
  IconSelectionMode,
  IconSavedSearch,
  IconNotifications
} from 'components/icons'
import useSearchResults from 'fetchHooks/useSearchResults'
import useGlobal from 'context/GlobalContext'

const SearchResultActions = () => {
  const [state, setState] = useGlobal()
  const { selectionMode } = state

  return (
    <div className="flex__center px__3 pl__0 rounded__1 my__3 mt__0 mw__5">
      <ButtonFab
        title="Toggle selection mode"
        icon={<IconSelectionMode />}
        classNames={`pointer rounded__1 ${selectionMode && 'bg__nut4'}`}
        onClick={() => {
          setState({ ...state, selectionMode: !selectionMode })
        }}
      />
      {selectionMode && (
        <>
          <Space size={3} />
          <ActionItem text={'Select All'} href={'/'} className="mx__3" />
          <ActionItem
            text={'Export selected'}
            href={'/'}
            className="mx__2"
            disabled
          />
          <ActionItem
            text={'Add to library'}
            href={'/'}
            className="mx__2"
            disabled
          />
          <ActionItem
            text={'Open in new tabs'}
            href={'/'}
            className="mx__2"
            disabled
          />
        </>
      )}
      <div className="flex__left" />

      {!selectionMode && (
        <>
          <ActionItem
            className="color__primary"
            text={'Create alert'}
            onClick={() => {}}
            icon={<IconNotifications />}
          />
          <Space size={4} />
          <ActionItem
            className="color__primary"
            text={'Save search'}
            onClick={() => {}}
            icon={<IconSavedSearch />}
          />
        </>
      )}
    </div>
  )
}

const __searchResultLoading = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonSearchResult' + id} className="mw__5">
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
