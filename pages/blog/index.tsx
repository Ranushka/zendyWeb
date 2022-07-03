import { commonMessages } from 'lib/getMessages'
import { getPosts } from 'fetchHooks/wordpress'
import { BaseTemplate } from 'components/templates'

import Head from 'next/head'

import { PostCard } from 'components/organisms'

export default function Home({ posts }) {
  const jsxPosts = posts.map((post) => {
    return <PostCard post={post} key={post.id} />
  })

  return (
    <>
      <Head>
        <title>Zendy Blog</title>
      </Head>
      <BaseTemplate>
        <div className="max-w-2xl m-auto px-8 pt-16">
          <h1 className="pb-8 text-4xl font-serif">Zendy Blog</h1>
          <div className="">{jsxPosts}</div>
        </div>
      </BaseTemplate>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const posts = await getPosts()
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      },
      posts
    },
    revalidate: 10
  }
}
