import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  icon?: React.ReactNode
  text?: string
  primary?: boolean
  onClick?: Function
  isActive?: boolean
}

const BtnFab: React.FC<Props> = ({
  icon,
  text,
  primary,
  onClick,
  isActive = false
}) => {
  const finalClassList = classnames(
    'noSelect w-full flex-col items-center pt-1',
    primary &&
      'flex items-center justify-center bg-gray-100 -mt-4 mb-4 rounded-full shadow',
    isActive && styles.active
  )

  return (
    <button
      onClick={() => onClick()}
      className={finalClassList}
      role="button"
      style={{ outline: 'none' }}
    >
      {icon}
      {text && <small className="block">{text}</small>}
    </button>
  )
}

export default BtnFab
