import React from 'react'
import { BaseTemplate } from 'components/templates'
import {
  LayeredNavigation,
  SearchResults,
  AuthorDetails,
} from 'components/organisms'
import { SearchLandingBlock } from 'components/molecules'
import { useRouter } from 'next/router'

const Search: React.FC = () => {
  const router = useRouter()
  const queryString: any = router.query.q || router.query.author

  React.useEffect(() => {
    const searchBoxElement = document.getElementById('mainSearch')

    if (queryString) {
      searchBoxElement && searchBoxElement.blur()
    } else {
      searchBoxElement && searchBoxElement.focus()
    }
  }, [router])

  return (
    <BaseTemplate isSearchPage>
      {queryString && (
        <>
          <AuthorDetails />
          <div className="mw__7 px__3 flex">
            <LayeredNavigation />
            <SearchResults />
          </div>
        </>
      )}

      {!queryString && <SearchLandingBlock />}
    </BaseTemplate>
  )
}

export default Search
