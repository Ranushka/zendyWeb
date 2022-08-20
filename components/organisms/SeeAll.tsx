import React from 'react'
import classnames from 'classnames'
import { ActionLink } from 'components/atoms'

/* __DOC

<SeeAll href="/qna" text="See all Questions" className="mt-4 mb-8" />

DOC__ */

type Props = {
  href: string
  className?: string
  text: React.ReactNode
}

const SeeAll: React.FC<Props> = (props) => {
  const { href, text, className } = props

  return (
    <div className={classnames('lh__3 py-4 text-center', className)}>
      <ActionLink dataName="SeeAll" href={href} text={text} />
    </div>
  )
}

export default SeeAll
