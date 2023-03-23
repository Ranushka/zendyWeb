// import request from 'helpers/request'
import { commonMsg, curatedMsg, priceMsg, homeMsg } from 'fetchHooks/commonMsg'

// const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL

export async function commonMessages(locale = 'en') {
  // const data = await request(
  //   `${CMS_BASE_URL}/api/common?locale=${locale}`
  // ).then((data) => data.data.attributes)

  console.log(locale)

  return commonMsg
}

export async function homeMessages(locale = 'en') {
  console.log(locale)

  // const data = await request(
  //   `${CMS_BASE_URL}/api/page-home?locale=${locale}`
  // ).then((data) => data.data.attributes)

  return homeMsg
  // return data
}

export async function pricingMessages(locale = 'en') {
  console.log(locale)
  // const data = await request(
  //   `${CMS_BASE_URL}/api/page-pricing?locale=${locale}`
  // ).then((data) => data.data.attributes)

  // return data
  return priceMsg
}

export async function curatedMessages(locale = 'en') {
  console.log(locale)

  // const formattedData = []
  // await request(
  //   `${CMS_BASE_URL}/api/curated-contents?populate=*&&locale=${locale}`
  // ).then((data) => {
  //   try {
  //     data.data.map((item) => {
  //       formattedData.push({
  //         id: item.id,
  //         href: item.attributes.href,
  //         image: item.attributes.image.data.attributes.url,
  //         title: item.attributes.title,
  //         content: item.attributes.content
  //       })
  //     })
  //   } catch (error) {
  //     console.error('curated-contents cms error')
  //   }
  // })

  // return { curated: { data: formattedData } }
  return { curated: curatedMsg }
}
