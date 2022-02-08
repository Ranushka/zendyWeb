import React from 'react'
import Image from 'next/image'
import { ActionItem } from 'components/atoms'
import styles from './desktop.module.scss'
import classnames from 'classnames'
import { CardMagazineProps } from 'types'

const CardMagazine: React.FC<CardMagazineProps> = (props) => {
  const { href, img, title, content, className } = props
  const __finalClassNames = classnames(
    styles.magazine,
    'bg__white rounded__1 stage__2',
    className && className
  )

  return (
    <ActionItem href={href}>
      <div className={__finalClassNames}>
        <Image
          src={`/${img}`}
          alt={title.toString()}
          placeholder="empty"
          width={208 * 2}
          height={272 * 2}
        />
        <div className={styles.magazine__title}>
          <p>{title}</p>
        </div>
        <div className={styles.magazine__content}>
          <small>{content}</small>
        </div>
      </div>
    </ActionItem>
  )
}

export default CardMagazine
