import React from 'react'

import { ActionItem } from 'components/atoms'
import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'
import classNames from 'classnames'

const SearchResultAuthors = ({ authors = [], all = false }) => {
  if (!authors?.length) return <></>

  return (
    <div className={classNames('py-1', !all && 'line-clamp-1')}>
      {SearchResultItemTagTitle('By')}
      {authors
        .slice(0, all ? 20 : 8)
        .map<React.ReactNode>((name, id) => {
          if (name) {
            return (
              <ActionItem
                dataName="searchByAuthor"
                key={id}
                text={name}
                as={`/search?author=${name}`}
                href={`/search?author=${name}`}
                type="link__small"
                className="text_nut5"
              />
            )
          }
        })
        .reduce((prev, curr) => [prev, ', ', curr])}
      {/* <span>Et..al</span> */}
    </div>
  )
}

export default SearchResultAuthors
