import React from 'react'
import { AuthenticateRegister } from 'components/organisms'
import { LoginRegisterTemplate } from 'components/templates'

const Register: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <AuthenticateRegister />
    </LoginRegisterTemplate>
  )
}
export default Register
