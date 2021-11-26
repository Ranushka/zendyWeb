import Head from 'next/head'
import { Space } from 'components/atoms'
import QNA from './QNA'

import {
  Testimonials,
  SubscriptionPage,
  Publishers,
} from 'components/organisms'
import { BaseTemplate } from 'components/templates'

export default function Home() {
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
