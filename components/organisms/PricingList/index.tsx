import React from 'react'
import { ActionItem, Space } from 'components/atoms'
import { attributes as Data } from 'data/pagers/pricing.md'

type Props = {}

const PricingList: React.FC<Props> = () => {
  const { planTypes, title } = Data

  const planTypesArray = Object.keys(planTypes)

  const planCards = planTypesArray.map((plan) => {
    const item = planTypes[plan]
    const { content } = item

    return (
      <ActionItem
        key={plan}
        href={`/pricing?subscribeAction=${plan}`}
        className="mx__4"
      >
        <div className="text-center block rounded-md bg-white shadow px-8 py-8 mw__1">
          <Space size={2} />
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Space size={3} />
        </div>
      </ActionItem>
    )
  })

  return (
    <div className="text-center">
      <Space size={4} />
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <Space size={5} />
      <div className="flex items-center mw__4">{planCards}</div>
      <Space size={4} />
    </div>
  )
}

export default PricingList
