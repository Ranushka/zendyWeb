import React from 'react'
import { AuthenticateOtp } from 'components/organisms'
import LoginRegisterTemplate from 'components/templates/LoginRegisterTemplate'

const Otp: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <AuthenticateOtp />
    </LoginRegisterTemplate>
  )
}

export default Otp
