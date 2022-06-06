import React from 'react'
import { AuthenticateLogin } from 'components/organisms'
import { LoginRegisterTemplate } from 'components/templates'

const Login: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <AuthenticateLogin />
    </LoginRegisterTemplate>
  )
}

export default Login
