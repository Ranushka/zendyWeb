import React from 'react'
import { ActionItem } from 'components/atoms'
import useGetTrendingKeywords from 'fetchHooks/useGetTrendingKeywords'

type Props = {}

const TrendingKeywords: React.FC<Props> = () => {
  const { data } = useGetTrendingKeywords()

  if (!data) return <div>loading...</div>

  return (
    <section className="md:container p-4 text-center whitespace-nowrap md:whitespace-normal overflow-y-scroll hideScrollBar">
      {data.map((title, id) => (
        <ActionItem
          key={id}
          text={title}
          href={`/search?q=${title}`}
          className="m-1 inline-block p-1"
          type="link__small"
        />
      ))}
    </section>
  )
}

export default TrendingKeywords
