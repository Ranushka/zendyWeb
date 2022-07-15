const BASE_URL = `https://content.zendy.io/wp-json/wp/v2`

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`)
  const data = await res.json()

  return data
}

export async function getPost(slug: string) {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}`)
  const data = await res.json()

  return data.length > 0 ? data[0] : null
}

export async function getPage(slug: string) {
  const res = await fetch(`${BASE_URL}/pages?slug=${slug}`)
  const data = await res.json()

  return data.length > 0 ? data[0] : null
}
