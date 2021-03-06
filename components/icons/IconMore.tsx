import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconMore: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        d="M3 14H7V10H3L3 14ZM10 14H14V10H10V14ZM21 14L17 14V10H21V14Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconMore
