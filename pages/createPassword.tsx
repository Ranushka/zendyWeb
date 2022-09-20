import React from 'react'
import dynamic from 'next/dynamic'

// import LoginWithSocialMedia from 'components/organisms/LoginWithSocialMedia'
// import ActionBtn from 'components/atoms/ActionBtn'
import LoginRegisterTemplate from 'components/templates/LoginRegisterTemplate'

const EmailCreatePassword = dynamic(
  () => import('components/organisms/EmailCreatePassword')
)

const ForgotPassword: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <EmailCreatePassword />
    </LoginRegisterTemplate>
  )
}

export default ForgotPassword
