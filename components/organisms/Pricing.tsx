import React from 'react'
import dynamic from 'next/dynamic'
import { ActionBtn } from 'components/atoms'
import SidePopup from 'components/organisms/SidePopup'

const StripeElementsForm = dynamic(() =>
  import('components/organisms/StripeElementsForm')
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
      <div className="text-center block rounded-lg bg_white shadow-lg px-8 py-8 w-72">
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
    <h2 className="text-center py-8 px-4 text-3xl text_nut6 font-serif">
      Secure payment
    </h2>
    <StripeElementsForm paying={paying} name={name} />
  </div>
)

export default Pricing
