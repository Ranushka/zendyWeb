import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIP_API_SK, {
  apiVersion: '2020-08-27',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { code },
  } = req

  try {
    const cupCode: string = code.toString()

    const couponData = code && (await stripe.coupons.retrieve(cupCode))

    res.status(200).json(couponData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
