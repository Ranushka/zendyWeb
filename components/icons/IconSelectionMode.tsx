import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconSelectionMode: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.48985 8.70016L10.7342 4.46115C10.8945 4.30053 10.9853 4.08279 10.9853 3.8558C10.9853 3.62881 10.8944 3.41099 10.7341 3.25052C10.5739 3.09019 10.3561 2.99992 10.13 3C9.90274 2.99992 9.685 3.09011 9.52482 3.25059L5.27722 7.49286L3.47094 5.68657C3.39199 5.60511 3.2978 5.53919 3.19319 5.49465C3.08865 5.45004 2.97626 5.426 2.86321 5.42511C2.74921 5.42429 2.63689 5.44575 2.53139 5.48851C2.42603 5.53231 2.33096 5.59572 2.25039 5.67629C2.19742 5.72926 2.15118 5.78941 2.11359 5.85482C2.09458 5.88774 2.07778 5.92199 2.06343 5.95736C2.02059 6.06205 1.99921 6.17517 2.00002 6.2883C2.00039 6.34771 2.00713 6.40667 2.01985 6.46438C2.03147 6.51729 2.04804 6.56907 2.06935 6.61909C2.09376 6.67635 2.12432 6.73044 2.1605 6.78068C2.19046 6.82233 2.2242 6.86109 2.26149 6.89691L4.07458 8.71059L4.67755 9.31081C5.01403 9.6457 5.55862 9.64329 5.89217 9.30549L6.48985 8.70016ZM14 3C13.4477 3 13 3.44772 13 4V5C13 5.55228 13.4477 6 14 6H21C21.5523 6 22 5.55228 22 5V4C22 3.44772 21.5523 3 21 3H14ZM12 9C12 8.44772 12.4477 8 13 8C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10C12.4477 10 12 9.55228 12 9ZM15 9C15 8.44772 15.4477 8 16 8H21C21.5523 8 22 8.44772 22 9C22 9.55228 21.5523 10 21 10H16C15.4477 10 15 9.55228 15 9ZM14 14C13.4477 14 13 14.4477 13 15V16C13 16.5523 13.4477 17 14 17H21C21.5523 17 22 16.5523 22 16V15C22 14.4477 21.5523 14 21 14H14ZM12 20C12 19.4477 12.4477 19 13 19C13.5523 19 14 19.4477 14 20C14 20.5523 13.5523 21 13 21C12.4477 21 12 20.5523 12 20ZM15 20C15 19.4477 15.4477 19 16 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H16C15.4477 21 15 20.5523 15 20ZM10.7342 15.4611L6.48985 19.7002L5.89217 20.3055C5.55862 20.6433 5.01403 20.6457 4.67755 20.3108L4.07458 19.7106L2.26149 17.8969C2.2242 17.8611 2.19046 17.8223 2.1605 17.7807C2.12432 17.7304 2.09376 17.6764 2.06935 17.6191C2.04804 17.5691 2.03147 17.5173 2.01985 17.4644C2.00713 17.4067 2.00039 17.3477 2.00002 17.2883C1.99921 17.1752 2.02059 17.062 2.06343 16.9574C2.07778 16.922 2.09458 16.8877 2.11359 16.8548C2.15118 16.7894 2.19742 16.7293 2.25039 16.6763C2.33096 16.5957 2.42603 16.5323 2.53139 16.4885C2.63689 16.4457 2.74921 16.4243 2.86321 16.4251C2.97626 16.426 3.08865 16.45 3.19319 16.4947C3.2978 16.5392 3.39199 16.6051 3.47094 16.6866L5.27722 18.4929L9.52482 14.2506C9.685 14.0901 9.90274 13.9999 10.13 14C10.3561 13.9999 10.5739 14.0902 10.7341 14.2505C10.8944 14.411 10.9853 14.6288 10.9853 14.8558C10.9853 15.0828 10.8945 15.3005 10.7342 15.4611Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconSelectionMode
