import React from 'react'
import classnames from 'classnames'

import { Space, Switch } from 'components/atoms'
import { Pricing, WhatWeOffer, SecurityStripBlock } from 'components/molecules'
import { attributes as Data } from 'data/pagers/pricing.md'
import { analyticEvent } from 'analytics'

const SubscriptionPage: React.FC<{}> = () => {
  const [plan, planSet] = React.useState(true)
  const currentPlan = Data.planTypes[plan ? 'monthly' : 'yearly']

  const __onChange = () => {
    analyticEvent('select_plan', 'checkout', 'select_plan', plan)
    planSet(!plan)
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Data.title }} />

      <div className="flex justify-center mt-10 mb-8 text-gray-500">
        <Switch
          id="selectPlan"
          name="selectPlan"
          checked={plan}
          onChange={__onChange}
          leftLabel={
            <span
              className={classnames(
                'h3 px-4 text-2xl font-serif',
                !plan && 'text-orange-600'
              )}
            >
              {Data.planTypes.yearly.name}
            </span>
          }
          rightLabel={
            <span
              className={classnames(
                'h3 px-4 text-2xl font-serif',
                plan && 'text-orange-600'
              )}
            >
              {Data.planTypes.monthly.name}
            </span>
          }
        />
      </div>

      <Space size={4} />

      <div className="flex justify-center flex-col-reverse md:flex-row items-center max-w-xl m-auto px-4">
        <WhatWeOffer />
        <div className="mx-4" />
        <Pricing
          content={currentPlan.content}
          price={currentPlan.price}
          paying={currentPlan.paying}
        />
      </div>

      <SecurityStripBlock />
      <Space size={4} />
    </>
  )
}

export default SubscriptionPage
