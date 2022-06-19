import React from 'react'
import RegularForm from './StripePaymentElements'
import StripePaymentRequestBtn from './StripePaymentRequestBtn'
import { Elements } from '@stripe/react-stripe-js'
import { getStripe } from 'lib/stripeHelpers'

const StripeElementsForm = ({ paying }) => (
  <Elements stripe={getStripe()}>
    <StripePaymentRequestBtn price={paying} />
    <RegularForm paying={paying} />
  </Elements>
)

export default StripeElementsForm