import React from 'react'
import Image from 'next/image'
import { ActionItem } from 'components/atoms'

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
    <ActionItem
      dataName="CardCurated"
      href={href}
      className="inline-block cursor-pointer text-left mx-2"
    >
      <div className="overflow-hidden shadow rounded-lg h-90 w-80 m-auto whitespace-pre-wrap">
        <div className="w-full block h-full">
          <div className="relative w-full h-52">
            <Image
              priority
              alt={title.toString()}
              src={imgUrl}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="bg_white w-full p-4">
            <p className="text-xl font-medium mb-2 font-serif">{title}</p>
            <p className="text_nut5 line-clamp-4">{content}</p>
          </div>
        </div>
      </div>
    </ActionItem>
  )
}

export default CardCurated
