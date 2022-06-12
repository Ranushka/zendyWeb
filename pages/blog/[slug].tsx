import { GetStaticPaths } from 'next'
import Link from 'next/link'
import { commonMessages } from 'lib/getMessages'
import { getPost } from 'fetchHooks/wordpress'
import { BaseTemplate } from 'components/templates'

const Blog = ({ post }) => {
  return (
    <BaseTemplate>
      <div className="max-w-2xl m-auto pt-16">
        <h1 className="pb-8 text-4xl font-serif">{post.title.rendered}</h1>
        <div
          className="card-text pb-8"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
        <Link href="/">
          <a className="btn btn-primary">Back to Home</a>
        </Link>
      </div>
    </BaseTemplate>
  )
}

export default Blog

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: false
  }
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params, locale }) {
  const post = await getPost(params.slug)
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      },
      post
    },
    revalidate: 10 // In seconds
  }
}