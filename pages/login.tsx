import React from 'react'
import dynamic from 'next/dynamic'

import LoginWithSocialMedia from 'components/organisms/LoginWithSocialMedia'
import { ActionBtn } from 'components/atoms'
import LoginRegisterTemplate from 'components/templates/LoginRegisterTemplate'

const LoginWithEmail = dynamic(() =>
  import('components/organisms/LoginWithEmail')
)

const Login: React.FC = () => {
  const [withEmail, setWithEmail] = React.useState(false)
  const socialBtnClass =
    'justify-center w-full text-center border border_nut4 hover:shadow-lg active:shadow-none'
  return (
    <LoginRegisterTemplate>
      {!withEmail && <LoginWithSocialMedia />}

      {withEmail && <LoginWithEmail setWithEmail={setWithEmail} />}

      {!withEmail && (
        <div className="block text-center my-4" key="orcid">
          <ActionBtn
            dataName="LoginEmailBtn"
            text={'Login with Email'}
            type={'btn__default'}
            className={socialBtnClass}
            style={{ backgroundColor: '#fff' }}
            onClick={() => setWithEmail(true)}
          />
        </div>
      )}
    </LoginRegisterTemplate>
  )
}

export default Login
