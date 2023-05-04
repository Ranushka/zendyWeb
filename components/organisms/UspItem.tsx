import React from 'react'
import Image from "next/image"

/* __DOC

<UspItem src="/infoIcon/fullText.svg" title="Full text publications" content="Freedom to save content offline and read content as you like" />

DOC__ */

type Props = {
  src: string
  title: React.ReactNode
  content: React.ReactNode
}

const UspItem: React.FC<Props> = (props) => {
  const { src, title, content } = props

  return (
    <div className="mx-8 w-52 px-4 py-8">
      <Image
        width={64}
        height={64}
        src={src}
        alt={title?.toString()}
        placeholder="empty"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />

      <h3>{title}</h3>

      <small>{content}</small>
    </div>
  );
}

export default UspItem
