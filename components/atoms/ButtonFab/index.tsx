import React from 'react'
import { ActionItem } from 'components/atoms'
import classnames from 'classnames'
import { title } from 'process'
// import styles from './index.module.scss'

type Props = {
  title?: string
  icon?: React.ReactNode
  href?: string
  small?: boolean
  onClick?: Function
  classNames?: string
}

const BtnFab: React.FC<Props> = ({
  title,
  href = '#',
  icon,
  small,
  onClick,
  classNames,
}) => {
  const className = classnames(
    'fab',
    small && 'fab__small',
    classNames && classNames
  )

  if (onClick) {
    return (
      <div
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
    <ActionItem href={href} className={className}>
      <>{icon}</>
    </ActionItem>
  )
}

export default BtnFab
