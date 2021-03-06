import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconCatagories: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.7147 7.71422H4.28613V4.28564H7.7147V7.71422ZM4.28613 13.7142H7.7147V10.2856H4.28613V13.7142ZM10.2861 13.7142H13.7147V10.2856H10.2861V13.7142ZM19.7147 13.7142H16.2861V10.2856H19.7147V13.7142ZM4.28613 19.7142H7.7147V16.2856H4.28613V19.7142ZM13.7147 19.7142H10.2861V16.2856H13.7147V19.7142ZM16.2861 19.7142H19.7147V16.2856H16.2861V19.7142ZM10.2861 7.71422H13.7147V4.28564H10.2861V7.71422ZM19.7147 7.71422H16.2861V4.28564H19.7147V7.71422Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconCatagories
