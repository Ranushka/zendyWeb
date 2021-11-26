import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'
import { CardSubject } from 'components/molecules'
import { attributes as Data } from 'data/widgets/subjects.md'

type Props = {}

const Subjects: React.FC<Props> = ({}) => {
  const subList = Data.subjects && Data.subjects.slice(0, 15)

  return (
    <section className={classnames('mw__6 text__center', styles.wrapper)}>
      {subList.map(({ title, image, href }, id) => (
        <CardSubject key={`subject${id}`} href={href} title={title} />
      ))}
    </section>
  )
}

export default Subjects
