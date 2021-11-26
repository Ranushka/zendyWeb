import React from 'react'
import { ActionItem, Space } from 'components/atoms'

type Props = {
  href: string
  text: React.ReactNode
}

const SeeAll: React.FC<Props> = (props) => {
  const { href, text } = props

  return (
    <div className="text__center py__3 lh__3">
      <ActionItem href={href} text={text} />
    </div>
  )
}

export default SeeAll
