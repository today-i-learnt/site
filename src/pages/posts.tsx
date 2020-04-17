import React from 'react'

import { Post } from '../models'
import PostsPage from '../components/pages/posts-page'
import { graphql } from 'gatsby'

export default function Posts({
  data: {
    allMdx: { edges },
  },
}) {
  const posts: Post[] = edges.map((edge: { node: Post }) => edge.node)

  return <PostsPage posts={posts}></PostsPage>
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          wordCount {
            words
          }
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }
`
