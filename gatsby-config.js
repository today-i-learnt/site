require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Today I Learnt`,
    description: `What did I learn today?`,
    siteUrl: 'https://todayilearnt.xyz',
  },
  plugins: [
    'gatsby-plugin-sitemap',
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
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Today I Learnt`,
        short_name: `til`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
        fonts: ['IBM Plex Serif', 'IBM Plex Mono'],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-posthog-analytics`,
      options: {
        apiKey: process.env['POSTHOG_API_KEY'],
        apiHost: process.env['POSTHOG_HOST_URL'],
        isEnabledDevMode: true,
      },
    },
  ],
}
