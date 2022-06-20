import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconLogout: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        d="M6.00042 3.42847C5.05328 3.42847 4.28613 4.19561 4.28613 5.14275V18.857C4.28613 19.8042 5.05328 20.5713 6.00042 20.5713H12.8576C13.8047 20.5713 14.5718 19.8042 14.5718 18.857V12.857H8.57185V11.1428H14.5718V5.14275C14.5718 4.19561 13.8047 3.42847 12.8576 3.42847H6.00042ZM14.5718 11.1428V12.857H16.2861V15.4285L19.7147 11.9999L16.2861 8.57132V11.1428H14.5718Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconLogout
