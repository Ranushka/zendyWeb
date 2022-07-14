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
        <div className="relative w-full h-64">
          <Image
            alt={title.toString()}
            src={`/${img}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <p className="px-3 mt-2">{title}</p>
        <small className="px-3">{content}</small>
      </div>
    </ActionItem>
  )
}

export default CardMagazine
