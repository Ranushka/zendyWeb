import React from 'react'
import { signIn } from 'next-auth/react'

import IconSocialOrcid from 'components/icons/IconSocialOrcid'
import IconSocialGoogle from 'components/icons/IconSocialGoogle'
import IconSocialFacebook from 'components/icons/IconSocialFacebook'
import { ActionBtn } from 'components/atoms'
import classNames from 'classnames'

const Login: React.FC = () => {
  const socialBtnClass = classNames(
    'justify-center w-full text-center',
    'border border_nut4 hover:shadow-lg active:shadow-none'
  )

  return (
    <div>
      <h1 className="mb-8 text-center font-serif text-3xl">Login / Register</h1>

      <div className="my-4 block text-center" key="Google">
        <ActionBtn
          dataName="LoginGoogleBtn"
          text={'Continue with Google'}
          type={'btn__default'}
          className={socialBtnClass}
          style={{ backgroundColor: '#fff' }}
          onClick={() => signIn('linkedin')}
          icon={<IconSocialGoogle className="h-6" />}
        />
      </div>

      <div className="my-4 block text-center" key="LinkedIn">
        <ActionBtn
          dataName="LoginFacebookBtn"
          text={'Continue with Facebook'}
          type={'btn__default'}
          className={socialBtnClass}
          style={{
            backgroundColor: '#3c5a99',
            borderColor: '#3c5a99',
            color: '#fff'
          }}
          onClick={() => signIn('linkedin')}
          icon={<IconSocialFacebook className="text_white" />}
        />
      </div>

      <div className="my-4 block text-center" key="orcid">
        <ActionBtn
          dataName="LoginOrcidBtn"
          text={'Continue with ORCID ID'}
          type={'btn__default'}
          className={socialBtnClass}
          style={{ backgroundColor: '#a5cd39', color: '#fff' }}
          onClick={() => signIn('linkedin')}
          icon={<IconSocialOrcid className="text_white" />}
        />
      </div>

      <small className="mt-4 block text-center text-gray-400">
        ---- or ----
      </small>
    </div>
  )
}

export default Login
