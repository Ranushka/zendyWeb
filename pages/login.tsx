import React from 'react'
import dynamic from 'next/dynamic'

// import routs from 'helpers/routs'
// import { useRouter } from 'next/router'

import LoginWithSocialMedia from 'components/organisms/LoginWithSocialMedia'
import ActionBtn from 'components/atoms/ActionBtn'
import ActionLink from 'components/atoms/ActionLink'
import LoginRegisterTemplate from 'components/templates/LoginRegisterTemplate'

const LoginWithEmail = dynamic(
  () => import('components/organisms/LoginWithEmail')
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
        <div className="mt-4 block text-center" key="orcid">
          <ActionBtn
            dataName="LoginEmailBtn"
            text={'Continue with Email'}
            type={'btn__default'}
            className={socialBtnClass}
            style={{ backgroundColor: '#fff', textShadow: 'none' }}
            onClick={() => setWithEmail(true)}
          />
        </div>
      )}

      <small className="text_nut5 mt-4 block text-center">
        by continuing, you agree to our{' '}
        <ActionLink
          dataName="NewsListItem"
          text="terms of use"
          href={'/zendy-terms-of-use'}
          type="link__small"
          className="underline"
        />
      </small>
    </LoginRegisterTemplate>
  )
}

export default Login
