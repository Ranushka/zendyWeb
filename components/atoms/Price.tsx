import React from 'react'

type Props = {
  price: number
  large?: boolean
}
/* __DOC

<Price price={450.05} />

DOC__ */

const Price: React.FC<Props> = ({ large, price }) => {
  const fullAmount = price.toFixed(2).toString().split('.')
  const priceNumber = fullAmount[0]
  const priceFloat = fullAmount[1]
  const currency = 'AED'

  if (large) {
    return (
      <div className={'flex items-center'}>
        <span className="">{currency}</span>
        <span className="">{priceNumber}</span>
        <span className="">.{priceFloat}</span>
      </div>
    )
  }

  return (
    <div className={'flex items-center'}>
      {currency} {priceNumber}.{priceFloat}
    </div>
  )
}

export default Price
