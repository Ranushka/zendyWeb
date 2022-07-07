import React from 'react'
import classnames from 'classnames'
import { useTranslations } from 'next-intl'

import { Switch } from 'components/atoms'
import { Pricing, WhatWeOffer, SecurityStripBlock } from 'components/organisms'
import { analyticEvent } from 'analytics'

const SubscriptionPage: React.FC<{}> = () => {
  const trans = useTranslations('common')
  const title = trans.raw('title')
  const planTypes = trans.raw('planTypes')
  const [plan, planSet] = React.useState(true)
  const currentPlan = planTypes[plan ? 'monthly' : 'yearly']

  const __onChange = () => {
    analyticEvent('select_plan', 'checkout', 'select_plan', plan)
    planSet(!plan)
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: title }} />

      <div className="flex justify-center mt-10 mb-8 text_nut5">
        <Switch
          id="selectPlan"
          name="selectPlan"
          checked={plan}
          onChange={__onChange}
          leftLabel={
            <span
              className={classnames(
                'h3 px-4 text-2xl font-serif',
                !plan && 'text_pri6'
              )}
            >
              {planTypes.yearly.name}
            </span>
          }
          rightLabel={
            <span
              className={classnames(
                'h3 px-4 text-2xl font-serif',
                plan && 'text_pri6'
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
          content={currentPlan.content}
          price={currentPlan.price}
          paying={currentPlan.paying}
        />
      </div>

      <SecurityStripBlock />
    </div>
  )
}

export default SubscriptionPage
