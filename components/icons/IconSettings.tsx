import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconSettings: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4H8V8H6V4ZM8 11H9V9H5V11H6V20H8V11ZM11 4H13V13H11V4ZM13 16H14V14H10V16H11V20H13V16ZM18 4H16V6H18V4ZM19 9H18V20H16V9H15V7H19V9Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconSettings
