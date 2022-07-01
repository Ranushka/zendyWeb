import React, { ChangeEvent } from 'react'
import { signIn } from 'next-auth/react'
import IconSocialOrcid from 'components/icons/IconSocialOrcid'
import IconSocialGoogle from 'components/icons/IconSocialGoogle'
import IconSocialFacebook from 'components/icons/IconSocialFacebook'
import { ActionItem, Input } from 'components/atoms'
import ReCAPTCHA from 'react-google-recaptcha'
import { LoginRegisterTemplate } from 'components/templates'

const onSubmitSignUp = async (values) => {
  const res = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    reCaptcha: values.reCaptcha,
    callbackUrl: `${window.location.origin}`
  })

  if (res?.error) {
    console.log('custom credentials fail')
    // setError(res.error)
  }

  console.log('custom credentials Success', res)
}

const Login: React.FC = () => {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const onSubmitForm = async (e) => {
    e.preventDefault()
    const reCaptcha = await recaptchaRef.current.executeAsync()
    onSubmitSignUp({
      reCaptcha,
      ...formData
    })
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value

    setFormData({ ...formData, [name]: value })
  }

  return (
    <LoginRegisterTemplate>
      <h1 className="text-3xl font-serif my-8">Welcome back,</h1>

      <div className="block text-center my-4" key="Google">
        <ActionItem
          text={'Login with Google'}
          type={'btn__default'}
          className="justify-center w-full text-center border border_nut4 hover:shadow-lg"
          onClick={() => signIn('linkedin')}
          icon={<IconSocialGoogle className="h-6" />}
        />
      </div>

      <div className="block text-center my-4" key="LinkedIn">
        <ActionItem
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
      <form onSubmit={onSubmitForm}>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        />
        <Input
          id="email"
          name="email"
          label={'Your Email'}
          type="text"
          value={formData.email}
          onChange={onChange}
          autoFocus
          required
        />
        <Input
          id="password"
          name="password"
          label={'Password'}
          type="password"
          value={formData.password}
          onChange={onChange}
          required
        />

        <div className="px-8">
          <ActionItem
            text={'Login'}
            type={'btn__primary'}
            className="mt-8"
            submit
            block
            onClick={() => {}}
          />
        </div>
      </form>
    </LoginRegisterTemplate>
  )
}

export default Login
