import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import DeviceTypeContext from 'context/DeviceTypeContext'
import SiteLinksSearchJsonLd from 'analytics/SiteLinksSearchJsonLd'

type Props = {
  children?: React.ReactNode
  isSearchPage?: boolean
}

const DynamicComponentMobile = dynamic(() => import('./MobileHeader'))
const DynamicComponentDesktop = dynamic(() => import('./DesktopHeader'))

const Header: React.FC<Props> = ({ children, isSearchPage }: Props) => {
  const { isMobile } = useContext(DeviceTypeContext)

  return (
    <>
      <SiteLinksSearchJsonLd />
      {isMobile ? (
        <DynamicComponentMobile isSearchPage={isSearchPage}>
          {children}
        </DynamicComponentMobile>
      ) : (
        <DynamicComponentDesktop>{children} </DynamicComponentDesktop>
      )}
    </>
  )
}

export default Header
