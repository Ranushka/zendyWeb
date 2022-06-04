import React from 'react'
import { BaseTemplate } from 'components/templates'
import { commonMessages } from 'lib/getMessages'
import {
  LayeredNavigation,
  SearchResults,
  AuthorDetails
} from 'components/organisms'
import { SearchLandingBlock } from 'components/molecules'
import { useRouter } from 'next/router'

const Search: React.FC = () => {
  const router = useRouter()
  const queryString: any = router.query.q || router.query.author
  const queryAuthor: any = router.query.author

  React.useEffect(() => {
    const searchBoxElement = document.getElementById('mainSearch')

    if (queryString) {
      searchBoxElement && searchBoxElement.blur()
    } else {
      searchBoxElement && searchBoxElement.focus()
    }
  }, [queryString])

  return (
    <BaseTemplate isSearchPage>
      {queryString && (
        <>
          {queryAuthor && <AuthorDetails authorName={queryAuthor} />}
          <div className="mw__7 px-4 flex">
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
