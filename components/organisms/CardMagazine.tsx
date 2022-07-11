import React from 'react'
import Image from 'next/image'
import { ActionItem } from 'components/atoms'
import classnames from 'classnames'
import { CardMagazineProps } from 'types'

const CardMagazine: React.FC<CardMagazineProps> = (props) => {
  const { href, img, title, content, className } = props
  const __finalClassNames = classnames(
    'bg_white rounded shadow inline-block cursor-pointer text-left m-3 w-56 pb-3',
    className && className
  )

  return (
    <ActionItem dataName="CardMagazine" href={href}>
      <div className={__finalClassNames}>
        <Image
          src={`/${img}`}
          alt={title.toString()}
          placeholder="empty"
          width={208 * 2}
          height={272 * 2}
        />
        <p className="px-3">{title}</p>
        <small className="px-3">{content}</small>
      </div>
    </ActionItem>
  )
}

export default CardMagazine
