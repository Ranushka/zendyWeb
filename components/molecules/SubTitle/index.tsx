import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import DeviceTypeContext from 'context/DeviceTypeContext'
import { SubTitleProps } from 'types'

const Mobile = dynamic(() => import('./Mobile'))
const Desktop = dynamic(() => import('./Desktop'))

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { isMobile } = useContext(DeviceTypeContext)

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default SubTitle
