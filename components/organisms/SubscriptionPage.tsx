import React from 'react'
import classnames from 'classnames'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

import { Switch } from 'components/atoms'
import { Pricing, WhatWeOffer, SecurityStripBlock } from 'components/organisms'
import { analyticsSelectPlan } from 'analytics/events'

const SubscriptionPage: React.FC<{}> = () => {
  const trans = useTranslations('common')
  const router = useRouter()
  const { subscribeAction } = router.query
  const title = trans.raw('title')
  const planTypes = trans.raw('planTypes')
  const [isYearlyPlan, setIsYearlyPlan] = React.useState(
    subscribeAction !== 'monthly'
  )
  const currentPlan = planTypes[isYearlyPlan ? 'yearly' : 'monthly']

  React.useEffect(() => {}, [router.query])

  const __onChange = () => {
    analyticsSelectPlan(currentPlan)
    setIsYearlyPlan(!isYearlyPlan)
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <div className="flex justify-center mt-10 mb-8 text_nut5">
        <Switch
          id="selectPlan"
          name="selectPlan"
          checked={!isYearlyPlan}
          onChange={__onChange}
          leftLabel={
            <span
              className={classnames(
                'h3 px-4 text-2xl font-serif',
                isYearlyPlan && 'text_pri6'
              )}
            >
              {planTypes.yearly.name}
            </span>
          }
          rightLabel={
            <span
              className={classnames(
                'h3 px-4 text-2xl font-serif',
                !isYearlyPlan && 'text_pri6'
              )}
            >
              {planTypes.monthly.name}
            </span>
          }
        />
      </div>

      <div className="flex justify-center flex-col-reverse md:flex-row items-center max-w-2xl m-auto px-4">
        <WhatWeOffer />
        <div className="mx-4" />

        <Pricing
          name={currentPlan.name}
          price={currentPlan.price}
          currency={currentPlan.currency}
          paying={currentPlan.paying}
          offer={currentPlan.offer}
          fullPrice={currentPlan.fullPrice}
          interval={currentPlan.interval}
        />
      </div>

      <SecurityStripBlock />
    </div>
  )
}

export default SubscriptionPage
