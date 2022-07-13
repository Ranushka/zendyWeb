import React from 'react'

import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'

const SearchResultDOI = ({ doi = '' }) => {
  if (!doi) return <></>

  return (
    doi && (
      <div className="py-1">
        {SearchResultItemTagTitle('DOI')}
        <small>{doi}</small>
      </div>
    )
  )
}

export default SearchResultDOI
