import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  stat?: string
  title?: string
}

const ContentStats: React.FC<Props> = ({
  stat = '88.8 m',
  title = 'Title'
}) => {
  return (
    // <div className={styles.wrapper}>
    <div
      className={classnames(
        'bg__nut2 mx-4 my-8 py-4 px__5 rounded-md',
        styles.wrapper
      )}
    >
      <h2>{stat}</h2>
      <h3>{title}</h3>
    </div>
  )
}

export default ContentStats
