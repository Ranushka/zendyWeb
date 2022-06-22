import React from 'react'
import { ActionItem } from 'components/atoms'

const SearchResultItemSource = (journalTitle, publicationName) => {
  if (!publicationName || !journalTitle) return <></>

  return (
    <div className="pb-2">
      {publicationName && (
        <span>
          <ActionItem
            className="pr-2 first_letter_caps"
            text={publicationName}
            as={`/search?subject=${publicationName}`}
            href={`/search?subject=${publicationName}`}
            type="link__small"
          />
        </span>
      )}
      -
      {journalTitle && (
        <span>
          <ActionItem
            className="px-2 first_letter_caps"
            text={journalTitle}
            type="link__small"
          />
        </span>
      )}
    </div>
  )
}

export default SearchResultItemSource
