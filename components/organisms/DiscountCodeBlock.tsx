import React from 'react'
import { Input, ActionBtn } from 'components/atoms'
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
          <ActionBtn
            dataName="DiscountCodeLink"
            text={'I have Discount code'}
            type="btn__small"
            onClick={() => showInputSet(true)}
            className="underline text_nut5 mb-4"
          />
        </div>
      )
    }

    return (
      <div className="py-4">
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
        <div className="py-4">
          <p className="py-2">Applied coupon code</p>
          <div className="flex items-center stage__1 px-4 py-2 bg__nut2 rounded-md">
            <div>
              <small>
                <strong>{data.name}</strong> <br /> {data.id}
              </small>
            </div>
            <div className="flex__left"></div>
            <ActionBtn
              dataName="RemoveDiscountCodeBtn"
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
    <ActionBtn
      dataName="ApplyDiscountCode"
      text={'Apply code'}
      type={'btn__small'}
      onClick={() => {
        setDiscountCode(inputVal)
      }}
    />
  )
}

export default DiscountCodeBlock
