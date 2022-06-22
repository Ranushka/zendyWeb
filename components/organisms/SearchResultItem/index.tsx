import React from 'react'
import { SearchResultItemProps } from 'types'

import SearchResultItemSource from './SearchResultItemSource'
import SearchResultTitle from './SearchResultTitle'
import SearchResultAuthors from './SearchResultAuthors'
import SearchResultItemAbstract from './SearchResultItemAbstract'
import SearchResultKeywords from './SearchResultKeywords'
import SearchResultSubjects from './SearchResultSubjects'
import SearchResultItemActions from './SearchResultItemActions'

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  id,
  // href,
  title,
  abstract,
  journalTitle,
  publicationYear,
  publicationName,
  publicationType,
  authors,
  keywords,
  link,
  isPremium,
  downloadLink,
  permanentLinkId,
  subjects
}) => {
  return (
    <article className="flex items-center rounded-md mb-4 max-w-4xl bg_white shadow-sm hover:shadow mx-auto">
      <div className="py-4 px-6 w-full block sm:flex">
        <section className="w-full sm:w-9/12 block">
          {SearchResultTitle(
            title,
            permanentLinkId,
            publicationType,
            publicationYear,
            isPremium
          )}
          {SearchResultItemSource(journalTitle, publicationName)}
          {SearchResultItemAbstract(abstract)}
          {SearchResultKeywords(keywords)}
          {SearchResultSubjects(subjects)}
          {SearchResultAuthors(authors)}
        </section>
        <section className="pl-0 sm:pl-8 w-full sm:w-3/12">
          {SearchResultItemActions(link, id, downloadLink)}
        </section>
      </div>
    </article>
  )
}

export default SearchResultItem
