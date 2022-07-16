import React from 'react'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import classnames from 'classnames'
import { SearchResultItem } from 'components/organisms'
import { ActionLink, ActionBtn, ButtonFab, Pagination } from 'components/atoms'
import {
  IconSelectionMode,
  IconSavedSearch,
  IconNotifications
} from 'components/icons'
import useSearchResults from 'fetchHooks/useSearchResults'
import useGlobal from 'context/GlobalContext'

const SearchResultActions = () => {
  const [{ selectionMode, setGlobalState }] = useGlobal()

  return (
    <div className="max-w-4xl">
      <div className="flex items-center rounded-md mb-4 md:mt-4 mr-10 md:mr-0 whitespace-nowrap overflow-y-scroll hideScrollBar">
        <ButtonFab
          dataName="ToggleSelectionMode"
          title="Toggle selection mode"
          icon={<IconSelectionMode />}
          classNames={classnames(
            'p-2 pointer rounded-md',
            selectionMode && 'text_nut5'
          )}
          onClick={() => {
            setGlobalState({ selectionMode: !selectionMode })
          }}
        />
        {selectionMode && (
          <>
            <ActionLink
              dataName="SelectAll"
              text={'Select All'}
              href={'/'}
              className="mx-4"
            />
            <ActionLink
              dataName="ExportSelected"
              text={'Export selected'}
              href={'/'}
              className="mx-4"
              disabled
            />
            <ActionLink
              dataName="AddToLibrary"
              text={'Add to library'}
              href={'/'}
              className="mx-4"
              disabled
            />
            <ActionLink
              dataName="OpenInNewTab"
              text={'Open in new tabs'}
              href={'/'}
              className="mx-4"
              disabled
            />
          </>
        )}
        <div className="hidden md:block ml-auto" />

        {!selectionMode && (
          <>
            <ActionBtn
              dataName="BtnCreateAlert"
              type="btn__default"
              text={'Create alert'}
              onClick={() => {}}
              icon={<IconNotifications />}
            />

            <ActionBtn
              type="btn__default"
              dataName="BtnSaveSearch"
              text={'Save search'}
              onClick={() => {}}
              icon={<IconSavedSearch />}
            />
          </>
        )}
      </div>
    </div>
  )
}

const __searchResultLoading = () => {
  return [1, 2, 3].map((id) => (
    <article
      key={'skeletonSearchResult' + id}
      className="items-center rounded-md mb-4 max-w-4xl bg_white shadow-sm p-4"
    >
      <div className="flex">
        <Skeleton height={10} width={60} className="mr-2" />
        <Skeleton height={10} width={60} className="mr-2" />
        <Skeleton height={10} width={60} />
      </div>
      <Skeleton height={40} />
      <div className="flex my-2">
        <Skeleton height={10} width={60} className="mr-2" />
        <Skeleton height={10} width={60} />
      </div>
      <Skeleton count={5} height={20} />
      <div className="flex mt-4">
        <Skeleton height={10} width={40} className="mr-2" />
        <Skeleton height={10} width={80} className="mr-2" />
        <Skeleton height={10} width={80} className="mr-2" />
      </div>
      <div className="flex mt-2">
        <Skeleton height={10} width={40} className="mr-2" />
        <Skeleton height={10} width={80} className="mr-2" />
      </div>
      <div className="flex mt-2">
        <Skeleton height={10} width={40} className="mr-2" />
        <Skeleton height={10} width={90} className="mr-2" />
        <Skeleton height={10} width={60} className="mr-2" />
      </div>
    </article>
  ))
}

const __noResultData = () => {
  return (
    <div className="text-center py-8">
      Oops...!, Unfortunately we could not found more results.
    </div>
  )
}

const __resultData = () => {
  const { data } = useSearchResults()

  if (!data) {
    return __searchResultLoading()
  }

  const searchResults = get(data, 'data.searchResults', null)

  if (searchResults.totalResults) {
    return <ResultsWithData {...searchResults} />
  }

  return __noResultData()
}

const ResultsWithData: React.FC<any> = ({ results, totalResults }) => {
  const [page, setMyPage] = React.useState(1) // this an example using hooks
  const setPage = (e, p) => {
    setMyPage(p)
  }

  return (
    <div>
      {results.map((data, id) => {
        return <SearchResultItem {...data} key={`searchResult${id}`} />
      })}

      <Pagination
        page={page}
        setPage={setPage}
        total={totalResults}
        perPage={10}
      />
    </div>
  )
}

const SearchResults: React.FC<any> = () => {
  return (
    <section className="w-full md:w-9/12 z-0">
      {SearchResultActions()}
      {__resultData()}
    </section>
  )
}

export default SearchResults
