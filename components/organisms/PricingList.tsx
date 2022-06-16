import React from 'react'
import { ActionItem } from 'components/atoms'
import { useTranslations } from 'next-intl'

type Props = {}

const PricingList: React.FC<Props> = () => {
  const trans = useTranslations('common')
  const title = trans.raw('title')
  const planTypes = trans.raw('planTypes')

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
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </ActionItem>
    )
  })

  return (
    <div className="text-center">
      <div dangerouslySetInnerHTML={{ __html: title }} />

      <div className="flex items-center mw__4">{planCards}</div>
    </div>
  )
}

export default PricingList
