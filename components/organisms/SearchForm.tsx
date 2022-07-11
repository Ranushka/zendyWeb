import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import routs from 'lib/routs'
import { ButtonFab } from 'components/atoms'
import IconSearch from 'components/icons/IconSearch'
import IconClear from 'components/icons/IconClear'
import IconAdvanceSearch from 'components/icons/IconAdvanceSearch'
// import analyticEvent from 'analytics/events'
import { focusToSearchInput } from 'lib/helpers'
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
    const query = router.query && router.query.q
    const queryAuthor = router.query && router.query.author

    if (queryAuthor) {
      setSearchText(`author: ${queryAuthor.toString()}`)
    }

    if (query) {
      setSearchText(query.toString())
    }

    // if (router.pathname === '/search' && !router.query.q) {
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
          tabIndex={1}
          name="search_term_string"
          autoComplete="off"
          ref={searchInput}
          enterKeyHint="search"
          type="text"
          accessKey="/"
          placeholder={trans(`search_placeholder_d`)}
          className={classNames(
            'w-full h-12 rounded-full border border_nut4',
            'outline-4 outline-offset-2 pr-14 pl-6',
            'shadow hover:shadow-md active:border_pri6 focus:border_pri6',
            'appearance-none'
          )}
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
            // href="/search"
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
