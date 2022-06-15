import React from 'react'
import { Space } from 'components/atoms'
import QNA from 'components/organisms/QNA'
import { commonMessages } from 'lib/getMessages'
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
      <Space size={4} />
      <Publishers />
      <Space size={4} />
      <Testimonials />
      <Space size={4} />
      <QNA />
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    }
  }
}

export default Pricing
