import React from 'react'
import classnames from 'classnames'
import { ActionLink } from 'components/atoms'

import { IconArrowLeft, IconArrowRight } from 'components/icons'

type Props = {
  url: string
  title: React.ReactNode
  prev?: boolean
}

const NextArticle: React.FC<Props> = (props) => {
  const { url = '/search', title, prev } = props

  return (
    <ActionLink dataName="NextArticle" href={url}>
      <div className={classnames('rounded-md shadow bg_white')}>
        <div className="">{prev ? <IconArrowLeft /> : <IconArrowRight />}</div>

        <small className="">{title}</small>
      </div>
    </ActionLink>
  )
}

export default NextArticle
