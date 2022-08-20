import React from 'react'
import classnames from 'classnames'
import { ActionLink } from 'components/atoms'

import { IconArrowLeft, IconArrowRight } from 'components/icons'

/* __DOC

 <NextArticle
          url="/"
          prev
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />

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
      <div className={classnames('bg_white rounded-md shadow')}>
        <div className="">{prev ? <IconArrowLeft /> : <IconArrowRight />}</div>

        <small className="">{title}</small>
      </div>
    </ActionLink>
  )
}

export default NextArticle
