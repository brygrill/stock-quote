module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter TypeScript Rebass',
    description: 'Simple Gatsby Starter using TypeScript with Rebass theme',
    keywords: 'gatsby-starter, typescript, rebass, react',
    siteUrl: 'https://infallible-bose-75e43f.netlify.com',
    author: {
      name: 'Bryan Grill',
      url: 'https://twitter.com/brygrill',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://infallible-bose-75e43f.netlify.com',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter TypeScript Rebass`,
        short_name: `Gatsby Starter TS Rebass`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-99111620-3',
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-offline',
  ],
};
