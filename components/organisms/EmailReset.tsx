import React, { ChangeEvent } from 'react'
import { signIn } from 'next-auth/react'
import { ActionBtn, Input } from 'components/atoms'
import routs from 'helpers/routs'
import { useRouter } from 'next/router'
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

const EmailReset: React.FC<any> = () => {
  const router = useRouter()
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
      <ActionBtn
        dataName="LoginEmailBtn"
        text={'← Back to login'}
        type="btn__small"
        onClick={() => router.push(routs.login)}
      />

      <h1 className="mt-6 mb-4 text-center font-serif text-3xl">
        Forgot your password?
      </h1>

      <p className="text_nut5 mb-4 text-center">
        Enter your email address to receive a secured link that will allow you
        to reset your password.
      </p>

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

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      />

      <div className="px-8">
        <ActionBtn
          dataName="EmailResetBtn"
          text={'Submit'}
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

export default EmailReset
