import React from 'react'

import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'

/* __DOC

<SearchResultCustomItem data="language" name="Language" />

DOC__ */

const SearchResultCustomItem = ({ data = '', name = '' }) => {
  if (!data) return <></>

  return (
    <div className="py-1">
      {SearchResultItemTagTitle(name)}
      <small className="text_nut6 first_letter_caps ml-3 text-xs">{data}</small>
    </div>
  )
}

export default SearchResultCustomItem
