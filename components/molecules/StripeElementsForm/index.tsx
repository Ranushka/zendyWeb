import React from "react";
import RegularForm from "./RegularForm";
import StripePaymentRequestBtn from "./StripePaymentRequestBtn";
import { Elements } from "@stripe/react-stripe-js";
import { getStripe } from "lib/stripeHelpers";

type Props = {
  paying?: string;
};

const StripeElementsForm = ({ paying }) => (
  <Elements stripe={getStripe()}>
    <StripePaymentRequestBtn price={paying} />
    <RegularForm paying={paying} />
  </Elements>
);

export default StripeElementsForm;
