import React from 'react'
import { BaseTemplate } from 'components/templates'
import { commonMessages } from 'lib/getMessages'
import {
  SearchLandingBlock,
  LayeredNavigation,
  SearchResults,
  AuthorDetails
} from 'components/organisms'
import SubjectDetails from 'components/organisms/SubjectDetails'
import JournalDetails from 'components/organisms/JournalDetails'
import { useRouter } from 'next/router'

const Search: React.FC = () => {
  const router = useRouter()
  const rq = router.query
  const qAuthor = rq.author
  const qSubject = rq.subject
  const qJournal = rq.journal
  const queryString = rq.q || qAuthor || qSubject || qJournal

  // console.log('queryString---', queryString)

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
          {qJournal && <JournalDetails publicationName={qJournal.toString()} />}
          {qAuthor && <AuthorDetails authorName={qAuthor.toString()} />}
          {qSubject && <SubjectDetails subject={qSubject} />}
          <div className="container p-4 flex">
            <LayeredNavigation />
            <SearchResults />
          </div>
        </>
      )}

      {!queryString && <SearchLandingBlock />}
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
