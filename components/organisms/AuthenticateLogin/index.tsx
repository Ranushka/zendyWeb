import React from 'react'
import classnames from 'classnames'
import { ActionItem, Input, Space, Logo } from 'components/atoms'

import styles from './index.module.scss'

type Props = {}

const Login: React.FC<Props> = ({}) => {
  const [value, setValue] = React.useState()

  return (
    <>
      <div className={classnames('flex__align_center', styles.wrapper)}>
        <div className={classnames('mw__1 block', styles.phoneNumber)}>
          <div className="text__center">
            <Space size={4} />
            <Logo className={styles.logo} />
            <Space size={4} />
            <h2>Welcome Back</h2>
            <h3>Jane doe</h3>
          </div>
          <Space size={4} />
          <Input
            id="cardNumber"
            name="cardNumber"
            label={'Your password'}
            type="password"
            autoFocus
            required
          />
          <div className="flex">
            <ActionItem
              text={'Login'}
              href={'/authenticate/otp'}
              type="btn__primary"
              block
            />
          </div>
          <Space size={4} />
          <div className="flex">
            <ActionItem
              text={'Forgot password'}
              href={'/authenticate/forgot_password'}
              type="link__small"
            />
            <div className="flex__left"></div>
          </div>
          <Space size={5} />
          <small className="block text__center mute">
            Having issues? <a>support@zendy.io</a>
          </small>
          <Space size={4} />
        </div>
      </div>
    </>
  )
}

export default Login
