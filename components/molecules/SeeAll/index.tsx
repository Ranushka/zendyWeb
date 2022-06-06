import React from 'react'
import classnames from 'classnames'
import { ActionItem } from 'components/atoms'

type Props = {
  href: string
  className?: string
  text: React.ReactNode
}

const SeeAll: React.FC<Props> = (props) => {
  const { href, text, className } = props

  return (
    <div className={classnames('text-center py__3 lh__3', className)}>
      <ActionItem href={href} text={text} />
    </div>
  )
}

export default SeeAll
