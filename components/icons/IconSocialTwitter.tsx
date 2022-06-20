import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconSocialTwitter: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM17.05 9.514C17.05 9.6 17.05 9.685 17.05 9.857C17.05 13.114 14.564 16.886 10.021 16.886C8.65 16.886 7.364 16.457 6.25 15.772C6.421 15.772 6.679 15.772 6.85 15.772C7.964 15.772 9.079 15.343 9.936 14.743C8.822 14.743 7.965 13.972 7.622 13.029C7.793 13.029 7.965 13.115 8.051 13.115C8.308 13.115 8.48 13.115 8.737 13.029C7.623 12.772 6.766 11.829 6.766 10.629C7.109 10.8 7.452 10.886 7.88 10.972C7.194 10.372 6.766 9.686 6.766 8.829C6.766 8.4 6.852 7.972 7.109 7.629C8.309 9.086 10.109 10.115 12.166 10.2C12.166 10.029 12.08 9.857 12.08 9.6C12.08 8.229 13.194 7.114 14.566 7.114C15.252 7.114 15.937 7.371 16.366 7.885C16.966 7.799 17.48 7.542 17.909 7.285C17.738 7.885 17.309 8.314 16.795 8.656C17.309 8.57 17.738 8.485 18.252 8.227C17.907 8.743 17.479 9.171 17.05 9.514Z"
      />
    </Svg>
  )
}

export default IconSocialTwitter
