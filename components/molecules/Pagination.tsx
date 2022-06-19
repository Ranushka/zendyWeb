import React from 'react'
import classnames from 'classnames'

const Pagination = ({
  total,
  page = 1,
  perPage = 10,
  numOfLinks = 5,
  hidePrevNext = false,
  hideFirstLast = false,

  linksProps = {},
  activeProps = {},

  prevNextProps = {},
  nextProps = {},
  prevProps = {},
  prevContent = '',
  nextContent = '',

  firstLastProps = {},
  firstProps = {},
  lastProps = {},
  firstContent = '',
  lastContent = '',

  setPage = (...args: any) => {
    console.log(args)
  }
}) => {
  const firstPage = 1
  const lastPage = Math.ceil(total / perPage)
  let firstVisiblePage = Math.max(
    page - Math.floor((numOfLinks - 1) / 2),
    firstPage
  )
  const lastVisiblePage = Math.min(firstVisiblePage - 1 + numOfLinks, lastPage)
  firstVisiblePage = Math.max(lastVisiblePage + 1 - numOfLinks, firstPage)
  page = numOfLinks
    ? Math.max(Math.min(lastVisiblePage, page), firstVisiblePage)
    : Math.max(Math.min(lastPage, page), firstPage)

  const isLastPage = page === lastPage
  const lastPageStyle = classnames(
    'm-2 p-2 rounded w-10',
    isLastPage ? 'shadow-none bg-transparent' : 'shadow-sm bg_white'
  )
  const isFirstPage = page === 1
  const firstPageStyle = classnames(
    'm-2 p-2 rounded w-10',
    isFirstPage ? 'shadow-none bg-transparent' : 'shadow-sm bg_white'
  )

  return (
    <div className="flex justify-around">
      {hideFirstLast ? (
        ''
      ) : (
        <button
          className={firstPageStyle}
          onClick={(e) => setPage(e, firstPage)}
          disabled={isFirstPage}
          aria-label="First Page"
          {...firstLastProps}
          {...firstProps}
        >
          {firstContent ? <div>{'=|'}</div> : <div>{'|='}</div>}
        </button>
      )}

      {hidePrevNext ? (
        ''
      ) : (
        <button
          className={firstPageStyle}
          onClick={(e) => setPage(e, page - 1)}
          disabled={isFirstPage}
          aria-label="Previous Page"
          {...prevNextProps}
          {...prevProps}
        >
          {prevContent ? <div>{'=>'}</div> : <div>{'<='}</div>}
        </button>
      )}

      {Array(lastVisiblePage - firstVisiblePage + 1)
        .fill([])
        .map((v, i) => (
          <button
            className={classnames(
              'm-2 p-2 rounded w-10 shadow-sm bg_white',
              page === i + firstVisiblePage
                ? 'text_pri6 border border-orange-200'
                : 'text_nut5 border border-gray-200'
            )}
            onClick={(e) => setPage(e, i + firstVisiblePage)}
            key={i}
            {...linksProps}
            {...(page === i + firstVisiblePage ? activeProps : {})}
          >
            {i + firstVisiblePage}
          </button>
        ))}
      {hidePrevNext ? (
        ''
      ) : (
        <button
          className={lastPageStyle}
          disabled={isLastPage}
          aria-label="Previous Page"
          onClick={(e) => setPage(e, page + 1)}
          {...prevNextProps}
          {...nextProps}
        >
          {nextContent ? <div>{'<='}</div> : <div>{'=>'}</div>}
        </button>
      )}

      {hideFirstLast ? (
        ''
      ) : (
        <button
          onClick={(e) => setPage(e, lastPage)}
          disabled={isLastPage}
          aria-label="Last Page"
          className={lastPageStyle}
          {...firstLastProps}
          {...lastProps}
        >
          {lastContent ? <div>{'|='}</div> : <div>{'=|'}</div>}
        </button>
      )}
    </div>
  )
}

export default Pagination
