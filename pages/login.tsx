import React from 'react'
import { signIn } from 'next-auth/react'
import IconSocialOrcid from 'components/icons/IconSocialOrcid'
import IconSocialGoogle from 'components/icons/IconSocialGoogle'
import IconSocialFacebook from 'components/icons/IconSocialFacebook'
import { ActionItem } from 'components/atoms'
import { LoginRegisterTemplate } from 'components/templates'
import LoginWithEmail from 'components/organisms/LoginWithEmail'

const Login: React.FC = () => {
  return (
    <LoginRegisterTemplate>
      <h1 className="text-3xl font-serif my-8 text-center">Join Zendy</h1>

      <div className="block text-center my-4" key="Google">
        <ActionItem
          dataName="LoginGoogleBtn"
          text={'Login with Google'}
          type={'btn__default'}
          className="justify-center w-full text-center border border_nut4 hover:shadow-lg"
          onClick={() => signIn('linkedin')}
          icon={<IconSocialGoogle className="h-6" />}
        />
      </div>

      <div className="block text-center my-4" key="LinkedIn">
        <ActionItem
          dataName="LoginFacebookBtn"
          text={'Login with Facebook'}
          type={'btn__default'}
          className="justify-center w-full text-center border hover:shadow-md"
          style={{
            backgroundColor: '#3c5a99',
            borderColor: '#3c5a99',
            color: '#fff'
          }}
          onClick={() => signIn('linkedin')}
          icon={<IconSocialFacebook className="text_white" />}
        />
      </div>

      <div className="block text-center my-4" key="orcid">
        <ActionItem
          dataName="LoginOrcidBtn"
          text={'Login with ORCID ID'}
          type={'btn__default'}
          className="justify-center w-full text-center hover:shadow-md"
          style={{ backgroundColor: '#a5cd39', color: '#fff' }}
          onClick={() => signIn('linkedin')}
          icon={<IconSocialOrcid className="text_white" />}
        />
      </div>

      <small className="block text-center text-gray-400 mt-8">
        ---- or ----
      </small>
      <LoginWithEmail />
    </LoginRegisterTemplate>
  )
}

export default Login
