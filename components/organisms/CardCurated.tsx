import React from 'react'
import Image from 'next/image'
import { ActionLink } from 'components/atoms'

/* __DOC

CardCurated

DOC__ */

type Props = {
  href: string
  imgUrl: string
  title: React.ReactNode
  content: React.ReactNode
  style?: React.CSSProperties
}

const CardCurated: React.FC<Props> = (props) => {
  const { href, imgUrl, title, content } = props

  return (
    <ActionLink
      dataName="CardCurated"
      href={href}
      className="mx-2 inline-block cursor-pointer text-left"
    >
      <div className="h-90 m-auto w-80 overflow-hidden whitespace-pre-wrap rounded-lg shadow">
        <div className="block h-full w-full">
          <div className="relative h-52 w-full">
            <Image
              priority
              alt={title?.toString()}
              src={imgUrl || '/'}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="bg_white w-full p-4">
            <p className="mb-2 font-serif text-xl font-medium">{title}</p>
            <p className="text_nut5 line-clamp-4">{content}</p>
          </div>
        </div>
      </div>
    </ActionLink>
  )
}

export default CardCurated
