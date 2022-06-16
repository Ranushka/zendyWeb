import React, { useState, useEffect } from 'react'
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js'

type Props = {
  price?: string
}

const StripePaymentRequestBtn: React.FC<Props> = ({ price }) => {
  const stripe = useStripe()
  const [paymentRequest, setPaymentRequest] = useState(null)

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'AE',
        currency: 'aed',
        total: {
          label: 'Demo total',
          amount: parseInt(price)
        },
        requestPayerName: true,
        requestPayerEmail: true
      })

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr)
        }
      })
    }
  }, [stripe, price])

  if (paymentRequest) {
    return (
      <div className="py-4 pt__0">
        <span>Subscribe with google pay</span>
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      </div>
    )
  }

  return <></>
}

export default StripePaymentRequestBtn
