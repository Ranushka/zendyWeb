import { useRouter } from 'next/router'
import { getDate } from 'helpers/utils'

/* __DOC

<PostCard post={{
  "modified": "2022-06-28T07:34:01",
  "slug": "zendy-talks-affordable-access-open-access-publishing-with-chronoshub",
  "title": {
    "rendered": "Zendy Talks Affordable Access Open Access Publishing With ChronosHub"
  },
  "excerpt": {
    "rendered": "Zendy Co-Founder Kamran Kardan joined an expert panel to discuss current issues.",
  },
}} />

DOC__ */

export default function Post({ post }) {
  const router = useRouter()
  const onClick = (path: string) => {
    router.push({
      pathname: path
    })
  }

  return (
    <div
      className="bg_white my-2 cursor-pointer rounded border p-4"
      onClick={() => onClick(`/blog/${post.slug}`)}
    >
      <h5 className="mb-2 font-serif text-xl font-medium">
        {post?.title?.rendered}
      </h5>
      <div
        className="card-text"
        dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
      ></div>
      <p className="card-text">
        <small className="text-muted">On {getDate(post?.modified)}</small>
      </p>
    </div>
  )
}
