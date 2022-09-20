import React from 'react'
import classnames from 'classnames'
import { ActionLink } from 'components/atoms'

import { IconArrowLeft, IconArrowRight } from 'components/icons'

/* __DOC

NextArticle

DOC__ */

type Props = {
  url: string
  title: React.ReactNode
  prev?: boolean
}

const NextArticle: React.FC<Props> = (props) => {
  const { url = '/search', title, prev } = props

  return (
    <ActionLink dataName="NextArticle" href={url}>
      <div
        className={classnames(
          'bg_white flex py-2 shadow',
          prev ? 'rounded-r-md pr-2' : 'flex-row-reverse rounded-l-md pl-2'
        )}
      >
        <div className="flex">
          {prev ? <IconArrowLeft /> : <IconArrowRight />}
        </div>
        <small className="line-clamp-3">{title}</small>
      </div>
    </ActionLink>
  )
}

export default NextArticle
