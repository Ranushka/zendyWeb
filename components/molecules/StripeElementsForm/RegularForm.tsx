import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import request from 'lib/request'
import { Input, ActionItem, Price, Space } from 'components/atoms'
import { DiscountCodeBlock, SecurityStripBlock } from 'components/molecules'
import useDiscountCode from 'fetchHooks/useDiscountCode'

const CARD_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      fontSize: '16px'
    }
  }
}

type Props = {
  paying?: string
}

const RegularForm: React.FC<Props> = (props) => {
  const { paying } = props
  const { data } = useDiscountCode()

  const [input, setInput] = useState({
    customDonation: parseInt(paying),
    cardholderName: ''
  })
  const [payment, setPayment] = useState({ status: 'initial' })
  const [errorMessage, setErrorMessage] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case 'processing':
      case 'requires_payment_method':
      case 'requires_confirmation':
        return <h2>Processing...</h2>

      case 'requires_action':
        return <h2>Authenticating...</h2>

      case 'succeeded':
        return <h2>Payment Succeeded 🥳</h2>

      case 'error':
        return (
          <>
            <h2>Error 😭</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        )

      default:
        return null
    }
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // Abort if form isn't valid
    if (!e.currentTarget.reportValidity()) return
    setPayment({ status: 'processing' })

    // Create a PaymentIntent with the specified amount.
    const response = await request('/api/payment_intents', 'POST', {
      amount: input.customDonation
    })

    setPayment(response)

    if (response.statusCode === 500) {
      setPayment({ status: 'error' })
      setErrorMessage(response.message)
      return
    }

    const cardElement = elements!.getElement(CardElement)
    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: { name: input.cardholderName }
        }
      }
    )

    if (error) {
      setPayment({ status: 'error' })
      setErrorMessage(error.message ?? 'An unknown error occurred')
    } else if (paymentIntent) {
      setPayment(paymentIntent)
    }
  }

  const getDiscountAmount =
    data && data.percent_off
      ? (input.customDonation / 100) * data.percent_off
      : 0

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="block max-w-sm">
          <Input
            id="newPasswordConfirm"
            name="cardholderName"
            label={'Cardholder name'}
            type="text"
            onChange={handleInputChange}
            autoFocus
            required
            block
          />

          <div className="FormRow elements-style">
            <label>
              <span className="py-1 pt__0">Card info</span>
              <CardElement
                options={CARD_OPTIONS}
                onChange={(e) => {
                  if (e.error) {
                    setPayment({ status: 'error' })
                    setErrorMessage(
                      e.error.message ?? 'An unknown error occurred'
                    )
                  }
                }}
              />
            </label>
          </div>

          <DiscountCodeBlock />
          <Space size={4} />
        </fieldset>
        <div className="shadow max-w-sm py-8 px-8 bg-white rounded-md block">
          {data && data.percent_off && (
            <div className="py__3 pt__0 flex items-center mute">
              <p>Coupon discount</p>
              <div className="flex__left"></div>
              <div className={'flex'}>
                (- <Price price={getDiscountAmount} />)
              </div>
            </div>
          )}

          <div className="py__3 pt__0 flex items-center mute">
            <p>Yearly plan</p>
            <div className="flex__left"></div>
            <div className={'flex'}>
              <Price price={input.customDonation + getDiscountAmount} />
            </div>
          </div>

          <div className="py__3 pt__0 flex items-center">
            <p>Due today</p> <div className="flex__left"></div>
            <Price large price={input.customDonation - getDiscountAmount} />
          </div>
          <Space size={3} />
          <ActionItem
            block
            submit
            text={'Confirm secure payment'}
            type={'btn__primary'}
            onClick={() => {}}
          />
        </div>
        <SecurityStripBlock />
      </form>
      <PaymentStatus status={payment.status} />
    </>
  )
}

export default RegularForm
