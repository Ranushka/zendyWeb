import React from 'react'
import { ActionItem } from 'components/atoms'

type Props = {
  href: string
  title: React.ReactNode
}

const CardSubject: React.FC<Props> = (props) => {
  const { href, title } = props

  return (
    <ActionItem
      href={href}
      className="inline-block bg_white mx-2 my-2 py-2 px-3 rounded-md shadow"
    >
      <>{title}</>
    </ActionItem>
  )
}

export default CardSubject
