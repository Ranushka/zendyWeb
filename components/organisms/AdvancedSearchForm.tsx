import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import routs from 'lib/routs'
import { ButtonFab, Select, ActionItem } from 'components/atoms'
// import IconSearch from 'components/icons/IconSearch'
import IconClear from 'components/icons/IconClear'
import IconClose from 'components/icons/IconClose'
// import IconAdvanceSearch from 'components/icons/IconAdvanceSearch'
// import useGlobal from 'context/GlobalContext'
import { focusToSearchInput } from 'lib/helpers'
import classNames from 'classnames'

type Props = {
  id?: string
}

const SearchFormRow: React.FC<any> = ({
  index,
  id,
  searchText,
  setSearchText,
  searchInput,
  addRow,
  removeRow
}) => {
  const clearInput = () => {
    setSearchText('')
    searchInput.current.focus()
  }

  return (
    <section key={id} className="mt-4">
      <div className="flex">
        <Select
          block
          id="primaryInterest"
          name="name"
          data={['All', 'Title', 'Abstract', 'Author', 'Subject', 'Keyword']}
          className="mr-1"
        />
        <input
          id={id}
          tabIndex={1}
          name="search_term_string"
          autoComplete="off"
          ref={searchInput}
          type="search"
          accessKey="/"
          placeholder={'Any word'}
          className={classNames(
            'w-full h-10 rounded-md border border_nut4',
            'outline-4 outline-offset-2 pr-14 pl-6',
            'active:border_pri6 focus:border_pri6',
            'appearance-none'
          )}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="inline-flex relative -ml-12">
          <ButtonFab
            classNames={classNames(
              'rounded-full p-2 block opacity-0',
              searchText && 'opacity-100'
            )}
            icon={<IconClear />}
            onClick={clearInput}
          />
        </div>

        {index >= 1 && (
          <button className="rounded-full ml-4 block" onClick={removeRow}>
            [-]
          </button>
        )}

        {index !== 4 && (
          <button className="rounded-full ml-4 block" onClick={addRow}>
            [+]
          </button>
        )}
      </div>
    </section>
  )
}
const SearchForm: React.FC<Props> = () => {
  const searchInput = React.useRef(null)
  // const trans = useTranslations('header')
  const [rows, setRows] = useState(1)
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  // const [{ setGlobalState }] = useGlobal()
  // const isHomePage = router.pathname === routs.index
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

  const addRow = (e) => {
    e.preventDefault()
    rows < 5 && setRows(rows + 1)
  }
  const removeRow = (e) => {
    e.preventDefault()
    console.log(rows)

    rows != 1 && setRows(rows - 1)
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
    <div className="w-full max-w-4xl bg_nut1 mx-auto p-8 rounded-md mt-4">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl text_nut5 font-serif ">Advanced search</h2>
        <ButtonFab
          title="Toggle selection mode"
          icon={<IconClose className="scale-125" />}
          onClick={() => {
            const query = router.query
            delete query.aq
            router.push({
              pathname: routs.search,
              query: { ...query }
            })
          }}
        />
      </div>
      <form className="relative max-w-2xl" onSubmit={handleSubmit}>
        {Array.from(new Array(rows), (_, index) => (
          <SearchFormRow
            index={index}
            key={'row' + index}
            id={'row' + index}
            searchText={searchText}
            setSearchText={setSearchText}
            searchInput={searchInput}
            addRow={addRow}
            removeRow={removeRow}
          />
        ))}

        <div className="flex ">
          <ActionItem
            text="Search"
            href={'#'}
            type="btn__primary"
            className="max-w-xs mt-4"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
