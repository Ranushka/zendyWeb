import React from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { IconLogout } from 'components/icons'
import { Space, ActionItem, CheckBox, Input } from 'components/atoms'
import { SelectTheme, SearchResultDensity } from 'components/molecules'
import styles from './index.module.scss'

type Props = {}

const Mobile: React.FC<Props> = () => {
  return (
    <>
      <Space size={4} />
      <div className="mw__4 px-4 flex items-center">
        <h2 className="text-center text-gray-500">My Profile</h2>
        <div className="flex__left"></div>
        <ActionItem
          text={'Sign out'}
          type={'btn__default'}
          icon={<IconLogout />}
          className={'pr__0'}
          onClick={() => signOut()}
        />
      </div>
      <Space size={3} />

      <ProfileBlock title="">
        <h4 className="text-gray-500">Jane Doe</h4>
        <Space size={2} />
        <p>Academic researcher</p>
        <Space size={4} />
        <h4 className="text-gray-500">Contact info</h4>
        <Space size={2} />
        <p>pinto@gmail.com.ae</p>
        <p>+971 588 034 743</p>
        <Space size={4} />
        <ActionItem text={'Edit profile'} href={'/'} />
      </ProfileBlock>

      <ProfileBlock title="App settings">
        <SelectTheme />
        <Space size={3} />
        <SearchResultDensity />
      </ProfileBlock>

      <ProfileBlock title="Email’s and Notifications">
        <CheckBox
          key={'subscribe_to_newsletter'}
          id={'subscribe_to_newsletter'}
          name={'subscribe_to_newsletter'}
          label={'Subscribe to Newsletter'}
        />
        <CheckBox
          key={'emails_on_interests'}
          id={'emails_on_interests'}
          name={'emails_on_interests'}
          label={'Emails on your interests'}
        />
        <CheckBox
          key={'notification_on_interests'}
          id={'notification_on_interests'}
          name={'notification_on_interests'}
          label={'Notifications on your interests'}
        />
      </ProfileBlock>

      <ProfileBlock title="Subscription info">
        <Space size={3} />
        <small className="mute">Subscription renewal date</small>
        <p>October 16, 2020 (in 170 days)</p>
        <Space size={3} />
        <small className="mute">What you&apos;ll be charged</small>
        <p>AED 198.00 ( for year )</p>
        <Space size={3} />
        <ActionItem text={'Cancel subscription'} href={'/'} />
      </ProfileBlock>

      <ProfileBlock title="Payment method">
        <Space size={3} />
        <Input
          id="cardNumber"
          name="cardNumber"
          label={'Subscribed with'}
          type="text"
          content={<InputContent />}
          required
        />
        <div className="flex">
          <ActionItem text={'Update payment'} href={'/'} type="link__small" />
          <div className="flex__left"></div>
          <ActionItem text={'Payment history'} href={'/'} type="link__small" />
        </div>
      </ProfileBlock>

      <Space size={4} />
    </>
  )
}

const ProfileBlock = ({ children, title }) => (
  <section className="mw__3 px-4">
    <h4 className="mute">{title}</h4>
    <Space size={2} />
    <div className="px-8 py-8 shadow bg-white rounded-md">{children}</div>
    <Space size={4} />
  </section>
)

const InputContent = () => (
  <div className={styles.paymentTypeWrapper}>
    <div>
      Card ending <strong>1537</strong>
    </div>
    <div>07/17</div>
    <Image
      width={120}
      height={26}
      src="/img/powered_by_stripe.svg"
      alt="zendy stripe payment logo"
      placeholder="empty"
    />
  </div>
)

export default Mobile
