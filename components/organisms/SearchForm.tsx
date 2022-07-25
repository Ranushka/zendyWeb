import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import routs from 'helpers/routs'
import { ButtonFab } from 'components/atoms'
import IconSearch from 'components/icons/IconSearch'
import IconClear from 'components/icons/IconClear'
import IconAdvanceSearch from 'components/icons/IconAdvanceSearch'
// import analyticEvent from 'analytics/events'
import { focusToSearchInput } from 'helpers/utils'
import { setPersonalizedKeywords } from 'helpers/localStorage'
import classNames from 'classnames'

type Props = {
  id: string
}

const SearchForm: React.FC<Props> = ({ id }) => {
  const searchInput = React.useRef(null)
  const trans = useTranslations('header')
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const isHomePage = router.pathname === routs.index
  const isMobile = useMediaQuery({
    query: '(max-width: 786px)'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target[0].blur()
    setPersonalizedKeywords({ subjects: [searchText] })
    router.push({
      pathname: routs.search,
      query: { q: searchText }
    })
  }

  const clearInput = () => {
    setSearchText('')
    searchInput.current.focus()
  }

  const onClickSearchBtn = () => {
    router.push({
      pathname: routs.search,
      query: searchText && { q: searchText }
    })
  }

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

    if (!router.query.q && !isMobile) {
      searchInput.current.focus()
    }
  }, [router, isMobile])

  React.useEffect(() => {
    window.addEventListener('keydown', focusToSearchInput)

    return () => {
      window.removeEventListener('keydown', focusToSearchInput)
    }
  }, [router])

  return (
    <div className="w-full max-w-2xl flex">
      <form className="relative w-full" onSubmit={handleSubmit}>
        <input
          id={id}
          tabIndex={0}
          name="search_term_string"
          autoComplete="off"
          ref={searchInput}
          enterKeyHint="search"
          type="text"
          accessKey="/"
          placeholder={trans(`search_placeholder_d`)}
          className={classNames(
            'w-full bg_white h-12 rounded-full border-2',
            'outline-none pr-14 pl-6',
            // 'outline-none pr-14 pl-6 shadow active:shadow-md hover:shadow-md',
            'shadow-sm active:shadow-md hover:shadow-md',
            'border_nut4 active:border_pri5 focus:border_pri5',
            'appearance-none'
          )}
          style={{ borderWidth: 1.5 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="inline-flex absolute right-0">
          {searchText && (
            <ButtonFab
              dataName="BtnAdvanceSearchAdd"
              classNames="rounded-full px-0 py-3 block"
              icon={<IconClear />}
              onClick={clearInput}
            />
          )}
          <ButtonFab
            dataName="BtnAdvanceSearchAdd"
            tabindex={-1}
            title="Search"
            onClick={onClickSearchBtn}
            icon={<IconSearch className="text_pri6 hover:text_pri7" />}
            classNames="rounded-full m-0.5 px-3 py-2.5 block hover:text_pri6 active:scale-95"
          />
        </div>
      </form>

      {!isHomePage && (
        <ButtonFab
          dataName="BtnAdvanceSearch"
          title="To perform a complex search"
          onClick={() => {
            router.push({
              pathname: routs.search,
              query: { ...router.query, aq: true }
            })
          }}
          icon={<IconAdvanceSearch className="text_nut4" />}
          classNames="rounded-full m-0.5 px-3 w-12 block hover:text_nut7 active:scale-95 flex items-center"
        />
      )}
    </div>
  )
}

export default SearchForm
