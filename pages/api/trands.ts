import { NextApiRequest, NextApiResponse } from 'next'
import { relatedQueries } from 'google-trends-api'
import get from 'lodash/get'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { q } = req.query

    if (!q) throw 'no keyword on q'

    const keywords = q.toString().split(',')

    const data = await relatedQueries({
      keyword: keywords,
      startTime: new Date('2015-01-01'),
      endTime: new Date('2017-02-10')
    })
      .then((res) => {
        return JSON.parse(res)
      })
      .catch((err) => {
        console.log(err)
      })

    const gData = get(data, 'default.rankedList[1].rankedKeyword')

    const gDataSliceData = gData.slice(0, 12)

    const gDataSelected = gDataSliceData.map((item) => item.query)
    const dataToSend = [...new Set(gDataSelected)]

    res.status(200).json(dataToSend)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
/* 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { q } = req.query

    if (!q) throw 'no keyword on q'

    const data = await relatedTopics({
      keyword: q,
      startTime: new Date('2015-01-01'),
      endTime: new Date('2017-02-10')
    })
      .then((res) => {
        return JSON.parse(res)
      })
      .catch((err) => {
        console.log(err)
      })

    const gData = get(data, 'default.rankedList[0].rankedKeyword')

    const gDataSliceData = gData.slice(0, 12)

    const gDataSelected = gDataSliceData.map((item) => item.topic.title)
    const dataToSend = [...new Set(gDataSelected)]

    res.status(200).json(dataToSend)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
 */
