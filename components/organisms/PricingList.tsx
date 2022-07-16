import React from 'react'
import { ActionLink } from 'components/atoms'
import { useTranslations } from 'next-intl'

type Props = {}

const PricingList: React.FC<Props> = () => {
  const trans = useTranslations('common')
  const title = trans.raw('title')
  const planTypes = trans.raw('planTypes')

  const planTypesArray = Object.keys(planTypes)

  const planCards = planTypesArray.map((plan) => {
    const item = planTypes[plan]
    const {
      name = '',
      paying = '',
      offer = '',
      price = '',
      fullPrice = '',
      currency,
      interval
    } = item

    return (
      <ActionLink
        dataName={`PricingListItem${plan}`}
        key={plan}
        href={`/pricing?subscribeAction=${plan}`}
        className="m-8"
      >
        <div className="text-center block rounded-md bg_white shadow px-8 py-8 mw__1">
          <div className="text-center">
            <h2 className="text-3xl font-serif">{name}</h2>
            <div className="flex justify-center items-center pb-2 pt-2">
              <span className="text-sm px-2 font-bold">AED</span>
              <span
                className="text-8xl px-2 font-extrabold"
                style={{ fontFamily: 'serif' }}
              >
                {price}
              </span>
              <span className="text-sm px-2 font-bold">/mo</span>
            </div>
            <strong className="block">{offer}</strong>
            <div className="py-4">
              <del>{`${currency} ${fullPrice}`}</del>
              <span className="font-bold text-base px-1">{`${currency} ${paying}`}</span>
              <span> billed {interval}</span>
            </div>
          </div>
        </div>
      </ActionLink>
    )
  })

  return (
    <div className="text-center">
      <div dangerouslySetInnerHTML={{ __html: title }} />

      <div className="flex items-center justify-center">{planCards}</div>
    </div>
  )
}

export default PricingList
