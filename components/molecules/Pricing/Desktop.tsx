import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { ActionItem, Space } from 'components/atoms'
import { SidePopup, StripeElementsForm } from 'components/molecules'

type Props = {
  id?: string
  price?: string
  paying?: string
  content?: string
}

const Pricing: React.FC<Props> = (props) => {
  const { id, price = '48', content = '' } = props
  const [modelOpen, setModelOpenState] = React.useState(false)

  return (
    <>
      <div className="text__center block rounded__1 bg-white stage__3 px-8 py-8 mw__1">
        <Space size={2} />
        <div
          className="text__center"
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
    <h2 className="text__center">Secure payment</h2>
    <div className="gaps__4"></div>
    <StripeElementsForm paying={price} />
    <div className="gaps__4"></div>
  </div>
)

export default Pricing
