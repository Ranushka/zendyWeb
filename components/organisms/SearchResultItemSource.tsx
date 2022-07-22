import React from 'react'
import { ActionLink } from 'components/atoms'
import routs from 'helpers/routs'

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
            as={routs.publisher(publicationName)}
            href={routs.publisher(publicationName)}
            type="link__small"
          />
        </span>
      )}
      -
      {journalTitle && (
        <span>
          <ActionLink
            dataName="SearchResultItemSourceJournal"
            className="px-2 first_letter_caps italic"
            text={journalTitle}
            as={routs.journal(journalTitle)}
            href={routs.journal(journalTitle)}
            type="link__small"
          />
        </span>
      )}
    </div>
  )
}

export default SearchResultItemSource
