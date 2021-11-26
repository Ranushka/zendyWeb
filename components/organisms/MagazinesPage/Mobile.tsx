import React from 'react'
import styles from './mobile.module.scss'
import classnames from 'classnames'
import { Space } from 'components/atoms'
import { CardMagazine, MagazinesPageTabs } from 'components/molecules'
import { attributes as data } from 'data/widgets/magazines.md'

const Magazines: React.FC<{}> = ({}) => {
  const magData = data.magazines

  return (
    <section className={classnames('mw__6 text__center', styles.wrapper)}>
      <Space size={5} />
      <h1>Magazines</h1>
      <Space size={4} />
      <MagazinesPageTabs />
      <Space size={4} />
      <div className={classnames(styles.magPageWrapper)}>
        {magData.map(({ title, image, href }, id) => (
          <CardMagazine
            key={`magazineItem${id}`}
            href={href}
            img={image.replace('/public/', '')}
            title={title}
            content="Sep2019, Vol. 73 Issue 9"
            className={styles.magazineCard}
          />
        ))}
      </div>
    </section>
  )
}

export default Magazines
