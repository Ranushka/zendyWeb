/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { IconLogout } from 'components/icons'
import { ActionLink, ActionBtn, CheckBox } from 'components/atoms'

const VERCEL_URL = process.env.VERCEL_URL
type Props = {}

const Desktop: React.FC<Props> = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <section className="mx-auto mt-10 max-w-2xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text_nut5 text-center font-serif text-4xl">
          My Profile
        </h1>
        <ActionBtn
          dataName="BtnSignOut"
          text={'Sign out'}
          type={'btn__default'}
          icon={<IconLogout />}
          className={'pr__0'}
          onClick={() => signOut({ callbackUrl: VERCEL_URL })}
        />
      </div>

      <ProfileBlock title="Profile info">
        {loading && __skeletonProfileBlocks()}
        {session && (
          <>
            <h4>Jane Doe</h4>

            <p>Academic researcher</p>

            <h4>Contact info</h4>

            <p>pinto@gmail.com.ae</p>
            <p>+971 588 034 743</p>

            <ActionLink
              dataName="EditProfile"
              text={'Edit profile'}
              href={'/'}
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

            <small className="mute">What you&apos;ll be charged</small>
            <p>AED 198.00 ( for year )</p>

            <ActionLink
              dataName="CancelSubscription"
              text={'Cancel subscription'}
              href={'/'}
            />
          </>
        )}
      </ProfileBlock>

      <ProfileBlock title="Payment method">
        {session && (
          <>
            <InputContent />
            <div className="flex justify-between">
              <ActionLink
                dataName="BtnUpdatePayment"
                text={'Update payment'}
                href={'/'}
                type="link"
              />
              <ActionLink
                dataName="BtnUpdateHistory"
                text={'Payment history'}
                href={'/'}
                type="link"
              />
            </div>
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
              className="my-4"
            />
            <CheckBox
              key={'emails_on_interests'}
              id={'emails_on_interests'}
              name={'emails_on_interests'}
              label={'Emails on your interests'}
              className="my-4"
            />
            <CheckBox
              key={'notification_on_interests'}
              id={'notification_on_interests'}
              name={'notification_on_interests'}
              label={'Notifications on your interests'}
              className="my-4"
            />
          </>
        )}
      </ProfileBlock>
    </section>
  )
}

const InputContent = () => (
  <div className="bg_nut0 mb-4 flex justify-between rounded border px-3 py-2">
    <div>
      Card ending <strong>1537</strong>
    </div>
    <div>07/17</div>
    <Image
      width={24}
      height={18}
      src="/cardTypes/paymentVisa.png"
      alt="zendy stripe payment logo"
      placeholder="empty"
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  </div>
)

const ProfileBlock = ({ children, title }) => (
  <section className="mb-8 flex">
    <div className="w-5/12">
      <h3 className="text_nut5 block border-b-2 py-4 font-serif text-xl">
        {title}
      </h3>
    </div>
    <div className="bg_white block w-7/12 rounded-md px-8 py-8 text-left shadow">
      {children}
    </div>
  </section>
)

const __skeletonProfileBlocks = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonCollection' + id} className="mw__5 ml__0">
      <Skeleton height={30} />
    </article>
  ))
}

export default Desktop
