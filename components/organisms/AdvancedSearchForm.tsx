import React, { useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import routs from 'helpers/routs'
import { ButtonFab, Select, ActionBtn } from 'components/atoms'
import IconClose from 'components/icons/IconClose'

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
    <section key={id} className="mt-1">
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
        <div className="bg_white relative flex rounded-md p-1">
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
            tabIndex={0}
            name="search_term_string"
            autoComplete="off"
            ref={searchInput}
            type="search"
            accessKey="/"
            placeholder={'Any word'}
            className={classNames(
              'border_nut4 h-10 w-48 rounded-md border',
              'px-4 outline-4 outline-offset-2',
              'active:border_pri6 focus:border_pri6'
            )}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {index >= 1 && (
            <button
              className="bg_nut1 border_nut3 absolute right-0 mt-1.5 -mr-2 block h-7 w-7 rounded-full border pb-0.5 text-xs"
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
      <div className="bg_white m-auto w-full max-w-5xl rounded-md p-8 pb-10">
        <div className="flex w-full justify-between">
          <h2 className="text_nut5 font-serif text-2xl ">Advanced search</h2>
          <ButtonFab
            dataName="selectionMode"
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

          <div className="mt-1 flex items-center p-1">
            {rows !== 6 && (
              <button
                className="bg_pri0 border_pri1 mr-2 ml-4 block rounded-full border p-2"
                onClick={addRow}
              >
                [+]
              </button>
            )}
            <ActionBtn
              dataName="advanceSearch"
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
