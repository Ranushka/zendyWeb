import React from 'react'
import { Input, ActionItem } from 'components/atoms'
import styles from './index.module.scss'
import useDiscountCode, { setDiscountCode } from 'fetchHooks/useDiscountCode'

const DiscountCodeBlock = () => {
  const [showInput, showInputSet] = React.useState(false)
  const [inputVal, inputValSet] = React.useState('')
  const { data } = useDiscountCode()

  const inputDiscountChange = (e) => {
    inputValSet(e.target.value)
  }

  const getInit = () => {
    if (!showInput) {
      return (
        <div className="text__right">
          <ActionItem
            text={'I have Discount code'}
            type={'btn__small'}
            onClick={() => showInputSet(true)}
          />
        </div>
      )
    }

    return (
      <div className="py__3">
        <Input
          id="discountCode"
          name="discountCode"
          label={'Discount Code'}
          placeholder={'YOUR_CODE'}
          value={inputVal}
          type="text"
          onChange={(e) => inputDiscountChange(e)}
          content={__getActionBtn(inputVal)}
          autoFocus
          required
          block
        />
      </div>
    )
  }

  return (
    <div>
      {!data && getInit()}

      {data && data.name && (
        <div className="py__3">
          <p className="py-2">Applied coupon code</p>
          <div className="flex__center stage__1 px-4 py-2 bg__nut2 rounded__1">
            <div>
              <small>
                <strong>{data.name}</strong> <br /> {data.id}
              </small>
            </div>
            <div className="flex__left"></div>
            <ActionItem
              text={'Remove'}
              type={'btn__small'}
              className="pr__0"
              onClick={() => {
                inputValSet('')
                setDiscountCode('')
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

const __getActionBtn = (inputVal) => {
  return (
    <ActionItem
      className={styles.discountApplyBtn}
      text={'Apply code'}
      type={'btn__small'}
      onClick={() => {
        setDiscountCode(inputVal)
      }}
    />
  )
}

export default DiscountCodeBlock
