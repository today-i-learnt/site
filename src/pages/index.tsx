import React from 'react'

import { Post } from '../models'
import Homepage from '../components/pages/homepage'
import { graphql } from 'gatsby'

export default function Index({
  data: {
    allMdx: { edges },
  },
}) {
  const posts: Post[] = edges.map((edge: { node: Post }) => edge.node)

  return <Homepage posts={posts}></Homepage>
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 8) {
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
