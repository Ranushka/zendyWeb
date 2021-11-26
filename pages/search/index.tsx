import React from 'react'
import { BaseTemplate } from 'components/templates'
import { LayeredNavigation, SearchResults } from 'components/organisms'
import { SearchLandingBlock } from 'components/molecules'
import { useRouter } from 'next/router'

const Search: React.FC = () => {
  const router = useRouter()
  const queryString: any = router.query.q

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
        <div className="mw__6 px__3 flex">
          <SearchResults />
          <LayeredNavigation />
        </div>
      )}

      {!queryString && <SearchLandingBlock />}
    </BaseTemplate>
  )
}

export default Search
