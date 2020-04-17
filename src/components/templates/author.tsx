import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import Title from '../library/title'
import SEO from '../seo/seo'
import { Author, Post } from '../../models'
import Listing from '../blog/listing'

type Props = {
  data: {
    author: Author
    allMdx: {
      edges: [{ node: Post }]
    }
  }
}

export default function AuthorTemplate({
  data: {
    author,
    allMdx: { edges },
  },
}: Props) {
  const posts = edges.map((edge: { node: Post }) => edge.node)

  return (
    <Layout>
      <SEO title={`Posts by ${author.name}`} description={author.bio} />
      <h1>{author.name}</h1>
      <p>{author.bio || ''}</p>
      {/* <div>
        {author.github}
        {author.linkedin}
      </div> */}

      <Title text="Posts" />
      <Listing posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorQuery($id: String) {
    author: authorsYaml(id: { eq: $id }) {
      bio
      id
      name
      linkedin
      github
    }

    allMdx(filter: { frontmatter: { author: { eq: $id } } }) {
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
            date
          }
        }
      }
    }
  }
`
