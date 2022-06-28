import React from 'react'
import Skeleton from 'react-loading-skeleton'
import get from 'lodash/get'
import classnames from 'classnames'
import { SearchResultItem } from 'components/organisms'
import { ActionItem, ButtonFab, Pagination } from 'components/atoms'
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
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center rounded-md mb-4 md:mt-4 mr-10 md:mr-0 whitespace-nowrap overflow-y-scroll hideScrollBar">
        <ButtonFab
          title="Toggle selection mode"
          icon={<IconSelectionMode />}
          classNames={classnames(
            'p-2 pointer rounded-md',
            selectionMode && 'text_nut5'
          )}
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
              className="mx-4"
              disabled
            />
            <ActionItem
              text={'Add to library'}
              href={'/'}
              className="mx-4"
              disabled
            />
            <ActionItem
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
    </div>
  )
}

const __searchResultLoading = () => {
  return [1, 2, 3].map((id) => (
    <article
      key={'skeletonSearchResult' + id}
      className="items-center rounded-md mb-4 max-w-4xl bg_white shadow-sm mx-auto p-4"
    >
      <div className="flex">
        <Skeleton height={10} width={60} className="mr-2" />

        <Skeleton height={10} width={60} />
      </div>

      <Skeleton height={30} />

      <div className="flex">
        <Skeleton height={10} width={60} className="mr-2" />

        <Skeleton height={10} width={60} />
      </div>

      <Skeleton count={5} />

      <div className="flex">
        <Skeleton height={10} width={60} className="mr-2" />

        <Skeleton height={10} width={60} className="mr-2" />

        <Skeleton height={10} width={60} className="mr-2" />
      </div>
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

const ResultsWithData: React.FC<any> = ({ results, totalResults }) => {
  const [page, setMyPage] = React.useState(1) // this an example using hooks
  const setPage = (e, p) => {
    setMyPage(p)
  }

  return (
    <div>
      {results.map((data, id) => {
        console.log('resultsData--->', data)

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
