import React from 'react'
import { SearchResultItemProps } from 'types'

import SearchResultItemSource from 'components/organisms/SearchResultItemSource'
import SearchResultTitle from 'components/organisms/SearchResultTitle'
import SearchResultKeywords from 'components/organisms/SearchResultKeywords'
import SearchResultSubjects from 'components/organisms/SearchResultSubjects'
import SearchResultAuthors from 'components/organisms/SearchResultAuthors'
import SearchResultItemAbstract from 'components/organisms/SearchResultItemAbstract'
import SearchResultItemActions from 'components/organisms/SearchResultItemActions'

const SearchResultItem: React.FC<SearchResultItemProps> = (data) => {
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
  } = data

  // console.log('--data-->', data)

  return (
    <article className="flex items-center rounded-md mb-4 max-w-4xl bg_white shadow-sm hover:shadow">
      <div className="py-4 px-6 w-full block sm:flex">
        <section className="w-full sm:w-9/12 block">
          <SearchResultTitle {...data} />
          <SearchResultItemSource
            journalTitle={journalTitle}
            publicationName={publicationName}
          />
          <SearchResultItemAbstract abstract={abstract} />
          <SearchResultKeywords keywords={keywords} />
          <SearchResultSubjects subjects={subjects} />
          <SearchResultAuthors authors={authors} />
        </section>
        <section className="pl-0 sm:pl-8 w-full sm:w-3/12">
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
