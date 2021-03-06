import classNames from 'classnames'
import React from 'react'

const SearchResultItemAbstract = ({ abstract = '', all = false }) => {
  if (!abstract) return <></>

  const highlightedPosition = abstract.indexOf('<mark>')
  const isHiddenHighlight = highlightedPosition > 320

  if (!all && isHiddenHighlight) {
    abstract = abstract.slice(highlightedPosition - 140)
    abstract = '...' + abstract
  }

  return (
    <div
      className={classNames('text_nut5 my-2', !all && 'line-clamp-4')}
      dangerouslySetInnerHTML={{ __html: abstract }}
    />
  )
}

export default SearchResultItemAbstract
