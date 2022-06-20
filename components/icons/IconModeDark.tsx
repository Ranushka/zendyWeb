import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconModeDark: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315ZM8.57103 17.7142C8.44354 17.7142 8.31647 17.7099 8.19004 17.7015C7.81922 17.4537 7.47086 17.1686 7.15087 16.8486C5.86491 15.5627 5.14246 13.8185 5.14246 11.9999C5.14246 10.1813 5.86491 8.43713 7.15087 7.15117C7.47086 6.83118 7.81923 6.54608 8.19004 6.29832C8.31647 6.28988 8.44354 6.28562 8.57103 6.28562C10.0866 6.28562 11.54 6.88765 12.6116 7.95929C13.6833 9.03093 14.2853 10.4844 14.2853 11.9999C14.2853 13.5154 13.6833 14.9689 12.6116 16.0405C11.54 17.1121 10.0866 17.7142 8.57103 17.7142Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconModeDark
