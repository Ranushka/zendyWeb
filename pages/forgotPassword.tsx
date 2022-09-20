import React from 'react'
import dynamic from 'next/dynamic'

// import LoginWithSocialMedia from 'components/organisms/LoginWithSocialMedia'
// import ActionBtn from 'components/atoms/ActionBtn'
import LoginRegisterTemplate from 'components/templates/LoginRegisterTemplate'

const EmailReset = dynamic(() => import('components/organisms/EmailReset'))

const ForgotPassword: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <EmailReset />
    </LoginRegisterTemplate>
  )
}

export default ForgotPassword
