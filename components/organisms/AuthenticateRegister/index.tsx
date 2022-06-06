import React from 'react'
import classnames from 'classnames'
import { ActionItem, Input, Space, Logo } from 'components/atoms'

import styles from './index.module.scss'

type Props = {}

const AuthenticateRegister: React.FC<Props> = () => {
  // const [value, setValue] = React.useState()

  return (
    <>
      <div className={classnames('flex items-center', styles.wrapper)}>
        <div className={classnames('mw__1 block', styles.phoneNumber)}>
          <div className="text-center">
            <Space size={4} />
            <Logo className={styles.logo} />
            <Space size={4} />
            <h2>Finish crating your new account</h2>
          </div>
          <Space size={4} />
          <small className="mute">
            Create the password for mobile number ending by
            <strong> 7954</strong>
          </small>
          <Space size={4} />
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              id="newPassword"
              name="newPassword"
              label={'New password'}
              type="password"
              autoFocus
              required
            />

            <Input
              id="newPasswordConfirm"
              name="newPasswordConfirm"
              label={'Confirm password'}
              type="password"
              autoFocus
              required
            />

            <Input
              id="email"
              name="email"
              label={'Your Email'}
              type="text"
              autoFocus
              required
            />
          </form>

          <Space size={3} />

          <small className="block text-center mute">
            by creating account you are agreeing for
            <a> Zendy Terms & Conditions</a>
          </small>

          <Space size={4} />

          <div className="flex">
            <ActionItem
              text={'Create Account'}
              href={'/authenticate/register'}
              type="btn__primary"
              block
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

export default AuthenticateRegister
