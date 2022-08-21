import React from 'react'
import dynamic from 'next/dynamic'
import { ActionBtn } from 'components/atoms'
import SidePopup from 'components/organisms/SidePopup'

const StripeElementsForm = dynamic(
  () => import('components/organisms/StripeElementsForm')
)

type Props = {
  id?: string
  name?: string
  price?: string
  paying?: string
  currency?: string
  interval?: string
  fullPrice?: string
  offer?: string
}

const Pricing: React.FC<Props> = (props) => {
  const {
    name = '',
    paying = '',
    offer = '',
    price = '',
    fullPrice = '',
    currency,
    interval
  } = props
  const [modelOpen, setModelOpenState] = React.useState(false)

  return (
    <>
      <div className="bg_white block w-72 rounded-lg px-8 py-8 text-center shadow-lg">
        <div className="text-center">
          <h2 className="font-serif text-3xl">{name}</h2>
          <div className="flex items-center justify-center pb-2 pt-2">
            <span className="px-2 text-sm font-bold">AED</span>
            <span
              className="px-2 text-8xl font-extrabold"
              style={{ fontFamily: 'serif' }}
            >
              {price}
            </span>
            <span className="px-2 text-sm font-bold">/mo</span>
          </div>
          <strong className="block">{offer}</strong>
          <div className="py-4">
            <del>{`${currency} ${fullPrice}`}</del>
            <span className="px-1 text-base font-bold">{`${currency} ${paying}`}</span>
            <span> billed {interval}</span>
          </div>
        </div>

        <ActionBtn
          dataName="BtnSubscribe"
          block
          text={'Subscribe'}
          type={'btn__primary'}
          onClick={() => setModelOpenState(true)}
        />
      </div>
      <SidePopup
        content={SidePopupContent(paying, name)}
        open={modelOpen}
        openLocation={'center'}
        closeFunc={() => setModelOpenState(false)}
      />
    </>
  )
}

const SidePopupContent = (paying, name) => (
  <div className="block">
    <h2 className="text_nut6 py-8 px-4 text-center font-serif text-3xl">
      Secure payment
    </h2>
    <StripeElementsForm paying={paying} name={name} />
  </div>
)

export default Pricing
