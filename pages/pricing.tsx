import React from 'react'
import QNA from 'components/organisms/QNA'
import { commonMessages } from 'helpers/getMessages'
import { priceMsg } from 'fetchHooks/commonMsg'
import {
  Testimonials,
  SubscriptionPage,
  Publishers
} from 'components/organisms'
import BaseTemplate from 'components/templates/BaseTemplate'

const Pricing: React.FC = () => {
  return (
    <BaseTemplate>
      <SubscriptionPage />
      <Publishers />
      <Testimonials />
      <QNA />
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)
  // const pricingMsg = await pricingMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg,
        ...priceMsg
      }
    }
  }
}

export default Pricing
