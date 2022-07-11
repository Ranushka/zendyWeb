import React from 'react'
import { ActionItem } from 'components/atoms'

const SearchResultItemSource = ({
  journalTitle = '',
  publicationName = ''
}) => {
  if (!publicationName || !journalTitle) return <></>

  return (
    <div className="py-1">
      {publicationName && (
        <span>
          <ActionItem
            dataName="SearchResultItemSourcePublication"
            className="pr-2 first_letter_caps"
            text={publicationName}
            as={`/search?publisher=${publicationName}`}
            href={`/search?publisher=${publicationName}`}
            type="link__small"
          />
        </span>
      )}
      -
      {journalTitle && (
        <span>
          <ActionItem
            dataName="SearchResultItemSourceJournal"
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
