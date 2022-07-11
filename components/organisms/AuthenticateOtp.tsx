import React from 'react'
import classnames from 'classnames'
import { ActionItem, Input, Logo } from 'components/atoms'

type Props = {}

const AuthenticateRegister: React.FC<Props> = () => {
  // const [value, setValue] = React.useState()

  return (
    <>
      <div className={classnames('flex items-center')}>
        <div className={classnames('mw__1 block')}>
          <div className="text-center">
            <Logo />

            <h2>OTP Confirm</h2>
          </div>

          <small className="mute">
            Please enter OTP code that we sent to the mobile number
            <strong> +971 588 057954</strong>
          </small>

          <div className="flex text-center">
            <Input
              center
              type="number"
              id="otp1"
              name="otp1"
              autoFocus
              required
            />

            <Input center type="number" id="otp1" name="otp1" required />

            <Input center type="number" id="otp1" name="otp1" required />

            <Input center type="number" id="otp1" name="otp1" required />
          </div>
          <div className="flex">
            <ActionItem
              dataName="ConfirmOTP"
              text={'Confirm OTP'}
              href={'/authenticate/register'}
              type="btn__primary"
              block
            />
          </div>

          <div className="flex">
            <ActionItem
              dataName="ResendOTP"
              text={'Resend OTP'}
              href={'/authenticate'}
              type="link__small"
            />
            <div className="flex__left"></div>
            <ActionItem
              dataName="ChangeNumber"
              text={'Change number'}
              href={'/authenticate'}
              type="link__small"
            />
          </div>

          <small className="block text-center mute">
            Having issues? <a>support@zendy.io</a>
          </small>
        </div>
      </div>
    </>
  )
}

export default AuthenticateRegister
