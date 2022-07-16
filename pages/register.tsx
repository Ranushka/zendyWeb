import React, { ChangeEvent } from 'react'
import { signIn } from 'next-auth/react'
import { IconSocialLinkedIn } from 'components/icons'
import { ActionBtn, Input } from 'components/atoms'
import ReCAPTCHA from 'react-google-recaptcha'
import LoginRegisterTemplate from 'components/templates/LoginRegisterTemplate'

const onSubmitSignUp = async (values) => {
  const res = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    reCaptcha: values.reCaptcha,
    callbackUrl: `${window.location.origin}`
  })

  if (res?.error) {
    console.log('custom credtials fail')
    // setError(res.error)
  }

  console.log('custom credtials Success', res)
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
      <h1 className="text-3xl font-serif mt-8 mb-2">Join Zendy</h1>
      <form onSubmit={onSubmitForm}>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        />

        <Input
          id="newPassword"
          name="newPassword"
          label={'New password'}
          onChange={onChange}
          type="password"
          autoFocus
          required
        />

        <Input
          id="newPasswordConfirm"
          name="newPasswordConfirm"
          label={'Confirm password'}
          onChange={onChange}
          type="password"
          autoFocus
          required
        />

        <Input
          id="email"
          name="email"
          label={'Your Email'}
          onChange={onChange}
          type="text"
          autoFocus
          required
        />

        <div className="px-8">
          <ActionBtn
            dataName="SignInEmail"
            text={'Join'}
            type={'btn__primary'}
            className="mt-8"
            submit
            block
            onClick={() => {}}
          />
        </div>
      </form>

      <small className="block text-center text-gray-400 my-4">
        ---- or ----
      </small>

      <div className="block text-center">
        <ActionBtn
          dataName="SignInLinkedIn"
          text={'Sign in with LinkedIn'}
          type={'btn__default'}
          className="color__primary"
          onClick={() => signIn('linkedin')}
          icon={<IconSocialLinkedIn />}
        />
      </div>

      <small className="block my-2">
        by creating account you are agreeing for
        <a> Zendy Terms & Conditions</a>
      </small>
    </LoginRegisterTemplate>
  )
}

export default Login
