import React from 'react'
import { ActionItem } from 'components/atoms'
import classnames from 'classnames'
// import styles from './index.module.scss'

type Props = {
  icon?: React.ReactNode
  href?: string
  small?: boolean
  onClick?: Function
  classNames?: string
}

const BtnFab: React.FC<Props> = (props) => {
  const { href = '#', icon, small, onClick, classNames } = props

  const className = classnames(
    'fab',
    small && 'fab__small',
    classNames && classNames
  )

  if (onClick) {
    return (
      <div onClick={() => onClick()} className={className} role="button">
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
