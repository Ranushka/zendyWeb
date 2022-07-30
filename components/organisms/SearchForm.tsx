import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

import routs from 'helpers/routs'
import { ButtonFab } from 'components/atoms'
import IconSearch from 'components/icons/IconSearch'
import IconClear from 'components/icons/IconClear'
import IconAdvanceSearch from 'components/icons/IconAdvanceSearch'
import Autocomplete from 'components/organisms/Autocomplete'
// import analyticEvent from 'analytics/events'
import { focusToSearchInput } from 'helpers/utils'
// import { setPersonalizedKeywords } from 'helpers/localStorage'
// import classNames from 'classnames'

type Props = {
  id: string
}

const SearchForm: React.FC<Props> = ({ id }) => {
  const searchInputRef = React.useRef(null)
  const trans = useTranslations('header')
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const isHomePage = router.pathname === routs.index

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const clearInput = () => {
    setSearchText('')
    searchInputRef.current.focus()
  }

  const onClickSearchBtn = () => {
    router.push({
      pathname: routs.search,
      query: searchText && { q: searchText }
    })
  }

  React.useEffect(() => {
    window.addEventListener('keydown', focusToSearchInput)

    return () => {
      window.removeEventListener('keydown', focusToSearchInput)
    }
  }, [router])

  return (
    <div className="flex w-full max-w-2xl">
      <form className="relative w-full" onSubmit={handleSubmit}>
        <Autocomplete
          id={id}
          searchInputRef={searchInputRef}
          setSearchText={setSearchText}
          searchText={searchText}
          placeholder={trans(`search_placeholder_d`)}
        />
        <div className="absolute top-0 right-0 z-30 inline-flex">
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
            title="Search"
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
