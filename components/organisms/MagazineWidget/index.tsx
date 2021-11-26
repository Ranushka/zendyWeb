import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { CardMagazine } from 'components/molecules'
import { attributes as data } from 'data/widgets/magazines.md'

type Props = {}

const Magazines: React.FC<Props> = ({}) => {
  const magData = data.magazines.slice(0, 9)

  return (
    <section className={classnames('mw__6 text__center', styles.wrapper)}>
      {magData.map(({ title, image, href }, id) => (
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
