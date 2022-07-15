import React from 'react'

import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'

const SearchResultDOI = ({ doi = '' }) => {
  if (!doi) return <></>

  return (
    doi && (
      <div className="py-1">
        {SearchResultItemTagTitle('DOI')}
        <small className="text_nut5 ml-3 first_letter_caps">{doi}</small>
      </div>
    )
  )
}

export default SearchResultDOI
