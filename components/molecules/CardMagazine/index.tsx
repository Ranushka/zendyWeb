import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import DeviceTypeContext from 'context/DeviceTypeContext'
import { CardMagazineProps } from 'types'

const Mobile = dynamic(() => import('./Mobile'))
const Desktop = dynamic(() => import('./Desktop'))

const CardMagazine: React.FC<CardMagazineProps> = (props) => {
  const { isMobile } = useContext(DeviceTypeContext)

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default CardMagazine
