import React from 'react'

import { ContentStats } from 'components/organisms'

const data = [
  {
    stat: '16.3m+',
    title: 'Magazines'
  },
  {
    stat: '79.9m+',
    title: 'News'
  },
  {
    stat: '42.3k+',
    title: 'Biographies'
  },
  {
    stat: '4.7k+',
    title: 'Dissertations'
  },
  {
    stat: '296.7k+',
    title: 'Books'
  },
  {
    stat: '35.9m+',
    title: 'Academic Journals'
  },
  {
    stat: '201k+',
    title: 'Ebooks'
  },
  {
    stat: '439k+',
    title: 'Conference Materials'
  }
]
type Props = {}

const Stats: React.FC<Props> = () => {
  return (
    <section className="max-w-6xl text-center mx-auto">
      <h2 className="text_nut5">Premium content data stats</h2>
      <p className="mb-8">
        Sneak peek to our curated premium data status, it’s updating every day.
      </p>

      <div className="flex flex-wrap justify-center">
        {data.map((item, id) => (
          <ContentStats
            key={`ContentStats${id}`}
            stat={item.stat}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}

export default Stats
