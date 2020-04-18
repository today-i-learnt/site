import React from 'react'

import BlogListItem from './blog-list-item'
import { Post } from '../../models'

type Props = {
  posts: Post[]
  className?: string
  showTags?: boolean
}

export default function Listing({ posts, className }: Props) {
  return (
    <section className={className}>
      {posts.map(post => (
        <BlogListItem key={post.id} post={post} />
      ))}
    </section>
  )
}
