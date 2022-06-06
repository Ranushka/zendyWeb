import React from 'react'
import { ActionItem, Space } from 'components/atoms'
import { SidePopup, StripeElementsForm } from 'components/molecules'

type Props = {
  id?: string
  price?: string
  paying?: string
  content?: string
}

const Pricing: React.FC<Props> = (props) => {
  const { price = '48', content = '' } = props
  const [modelOpen, setModelOpenState] = React.useState(false)

  return (
    <>
      <div className="text-center block rounded-lg bg-white shadow-lg px-8 py-8 w-72">
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Space />
        <ActionItem
          block
          text={'Subscribe'}
          type={'btn__primary'}
          onClick={() => setModelOpenState(true)}
        />
        <Space size={3} />
      </div>
      <SidePopup
        content={SidePopupContent(price)}
        open={modelOpen}
        openLocation={'center'}
        closeFunc={() => setModelOpenState(false)}
      />
    </>
  )
}

const SidePopupContent = (price) => (
  <div className="block px-4 py__3">
    <h2 className="text-center">Secure payment</h2>
    <div className="gaps__4"></div>
    <StripeElementsForm paying={price} />
    <div className="gaps__4"></div>
  </div>
)

export default Pricing
