import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconDelete: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08527 0.571533C5.87078 0.571533 4.87027 1.55179 4.87027 2.74169V3.47263H0.428711V4.92318H1.90923V17.2529C1.90923 18.4541 2.90395 19.4287 4.13001 19.4287H13.0131C14.2392 19.4287 15.2339 18.4541 15.2339 17.2529V4.92318H16.7144V3.47263H12.2729V2.74169C12.2729 1.55179 11.2724 0.571533 10.0579 0.571533H7.08527ZM7.08525 2.02207H10.0579C10.4743 2.02207 10.7923 2.33371 10.7923 2.74168V3.47262H6.35078V2.74168C6.35078 2.33371 6.66886 2.02207 7.08525 2.02207ZM6.35081 6.37372H4.87029V16.5276H6.35081V6.37372ZM7.83133 6.37372H9.31185V16.5276H7.83133V6.37372ZM12.2729 6.37372H10.7924V16.5276H12.2729V6.37372Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconDelete
