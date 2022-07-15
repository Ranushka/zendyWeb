import React from 'react'

import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'

export const SearchResultETC = ({ data = '', name = '' }) => {
  if (!data) return <></>

  return (
    data && (
      <div className="py-1">
        {SearchResultItemTagTitle(name)}
        <small className="text-xs text_nut6 ml-3 first_letter_caps">
          {data}
        </small>
      </div>
    )
  )
}

export default SearchResultETC
