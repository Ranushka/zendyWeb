import React, { useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import styles from './index.module.scss'
import { ButtonFab } from 'components/atoms'
import { IconSearch, IconClear, IconAdvanceSearch } from 'components/icons'
import DeviceTypeContext from 'context/DeviceTypeContext'
import useGlobal from 'context/GlobalContext'
import { attributes as Data } from 'data/header.md'

type Props = {
  id?: string
}

const SearchForm: React.FC<Props> = ({ id = 'search' }) => {
  const searchInput = React.useRef(null)
  const trans = useTranslations('header')
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const [state, setState] = useGlobal()
  const { isMobile } = React.useContext(DeviceTypeContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    router.push({
      pathname: '/search',
      query: { q: searchText }
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
  }, [router])

  return (
    <form className="block relative flex__inline" onSubmit={handleSubmit}>
      <div className="absolute">
        <ButtonFab
          href="/search"
          icon={<IconSearch />}
          classNames={'rounded ' + styles.searchBtn}
        />
      </div>
      <input
        id={id}
        name="search_term_string"
        autoComplete="off"
        ref={searchInput}
        type="search"
        accessKey="s"
        placeholder={trans(`search_placeholder_${isMobile ? 'm' : 'd'}`)}
        className={classnames('bg__white', styles.searchInput)}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className={styles.actions}>
        {searchText && <ButtonFab icon={<IconClear />} onClick={clearInput} />}
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
          classNames={'rounded ' + styles.searchAdvancedBtn}
        />
      </div>
    </form>
  )
}

export default SearchForm
