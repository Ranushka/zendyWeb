import React, { ChangeEvent } from 'react'

import classnames from 'classnames'
import { IconSocialLinkedIn } from 'components/icons'
import { ActionItem, Space, Logo, Input } from 'components/atoms'

import { signIn } from 'next-auth/react'
import styles from './index.module.scss'

const onSubmitSignUp = async (values) => {
  const res = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    callbackUrl: `${window.location.origin}`
  })

  if (res?.error) {
    console.log('custom credtials fail')
    // setError(res.error)
  }

  console.log('custom credtials Success', res)
}

const EmailAndPassword: React.FC<{}> = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const onSubmitForm = (e) => {
    e.preventDefault()
    onSubmitSignUp(formData)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value

    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={onSubmitForm}>
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
      <Space size={3} />
      <div className="flex">
        <input
          className="btn__primary block pointer"
          type="submit"
          value="Submit"
        />
      </div>
      <Space size={4} />
    </form>
  )
}
const Authenticate: React.FC<{}> = () => {
  // const [value, setValue] = React.useState()

  return (
    <>
      <div className={classnames('flex items-center block', styles.wrapper)}>
        <div className={classnames('mw__1 block', styles.phoneNumber)}>
          <div className="text-center">
            <Space size={4} />
            <Logo className={styles.logo} />
            <Space size={3} />
            <h2>Login / Register</h2>
            <Space size={4} />
          </div>

          <EmailAndPassword />

          <small className="block text-center mute mx__2">---- or ----</small>

          <div className="block text-center">
            <ActionItem
              text={'Sign in with LinkedIn'}
              type={'btn__default'}
              className="color__primary"
              onClick={() => signIn('linkedin')}
              icon={<IconSocialLinkedIn />}
            />
          </div>
          <Space size={5} />
          <small className="block text-center mute">
            Having issues? <a>support@zendy.io</a>
          </small>
          <Space size={4} />
        </div>
      </div>
    </>
  )
}

export default Authenticate
