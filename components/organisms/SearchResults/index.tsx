import React from 'react'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import { SearchResultItem } from 'components/molecules'
import { Space, ActionItem, ButtonFab } from 'components/atoms'
import {
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
    <div className="flex items-center px-4 rounded-md my-4 max-w-4xl mx-auto">
      <ButtonFab
        title="Toggle selection mode"
        icon={<IconSelectionMode />}
        classNames={`p-2 pointer rounded-md ${selectionMode &&
          'text-gray-500'}`}
        onClick={() => {
          setState({ ...state, selectionMode: !selectionMode })
        }}
      />
      {selectionMode && (
        <>
          <ActionItem text={'Select All'} href={'/'} className="mx-4" />
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
      <div className="hidden md:block ml-auto" />

      {!selectionMode && (
        <>
          <ActionItem
            type="btn__default"
            text={'Create alert'}
            onClick={() => {}}
            icon={<IconNotifications />}
          />

          <ActionItem
            type="btn__default"
            // className="ml-4"
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
    <h2 className="text-center">
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
    <section className="w-full md:w-9/12">
      {SearchResultActions()}
      {__resultData()}
    </section>
  )
}

export default DesktopSearchResults
