const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: `/posts${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      posts: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              author
            }
          }
        }
      }

      authors: allAuthorsYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.posts.edges
  const authors = result.data.authors.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/templates/post.tsx`),
      context: { id: node.id, authorId: node.frontmatter.author },
    })
  })

  authors.forEach(({ node: author }, index) => {
    createPage({
      path: `/authors/${author.id}/`,
      component: path.resolve(`./src/components/templates/author.tsx`),
      context: { id: author.id },
    })
  })
}
