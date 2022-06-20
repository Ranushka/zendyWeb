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
import { useRouter } from 'next/router'

const Search: React.FC = () => {
  const router = useRouter()
  const queryAuthor: any = router.query.author
  const querySubject: any = router.query.subject
  const queryString: any = router.query.q || queryAuthor || querySubject

  console.log('queryString---', queryString)

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
          {queryAuthor && <AuthorDetails authorName={queryAuthor} />}
          {querySubject && <SubjectDetails subject={querySubject} />}
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
