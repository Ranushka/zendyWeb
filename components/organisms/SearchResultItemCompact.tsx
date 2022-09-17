import React from 'react'
import { SearchResultItemProps } from 'types'

import SearchResultItemSource from 'components/organisms/SearchResultItemSource'
import SearchResultTitle from 'components/organisms/SearchResultTitle'
// import SearchResultKeywords from 'components/organisms/SearchResultKeywords'
// import SearchResultSubjects from 'components/organisms/SearchResultSubjects'
// import SearchResultAuthors from 'components/organisms/SearchResultAuthors'
// import SearchResultItemAbstract from 'components/organisms/SearchResultItemAbstract'
import SearchResultItemActions from 'components/organisms/SearchResultItemActions'

/* __DOC

<SearchResultItemCompact />

DOC__ */

const SearchResultItemCompact: React.FC<SearchResultItemProps> = (props) => {
  const {
    resultId,
    journalTitle,
    publicationName,
    // authors,
    // keywords,
    zendyLink,
    downloadLink
    // subjects
  } = props

  // console.log('--data-->', data)

  return (
    <article className="bg_white mb-4 flex max-w-md items-center rounded-md shadow-sm hover:shadow">
      <div className="block w-full py-4 px-6 sm:flex">
        <section className="block w-full">
          <SearchResultTitle {...props} />
          <SearchResultItemSource
            journalTitle={journalTitle}
            publicationName={publicationName}
          />
          <SearchResultItemActions
            link={zendyLink}
            resultId={resultId}
            downloadLink={downloadLink}
          />
        </section>
      </div>
    </article>
  )
}

export default SearchResultItemCompact
