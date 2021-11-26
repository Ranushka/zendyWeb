import React, { useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import { ButtonFab, Space } from 'components/atoms'
import { IconSearch, IconClear } from 'components/icons'
import DeviceTypeContext from 'context/DeviceTypeContext'
import { attributes as Data } from 'data/header.md'

type Props = {
  id?: string
}

const SearchForm: React.FC<Props> = ({ id = 'search' }) => {
  const searchInput = React.useRef(null)
  const [name, setName] = useState('')
  const router = useRouter()
  const { isMobile } = React.useContext(DeviceTypeContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    router.push({
      pathname: '/search',
      query: { q: name },
    })
  }

  const clearInput = () => {
    setName('')
    searchInput.current.focus()
  }

  React.useEffect(() => {
    const query = router.query && router.query.q
    if (query) {
      setName(query.toString())
    }
  }, [router])

  return (
    <form className={styles.searchWrapper} onSubmit={handleSubmit}>
      <input
        id={id}
        name="search_term_string"
        ref={searchInput}
        type="search"
        accessKey="s"
        placeholder={
          isMobile ? Data.search_placeholder_m : Data.search_placeholder_d
        }
        className={classnames('bg__white', styles.searchInput)}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className={styles.actions}>
        {name && <ButtonFab icon={<IconClear />} onClick={clearInput} />}
        <div className={styles.separator} />
        <ButtonFab href="/search" icon={<IconSearch />} classNames={'mx__2'} />
      </div>
    </form>
  )
}

export default SearchForm
