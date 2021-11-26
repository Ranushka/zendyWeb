import React, { useContext } from 'react'

import { Header, Footer } from 'components/organisms'
import DeviceTypeContext from 'context/DeviceTypeContext'
import classnames from 'classnames'

type Props = {
  isSearchPage?: boolean
  children?: React.ReactNode
}

const BaseTemplate: React.FC<Props> = ({ isSearchPage, children }) => {
  const { isMobile } = useContext(DeviceTypeContext)
  const finalClassNames = classnames(
    'bg__nut1',
    isMobile ? 'contain__mobile' : 'contain__desktop'
  )

  return (
    <main className={finalClassNames}>
      <Header isSearchPage={isSearchPage} />
      {children}
      <Footer />
    </main>
  )
}

export default BaseTemplate
