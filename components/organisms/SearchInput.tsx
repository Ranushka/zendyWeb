import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react'
import routs from 'helpers/routs'
import { getPersonalizedKeywords } from 'helpers/localStorage'
import useRecommendation from 'fetchHooks/useRecommendation'
import IconSearchHistory from 'components/icons/IconSearchHistory'
import { setPersonalizedKeywords } from 'helpers/localStorage'

/* __DOC

SearchInput

DOC__ */

const prepSearchResultSuggestion = (data) => {
  return (
    data?.map((a) => {
      return { type: 'suggestion', text: a.facetLabel }
    }) || []
  )
}

const SearchInput = ({
  id,
  searchInputRef,
  placeholder,
  setSearchText,
  searchText
}) => {
  const [dirty, setDirty] = useState(false)
  const [active, setActive] = useState(0)
  const [isShow, setIsShow] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const hasSuggestions = suggestions.length > 0
  const isMobile = useMediaQuery({
    query: '(max-width: 786px)'
  })

  const { data: recData } = useRecommendation()

  const router = useRouter()
  const isHomePage = router.pathname === routs.index
  const rq = router.query

  const qPublisher: string = rq.publisher?.toString().replace(/_/g, ' ')

  React.useEffect(() => {
    const asPath = router.asPath
    const query = router.query && router.query.q
    const queryAuthor = router.query && router.query.author

    if (queryAuthor) {
      setSearchText(`author: ${queryAuthor.toString()}`)
    }

    /* To stop the query going to search box */
    const isNotInfoPanel = !asPath.match(
      /\/publisher\/|\/subject\/|\/journal\//
    )

    if (query && isNotInfoPanel) {
      setSearchText(query.toString())
    }

    if (!router.query.q && !isMobile && isHomePage) {
      searchInputRef.current.focus()
    }
  }, [router, isMobile, searchInputRef, setSearchText, isHomePage])

  React.useEffect(() => {
    const searchHistory = getPersonalizedKeywords()
    const searchHistorySubjects =
      searchHistory?.subjects.map((a) => {
        return { type: 'history', text: a }
      }) || []

    const searchWithInPub =
      qPublisher && searchText
        ? [{ type: 'publisher', text: searchText, by: qPublisher }]
        : []

    const journals = prepSearchResultSuggestion(recData?.journalTitleFull)
    const publishers = prepSearchResultSuggestion(recData?.publishersFull)
    const subjects = prepSearchResultSuggestion(recData?.subSubjectsFull)

    const suggestionList = [
      ...searchWithInPub,
      ...searchHistorySubjects,
      ...journals,
      ...publishers,
      ...subjects
    ]

    const filteredSuggestions = suggestionList.filter((item) => {
      return item?.text?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1
    })
    const suggestionsToShow = filteredSuggestions.slice(0, 5)

    setSuggestions(suggestionsToShow)
    setActive(0)
  }, [recData, searchText, qPublisher])

  const onChange = () => {
    setDirty(true)
    setIsShow(true)
  }

  const onBlur = () => {
    setIsShow(false)
  }

  const onFocus = () => {
    setActive(0)
    setIsShow(true)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      /* enter key */
      doSearch()

      return
    } else if (e.keyCode === 38) {
      /* up arrow */
      if (active === 0) return null
      setActive(active - 1)
      e.preventDefault()

      return
    } else if (e.keyCode === 40) {
      /*  down arrow */
      if (active === suggestions.length) return null
      setActive(active + 1)
      e.preventDefault()

      return
    }
  }

  const doSearch = (clickIndex = null) => {
    const selectedSuggestionItem = clickIndex !== null ? clickIndex : active - 1
    const selectedSuggestions = suggestions[selectedSuggestionItem]
    let query = { q: searchText }

    if (selectedSuggestions?.type) {
      const resultType = selectedSuggestions.type

      if (resultType === 'publisher') {
        const pubName = selectedSuggestions.by
        query['publisher'] = pubName
      }
    }

    if (selectedSuggestions?.text) {
      query['q'] = selectedSuggestions.text
    }

    searchText && setPersonalizedKeywords({ subjects: [searchText] })

    setIsShow(false)

    router.push({
      pathname: routs.search,
      query: query
    })
  }

  const renderAutocomplete = () => {
    return suggestions.map((suggestion, index) => {
      const className = `cursor-pointer flex items-center px-2 py-2 w-full ${
        index + 1 === active ? 'bg_pri1' : 'bg_white'
      }`

      return (
        <div key={suggestion + index} onMouseEnter={() => setActive(index + 1)}>
          <div className={className} onClick={() => doSearch(index)}>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                {suggestion.type === 'history' && (
                  <IconSearchHistory className="text_nut4 mr-2 w-4" />
                )}
                <div dangerouslySetInnerHTML={{ __html: suggestion.text }} />
              </div>
              {suggestion.type === 'publisher' && (
                <span className="bg_nut2 rounded px-3 py-0.5 text-xs">
                  Search content by <b>{qPublisher}</b>
                </span>
              )}
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section className="z-30" key={id}>
      <div className="-mb-1 w-full px-1">
        <input
          id={id}
          ref={searchInputRef}
          placeholder={placeholder}
          name="search_term_string"
          enterKeyHint="search"
          accessKey="/"
          type="text"
          className={classNames(
            'rounded-3xl border-2 focus:shadow',
            'bg-tr border_pri5 h-12 w-full',
            'relative z-10 appearance-none pr-14 pl-6 outline-none',
            hasSuggestions && isShow ? 'bg_white' : 'bg-transparent'
          )}
          autoComplete="off"
          onFocus={onFocus}
          onChange={(e) => {
            setSearchText(e.target.value)
            onChange()
          }}
          onKeyDown={onKeyDown}
          value={searchText}
        />
      </div>
      {dirty && isShow && hasSuggestions && (
        <div className="absolute w-full">
          <div
            className={classNames(
              'autocomplete bg_white mx-4 rounded-2xl rounded-t-none  shadow-md',
              'border_pri1 overflow-hidden border'
            )}
          >
            {renderAutocomplete()}
          </div>
        </div>
      )}
      {dirty && isShow && (
        <div className="autocomplete_overlay" onClick={onBlur} />
      )}
    </section>
  )
}

export default SearchInput
