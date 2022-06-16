import React from 'react'
import QNA from 'components/organisms/QNA'
import { commonMessages, pricingMessages } from 'lib/getMessages'
import {
  Testimonials,
  SubscriptionPage,
  Publishers
} from 'components/organisms'
import { BaseTemplate } from 'components/templates'

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

export default Pricing
