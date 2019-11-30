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
        trackingId: '',
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
