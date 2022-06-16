import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const collectionsData = [
      { id: 23, name: 'Must read', count: '5' },
      { id: 24, name: 'Covid reserchs', count: '12' },
      { id: 25, name: 'C erchs', count: '12' },
      { id: 26, name: 'DR. Cinathra class', count: '7' },
      { id: 27, name: 'DR. Cinathra class', count: '7' },
    ]

    res.status(200).json(collectionsData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
