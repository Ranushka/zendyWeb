import React from 'react'

import { Header, Footer } from 'components/organisms'

type Props = {
  isSearchPage?: boolean
  children?: React.ReactNode
}

const BaseTemplate: React.FC<Props> = ({ children }) => {
  return (
    <main className="text-gray-600 bg-gray-50 text-sm">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default BaseTemplate
