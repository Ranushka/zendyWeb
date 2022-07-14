import React from 'react'
import classnames from 'classnames'

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
    'noSelect w-full flex-col items-center ',
    primary ? 'pt-1 pb-1' : 'pt-2 pb-1',
    primary &&
      'flex items-center justify-center bg-orange-600 -mt-2 mb-2 rounded-full shadow',
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
      {!primary && <small className="block -mt-1">{text}</small>}
    </button>
  )
}

export default BtnFab
