import { Stripe, loadStripe } from "@stripe/stripe-js";

const NEXT_PUBLIC_STRIP_API_PK = process.env.NEXT_PUBLIC_STRIP_API_PK;

export function getStripe() {
  let stripePromise: Promise<Stripe | null>;

  stripePromise = loadStripe(NEXT_PUBLIC_STRIP_API_PK, {
    apiVersion: "2020-08-27",
  });

  return stripePromise;
}

export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(amount);
}

export function formatAmountForStripe(
  amount: number,
  currency: string
): number {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
