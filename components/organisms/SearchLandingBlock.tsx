import React from 'react'
import TrendingKeywords from 'components/organisms/TrendingKeywords'

type Props = {}

const SearchLandingBlock: React.FC<Props> = () => {
  return (
    <section key="SearchLandingBlock" className="text-center my-24 mx-4 min-h">
      <h2 className="text-3xl text_nut5 font-serif">
        Start Searching and create new knowledge.
      </h2>

      <TrendingKeywords />
    </section>
  )
}

export default SearchLandingBlock
