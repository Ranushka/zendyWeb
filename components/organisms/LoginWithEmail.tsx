import React, { ChangeEvent } from 'react'
import { signIn } from 'next-auth/react'
import { ActionItem, Input } from 'components/atoms'
import ReCAPTCHA from 'react-google-recaptcha'

const onSubmitSignUp = async (values) => {
  const res = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    reCaptcha: values.reCaptcha,
    callbackUrl: `${window.location.origin}`
  })

  console.log('req done -->')

  if (res?.error) {
    console.log('custom credentials fail')
    // setError(res.error)
  }

  console.log('custom credentials Success', res)

  return true
}

const LoginWithEmail: React.FC<any> = ({ setWithEmail }) => {
  const recaptchaRef = React.useRef<ReCAPTCHA>()
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const onSubmitForm = async (event) => {
    event.preventDefault()
    console.log('on submit -->')

    const reCaptcha = await recaptchaRef.current.executeAsync()

    await onSubmitSignUp({
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
    <form onSubmit={onSubmitForm}>
      <ActionItem
        dataName="LoginEmailBtn"
        text={'← Use social logins'}
        type="link__small"
        onClick={() => setWithEmail(false)}
      />

      <h1 className="text-3xl font-serif mt-6 mb-4 text-center">
        Join with Email
      </h1>

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

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      />

      <div className="px-8">
        <ActionItem
          dataName="LoginWithEmailBtn"
          text={'Login'}
          type={'btn__primary'}
          className="mt-8"
          submit
          block
          onClick={() => {}}
        />
      </div>
    </form>
  )
}

export default LoginWithEmail
