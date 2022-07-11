import React from 'react'
import classnames from 'classnames'

import { ActionItem } from 'components/atoms'
import { analyticsClickEvent } from 'analytics/events'

type Props = {
  title?: string
  icon?: React.ReactNode
  dataName: string
  href?: string
  small?: boolean
  onClick?: Function
  tabindex?: number
  classNames?: string
}

const BtnFab: React.FC<Props> = (props) => {
  const {
    title,
    href = '#',
    dataName,
    icon,
    small,
    onClick,
    tabindex = 1,
    classNames
  } = props

  const className = classnames(
    'fab',
    small && 'fab__small',
    classNames && classNames
  )

  const handleClick = () => {
    analyticsClickEvent(props)
    onClick()
  }

  if (onClick) {
    return (
      <div
        data-name={dataName}
        tabIndex={tabindex}
        onClick={handleClick}
        className={className}
        role="button"
        title={title}
      >
        {icon}
      </div>
    )
  }

  return (
    <ActionItem
      dataName={dataName}
      href={href}
      className={className}
      tabIndex={tabindex}
    >
      <>{icon}</>
    </ActionItem>
  )
}

export default BtnFab
