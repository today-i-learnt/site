import React from 'react'
import { graphql } from 'gatsby'

export default function AuthorsPage({ data: { authors } }) {
  return (
    <div>
      <h1>All Authors</h1>

      {authors.edges.map(({ node: author }) => (
        <div>
          <h2>{author.name}</h2>
          <p>{author.bio || ''}</p>
          <div>
            {author.github}
            {author.linkedin}
          </div>
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query {
    authors: allAuthorsYaml {
      edges {
        node {
          bio
          id
          name
          linkedin
          github
        }
      }
    }
  }
`
