import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconEdit: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2319 2.625L5.03544 13.8214L2.63477 21.365L10.1783 18.9643L21.3747 7.76786C21.3747 7.76786 21.289 5.967 19.6604 4.33929C18.0319 2.71071 16.2319 2.625 16.2319 2.625ZM16.5533 4.01786C17.4721 4.19271 18.2037 4.58195 18.7681 5.16127C19.3326 5.74059 19.7299 6.51 19.9819 7.44643L18.4283 9L14.9997 5.57143L16.2319 4.33929L16.5533 4.01786ZM8.03544 15.9643C7.01197 14.9408 5.99144 14.6828 5.98131 14.6802L5.03376 17.6769L6.31613 18.9593L9.35798 17.9799L9.32115 17.9364C9.32115 17.9364 9.14972 16.9929 8.03544 15.9643Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconEdit
