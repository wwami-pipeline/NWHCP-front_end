module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      // https://eliaslog.pw/gatsbyjs-how-to-persist-layout-and-keep-state-between-pages-with-createcontext-and-usereducer/
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      }
    },
  ],
};
