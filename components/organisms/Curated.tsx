import React from 'react'
import { CardCurated } from 'components/organisms'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'

type Props = {}

const Curated: React.FC<Props> = () => {
  const trans = useTranslations('curated')
  const data = trans.raw('data')

  return (
    <section className="p-4 text-center whitespace-nowrap overflow-y-scroll hideScrollBar">
      {isArray(data) &&
        data.map(({ id, href, image, title, content }) => (
          <CardCurated
            key={`curatedItem${id}`}
            href={href}
            imgUrl={image}
            title={title}
            content={content}
          />
        ))}
    </section>
  )
}

export default Curated
