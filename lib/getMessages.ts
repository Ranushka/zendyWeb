import request from 'lib/request'

export async function commonMessages(locale = 'en') {
  const data = await request(
    `http://localhost:1337/api/common?locale=${locale}`
  ).then((data) => data.data.attributes)

  return data
}

export async function homeMessages(locale = 'en') {
  const data = await request(
    `http://localhost:1337/api/page-home?locale=${locale}`
  ).then((data) => data.data.attributes)

  return data
}

export async function curatedMessages(locale = 'en') {
  const fomatedData = []
  await request(
    `http://localhost:1337/api/curated-contents?populate=*&&locale=${locale}`
  ).then((data) => {
    try {
      data.data.map((item) => {
        fomatedData.push({
          id: item.id,
          href: item.attributes.href,
          image: item.attributes.image.data.attributes.url,
          title: item.attributes.title,
          content: item.attributes.content,
        })
      })
    } catch (error) {
      console.error('curated-contents cms error')
    }
  })

  return { curated: { data: fomatedData } }
}
