import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout/layout'
import ItemTags from '../blog/item-tags'
import SEO from '../seo/seo'
import { Post, Author } from '../../models'
import { graphql, Link } from 'gatsby'
import { formatDateForMeta } from '../../utils/dates'

import './post.scss'
import Copyright from '../library/copyright'

type PostProps = {
  data: {
    post: Post
    author: Author
  }
}

export default function PostTemplate({ data: { post, author } }: PostProps) {
  const meta = { ...post.fields, ...post.frontmatter }

  return (
    <Layout className="post">
      <article title="article">
        <SEO
          title={meta.title}
          description={post.excerpt}
          // image={meta.banner ? meta.banner.childImageSharp.resize.src : undefined}
          pathname={post.fields.slug}
        />
        <h2>{meta.title}</h2>
        <div className="secondary">
          Posted by <Link to={`/authors/${meta.author}`}>{meta.author}</Link> on{' '}
          <time dateTime={meta.date}>{formatDateForMeta(meta.date)}</time>
          {post.timeToRead && ` — `}
          {post.timeToRead && <span>{post.timeToRead} min read</span>}
        </div>
        {meta.tags && (
          <p>
            {' '}
            Tagged under: <ItemTags tags={meta.tags} />{' '}
          </p>
        )}
        <section className="content" title="content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
      <section className="author-info" title="author-info">
        <h6 className="secondary">Written By</h6>
        <div className="author-name">{author.name}</div>
        <p className="author-bio">{author.bio}</p>
        <p className="copyright secondary">
          <Copyright name={author.name} /> Content available under CC-BY 4.0
        </p>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String, $authorId: String) {
    post: mdx(id: { eq: $id }) {
      fields {
        slug
      }
      id
      timeToRead
      wordCount {
        words
      }
      body
      frontmatter {
        author
        date
        title
      }
    }

    author: authorsYaml(id: { eq: $authorId }) {
      bio
      id
      name
      linkedin
      github
    }
  }
`
