module.exports = {
  siteMetadata: {
    title: `Snow Zone`,
    description: `Percy & Poppy Penguins Are The Block Chains Most Chilly 🥶 Penguins 

    Born On Earth But Found Safety On The CubeVerse Planet In The Region Of The Snow Zone`,
    author: `@DadlessNsad`,
    siteUrl: `https://www.thesnowzone.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/snowflake.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
