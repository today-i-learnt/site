module.exports = {
  siteMetadata: {
    title: `Today I Learnt`,
    description: `What did I learn today?`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        typeName: 'Post',
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/authors/`,
        typeName: 'Author',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['IBM Plex Serif','IBM Plex Mono'],
        display: 'swap'
      }
    }
  ],
}
