import React from 'react'
import Image from "next/image"
import { ActionLink } from 'components/atoms'
import classnames from 'classnames'
import { CardMagazineProps } from 'types'

/* __DOC

CardMagazine

DOC__ */

const CardMagazine: React.FC<CardMagazineProps> = (props) => {
  const { href, img, title, content, className } = props
  const __finalClassNames = classnames(
    'bg_white rounded shadow inline-block cursor-pointer text-left m-3 w-56 pb-3',
    className && className
  )

  return (
    <ActionLink dataName="CardMagazine" href={href}>
      <div className={__finalClassNames}>
        <div className="relative h-64 w-full">
          <Image
            alt={title?.toString()}
            src={`/${img}`}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <p className="mt-2 px-3">{title}</p>
        <small className="px-3">{content}</small>
      </div>
    </ActionLink>
  );
}

export default CardMagazine
