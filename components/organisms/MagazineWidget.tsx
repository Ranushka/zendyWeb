import React from 'react'
import get from 'lodash/get'
import { CardMagazine } from 'components/organisms'
import useGetMagazines from 'fetchHooks/useGetMagazines'

type Props = {}

const MagazineWidget: React.FC<Props> = () => {
  const { data } = useGetMagazines()
  const magazinesData = get(data, 'data.attributes.common.magazines', null)

  if (!magazinesData) return <div>loading...</div>

  return (
    <section className="hideScrollBar overflow-y-scroll whitespace-nowrap p-4 text-center md:container md:whitespace-normal">
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

export default MagazineWidget
