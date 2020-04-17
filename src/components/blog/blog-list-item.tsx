import React from 'react'
import { Link } from 'gatsby'
import ItemTags from './item-tags'
import { formatDateForTitle, formatDateForMeta } from '../../utils/dates'
import { Post } from '../../models'

import './blog-list-item.scss'


type Props = {
  post: Post
}

const BlogListItem = ({ post }: Props) => (
  <article className="blog-list-item">
    <h4>
      <Link to={post.fields.slug}>
        {formatDateForTitle(post.frontmatter.date)}: {post.frontmatter.title}
      </Link>
    </h4>

    <div className="metadata secondary">
      Posted by{' '}
      <Link to={`/authors/${post.frontmatter.author}`}>
        {post.frontmatter.author}
      </Link>{' '}
      on{' '}
      <time dateTime={post.frontmatter.date}>
        {formatDateForMeta(post.frontmatter.date)}
      </time>{' '}
      <span>&mdash; {post.timeToRead} mins read</span>
    </div>

    {post.frontmatter.tags && (
      <p>
        Tagged under: <ItemTags tags={post.frontmatter.tags} />
      </p>
    )}

    <p className="excerpt secondary">{post.excerpt}</p>
  </article>
)

export default BlogListItem
