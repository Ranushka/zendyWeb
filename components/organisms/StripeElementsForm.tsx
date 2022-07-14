import React from 'react'
import RegularForm from './StripePaymentElements'
import StripePaymentRequestBtn from './StripePaymentRequestBtn'
import { Elements } from '@stripe/react-stripe-js'
import { getStripe } from 'helpers/stripeHelpers'

const StripeElementsForm: React.FC<any> = ({ paying, name }) => {
  return (
    <Elements stripe={getStripe()}>
      <StripePaymentRequestBtn price={paying} />
      <RegularForm paying={paying} name={name} />
    </Elements>
  )
}

export default StripeElementsForm
