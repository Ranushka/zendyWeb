import React from 'react'
import { Space, Switch } from 'components/atoms'
import { Pricing, WhatWeOffer, SecurityStripBlock } from 'components/molecules'
import { attributes as Data } from 'data/pagers/pricing.md'
import { analyticEvent } from 'analytics'

const Desktop: React.FC<{}> = ({}) => {
  const [plan, planSet] = React.useState(true)
  const currentPlan = Data.planTypes[plan ? 'monthly' : 'yearly']

  const __onChange = () => {
    analyticEvent('select_plan', 'checkout', 'select_plan', plan)
    planSet(!plan)
  }

  return (
    <>
      <Space size={5} />
      <div dangerouslySetInnerHTML={{ __html: Data.title }} />
      <Space size={4} />
      <div className="flex__align_center mw__3">
        <Switch
          id="selectPlan"
          name="selectPlan"
          checked={plan}
          onChange={__onChange}
          leftLabel={<strong>{Data.planTypes.monthly.name}</strong>}
          rightLabel={<strong>{Data.planTypes.yearly.name}</strong>}
        />
      </div>

      <Space size={4} />

      <div className="flex__align_center mw__3">
        <WhatWeOffer />
        <div className="flex__left" />
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

export default Desktop
