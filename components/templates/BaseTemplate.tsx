import React from 'react'

import { Header, Footer } from 'components/organisms'

type Props = {
  children?: React.ReactNode
}

const BaseTemplate: React.FC<Props> = ({ children }) => {
  return (
    <main className="text_nut6 bg_nut0 text-sm">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default BaseTemplate
