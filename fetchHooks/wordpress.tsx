const BASE_URL = `https://content.zendy.io/wp-json/wp/v2`

export async function getPosts() {
  const postsRes = await fetch(`${BASE_URL}/posts`)
  const posts = await postsRes.json()

  return posts
}

export async function getPost(slug: string) {
  const postsRes = await fetch(`${BASE_URL}/posts?slug=${slug}`)
  const post = await postsRes.json()

  return post.length > 0 ? post[0] : null
}
