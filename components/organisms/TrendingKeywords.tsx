import React from 'react'
import { ActionItem } from 'components/atoms'
import useGetTrendingKeywords from 'fetchHooks/useGetTrendingKeywords'

type Props = {}

const TrendingKeywords: React.FC<Props> = () => {
  const { data } = useGetTrendingKeywords()

  if (!data) return <div>loading...</div>

  return (
    <section>
      <h4 className="pt-8 pb-2 text_nut4 text-xs">Trending searches</h4>
      <div className="max-w-4xl px-8 mx-auto text-center ">
        {data.map((title, id) => (
          <ActionItem
            dataName="TrendingKeywords"
            key={id}
            text={title}
            href={`/search?q=${title}`}
            className="m-1 inline-block px-2 py-1 first_letter_caps"
            type="link"
          />
        ))}
      </div>
    </section>
  )
}

export default TrendingKeywords
