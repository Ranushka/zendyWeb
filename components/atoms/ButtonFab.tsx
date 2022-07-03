import React from 'react'
import { ActionItem } from 'components/atoms'
import classnames from 'classnames'

type Props = {
  title?: string
  icon?: React.ReactNode
  href?: string
  small?: boolean
  onClick?: Function
  tabindex?: number
  classNames?: string
}

const BtnFab: React.FC<Props> = ({
  title,
  href = '#',
  icon,
  small,
  onClick,
  tabindex = 1,
  classNames
}) => {
  const className = classnames(
    'fab',
    small && 'fab__small',
    classNames && classNames
  )

  if (onClick) {
    return (
      <div
        tabIndex={tabindex}
        onClick={() => onClick()}
        className={className}
        role="button"
        title={title}
      >
        {icon}
      </div>
    )
  }

  return (
    <ActionItem href={href} className={className} tabIndex={tabindex}>
      <>{icon}</>
    </ActionItem>
  )
}

export default BtnFab
