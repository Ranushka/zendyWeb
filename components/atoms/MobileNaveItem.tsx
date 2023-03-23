import React from 'react'
import classnames from 'classnames'

type Props = {
  icon?: React.ReactNode
  text?: string
  primary?: boolean
  onClick?: Function
  isActive?: boolean
}

const MobileNaveItem: React.FC<Props> = ({
  icon,
  text,
  primary,
  onClick,
  isActive = false
}) => {
  const finalClassList = classnames(
    'noSelect w-full flex-col items-center ',
    primary ? 'pt-1 pb-1' : 'pt-2 pb-1',
    primary &&
      'flex items-center justify-center bg_pri5 mt-1 mb-1 rounded-full shadow',
    isActive && 'text_pri7'
  )

  return (
    <button
      title={text}
      onClick={() => onClick()}
      className={finalClassList}
      style={{ outline: 'none' }}
    >
      {icon}
      {!primary && <small className="-mt-1 block">{text}</small>}
    </button>
  )
}

export default MobileNaveItem
