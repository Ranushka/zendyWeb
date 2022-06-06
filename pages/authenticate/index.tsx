import React from 'react'
import { Authenticate } from 'components/organisms'
import { LoginRegisterTemplate } from 'components/templates'

const Index: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <Authenticate />
    </LoginRegisterTemplate>
  )
}

export default Index
