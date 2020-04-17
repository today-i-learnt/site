import React from 'react'

import { Link } from 'gatsby'
import Layout from '../layout/layout'
import Title from '../library/title'
import Listing from '../blog/listing'
import { Post } from '../../models'

// @ts-ignore
import Hero from '../../texts/hero'
// @ts-ignore

type Props = {
  posts: Post[]
}

const Homepage = ({ posts }: Props) => {
  return (
    <Layout>
      <section>
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link to="/posts">Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  )
}

export default Homepage
