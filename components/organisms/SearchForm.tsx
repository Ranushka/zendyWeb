import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { ButtonFab } from 'components/atoms'
import { IconSearch, IconClear, IconAdvanceSearch } from 'components/icons'
import useGlobal from 'context/GlobalContext'
import { focusToSearchInput } from 'lib/helpers'
import classNames from 'classnames'

type Props = {
  id?: string
}

const SearchForm: React.FC<Props> = ({ id = 'search' }) => {
  const searchInput = React.useRef(null)
  const trans = useTranslations('header')
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const [state, setState] = useGlobal()

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target[0].blur()

    router.push({
      pathname: '/search',
      query: { q: searchText }
    })
  }

  // const onClick = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()

  //   router.push({
  //     pathname: '/search'
  //   })
  // }

  const clearInput = () => {
    setSearchText('')
    searchInput.current.focus()
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
    if (!router.query.q) {
      searchInput.current.focus()
    }
  }, [router])

  React.useEffect(() => {
    window.addEventListener('keydown', focusToSearchInput)

    return () => {
      window.removeEventListener('keydown', focusToSearchInput)
    }
  }, [router])

  return (
    <div className="w-full max-w-2xl">
      <form className="block relative flex__inline" onSubmit={handleSubmit}>
        <div className="absolute out">
          <ButtonFab
            tabindex={-1}
            href="/search"
            icon={<IconSearch className="text_pri" />}
            classNames="rounded-full m-0.5 px-3 py-2.5 block hover:bg_nut2 active:scale-95"
          />
        </div>
        <input
          id={id}
          tabIndex={1}
          name="search_term_string"
          autoComplete="off"
          ref={searchInput}
          type="search"
          accessKey="s"
          placeholder={trans(`search_placeholder_d`)}
          className={classNames(
            'w-full h-12 rounded-full border border_nut4 px-14',
            'outline-4 outline-offset-2',
            'hover:shadow active:border_pri6 focus:border_pri6',
            'appearance-none bg__nut0'
          )}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="inline-flex absolute right-0">
          {searchText && (
            <ButtonFab
              classNames="rounded-full px-3 py-3 block"
              icon={<IconClear />}
              onClick={clearInput}
            />
          )}
          <ButtonFab
            title="To perform a complex search"
            onClick={() => {
              setState({
                ...state,
                toggleAdvanceSearch: true
              })
            }}
            icon={<IconAdvanceSearch className="text_nut4" />}
            classNames="rounded-full m-0.5 px-3 py-2.5 block hover:bg_nut2 active:scale-95"
          />
        </div>
        {/* {router.pathname !== '/search' && (
          <div
            className={classNames(
              'w-full h-12 absolute top-0 cursor-pointer',
              'hover:shadow-md rounded-full border border_nut4 hover:border_nut4'
            )}
            onClick={(e) => onClick(e)}
          ></div>
        )} */}
      </form>
    </div>
  )
}

export default SearchForm
