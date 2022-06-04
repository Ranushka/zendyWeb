import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { ActionItem, Space } from 'components/atoms'
import { attributes as Data } from 'data/pagers/pricing.md'

type Props = {}

const PricingList: React.FC<Props> = (props) => {
  const { planTypes, title } = Data

  const planTypesArray = Object.keys(planTypes)

  const planCards = planTypesArray.map((plan) => {
    const item = planTypes[plan]
    const { content } = item

    return (
      <ActionItem key={plan} href={'/pricing'} className=" my__4 block">
        <div className="text__center block rounded__1 bg-white shadow px-8 py-8 mw__1">
          <Space size={2} />
          <div
            className="text__center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Space size={3} />
        </div>
      </ActionItem>
    )
  })

  return (
    <section className="text__center mw__3 px-4">
      <Space size={4} />
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <Space size={3} />
      {planCards}
    </section>
  )
}

export default PricingList
