import React from 'react'

import Layout from '../layout/layout'
import Title from '../library/title'
import Listing from '../blog/listing'
import { Post } from '../../models'

type Props = {
  posts: Post[]
}

export default function PostsPage({ posts }: Props) {
  return (
    <Layout>
      <Title text="All Posts" />
      <Listing posts={posts} />
    </Layout>
  )
}
