import React from 'react'
import Image from 'next/image'
import { ActionItem } from 'components/atoms'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {
  href: string
  img: string
  title: React.ReactNode
  content: React.ReactNode
  style?: React.CSSProperties
}

const CardCurated: React.FC<Props> = (props) => {
  const { href, img, title, content, style } = props

  return (
    <ActionItem href={href}>
      <div
        className={classnames(
          styles.curated,
          'bg__white rounded__1 stage__2 mute'
        )}
        style={style}
      >
        <Image
          src={`/${img}`}
          alt="Picture of the author"
          placeholder="empty"
          width={656}
          height={400}
        />
        <div className={styles.curated__title}>
          <div className="h3">{title}</div>
        </div>
        <div className={styles.curated__content}>
          <p>{content}</p>
        </div>
      </div>
    </ActionItem>
  )
}

export default CardCurated
