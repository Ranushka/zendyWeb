import React from 'react'
import { ActionLink } from 'components/atoms'

/* __DOC

CardSubject

DOC__ */

type Props = {
  href: string
  title: React.ReactNode
}

const CardSubject: React.FC<Props> = (props) => {
  const { href, title } = props

  return (
    <ActionLink
      dataName="CardSubject"
      href={href}
      className="bg_white mx-2 my-2 inline-block rounded-md py-2 px-3 shadow"
    >
      <>{title}</>
    </ActionLink>
  )
}

export default CardSubject
