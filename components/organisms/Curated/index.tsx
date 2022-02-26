import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'
import { CardCurated } from 'components/molecules'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'

type Props = {}

const Curated: React.FC<Props> = ({}) => {
  const trans = useTranslations('curated')
  const data = trans.raw('data')

  return (
    <section className={classnames(styles.wrapper, 'text__center px__2')}>
      {isArray(data) &&
        data.map(({ id, href, image, title, content }) => (
          <CardCurated
            style={{ width: '18rem' }}
            key={`curatedItem${id}`}
            href={href}
            img={process.env.NEXT_PUBLIC_CMS_BASE_URL + image}
            title={title}
            content={content}
          />
        ))}
    </section>
  )
}

export default Curated
