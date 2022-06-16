import React from 'react'
import get from 'lodash/get'
import { CardMagazine, MagazinesPageTabs } from 'components/molecules'
import useGetMagazines from 'fetchHooks/useGetMagazines'

const Magazines: React.FC<{}> = () => {
  const { data } = useGetMagazines()
  const magazinesData = get(data, 'data.attributes.common.magazines', null)

  if (!magazinesData) return <div>loading...</div>

  return (
    <section className={'max-w-6xl text-center'}>
      <h1>Magazines</h1>

      <MagazinesPageTabs />

      <div className="flex">
        {magazinesData.map(({ title, image, href }, id) => (
          <CardMagazine
            key={`magazineItem${id}`}
            href={href}
            img={image.replace('/public/', '')}
            title={title}
            content="Sep2019, Vol. 73 Issue 9"
          />
        ))}
      </div>
    </section>
  )
}

export default Magazines
