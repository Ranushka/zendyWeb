import fetch from 'lib/request'

const getTitleDetail = async (article_id: string) => {
  const data = await fetch(`https://doaj.org/api/v1/articles/${article_id}`)

  if (data) {
    return data
  }

  return null
}

export default getTitleDetail
