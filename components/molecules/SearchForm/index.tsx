import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import styles from './index.module.scss'
import { ButtonFab } from 'components/atoms'
import { IconSearch, IconClear, IconAdvanceSearch } from 'components/icons'
import useGlobal from 'context/GlobalContext'

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

    router.push({
      pathname: '/search',
      query: { q: searchText }
    })
  }

  const onClick = (e) => {
    if (router.pathname === '/search') return
    e.preventDefault()

    router.push({
      pathname: '/search'
    })
  }

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

    if (router.pathname === '/search') {
      searchInput.current.focus()
    }
  }, [router])

  return (
    <div className="w-full max-w-2xl" onClick={(e) => onClick(e)}>
      <form className="block relative flex__inline" onSubmit={handleSubmit}>
        <div className="absolute ">
          <ButtonFab
            href="/search"
            icon={<IconSearch />}
            classNames="rounded-full px-4 py-3 block active:bg-slate-400 hover:bg-slate-300"
          />
        </div>
        <input
          id={id}
          name="search_term_string"
          autoComplete="off"
          ref={searchInput}
          type="search"
          accessKey="s"
          placeholder={trans(`search_placeholder_d`)}
          className="w-full h-12 rounded-full border border-slate-400 px-14 outline-blue-200 outline-1 outline-offset-4 appearance-none hover:shadow-md active:shadow-md focus:shadow-md"
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
          <div className={styles.separator} />
          <ButtonFab
            title="To perfome a complex search"
            onClick={() => {
              setState({
                ...state,
                toggleAdvanceSearch: true
              })
            }}
            icon={<IconAdvanceSearch />}
            classNames="rounded-full px-4 py-3 block active:bg-slate-400 hover:bg-slate-300"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
