import React from 'react'
import { Space } from 'components/atoms'
import { ContentStats } from 'components/molecules'

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
    <section className={'max-w-6xl text-center'}>
      <Space />
      <h2 className="color__nut6">Premium content data stats</h2>
      <p className="">
        Sneak peek to our curated premium data status, it’s updating every day.
      </p>
      <Space size={4} />
      {data.map((item, id) => (
        <ContentStats
          key={`ContentStats${id}`}
          stat={item.stat}
          title={item.title}
        />
      ))}
    </section>
  )
}

export default Stats
