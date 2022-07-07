import React from 'react'
import { useRouter } from 'next/router'
import TrendingKeywords from 'components/organisms/TrendingKeywords'
import AdvancedSearchForm from 'components/organisms/AdvancedSearchForm'

type Props = {}

const SearchLandingBlock: React.FC<Props> = () => {
  const router = useRouter()
  const rq = router.query
  const isAdvanceSearch = rq.aq

  return (
    <div>
      {isAdvanceSearch && <AdvancedSearchForm />}
      <section className="text-center my-24 mx-4 min-h">
        <h2 className="text-3xl text_nut5 font-serif">
          Start Searching and create new knowledge.
        </h2>

        <TrendingKeywords />
      </section>
    </div>
  )
}

export default React.memo(SearchLandingBlock)
