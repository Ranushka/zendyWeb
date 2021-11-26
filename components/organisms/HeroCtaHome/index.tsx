import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import DeviceTypeContext from 'context/DeviceTypeContext'

type Props = {}
const Mobile = dynamic(() => import('./Mobile'))
const Desktop = dynamic(() => import('./Desktop'))

const HeroCtaHome: React.FC<Props> = (props) => {
  const { isMobile } = useContext(DeviceTypeContext)

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default HeroCtaHome
