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
      href={href}
      className="inline-block cursor-pointer text-left mx-2"
    >
      <div className="overflow-hidden shadow rounded-lg h-90 w-80 m-auto whitespace-pre-wrap">
        <div className="w-full block h-full">
          <Image
            src={imgUrl}
            alt={title.toString()}
            placeholder="empty"
            width={656}
            height={400}
          />
          <div className="bg-white w-full p-4">
            <p className="text-indigo-500 text-md font-medium"></p>
            <p className="text-xl font-medium mb-2 font-serif">{title}</p>
            <p className="text-gray-400 line-clamp-4">{content}</p>
          </div>
        </div>
      </div>
      {/* <div
        className={classnames(styles.curated, 'bg-white shadow rounded')}
        style={style}
      >
        <Image
          src={imgUrl}
          alt={title.toString()}
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
      </div> */}
    </ActionItem>
  )
}

export default CardCurated
