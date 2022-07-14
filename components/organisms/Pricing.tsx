import React from 'react'
import dynamic from 'next/dynamic'
import { ActionItem } from 'components/atoms'
import SidePopup from 'components/organisms/SidePopup'

const StripeElementsForm = dynamic(() =>
  import('components/organisms/StripeElementsForm')
)

type Props = {
  id?: string
  name?: string
  price?: string
  paying?: string
  content?: string
}

const Pricing: React.FC<Props> = (props) => {
  const { name = '', content = '', paying = '' } = props
  const [modelOpen, setModelOpenState] = React.useState(false)

  return (
    <>
      <div className="text-center block rounded-lg bg_white shadow-lg px-8 py-8 w-72">
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <ActionItem
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
