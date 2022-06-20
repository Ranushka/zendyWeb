import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconCalendarPlus: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        d="M7 1C6.448 1 6 1.448 6 2V3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3H18V2C18 1.448 17.552 1 17 1C16.448 1 16 1.448 16 2V3H8V2C8 1.448 7.552 1 7 1ZM5 8H19L19.002 19H5V8Z"
        fill="currentColor"
      />
      <path
        d="M11 10.5C11 9.94801 11.448 9.50001 12 9.50001C12.552 9.50001 13 9.94801 13 10.5V12.5H15C15.552 12.5 16 12.948 16 13.5C16 14.052 15.552 14.5 15 14.5H13V16.5C13 17.052 12.552 17.5 12 17.5C11.448 17.5 11 17.052 11 16.5V14.5H9C8.448 14.5 8 14.052 8 13.5C8 12.948 8.448 12.5 9 12.5H11V10.5Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconCalendarPlus
