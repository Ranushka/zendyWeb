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

<SearchResultItemCompact  
  key="1"
  resultId="sss"
  href={'/'}
  publicationName={'dsad'}
  journalTitle="abc title"
  publicationYear="2020"
  publicationType="journal"
  isPremium
  downloadLink="/"
  permanentLinkId="uid"
  authors={['name one']}
  keywords={['name one']}
  subjects={['subject']}
  link={[]}
  zendyLink="#"
  title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
  abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
 />

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
