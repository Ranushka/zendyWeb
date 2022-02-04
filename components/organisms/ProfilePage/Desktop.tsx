import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSession, signOut } from 'next-auth/react'
import { IconLogout } from 'components/icons'
import { Space, ActionItem, CheckBox, Input } from 'components/atoms'
import { SelectTheme, SearchResultDensity } from 'components/molecules'
import styles from './index.module.scss'

type Props = {}

const Desktop: React.FC<Props> = ({}) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <>
      <Space size={5} />
      <div className="mw__4 flex__center">
        <h1 className="text__center color__nut6">My Profile</h1>
        <div className="flex__left"></div>
        <ActionItem
          text={'Sign out'}
          type={'btn__default'}
          icon={<IconLogout />}
          className={'pr__0'}
          onClick={() => signOut()}
        />
      </div>
      <Space size={5} />

      <ProfileBlock title="Profile info">
        {loading && __skeletonProfileBlocks()}
        {session && (
          <>
            <h4>Jane Doe</h4>
            <Space size={2} />
            <p>Academic researcher</p>
            <Space size={3} />
            <h4>Contact info</h4>
            <Space size={2} />
            <p>pinto@gmail.com.ae</p>
            <p>+971 588 034 743</p>
            <Space size={3} />
            <ActionItem text={'Edit profile'} href={'/'} />
          </>
        )}
      </ProfileBlock>

      <ProfileBlock title="App settings">
        {loading && __skeletonProfileBlocks()}
        {session && (
          <>
            <SelectTheme />
            <Space size={4} />
            <SearchResultDensity />
          </>
        )}
      </ProfileBlock>

      <ProfileBlock title="Email’s and Notifications">
        {loading && __skeletonProfileBlocks()}
        {session && (
          <>
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
          </>
        )}
      </ProfileBlock>

      <ProfileBlock title="Subscription info">
        {loading && __skeletonProfileBlocks()}
        {session && (
          <>
            <small className="mute">Subscription renewal date</small>
            <p>October 16, 2020 (in 170 days)</p>
            <Space size={3} />
            <small className="mute">What you'll be charged</small>
            <p>AED 198.00 ( for year )</p>
            <Space size={3} />
            <ActionItem text={'Cancel subscription'} href={'/'} />
          </>
        )}
      </ProfileBlock>

      <ProfileBlock title="Payment method">
        {session && (
          <>
            <Input
              id="cardNumber"
              name="cardNumber"
              label={'Subscribed with'}
              type="text"
              content={<InputContent />}
              required
            />
            <div className="flex">
              <ActionItem
                text={'Update payment'}
                href={'/'}
                type="link__small"
              />
              <div className="flex__left"></div>
              <ActionItem
                text={'Payment history'}
                href={'/'}
                type="link__small"
              />
            </div>
          </>
        )}
      </ProfileBlock>
    </>
  )
}

const InputContent = () => (
  <div className={styles.paymentTypeWrapper}>
    <div>
      Card ending <strong>1537</strong>
    </div>
    <div>07/17</div>
    <img className={styles.paymentTypeImg} src={'cardTypes/paymentVisa.png'} />
  </div>
)

const ProfileBlock = ({ children, title }) => (
  <>
    <section className="flex mw__4">
      <h3 className="mw__1 py__3 block text__right px__4">{title}</h3>
      <div className="stage__2 block px__4 py__4 rounded__1 text__left bg__white">
        {children}
      </div>
    </section>
    <Space size={5} />
  </>
)

const __skeletonProfileBlocks = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonCollection' + id} className="mw__5 ml__0">
      <Skeleton height={30} />
      <Space size={3} />
    </article>
  ))
}

export default Desktop
