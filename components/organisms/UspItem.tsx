import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  title: React.ReactNode
  content: React.ReactNode
}

const UspItem: React.FC<Props> = (props) => {
  const { src, title, content } = props

  return (
    <div className="px-4 py-8 mx-8 w-52">
      <Image
        width={64}
        height={64}
        src={src}
        alt={title.toString()}
        placeholder="empty"
      />

      <h3>{title}</h3>

      <small>{content}</small>
    </div>
  )
}

export default UspItem
