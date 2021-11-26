import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { IconArrowUp } from 'components/icons'

type Props = {
  id: string
  title: React.ReactNode
  content: React.ReactNode
  open?: boolean
}

const Accordion: React.FC<Props> = (props) => {
  const { id, title, content, open = true } = props

  return (
    <div className={classnames(styles.wrapper, 'noSelect')}>
      <input type="checkbox" defaultChecked={!open} id={id} />
      <label className={styles.title} htmlFor={id}>
        {title} <IconArrowUp />
      </label>
      <div className={styles.content}>{content}</div>
    </div>
  )
}

export default Accordion
