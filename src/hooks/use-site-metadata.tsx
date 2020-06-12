import { graphql, useStaticQuery } from 'gatsby'

type Props = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      language: string
      [key: string]: unknown
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
