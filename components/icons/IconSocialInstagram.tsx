import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconSocialLinkedIn: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        d="M8 3C5.239 3 3 5.239 3 8V16C3 18.761 5.239 21 8 21H16C18.761 21 21 18.761 21 16V8C21 5.239 18.761 3 16 3H8ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconSocialLinkedIn
