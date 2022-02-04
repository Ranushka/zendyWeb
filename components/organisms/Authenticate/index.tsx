import React from 'react'
// import PhoneInput from 'react-phone-number-input'
import classnames from 'classnames'
import { IconSocialLinkedIn } from 'components/icons'
import { ActionItem, Space, Logo } from 'components/atoms'
import Head from 'next/head'
import { signIn } from 'next-auth/react'
import styles from './index.module.scss'

type Props = {}

const Authenticate: React.FC<Props> = ({}) => {
  const [value, setValue] = React.useState()

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/react_input.css" />
      </Head>

      <div className={classnames('flex__center block', styles.wrapper)}>
        <div className={classnames('mw__1 block', styles.phoneNumber)}>
          <div className="text__center">
            <Space size={4} />
            <Logo className={styles.logo} />
            <Space size={3} />
            <h2>Login / Register</h2>
            <Space size={4} />
          </div>
          <p>Your phone number</p>
          <Space size={1} />
          {/* <PhoneInput
            international
            defaultCountry="AE"
            addInternationalOption={false}
            countries={['AE', 'TN', 'DZ']}
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          /> */}
          <Space size={3} />
          <div className="flex">
            <ActionItem
              text={'Login / Register'}
              href={'/authenticate/login'}
              type="btn__primary"
              block
            />
          </div>
          <Space size={4} />
          <small className="block text__center mute">---- or ----</small>
          <Space size={4} />
          <div className="block text__center">
            <ActionItem
              text={'Sign in with LinkedIn'}
              type={'btn__default'}
              className="color__primary"
              onClick={() => signIn('linkedin')}
              icon={<IconSocialLinkedIn />}
            />
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

export default Authenticate
