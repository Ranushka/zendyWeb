import React from 'react'
import { Space, Switch } from 'components/atoms'
import { Pricing, WhatWeOffer, SecurityStripBlock } from 'components/molecules'
import { attributes as Data } from 'data/pagers/pricing.md'

const Mobile: React.FC<{}> = ({}) => {
  const [plan, planSet] = React.useState(false)
  const currentPlan = Data.planTypes[plan ? 'yearly' : 'monthly']

  return (
    <div className="px__3">
      <Space size={4} />
      <div dangerouslySetInnerHTML={{ __html: Data.title }} />
      <Space size={4} />
      <div className="flex__center mw__3">
        <Switch
          id="subscriptionType"
          name="subscriptionType"
          checked={plan}
          onChange={() => planSet(!plan)}
          rightLabel={<strong>{Data.planTypes.monthly.name}</strong>}
          leftLabel={<strong>{Data.planTypes.yearly.name}</strong>}
        />
      </div>
      <Space size={4} />

      <div className="mw__1">
        <Pricing
          content={currentPlan.content}
          price={currentPlan.price}
          paying={currentPlan.paying}
        />
        <Space size={5} />
        <WhatWeOffer />
      </div>
      <Space size={3} />
      <SecurityStripBlock />
      <Space size={5} />
    </div>
  )
}

export default Mobile
