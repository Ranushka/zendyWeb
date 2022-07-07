import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import { useTranslations } from 'next-intl'
// import { useMediaQuery } from 'react-responsive'

import routs from 'lib/routs'
import { ButtonFab, Select, ActionItem } from 'components/atoms'
// import IconSearch from 'components/icons/IconSearch'
import IconClose from 'components/icons/IconClose'
// import IconAdvanceSearch from 'components/icons/IconAdvanceSearch'
// import useGlobal from 'context/GlobalContext'
// import { focusToSearchInput } from 'lib/helpers'
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
  removeRow
}) => {
  return (
    <section key={id} className="mt-4">
      <div className="flex items-center">
        {index >= 1 && (
          <Select
            key="bool"
            block
            small
            id="primaryInterest"
            name="name"
            className="p-1"
            data={['OR', 'AND', 'NOT']}
          />
        )}
        <div className="flex bg_white p-1 rounded-md relative">
          <Select
            key="type"
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
              'w-48 h-10 rounded-md border border_nut4',
              'outline-4 outline-offset-2 px-4',
              'active:border_pri6 focus:border_pri6'
            )}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {index >= 1 && (
            <button
              className="rounded-full block absolute right-0 bg_nut1 w-7 h-7 mt-1.5 -mr-2 text-xs pb-0.5 border border_nut3"
              onClick={removeRow}
            >
              [-]
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
const SearchForm: React.FC<Props> = () => {
  const searchInput = React.useRef(null)
  const [rows, setRows] = useState(2)
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const rq = router.query
  const isAdvanceSearch = rq.aq

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
    rows < 7 && setRows(rows + 1)
  }

  const removeRow = (e) => {
    e.preventDefault()
    console.log(rows)

    rows != 1 && setRows(rows - 1)
  }

  React.useEffect(() => {
    const query = router.query && router.query.q

    if (query) {
      setSearchText(query.toString())
    }
  }, [router])

  if (!isAdvanceSearch) {
    return <></>
  }

  return (
    <div className="container mt-4 px-4">
      <div className="w-full max-w-5xl bg_nut1 p-8 pb-10 rounded-md">
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
        <form className="relative flex flex-wrap" onSubmit={handleSubmit}>
          {Array.from(new Array(rows), (_, index) => (
            <SearchFormRow
              index={index}
              key={'row' + index}
              id={'row' + index}
              searchText={searchText}
              setSearchText={setSearchText}
              searchInput={searchInput}
              removeRow={removeRow}
            />
          ))}

          <div className="p-1 flex items-center mt-4">
            {rows !== 6 && (
              <button
                className="rounded-full block bg_pri0 border border_pri1 p-2 mr-2 ml-4"
                onClick={addRow}
              >
                [+]
              </button>
            )}
            <ActionItem
              text="Search"
              href={'#'}
              type="btn__primary"
              className="ml-2"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
