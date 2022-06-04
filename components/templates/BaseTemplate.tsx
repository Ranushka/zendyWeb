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

  return (
    <main className="text-gray-600 bg-gray-50 text-sm">
      <Header isSearchPage={isSearchPage} />
      {children}
      <Footer />
    </main>
  )
}

export default BaseTemplate
