import React from 'react'
import get from 'lodash/get'
import { CardMagazine, MagazinesPageTabs } from 'components/organisms'
import useGetMagazines from 'fetchHooks/useGetMagazines'

const Magazines: React.FC<{}> = () => {
  const { data } = useGetMagazines()
  const magazinesData = get(data, 'data.attributes.common.magazines', null)

  if (!magazinesData) return <div>loading...</div>

  return (
    <section className="max-w-6xl text-center mx-auto pt-4">
      <h1 className="text-4xl font-serif mt-8 mb-4">Magazines</h1>

      <MagazinesPageTabs />

      <div className="flex flex-wrap justify-center">
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
