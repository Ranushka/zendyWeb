import React from 'react'
import classnames from 'classnames'
import { ActionLink } from 'components/atoms'

type Props = {
  href: string
  className?: string
  text: React.ReactNode
}

const SeeAll: React.FC<Props> = (props) => {
  const { href, text, className } = props

  return (
    <div className={classnames('text-center py-4 lh__3', className)}>
      <ActionLink dataName="SeeAll" href={href} text={text} />
    </div>
  )
}

export default SeeAll
