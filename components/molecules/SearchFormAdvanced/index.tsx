import React, { useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import { ButtonFab, Space, ActionItem } from 'components/atoms'
import { IconSearch, IconAdd } from 'components/icons'
import DeviceTypeContext from 'context/DeviceTypeContext'
import { attributes as Data } from 'data/header.md'

type Props = {
  id?: string
}

const SearchFormAdvanced: React.FC<Props> = ({ id = 'search' }) => {
  const searchInput = React.useRef(null)
  const [name, setName] = useState('')
  const [searchList, setSearchList] = useState([''])
  const router = useRouter()
  const { isMobile } = React.useContext(DeviceTypeContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    router.push({
      pathname: '/search',
      query: { q: name },
    })
  }

  React.useEffect(() => {
    const query = router.query && router.query.q
    const queryAuthor = router.query && router.query.author

    if (queryAuthor) {
      setName(`author: ${queryAuthor.toString()}`)
    }

    if (query) {
      const hasMultipalSearchOnUrl = query
        .toString()
        .match(/\(.*?\)/g)
        .map((x) => x.replace(/[()]/g, ''))

      if (hasMultipalSearchOnUrl) {
        setSearchList(() => [...hasMultipalSearchOnUrl])
      }
    }
  }, [router])

  function searchBox(index, data) {
    const isFirst = index === 0

    const [keyword, operator, scope] = data.split('|')

    return (
      <article className="flex__center relative px__2">
        {!isFirst && (
          <select
            className={styles.operator}
            name="operator"
            id="operator"
            value={operator}
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
            <option value="NOT">NOT</option>
          </select>
        )}
        <input
          id={id}
          name="search_term_string"
          autoComplete="off"
          ref={searchInput}
          type="search"
          accessKey="s"
          placeholder={
            isMobile ? Data.search_placeholder_m : Data.search_placeholder_d
          }
          className={classnames(
            'bg__white',
            styles.searchInput,
            isFirst && styles.searchInputFirst
          )}
          value={keyword}
          onChange={(e) => setName(e.target.value)}
        />
        <select className={styles.scope} name="scope" id="scope" value={scope}>
          <option value="keyword">keyword</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="subject">subject</option>
          <option value="journal">journal</option>
        </select>
      </article>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={'flex__center ' + styles.advancedSearchWrapper}
    >
      {searchList.map((data, index) => searchBox(index, data))}

      <ButtonFab
        onClick={() => {
          setSearchList(() => [...searchList, ''])
        }}
        icon={<IconAdd />}
        classNames={'stage__1 px__2 mx__2 pointer'}
      />
      <Space size={2} />
      <ActionItem
        icon={<IconSearch />}
        text={'Search'}
        onClick={() => {}}
        type={'btn__primary'}
      />
    </form>
  )
}

export default SearchFormAdvanced