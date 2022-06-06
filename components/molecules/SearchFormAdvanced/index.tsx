import React, { useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import { ButtonFab, Space, ActionItem } from 'components/atoms'
import { IconSearch, IconAdd } from 'components/icons'

type Props = {
  id?: string
}

const scopeList = ['keyword', 'title', 'author', 'subject', 'journal']

const SearchFormAdvanced: React.FC<Props> = () => {
  const searchInput = React.useRef(null)
  const [name, setName] = useState('')
  const [searchList, setSearchList] = useState([''])
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    router.push({
      pathname: '/search',
      query: { q: name }
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

  return (
    <form
      onSubmit={handleSubmit}
      className={'flex items-center flex__wrap ' + styles.advancedSearchWrapper}
    >
      {searchList.map((data, index) => {
        return (
          <SearchBox
            key={index}
            index={index}
            searchInput={searchInput}
            data={data}
          />
        )
      })}

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

const SearchBox: React.FC<any> = ({ index, data, searchInput }) => {
  const isFirst = index === 0

  const [keyword, operator, scope] = data.split('|')

  return (
    <article className="flex items-center relative px__2 py-2">
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
        id={index}
        name="search_term_string"
        autoComplete="off"
        ref={searchInput}
        type="search"
        accessKey="s"
        placeholder={`Enter ${scope}`}
        className={classnames(
          'bg-white',
          styles.searchInput,
          isFirst && styles.searchInputFirst
        )}
        value={keyword}
        // onChange={(e) => setName(e.target.value)}
      />
      <select
        className={styles.scope}
        name="scope"
        id="scope"
        // value={itemScope}
        // onChange={(e) => setItemScope(e.target.value)}
      >
        {scopeList.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </article>
  )
}

export default SearchFormAdvanced
