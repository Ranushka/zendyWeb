import React from 'react'
import BaseTemplate from 'components/templates/BaseTemplate'
import { commonMessages } from 'helpers/getMessages'
import { SearchLandingBlock, SearchResults } from 'components/organisms'
import InfoSubject from 'components/organisms/InfoSubject'
import InfoJournal from 'components/organisms/InfoJournal'
import InfoPublisher from 'components/organisms/InfoPublisher'
import InfoAuthor from 'components/organisms/InfoAuthor'
import FilterNavigation from 'components/organisms/FilterNavigation'
import AdvancedSearchForm from 'components/organisms/AdvancedSearchForm'
import { useRouter } from 'next/router'
import { setPersonalizedKeywords } from 'helpers/localStorage'

const Search: React.FC = () => {
  const router = useRouter()
  const { author, subject, journal, publisher, q } = router.query
  const qAuthor = author

  const qJournal: any = journal && `${journal}`.replace(/_/g, ' ')
  const qPublisher: any = publisher && `${publisher}`.replace(/_/g, ' ')
  const qSubject: any = subject && `${subject}`.replace(/_/g, ' ')

  if (qSubject) setPersonalizedKeywords({ subjects: [qSubject] })
  if (qPublisher) setPersonalizedKeywords({ publishers: [qPublisher] })
  if (qJournal) setPersonalizedKeywords({ journals: [qJournal] })

  let queryString = q

  React.useEffect(() => {
    const searchBoxElement = document.getElementById('mainSearch')

    if (queryString) {
      searchBoxElement && searchBoxElement.blur()
    } else {
      searchBoxElement && searchBoxElement.focus()
    }
  }, [queryString])

  return (
    <BaseTemplate>
      {queryString && (
        <>
          <AdvancedSearchForm />
          {qPublisher && <InfoPublisher publisherName={qPublisher} />}
          {qJournal && <InfoJournal publicationName={qJournal} />}
          {qAuthor && <InfoAuthor authorName={qAuthor} />}
          {qSubject && <InfoSubject subject={qSubject} />}
          <div className="container p-4 flex">
            <FilterNavigation />
            <SearchResults />
          </div>
        </>
      )}
      {!queryString && (
        <div>
          <SearchLandingBlock />
        </div>
      )}
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    }
  }
}

export default Search
