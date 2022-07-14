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

const Search: React.FC = () => {
  const router = useRouter()
  const rq = router.query
  const qAuthor = rq.author
  const qSubject = rq.subject
  const qJournal = rq.journal
  const qPublisher = rq.publisher?.toString().replace(/_/g, ' ')
  const queryString = rq.q || qAuthor || qSubject || qJournal || qPublisher

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
