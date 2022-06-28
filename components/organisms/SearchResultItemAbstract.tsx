import classNames from 'classnames'
import React from 'react'

const SearchResultItemAbstract = ({ abstract = '', all = false }) => {
  if (!abstract) return <></>

  return (
    <div className="block py-1">
      <div
        className={classNames('text_nut5 py-1', !all && 'line-clamp-4')}
        dangerouslySetInnerHTML={{ __html: abstract }}
      />
    </div>
  )
}

export default SearchResultItemAbstract
