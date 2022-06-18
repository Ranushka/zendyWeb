import React from 'react'
import { SearchResultItemProps } from 'types'

import SearchResultItemSource from './SearchResultItemSource'
import SearchResultItemTitle from './SearchResultItemTitle'
import SearchResultItemTitleAuthors from './SearchResultItemTitleAuthors'
import SearchResultItemAbstract from './SearchResultItemAbstract'
import SearchResultItemKeywords from './SearchResultItemKeywords'
import SearchResultItemSubjects from './SearchResultItemSubjects'
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
  downloadLink,
  permanentLinkId,
  subjects
}) => {
  return (
    <article className="flex items-center rounded-md mb-4 max-w-4xl bg-white shadow mx-auto">
      <div className="py-4 px-6 w-full block sm:flex">
        <section className="w-full sm:w-9/12 block">
          {SearchResultItemTitle(
            title,
            permanentLinkId,
            publicationType,
            publicationYear
          )}
          {SearchResultItemSource(journalTitle, publicationName)}
          {SearchResultItemAbstract(abstract)}
          {SearchResultItemKeywords(keywords)}
          {SearchResultItemSubjects(subjects)}
          {SearchResultItemTitleAuthors(authors)}
        </section>
        <section className="pl-0 sm:pl-8 w-full sm:w-3/12">
          {SearchResultItemActions(link, id, downloadLink)}
        </section>
      </div>
    </article>
  )
}

export default SearchResultItem
