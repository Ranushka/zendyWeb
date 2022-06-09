import Link from 'next/link'
import { getDate } from 'lib/helpers'

export default function Post({ post }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <p className="card-text">
              <small className="text-muted">On {getDate(post.modified)}</small>
            </p>
            <Link href={`/blog/${post.slug}`}>
              <a className="btn btn-primary">See more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
