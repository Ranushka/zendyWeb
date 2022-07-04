import { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { url }
    } = req

    const pdfUrl = url.toString()

    request({
      url: pdfUrl
    })
      .on('error', function(e) {
        res.end(e)
      })
      .pipe(res)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: JSON.parse(err) })
  }
}
