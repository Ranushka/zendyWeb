import { Space } from 'components/atoms'
import { commonMessages } from 'lib/getMessages'
import {
  HeroCta,
  Publishers,
  Stats,
  Usps,
  EmailSubscription,
  GetStartedWithUs,
  Testimonials,
  PricingList,
} from 'components/organisms'

import { BaseTemplate } from 'components/templates'

const Platform: React.FC = () => {
  return (
    <BaseTemplate>
      <HeroCta />
      <Space size={5} />
      <Publishers />
      <Space size={5} />
      <Usps />
      <Space size={5} />
      <Stats />
      <Space size={5} />
      <PricingList />
      <Testimonials />
      <EmailSubscription />
      <GetStartedWithUs />
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg,
      },
    },
  }
}

export default Platform
