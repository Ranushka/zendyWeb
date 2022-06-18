import React from 'react'

import { ActionItem } from 'components/atoms'
import SearchResultItemTagTitle from './SearchResultItemTagTitle'

const countOfLinks = 8

const SearchResultItemTitle = (authors: [string]) => {
  if (!authors.length) return <></>
  return (
    <div className="pt-1 line-clamp-1">
      {SearchResultItemTagTitle('By')}
      {authors
        .slice(0, countOfLinks)
        .map<React.ReactNode>((name, id) => {
          if (name) {
            return (
              <ActionItem
                key={id}
                text={name}
                as={`/search?author=${name}`}
                href={`/search?author=${name}`}
                type="link__small"
              />
            )
          }
        })
        .reduce((prev, curr) => [prev, ', ', curr])}
      {/* <span>Et..al</span> */}
    </div>
  )
}

export default SearchResultItemTitle
