import { useRouter } from 'next/router'
import { getDate } from 'lib/helpers'

export default function Post({ post }) {
  const router = useRouter()
  const onClick = (path: string) => {
    router.push({
      pathname: path
    })
  }

  return (
    <div
      className="border my-2 p-4 rounded cursor-pointer bg_white"
      onClick={() => onClick(`/blog/${post.slug}`)}
    >
      <h5 className="text-xl font-medium mb-2 font-serif">
        {post.title.rendered}
      </h5>
      <div
        className="card-text"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      ></div>
      <p className="card-text">
        <small className="text-muted">On {getDate(post.modified)}</small>
      </p>
    </div>
  )
}
