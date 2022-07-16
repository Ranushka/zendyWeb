import React from 'react'
import { ActionLink } from 'components/atoms'

const SearchResultItemSource = ({
  journalTitle = '',
  publicationName = ''
}) => {
  if (!publicationName || !journalTitle) return <></>

  return (
    <div className="py-1">
      {publicationName && (
        <span>
          <ActionLink
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
          <ActionLink
            dataName="SearchResultItemSourceJournal"
            className="px-2 first_letter_caps"
            text={journalTitle}
            as={`/search?q=journal:${journalTitle}`}
            href={`/search?q=journal:${journalTitle}`}
            type="link__small"
          />
        </span>
      )}
    </div>
  )
}

export default SearchResultItemSource
