import React from 'react'
import { SearchResultItemProps } from 'types'

import SearchResultItemSource from 'components/organisms/SearchResultItemSource'
import SearchResultTitle from 'components/organisms/SearchResultTitle'
import SearchResultKeywords from 'components/organisms/SearchResultKeywords'
import SearchResultSubjects from 'components/organisms/SearchResultSubjects'
import SearchResultAuthors from 'components/organisms/SearchResultAuthors'
import SearchResultItemAbstract from 'components/organisms/SearchResultItemAbstract'
import SearchResultItemActions from 'components/organisms/SearchResultItemActions'

/* __DOC

SearchResultItem

DOC__ */

const SearchResultItem: React.FC<SearchResultItemProps> = (props) => {
  const {
    resultId,
    abstract,
    journalTitle,
    publicationName,
    authors,
    keywords,
    zendyLink,
    downloadLink,
    subjects
  } = props

  // console.log('--data-->', data)

  return (
    <article className="bg_white mb-4 flex max-w-4xl items-center rounded-md shadow-sm hover:shadow">
      <div className="block w-full py-4 px-6 sm:flex">
        <section className="block w-full sm:w-9/12">
          <SearchResultTitle {...props} />
          <SearchResultItemSource
            journalTitle={journalTitle}
            publicationName={publicationName}
          />
          <SearchResultItemAbstract abstract={abstract} />
          <SearchResultKeywords keywords={keywords} />
          <SearchResultSubjects subjects={subjects} />
          <SearchResultAuthors authors={authors} />
        </section>
        <section className="w-full pl-0 sm:w-3/12 sm:pl-8">
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

export default SearchResultItem
