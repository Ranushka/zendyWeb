import React from 'react'
import get from 'lodash/get'
import { CardMagazine } from 'components/molecules'
import useGetMagazines from 'fetchHooks/useGetMagazines'

type Props = {}

const Magazines: React.FC<Props> = () => {
  const { data } = useGetMagazines()
  const magazinesData = get(data, 'data.attributes.common.magazines', null)

  if (!magazinesData) return <div>loading...</div>

  return (
    <section className="md:container p-4 text-center whitespace-nowrap md:whitespace-normal overflow-y-scroll hideScrollBar">
      {magazinesData.slice(0, 9).map(({ title, image, href }, id) => (
        <CardMagazine
          key={`magazineItem${id}`}
          href={href}
          img={image.replace('/public/', '')}
          title={title}
          content="Sep2019, Vol. 73 Issue 9"
        />
      ))}
    </section>
  )
}

export default Magazines
