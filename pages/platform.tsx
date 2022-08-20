import React from 'react'
import dynamic from 'next/dynamic'

import { commonMessages, pricingMessages } from 'helpers/getMessages'
import {
  HeroCta,
  Publishers,
  Stats,
  Usps,
  EmailSubscription,
  Testimonials,
  PricingList
} from 'components/organisms'

import BaseTemplate from 'components/templates/BaseTemplate'

const GetStartedWithUs = dynamic(
  () => import('components/organisms/GetStartedWithUs')
)

const Platform: React.FC = () => {
  return (
    <BaseTemplate>
      <HeroCta />

      <Publishers />

      <Usps />

      <Stats />

      <PricingList />
      <Testimonials />
      <EmailSubscription />
      <GetStartedWithUs />
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)
  const pricingMsg = await pricingMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg,
        ...pricingMsg
      }
    }
  }
}

export default Platform
