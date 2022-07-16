import React from 'react'
import { ActionLink } from 'components/atoms'
import IconSearchHistory from 'components/icons/IconSearchHistory'
// import useGetTrendingKeywords from 'fetchHooks/useGetTrendingKeywords'

type Props = {}

const data = [
  'water',
  'mercury energy generation',
  'search personalization',
  'car'
]

const RecentSearchKeywords: React.FC<Props> = () => {
  return (
    <section className="bg_white pl-8 md:px-4 pt-4 pb-8 md:pb-16 mx-auto py-2 text-center opacity-80 hover:opacity-100">
      <div className="max-w-4xl mx-auto text-center whitespace-nowrap overflow-y-scroll hideScrollBar">
        {data.map((title, id) => (
          <span key={id} className="inline-flex">
            <IconSearchHistory className="w-4 text_nut4" />
            <ActionLink
              dataName="RecentSearchKeyword"
              text={`${title}`}
              href={`/search?q=${title}`}
              className="m-1 inline-block pr-4 py-1 first_letter_caps"
              type="link__small"
            />
          </span>
        ))}
      </div>
    </section>
  )
}

export default RecentSearchKeywords
